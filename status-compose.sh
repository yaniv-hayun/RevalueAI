#!/bin/bash

# RevalueAI GCP Deployment Status Script (Docker Compose Version)

PROJECT_ID="revalue-ai-fraud-platform"
SERVICE_NAME="revalue-ai"
REGION="us-east1"

echo "🔍 Checking deployment status for RevalueAI (Docker Compose deployment)..."

# Get service URL
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME --region=$REGION --format="value(status.url)" 2>/dev/null)

if [ -z "$SERVICE_URL" ]; then
    echo "❌ Service not found or not deployed"
    exit 1
fi

echo "✅ Service is deployed and running"
echo "🌐 Service URL: $SERVICE_URL"

# Test the service
echo "🧪 Testing service health..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" $SERVICE_URL)

if [ "$HTTP_STATUS" = "200" ]; then
    echo "✅ Service is responding with HTTP 200"
else
    echo "❌ Service returned HTTP $HTTP_STATUS"
fi

# Show recent logs
echo "📋 Recent logs:"
gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=$SERVICE_NAME" --limit=5 --format="table(timestamp,severity,textPayload)" 2>/dev/null || echo "No recent logs found"

echo ""
echo "🔗 View in GCP Console:"
echo "https://console.cloud.google.com/run/detail/$REGION/$SERVICE_NAME/metrics?project=$PROJECT_ID"

echo ""
echo "🐳 Docker Compose Commands:"
echo "  Build: docker-compose build"
echo "  Deploy: ./deploy-compose.sh"
echo "  Status: ./status-compose.sh"
