# Fraud Advisory Dashboard

A comprehensive fraud advisory application built with React, TypeScript, and Material-UI that provides advanced analytics and insights into chargeback patterns and fraud detection.

## Features

- **Landing Page**: Professional landing page with feature highlights and call-to-action
- **Google Authentication**: Secure login with Google OAuth (simulated)
- **Interactive Dashboard**: Real-time fraud analytics with 4 key visualizations:
  - Fraud vs Non-Fraud Cases comparison
  - Breakdown of fraud types (True Fraud vs Friendly Fraud)
  - Chargebacks trend analysis with projections
  - Chargebacks breakdown by card issuer (Visa, MasterCard, American Express)

## Technology Stack

- **React 18** with TypeScript
- **Material-UI (MUI)** for modern UI components
- **MUI X Charts** for interactive data visualizations
- **React Router** for navigation
- **Context API** for state management

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fraud-advisory-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── charts/
│   │   ├── ChargebacksByIssuerChart.tsx
│   │   ├── ChargebacksTrendChart.tsx
│   │   ├── FraudBreakdownChart.tsx
│   │   └── FraudVsNonFraudChart.tsx
│   ├── Dashboard.tsx
│   ├── LandingPage.tsx
│   └── LoginPage.tsx
├── contexts/
│   └── AuthContext.tsx
├── App.tsx
└── index.tsx
```

## Usage

1. **Landing Page**: Visit the homepage to learn about the platform features
2. **Authentication**: Click "Get Started" or "Access Dashboard" to navigate to the login page
3. **Login**: Use the "Continue with Google" button (simulated authentication)
4. **Dashboard**: View comprehensive fraud analytics with interactive charts

## Dashboard Features

### Fraud vs Non-Fraud Cases
- Bar chart comparing fraud and non-fraud chargeback cases
- Visual representation of case distribution

### Fraud Breakdown
- Detailed breakdown of fraud types
- Distinguishes between True Fraud and Friendly Fraud cases

### Chargebacks Trend Analysis
- Line chart showing chargeback trends over time
- Includes both actual data and projections
- Dual y-axis for count and monetary amounts

### Issuer Breakdown
- Bar chart showing chargebacks by card issuer
- Covers Visa, MasterCard, and American Express

## Customization

The application is built with modularity in mind. You can easily:

- Add new chart types by creating components in the `charts/` directory
- Modify the authentication flow in `AuthContext.tsx`
- Customize the theme in `index.tsx`
- Add new dashboard sections by extending the `Dashboard.tsx` component

## Future Enhancements

- Real Google OAuth integration
- Real-time data updates
- Export functionality for reports
- Advanced filtering and date range selection
- Mobile-responsive optimizations
- Dark mode support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
