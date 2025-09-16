import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Download } from '@mui/icons-material';
import jsPDF from 'jspdf';

const Actions: React.FC = () => {
  // Data for recommended rules table
  const recommendedRulesData = [
    {
      id: 1,
      rule: 'email_address ends with "@topmail"',
      projectedFraudCoverage: '20%',
      projectedFalsePositive: '0%',
      exterbalApiRequired: 'No',
      tradeoffRanking: 'Highest',
      rankingColor: '#4caf50'
    },
    {
      id: 2,
      rule: 'icxs_ip_address_score >= 90 AND popular_email_domain',
      projectedFraudCoverage: '18%',
      projectedFalsePositive: '0.01%',
      exterbalApiRequired: 'Yes',
      tradeoffRanking: 'Highest',
      rankingColor: '#4caf50'
    },
    {
      id: 3,
      rule: 'avs_result = "Negative" AND billing_address = shipping_address AND ip_billing_distance',
      projectedFraudCoverage: '34%',
      projectedFalsePositive: '0.75%',
      exterbalApiRequired: 'No',
      tradeoffRanking: 'High',
      rankingColor: '#4caf50'
    },
    {
      id: 4,
      rule: 'change icxs_ip to clear_my_ip_risk_score',
      projectedFraudCoverage: '19%',
      projectedFalsePositive: '2%',
      exterbalApiRequired: 'No',
      tradeoffRanking: 'Medium',
      rankingColor: '#ff9800'
    }
  ];

  // Data for recommended integration table
  const recommendedIntegrationData = [
    {
      id: 1,
      source: 'ClearMyIp',
      requiredDataField: 'IP Address',
      projectedImprovement: '62%',
      estimatedCost: '$260 per month'
    }
  ];

  const rulesColumns: GridColDef[] = [
    {
      field: 'rule',
      headerName: 'Rule',
      align: 'left',
      flex: 4,
    },
    {
      field: 'projectedFraudCoverage',
      headerName: 'Projected Fraud Coverage',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
    },
    {
      field: 'projectedFalsePositive',
      headerName: 'Projected False Positive',
      align: 'center',
      flex: 1,
    },
    {
      field: 'exterbalApiRequired',
      headerName: 'External API Required',
      align: 'center',
      flex: 1,
    },
    {
      field: 'tradeoffRanking',
      headerName: 'Tradeoff Ranking',
      flex: 1,
      renderCell: (params) => (
        <Typography
          sx={{
            color: params.row.rankingColor,
            mt: 2,
            fontWeight: 600,
          }}
        >
          {params.value}
        </Typography>
      ),
    },
  ];

  const integrationColumns: GridColDef[] = [
    {
      field: 'source',
      headerName: 'Source',
      width: 150,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'requiredDataField',
      headerName: 'Required Data Field',
      width: 200,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'projectedImprovement',
      headerName: 'Projected Improvement',
      width: 200,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'estimatedCost',
      headerName: 'Estimated Cost',
      width: 200,
      headerAlign: 'center',
      align: 'center',
    },
  ];

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let yPosition = 20;

    // Helper function to add text with word wrapping
    const addText = (text: string, x: number, y: number, maxWidth?: number) => {
      if (maxWidth) {
        const lines = doc.splitTextToSize(text, maxWidth);
        doc.text(lines, x, y);
        return y + (lines.length * 7);
      } else {
        doc.text(text, x, y);
        return y + 7;
      }
    };

    // Helper function to add a new page if needed
    const checkNewPage = (requiredSpace: number) => {
      if (yPosition + requiredSpace > pageHeight - 20) {
        doc.addPage();
        yPosition = 20;
      }
    };

    // Title
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    yPosition = addText('Fraud Advisory Report', pageWidth / 2, yPosition);
    yPosition += 10;

    // Date
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    const currentDate = new Date().toLocaleDateString();
    yPosition = addText(`Generated on: ${currentDate}`, pageWidth / 2, yPosition);
    yPosition += 20;

    // Summary Report Section
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    yPosition = addText('Summary Report', 20, yPosition);
    yPosition += 10;

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    yPosition = addText('Projected Fraud Coverage: 91%', 20, yPosition);
    yPosition = addText('Projected False Positive: 2.76%', 20, yPosition);
    yPosition += 20;

    // Recommended Rules Section
    checkNewPage(100);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    yPosition = addText('Recommended Rules', 20, yPosition);
    yPosition += 10;

    // Rules table headers
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    const headers = ['Rule', 'Fraud Coverage', 'False Positive', 'API Required', 'Ranking'];
    const colWidths = [80, 25, 25, 25, 20];
    let xPosition = 20;

    headers.forEach((header, index) => {
      doc.text(header, xPosition, yPosition);
      xPosition += colWidths[index];
    });
    yPosition += 10;

    // Rules data
    doc.setFont('helvetica', 'normal');
    recommendedRulesData.forEach((rule) => {
      checkNewPage(20);
      xPosition = 20;
      
      // Rule text (wrapped)
      const ruleLines = doc.splitTextToSize(rule.rule, colWidths[0]);
      doc.text(ruleLines, xPosition, yPosition);
      const maxLines = ruleLines.length;
      
      // Other columns
      xPosition += colWidths[0];
      doc.text(rule.projectedFraudCoverage, xPosition, yPosition);
      xPosition += colWidths[1];
      doc.text(rule.projectedFalsePositive, xPosition, yPosition);
      xPosition += colWidths[2];
      doc.text(rule.exterbalApiRequired, xPosition, yPosition);
      xPosition += colWidths[3];
      doc.text(rule.tradeoffRanking, xPosition, yPosition);
      
      yPosition += Math.max(maxLines * 5, 10);
    });

    yPosition += 20;

    // Recommended Integration Section
    checkNewPage(50);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    yPosition = addText('Recommended Integration', 20, yPosition);
    yPosition += 10;

    // Integration table headers
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    const integrationHeaders = ['Source', 'Required Data Field', 'Projected Improvement', 'Estimated Cost'];
    const integrationColWidths = [40, 50, 40, 40];
    xPosition = 20;

    integrationHeaders.forEach((header, index) => {
      doc.text(header, xPosition, yPosition);
      xPosition += integrationColWidths[index];
    });
    yPosition += 10;

    // Integration data
    doc.setFont('helvetica', 'normal');
    recommendedIntegrationData.forEach((integration) => {
      checkNewPage(15);
      xPosition = 20;
      doc.text(integration.source, xPosition, yPosition);
      xPosition += integrationColWidths[0];
      doc.text(integration.requiredDataField, xPosition, yPosition);
      xPosition += integrationColWidths[1];
      doc.text(integration.projectedImprovement, xPosition, yPosition);
      xPosition += integrationColWidths[2];
      doc.text(integration.estimatedCost, xPosition, yPosition);
      yPosition += 10;
    });

    // Footer
    yPosition = pageHeight - 20;
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('Generated by RevalueAI Fraud Advisory System', pageWidth / 2, yPosition, { align: 'center' });

    // Download the PDF
    doc.save('fraud-advisory-report.pdf');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mb: 4 }}>
        <Button
          variant="outlined"
          startIcon={<Download />}
          onClick={handleDownloadPDF}
          sx={{
            borderColor: '#0073E5',
            color: '#0073E5',
            textTransform: 'none',
            fontWeight: 600,
            '&:hover': {
              borderColor: '#005bb5',
              backgroundColor: 'rgba(0, 115, 229, 0.04)',
            },
          }}
        >
          Full Report (pdf)
        </Button>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {/* Recommended Rules Table */}
        <Card elevation={2}>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Recommended Rules
            </Typography>
            <Box sx={{ height: "auto", width: '100%' }}>
              <DataGrid
                rows={recommendedRulesData}
                columns={rulesColumns}
                hideFooter
                disableRowSelectionOnClick
                sx={{
                  border: 'none',
                  backgroundColor: 'transparent',
                  '& .MuiDataGrid-cell': {
                    borderBottom: '1px solid #e0e0e0',
                    backgroundColor: 'transparent',
                  },
                  '& .MuiDataGrid-columnHeaders': {
                    backgroundColor: 'transparent',
                    borderBottom: 'none',
                  },
                  '& .MuiDataGrid-columnHeader': {
                    fontWeight: 600,
                  },
                  '& .MuiDataGrid-root': {
                    backgroundColor: 'transparent',
                  },
                }}
              />
            </Box>
            
            {/* Summary Report */}
            <Box sx={{ 
              mt: 1, 
              p: 2, 
              backgroundColor: 'transparent', 
              borderRadius: 1,
              border: 'none'
            }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                Summary Report
              </Typography>
              <Box sx={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    Projected Fraud Coverage
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main' }}>
                    91%
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    Projected False Positive
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'error.main' }}>
                    2.76%
                  </Typography>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Recommended Integration Table */}
        <Card elevation={2}>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Recommended Integration
            </Typography>
            <Box sx={{ height: 200, width: '100%' }}>
              <DataGrid
                rows={recommendedIntegrationData}
                columns={integrationColumns}
                hideFooter
                disableRowSelectionOnClick
                sx={{
                  border: 'none',
                  backgroundColor: 'transparent',
                  '& .MuiDataGrid-cell': {
                    borderBottom: '1px solid #e0e0e0',
                    backgroundColor: 'transparent',
                  },
                  '& .MuiDataGrid-columnHeaders': {
                    backgroundColor: 'transparent',
                    borderBottom: 'none',
                  },
                  '& .MuiDataGrid-columnHeader': {
                    fontWeight: 600,
                  },
                  '& .MuiDataGrid-root': {
                    backgroundColor: 'transparent',
                  },
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Actions;
