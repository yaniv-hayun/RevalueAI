#!/bin/bash

# RevalueAI GCP Deployment Script using Docker Compose
# This script builds and deploys the application to Google Cloud Platform using docker-compose

set -e

# Configuration
PROJECT_ID="rivalueai"
SERVICE_NAME="revalue-ai"
REGION="us-east1"
IMAGE_NAME="gcr.io/$PROJECT_ID/$SERVICE_NAME"

echo "🚀 Starting deployment of RevalueAI to GCP using Docker Compose..."

# Check if gcloud is authenticated
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" | grep -q .; then
    echo "❌ Not authenticated with gcloud. Please run 'gcloud auth login'"
    exit 1
fi

# Set the project
echo "📋 Setting project to $PROJECT_ID..."
gcloud config set project $PROJECT_ID

# Enable required APIs
echo "🔧 Enabling required APIs..."
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com

# Configure Docker for GCR
echo "🐳 Configuring Docker for Google Container Registry..."
gcloud auth configure-docker

# Build the Docker image using docker-compose
echo "🏗️ Building Docker image using docker-compose..."
docker-compose build --no-cache

# Tag the image with current timestamp
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
docker tag $IMAGE_NAME:latest $IMAGE_NAME:$TIMESTAMP

# Push the image to Google Container Registry
echo "📤 Pushing image to Google Container Registry..."
docker-compose push

# Also push the timestamped version
docker push $IMAGE_NAME:$TIMESTAMP

# Deploy to Cloud Run
echo "🚀 Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
    --image $IMAGE_NAME:latest \
    --region $REGION \
    --platform managed \
    --allow-unauthenticated \
    --port 8080 \
    --memory 512Mi \
    --cpu 1 \
    --min-instances 0 \
    --max-instances 10 \
    --timeout 300 \
    --concurrency 100

# Get the service URL
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME --region=$REGION --format="value(status.url)")

echo "✅ Deployment completed successfully!"
echo "🌐 Service URL: $SERVICE_URL"
echo "📊 You can view logs with: gcloud run logs tail $SERVICE_NAME --region=$REGION"
echo ""
echo "🔗 View in GCP Console:"
echo "https://console.cloud.google.com/run/detail/$REGION/$SERVICE_NAME/metrics?project=$PROJECT_ID"
