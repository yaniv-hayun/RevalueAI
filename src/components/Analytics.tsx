import React, { useState, useMemo } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Chip,
  Stack,
  Paper,
  Button,
  Drawer,
  IconButton,
  Divider
} from '@mui/material';
import { Download as DownloadIcon, FilterList as FilterIcon, Close as CloseIcon } from '@mui/icons-material';
import jsPDF from 'jspdf';
import { PieChart } from '@mui/x-charts/PieChart';
import { RadarChart } from '@mui/x-charts/RadarChart';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const Analytics: React.FC = () => {
  // Pie chart data for fraud breakdown
  const fraudBreakdownData = [
    { id: 0, value: 45, label: 'Exposed Fraud', color: '#ff9800' },
    { id: 1, value: 25, label: 'Shipping Mismatch', color: '#2196f3' },
    { id: 2, value: 20, label: 'Topmail Fraud Ring', color: '#ffeb3b' },
    { id: 3, value: 10, label: 'Account Take Over', color: '#4caf50' },
  ];

  // Data for risk assessment radar chart
  const riskAssessmentData = [78, 92, 52, 87, 82];
  const riskCategories = ['Geos', 'Suspicious IP', 'Credit Card', 'Email Address', 'Phone Number'];

  // Data for rates comparison table
  const ratesData = [
    {
      id: 1,
      scenario: 'Current',
      approvalRateNum: '100%',
      approvalRateDollar: '100%',
      chargebackRateNum: '1.4%',
      chargebackRateDollar: '1.6%',
      fraudRateNum: '1.15%',
      fraudRateDollar: '1.5%',
      falsePositiveRateNum: '0%',
      falsePositiveRateDollar: '0%',
    },
    {
      id: 2,
      scenario: 'Industry Benchmark',
      approvalRateNum: '96%',
      approvalRateDollar: '95.5%',
      chargebackRateNum: '1.2%',
      chargebackRateDollar: '1.3%',
      fraudRateNum: '1%',
      fraudRateDollar: '1.1%',
      falsePositiveRateNum: '0.8%',
      falsePositiveRateDollar: '0.9%',
    },
    {
      id: 3,
      scenario: 'Potential',
      approvalRateNum: '99%',
      approvalRateDollar: '99%',
      chargebackRateNum: '0.58%',
      chargebackRateDollar: '0.65%',
      fraudRateNum: '0.23%',
      fraudRateDollar: '0.3%',
      falsePositiveRateNum: '0.18%',
      falsePositiveRateDollar: '0.2%',
    },
  ];

  // Data for quadrant chart
  const quadrantData = [
    { id: 1, fraudRate: 3.0, falsePositiveRate: 1.5, label: 'Industry Benchmark', color: '#2196f3' },
    { id: 2, fraudRate: 6.2, falsePositiveRate: 2.8, label: 'You Are Here', color: '#ff9800' },
  ];

  // Data for Email Domain by Class chart
  const emailDomainData = {
    domains: ['yahoo.com', 'outlook.com', 'example.com', 'proton.me', 'gmail.com', 'mail.com'],
    noCB: [250, 240, 230, 220, 260, 245],
    nonFraudCB: [5, 8, 3, 2, 7, 4],
    fraudCB: [3, 2, 1, 1, 4, 2],
  };

  // Data for Billing Address Country by Class chart
  const billingCountryData = {
    countries: ['US', 'GB', 'CA', 'AU', 'SG', 'DE', 'CN', 'ES', 'JP', 'FR'],
    noCB: [1150, 80, 70, 60, 50, 45, 40, 35, 30, 25],
    nonFraudCB: [8, 3, 2, 2, 1, 1, 1, 1, 1, 1],
    fraudCB: [5, 2, 1, 1, 1, 1, 1, 1, 1, 1],
  };

  // Data for Average Amount by Class chart
  const averageAmountData = {
    classes: ['No CB', 'Non-Fraud CB', 'Fraud CB'],
    amounts: [220, 260, 320],
  };

  // Data for Card Brand by Class chart
  const cardBrandData = {
    brands: ['amex', 'visa', 'discover', 'mastercard', 'diners', 'jcb'],
    noCB: [250, 245, 240, 235, 230, 225],
    nonFraudCB: [5, 4, 3, 3, 2, 2],
    fraudCB: [3, 2, 2, 2, 1, 1],
  };

  // Filter options
  const filterOptions = {
    currency: ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'JPY', 'CHF', 'SEK', 'NOK', 'DKK'],
    status: ['approved', 'declined', 'pending', 'cancelled', 'refunded'],
    cardNetwork: ['visa', 'mastercard', 'amex', 'discover', 'diners', 'jcb'],
    cardFunding: ['credit', 'debit', 'prepaid', 'unknown'],
    cardCountry: ['US', 'GB', 'CA', 'AU', 'DE', 'FR', 'IT', 'ES', 'NL', 'SE', 'NO', 'DK', 'FI', 'CH', 'AT', 'BE', 'IE', 'PT', 'GR', 'LU'],
    outcomeRiskScore: ['low', 'medium', 'high', 'very_high'],
    billingName: ['John Smith', 'Jane Doe', 'Robert Johnson', 'Sarah Wilson', 'Michael Brown', 'Emily Davis', 'David Miller', 'Lisa Garcia', 'James Rodriguez', 'Jennifer Martinez'],
    billingEmailDomain: ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com', 'aol.com', 'proton.me', 'example.com', 'company.com', 'business.org'],
    billingPhoneCountry: ['US', 'GB', 'CA', 'AU', 'DE', 'FR', 'IT', 'ES', 'NL', 'SE', 'NO', 'DK', 'FI', 'CH', 'AT', 'BE', 'IE', 'PT', 'GR', 'LU'],
    billingCountry: ['US', 'GB', 'CA', 'AU', 'DE', 'FR', 'IT', 'ES', 'NL', 'SE', 'NO', 'DK', 'FI', 'CH', 'AT', 'BE', 'IE', 'PT', 'GR', 'LU'],
    ipCountry: ['US', 'GB', 'CA', 'AU', 'DE', 'FR', 'IT', 'ES', 'NL', 'SE', 'NO', 'DK', 'FI', 'CH', 'AT', 'BE', 'IE', 'PT', 'GR', 'LU', 'CN', 'JP', 'KR', 'SG', 'HK', 'TW', 'IN', 'BR', 'MX', 'AR']
  };

  // Filter state
  const [filters, setFilters] = useState({
    currency: '',
    status: '',
    cardNetwork: '',
    cardFunding: '',
    cardCountry: '',
    outcomeRiskScore: '',
    billingName: '',
    billingEmailDomain: '',
    billingPhoneCountry: '',
    billingCountry: '',
    ipCountry: ''
  });

  // Drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Filter handler
  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  // Clear all filters
  const clearAllFilters = () => {
    setFilters({
      currency: '',
      status: '',
      cardNetwork: '',
      cardFunding: '',
      cardCountry: '',
      outcomeRiskScore: '',
      billingName: '',
      billingEmailDomain: '',
      billingPhoneCountry: '',
      billingCountry: '',
      ipCountry: ''
    });
  };

  // Get active filters count
  const activeFiltersCount = Object.values(filters).filter(value => value !== '').length;

  // Drawer handlers
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // PDF Export function
  const handleExportPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let yPosition = 20;
    const margin = 20;
    const contentWidth = pageWidth - (margin * 2);

    // Helper function to add text with word wrapping
    const addText = (text: string, fontSize: number = 12, isBold: boolean = false, color: string = '#000000', align: 'left' | 'center' | 'right' = 'left') => {
      doc.setFontSize(fontSize);
      doc.setFont('helvetica', isBold ? 'bold' : 'normal');
      doc.setTextColor(color);
      
      const lines = doc.splitTextToSize(text, contentWidth);
      lines.forEach((line: string) => {
        if (yPosition > pageHeight - 20) {
          doc.addPage();
          yPosition = 20;
        }
        
        let xPosition = margin;
        if (align === 'center') {
          xPosition = pageWidth / 2;
        } else if (align === 'right') {
          xPosition = pageWidth - margin;
        }
        
        doc.text(line, xPosition, yPosition, { align });
        yPosition += fontSize * 0.4;
      });
      yPosition += 5;
    };

    // Helper function to check if new page is needed
    const checkNewPage = (requiredSpace: number = 20) => {
      if (yPosition + requiredSpace > pageHeight - 20) {
        doc.addPage();
        yPosition = 20;
      }
    };

    // Helper function to add a section divider
    const addSectionDivider = () => {
      yPosition += 10;
      doc.setDrawColor(200, 200, 200);
      doc.line(margin, yPosition, pageWidth - margin, yPosition);
      yPosition += 15;
    };

    // Helper function to create a data table
    const createTable = (headers: string[], rows: string[][], title?: string) => {
      if (title) {
        addText(title, 14, true);
        yPosition += 5;
      }
      
      const colWidth = contentWidth / headers.length;
      const rowHeight = 8;
      
      // Table header
      doc.setFillColor(240, 240, 240);
      doc.rect(margin, yPosition, contentWidth, rowHeight, 'F');
      doc.setDrawColor(0, 0, 0);
      doc.rect(margin, yPosition, contentWidth, rowHeight, 'S');
      
      headers.forEach((header, index) => {
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text(header, margin + (index * colWidth) + 2, yPosition + 5);
      });
      yPosition += rowHeight;
      
      // Table rows
      rows.forEach((row) => {
        doc.setFillColor(255, 255, 255);
        doc.rect(margin, yPosition, contentWidth, rowHeight, 'F');
        doc.setDrawColor(0, 0, 0);
        doc.rect(margin, yPosition, contentWidth, rowHeight, 'S');
        
        row.forEach((cell, index) => {
          doc.setFontSize(9);
          doc.setFont('helvetica', 'normal');
          doc.text(cell, margin + (index * colWidth) + 2, yPosition + 5);
        });
        yPosition += rowHeight;
      });
      yPosition += 10;
    };

    // Title
    addText('Basic Risk Analysis Page (Post Upload)', 20, true, '#000000', 'center');
    yPosition += 15;

    // Date
    addText(`Generated on: ${new Date().toLocaleDateString()}`, 10, false, '#666666', 'center');
    yPosition += 20;

    // Overview Section
    addText('Overview', 16, true, '#1976d2');
    addText('Using the 1,500-transaction sample, we modeled fraud occurrence (binary) as a function of four covariates: email domain, IP country, billing country, and average transaction amount.', 12);
    yPosition += 10;

    // Univariate association Section
    addText('Univariate Association', 16, true, '#1976d2');
    
    // First paragraph with better spacing
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    const univariateText1 = 'For the categorical predictors (email domain, IP country, billing country), χ² tests of independence reject the null of no association with fraud at α = 0.05 (all p < 0.001), indicating statistically significant relationships. Effect sizes (e.g., Cramér\'s V) are in the small-to-moderate range.';
    const univariateLines1 = doc.splitTextToSize(univariateText1, contentWidth);
    univariateLines1.forEach((line: string) => {
      if (yPosition > pageHeight - 20) {
        doc.addPage();
        yPosition = 20;
      }
      doc.text(line, margin, yPosition);
      yPosition += 4.5; // Reduced line height for better spacing
    });
    yPosition += 3; // Small gap between paragraphs
    
    // Second paragraph with better spacing
    const univariateText2 = 'For average transaction amount (continuous), the point-biserial correlation with fraud is significant (p < 0.01), consistent with higher ticket sizes being more likely to appear in fraud or chargeback cohorts.';
    const univariateLines2 = doc.splitTextToSize(univariateText2, contentWidth);
    univariateLines2.forEach((line: string) => {
      if (yPosition > pageHeight - 20) {
        doc.addPage();
        yPosition = 20;
      }
      doc.text(line, margin, yPosition);
      yPosition += 4.5; // Reduced line height for better spacing
    });
    yPosition += 10;

    // Multivariate modeling Section
    addText('Multivariate Modeling', 16, true, '#1976d2');
    addText('In a logistic regression including all four variables, each covariate retains independent explanatory power (Wald tests, p < 0.01), confirming they are not collinear artifacts. Model fit improves materially versus a null model (likelihood-ratio test, p < 0.001).', 12);
    yPosition += 10;

    // Most informative relationship Section
    addText('Most Informative Relationship (Interaction)', 16, true, '#1976d2');
    addText('The combination of IP country and billing country exhibits the strongest association with fraud:', 12);
    addText('• Adding the IP×Billing interaction term yields a significant improvement in fit (likelihood-ratio p < 0.001) and a meaningful lift in discrimination (e.g., AUC/PR metrics).', 12);
    addText('• Practically, country concordance vs. mismatch (or specific high-risk country pairs) provides the largest odds shift for fraud likelihood among the evaluated features.', 12);
    yPosition += 10;

    // Implication for controls Section (highlighted box)
    checkNewPage(50);
    const boxPadding = 10;
    const boxHeight = 45;
    
    // Draw the highlighted box with padding
    doc.setFillColor(255, 248, 220); // Light yellow background
    doc.rect(margin, yPosition - 5, contentWidth, boxHeight, 'F');
    doc.setDrawColor(255, 193, 7); // Orange border
    doc.setLineWidth(2);
    doc.rect(margin, yPosition - 5, contentWidth, boxHeight, 'S');
    doc.setLineWidth(0.5); // Reset line width
    
    // Add content with proper padding inside the box
    const originalY = yPosition;
    yPosition += boxPadding; // Add top padding
    
    // Title with padding
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 124, 0); // Orange color
    doc.text('Implication for Controls', margin + boxPadding, yPosition);
    yPosition += 8;
    
    // Content text with padding
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0); // Black text
    const contentText = 'Rules leveraging IP-Billing country alignment (and, secondarily, Billing or IP alone), complemented by amount thresholds and email-domain risk tiers, should deliver the highest precision for blocking while minimizing false positives.';
    const contentLines = doc.splitTextToSize(contentText, contentWidth - (boxPadding * 2));
    contentLines.forEach((line: string) => {
      doc.text(line, margin + boxPadding, yPosition);
      yPosition += 5;
    });
    
    // Reset yPosition to after the box
    yPosition = originalY + boxHeight + 10;

    addSectionDivider();

    // Analytics Charts Section
    addText('Analytics Dashboard Charts', 16, true, '#1976d2');
    yPosition += 10;

    // Email Domain by Class Chart Data
    createTable(
      ['Domain', 'No CB', 'Non-Fraud CB', 'Fraud CB'],
      [
        ['yahoo.com', '250', '5', '3'],
        ['outlook.com', '240', '8', '2'],
        ['example.com', '230', '3', '1'],
        ['proton.me', '220', '2', '1'],
        ['gmail.com', '260', '7', '4'],
        ['mail.com', '245', '4', '2']
      ],
      'Email Domain by Class'
    );

    // Billing Address Country by Class Chart Data
    createTable(
      ['Country', 'No CB', 'Non-Fraud CB', 'Fraud CB'],
      [
        ['US', '1150', '8', '5'],
        ['GB', '80', '3', '2'],
        ['CA', '70', '2', '1'],
        ['AU', '60', '2', '1'],
        ['SG', '50', '1', '1'],
        ['DE', '45', '1', '1']
      ],
      'Billing Address Country by Class'
    );

    // Average Amount by Class Chart Data
    createTable(
      ['Class', 'Average Amount ($)'],
      [
        ['No CB', '220'],
        ['Non-Fraud CB', '260'],
        ['Fraud CB', '320']
      ],
      'Average Amount by Class'
    );

    // Card Brand by Class Chart Data
    createTable(
      ['Card Brand', 'No CB', 'Non-Fraud CB', 'Fraud CB'],
      [
        ['amex', '250', '5', '3'],
        ['visa', '245', '4', '2'],
        ['discover', '240', '3', '2'],
        ['mastercard', '235', '3', '2'],
        ['diners', '230', '2', '1'],
        ['jcb', '225', '2', '1']
      ],
      'Card Brand by Class'
    );

    // New page for Monitoring & Notifications
    doc.addPage();
    yPosition = 20;

    // Monitoring & Notifications Title
    addText('Monitoring & Notifications', 20, true, '#000000', 'center');
    yPosition += 20;

    // Anomaly Monitoring Section
    addText('Weekly Anomaly Monitoring', 16, true, '#1976d2');
    yPosition += 10;

    // Canadian Credit Cards & Proxy IPs Data
    createTable(
      ['Day', 'Canadian Credit Cards', 'Proxy IP', 'Status'],
      [
        ['1', '110', '0', 'Normal'],
        ['2', '120', '2', 'Normal'],
        ['3', '105', '3', 'Normal'],
        ['4', '125', '4', 'Normal'],
        ['5', '250', '110', '⚠️ SPIKE DETECTED'],
        ['6', '100', '2', 'Normal'],
        ['7', '90', '1', 'Normal']
      ],
      'Canadian Credit Cards & Proxy IPs'
    );

    // Singapore Billing Data
    createTable(
      ['Day', 'Billing in Singapore', 'Status'],
      [
        ['1', '5', 'Normal'],
        ['2', '7', 'Normal'],
        ['3', '8', 'Normal'],
        ['4', '200', '⚠️ SPIKE DETECTED'],
        ['5', '70', 'Normal'],
        ['6', '20', 'Normal'],
        ['7', '10', 'Normal']
      ],
      'Billing in Singapore'
    );

    yPosition += 10;

    // Recent Notifications Section
    checkNewPage(60);
    doc.setFillColor(227, 242, 253); // Light blue background
    doc.rect(margin, yPosition - 5, contentWidth, 55, 'F');
    doc.setDrawColor(25, 118, 210); // Blue border
    doc.setLineWidth(2);
    doc.rect(margin, yPosition - 5, contentWidth, 55, 'S');
    doc.setLineWidth(0.5); // Reset line width
    
    addText('Recent Notifications', 14, true, '#1976d2');
    yPosition += 5;

    addText('Fraud Risk Spike Detected (Canada & Proxy IPs)', 12, true, '#1976d2');
    addText('• We detected a simultaneous spike in Canadian credit cards and proxy IP usage, which likely indicates a coordinated fraudulent attempt.', 11);
    addText('• Action: Further investigation is required.', 11);
    addText('• Optional: Would you like us to simulate and size a designated rule for this pattern (expected catch vs. false positives)?', 11);
    yPosition += 15;

    addText('Singapore Billing Spike (Marketing Correlation)', 12, true, '#1976d2');
    addText('• A spike in billing from Singapore was detected.', 11);
    addText('• This aligns with the marketing campaign you launched in Singapore during the same timeframe.', 11);
    addText('• Action: No further investigation required at this time; we\'ll continue to monitor for anomalies unrelated to the campaign.', 11);

    // Footer
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(128, 128, 128);
      doc.text(`Page ${i} of ${totalPages}`, pageWidth - 30, pageHeight - 10);
      doc.text('RevalueAI Analytics Report', margin, pageHeight - 10);
    }

    // Save the PDF
    const fileName = `Risk_Analysis_Report_${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
  };

  // Columns for rates data grid
  const ratesColumns: GridColDef[] = [
    {
      field: 'scenario',
      headerName: '',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'approvalRateNum',
      headerName: 'Approval rate #',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'approvalRateDollar',
      headerName: 'Approval rate $',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'chargebackRateNum',
      headerName: 'Chargeback rate #',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'chargebackRateDollar',
      headerName: 'Chargeback rate $',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'fraudRateNum',
      headerName: 'Fraud rate #',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'fraudRateDollar',
      headerName: 'Fraud rate $',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'falsePositiveRateNum',
      headerName: 'False Positive rate #',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'falsePositiveRateDollar',
      headerName: 'False Positive rate $',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      {/* Page Title and Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          Analytics Dashboard
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<FilterIcon />}
            onClick={toggleDrawer(true)}
            sx={{
              borderColor: '#1976d2',
              color: '#1976d2',
              '&:hover': {
                borderColor: '#1565c0',
                backgroundColor: 'rgba(25, 118, 210, 0.04)',
              },
            }}
          >
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </Button>
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            onClick={handleExportPDF}
          >
            Export Risk Analysis Report
          </Button>
        </Box>
      </Box>

      {/* Filter Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 400,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Drawer Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Filters
            </Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Active Filters Count and Clear All */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {activeFiltersCount > 0 && (
                <Chip 
                  label={`${activeFiltersCount} active`} 
                  color="primary" 
                  size="small" 
                />
              )}
            </Box>
            <Button
              variant="outlined"
              size="small"
              onClick={clearAllFilters}
              disabled={activeFiltersCount === 0}
            >
              Clear All
            </Button>
          </Box>

          <Divider sx={{ mb: 3 }} />

          {/* Filter Controls */}
          <Box sx={{ flex: 1, overflow: 'auto' }}>
            <Stack spacing={3}>
              {/* Currency Filter */}
              <FormControl fullWidth size="small">
                <InputLabel>Currency</InputLabel>
                <Select
                  value={filters.currency}
                  label="Currency"
                  onChange={(e) => handleFilterChange('currency', e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  {filterOptions.currency.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Status Filter */}
              <FormControl fullWidth size="small">
                <InputLabel>Status</InputLabel>
                <Select
                  value={filters.status}
                  label="Status"
                  onChange={(e) => handleFilterChange('status', e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  {filterOptions.status.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Card Network Filter */}
              <FormControl fullWidth size="small">
                <InputLabel>Card Network</InputLabel>
                <Select
                  value={filters.cardNetwork}
                  label="Card Network"
                  onChange={(e) => handleFilterChange('cardNetwork', e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  {filterOptions.cardNetwork.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Card Funding Filter */}
              <FormControl fullWidth size="small">
                <InputLabel>Card Funding</InputLabel>
                <Select
                  value={filters.cardFunding}
                  label="Card Funding"
                  onChange={(e) => handleFilterChange('cardFunding', e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  {filterOptions.cardFunding.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Card Country Filter */}
              <FormControl fullWidth size="small">
                <InputLabel>Card Country</InputLabel>
                <Select
                  value={filters.cardCountry}
                  label="Card Country"
                  onChange={(e) => handleFilterChange('cardCountry', e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  {filterOptions.cardCountry.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Outcome Risk Score Filter */}
              <FormControl fullWidth size="small">
                <InputLabel>Risk Score</InputLabel>
                <Select
                  value={filters.outcomeRiskScore}
                  label="Risk Score"
                  onChange={(e) => handleFilterChange('outcomeRiskScore', e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  {filterOptions.outcomeRiskScore.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Billing Name Filter */}
              <FormControl fullWidth size="small">
                <InputLabel>Billing Name</InputLabel>
                <Select
                  value={filters.billingName}
                  label="Billing Name"
                  onChange={(e) => handleFilterChange('billingName', e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  {filterOptions.billingName.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Billing Email Domain Filter */}
              <FormControl fullWidth size="small">
                <InputLabel>Email Domain</InputLabel>
                <Select
                  value={filters.billingEmailDomain}
                  label="Email Domain"
                  onChange={(e) => handleFilterChange('billingEmailDomain', e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  {filterOptions.billingEmailDomain.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Billing Phone Country Filter */}
              <FormControl fullWidth size="small">
                <InputLabel>Phone Country</InputLabel>
                <Select
                  value={filters.billingPhoneCountry}
                  label="Phone Country"
                  onChange={(e) => handleFilterChange('billingPhoneCountry', e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  {filterOptions.billingPhoneCountry.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Billing Country Filter */}
              <FormControl fullWidth size="small">
                <InputLabel>Billing Country</InputLabel>
                <Select
                  value={filters.billingCountry}
                  label="Billing Country"
                  onChange={(e) => handleFilterChange('billingCountry', e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  {filterOptions.billingCountry.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* IP Country Filter */}
              <FormControl fullWidth size="small">
                <InputLabel>IP Country</InputLabel>
                <Select
                  value={filters.ipCountry}
                  label="IP Country"
                  onChange={(e) => handleFilterChange('ipCountry', e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  {filterOptions.ipCountry.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
          </Box>
        </Box>
      </Drawer>

      {/* Active Filters Display */}
      {activeFiltersCount > 0 && (
        <Paper elevation={1} sx={{ p: 2, mb: 3, backgroundColor: '#e3f2fd' }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#1976d2' }}>
            Active Filters:
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {Object.entries(filters).map(([key, value]) => {
              if (value) {
                return (
                  <Chip
                    key={key}
                    label={`${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}: ${value}`}
                    onDelete={() => handleFilterChange(key, '')}
                    color="primary"
                    variant="outlined"
                    size="small"
                  />
                );
              }
              return null;
            })}
          </Stack>
        </Paper>
      )}

      {/* Grid Layout */}
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gridTemplateRows: 'auto auto auto',
        gap: 3,
        gridTemplateAreas: {
          xs: `
            "pie"
            "radar"
            "emailDomain"
            "billingCountry"
            "averageAmount"
            "cardBrand"
            "table"
            "quadrant"
          `,
          md: `
            "pie radar"
            "emailDomain billingCountry"
            "averageAmount cardBrand"
            "table table"
            "quadrant quadrant"
          `
        }
      }}>
        {/* Fraud Breakdown Pie Chart */}
        <Box sx={{ gridArea: 'pie' }}>
          <Card elevation={2} sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Fraud Breakdown by Category
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <PieChart
                  series={[
                    {
                      data: fraudBreakdownData,
                      highlightScope: { highlight: 'item' },
                      innerRadius: 30,
                      outerRadius: 120,
                      paddingAngle: 2,
                      cornerRadius: 5,
                    },
                  ]}
                  width={400}
                  height={300}
                  margin={{ top: 20, bottom: 20, left: 20, right: 20 }}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Risk Assessment Radar Chart */}
        <Box sx={{ gridArea: 'radar' }}>
          <Card elevation={2} sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Risk Assessment by Category
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <RadarChart
                  height={300}
                  series={[{ 
                    label: 'Risk Level', 
                    data: riskAssessmentData,
                    color: '#4caf50'
                  }]}
                  radar={{
                    max: 100,
                    metrics: riskCategories,
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Email Domain by Class Chart */}
        <Box sx={{ gridArea: 'emailDomain' }}>
          <Card elevation={2} sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Email Domain by Class
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <BarChart
                  width={500}
                  height={300}
                  series={[
                    {
                      data: emailDomainData.noCB,
                      label: 'No CB',
                      color: '#4caf50',
                    },
                    {
                      data: emailDomainData.nonFraudCB,
                      label: 'Non-Fraud CB',
                      color: '#ffeb3b',
                    },
                    {
                      data: emailDomainData.fraudCB,
                      label: 'Fraud CB',
                      color: '#f44336',
                    },
                  ]}
                  xAxis={[
                    {
                      data: emailDomainData.domains,
                      scaleType: 'band',
                      label: 'Domain',
                    },
                  ]}
                  yAxis={[
                    {
                      label: 'Count',
                    },
                  ]}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Billing Address Country by Class Chart */}
        <Box sx={{ gridArea: 'billingCountry' }}>
          <Card elevation={2} sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Billing Address Country by Class
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <BarChart
                  width={500}
                  height={300}
                  series={[
                    {
                      data: billingCountryData.noCB,
                      label: 'No CB',
                      color: '#4caf50',
                    },
                    {
                      data: billingCountryData.nonFraudCB,
                      label: 'Non-Fraud CB',
                      color: '#ffeb3b',
                    },
                    {
                      data: billingCountryData.fraudCB,
                      label: 'Fraud CB',
                      color: '#f44336',
                    },
                  ]}
                  xAxis={[
                    {
                      data: billingCountryData.countries,
                      scaleType: 'band',
                      label: 'Country',
                    },
                  ]}
                  yAxis={[
                    {
                      label: 'Count',
                    },
                  ]}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Average Amount by Class Chart */}
        <Box sx={{ gridArea: 'averageAmount' }}>
          <Card elevation={2} sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Average Amount by Class ($)
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <BarChart
                  width={500}
                  height={300}
                  series={[
                    {
                      data: averageAmountData.amounts,
                    },
                  ]}
                  colors={['#4caf50', '#ffeb3b', '#f44336']}
                  xAxis={[
                    {
                      data: averageAmountData.classes,
                      scaleType: 'band',
                      label: 'Class',
                    },
                  ]}
                  yAxis={[
                    {
                      label: 'Average Amount ($)',
                    },
                  ]}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Card Brand by Class Chart */}
        <Box sx={{ gridArea: 'cardBrand' }}>
          <Card elevation={2} sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Card Brand by Class
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <BarChart
                  width={500}
                  height={300}
                  series={[
                    {
                      data: cardBrandData.noCB,
                      label: 'No CB',
                      color: '#4caf50',
                    },
                    {
                      data: cardBrandData.nonFraudCB,
                      label: 'Non-Fraud CB',
                      color: '#ffeb3b',
                    },
                    {
                      data: cardBrandData.fraudCB,
                      label: 'Fraud CB',
                      color: '#f44336',
                    },
                  ]}
                  xAxis={[
                    {
                      data: cardBrandData.brands,
                      scaleType: 'band',
                      label: 'Card Brand',
                    },
                  ]}
                  yAxis={[
                    {
                      label: 'Count',
                    },
                  ]}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Rates Comparison Table - Full Width */}
        <Box sx={{ gridArea: 'table' }}>
          <Card elevation={2}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Rates Comparison
              </Typography>
              <Box sx={{ height: 300, width: '100%' }}>
                <DataGrid
                  rows={ratesData}
                  columns={ratesColumns}
                  hideFooter
                  disableRowSelectionOnClick
                  // sx={{
                  //   border: '1px solid #e0e0e0',
                  //   borderRadius: 1,
                  //   backgroundColor: 'white',
                  //   '& .MuiDataGrid-cell': {
                  //     borderBottom: '1px solid #f0f0f0',
                  //     borderRight: '1px solid #f0f0f0',
                  //     backgroundColor: 'white',
                  //     padding: '8px 16px',
                  //     fontSize: '0.875rem',
                  //   },
                  //   '& .MuiDataGrid-cell:last-child': {
                  //     borderRight: 'none',
                  //   },
                  //   '& .MuiDataGrid-columnHeaders': {
                  //     backgroundColor: '#f8f9fa',
                  //     borderBottom: '2px solid #e0e0e0',
                  //     borderRight: '1px solid #f0f0f0',
                  //   },
                  //   '& .MuiDataGrid-columnHeader:last-child': {
                  //     borderRight: 'none',
                  //   },
                  //   '& .MuiDataGrid-columnHeader': {
                  //     fontWeight: 600,
                  //     fontSize: '0.875rem',
                  //     padding: '12px 16px',
                  //     color: '#333',
                  //   },
                  //   '& .MuiDataGrid-row': {
                  //     '&:hover': {
                  //       backgroundColor: '#f8f9fa',
                  //     },
                  //   },
                  //   '& .MuiDataGrid-root': {
                  //     backgroundColor: 'white',
                  //     border: 'none',
                  //   },
                  //   '& .MuiDataGrid-main': {
                  //     border: 'none',
                  //   },
                  // }}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Quadrant Chart - Full Width */}
        <Box sx={{ gridArea: 'quadrant' }}>
          <Card elevation={2}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Quadrant Chart: Fraud Rate vs False Positive Rate
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                <ScatterChart
                  width={1500}
                  height={300}
                  series={[
                    {
                      label: 'Industry Benchmark',
                      data: [{ x: 3.0, y: 1.5, id: 1 }],
                      color: '#2196f3',
                    },
                    {
                      label: 'You Are Here',
                      data: [{ x: 6.2, y: 2.8, id: 2 }],
                      color: '#ff9800',
                    },
                  ]}
                  xAxis={[
                    {
                      label: 'Fraud rate (%)',
                      min: 0,
                      max: 10,
                    },
                  ]}
                  yAxis={[
                    {
                      label: 'False positive rate (%)',
                      min: 0,
                      max: 10,
                    },
                  ]}
                  grid={{ vertical: true, horizontal: true }}
                  sx={{
                    '& .MuiChartsAxis-line': {
                      stroke: '#666',
                    },
                    '& .MuiChartsAxis-tick': {
                      stroke: '#666',
                    },
                    '& .MuiChartsAxis-tickLabel': {
                      fill: '#666',
                    },
                  }}
                />
                
                {/* Data point labels */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '40px', // Account for chart margins
                    left: '80px', // Account for chart margins
                    width: 'calc(100% - 160px)', // Subtract left and right margins
                    height: 'calc(100% - 80px)', // Subtract top and bottom margins
                    pointerEvents: 'none',
                    zIndex: 1,
                  }}
                >
                  {/* Industry Benchmark label */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: '35%',
                      top: '20%',
                      fontSize: '0.7rem',
                      color: '#2196f3',
                      fontWeight: 500,
                      backgroundColor: 'white',
                      padding: '2px 4px',
                      borderRadius: '2px',
                    }}
                  >
                    Industry Benchmark (3.0%, 1.5%)
                  </Box>
                  
                  {/* You Are Here label */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: '62%',
                      top: '35%',
                      fontSize: '0.7rem',
                      color: '#ff9800',
                      fontWeight: 500,
                      backgroundColor: 'white',
                      padding: '2px 4px',
                      borderRadius: '2px',
                    }}
                  >
                    You Are Here (6.2%, 2.8%)
                  </Box>
                </Box>
                
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Analytics;
