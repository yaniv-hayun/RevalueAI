import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  Paper,
  useTheme,
} from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';

const Chargebacks: React.FC = () => {
  const theme = useTheme();
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleRowClick = (params: any) => {
    setSelectedRow(params.row);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedRow(null);
  };

  // Sample data matching the image
  const chargebacksData = [
    {
      id: 1,
      chargebackId: '1238974',
      transactionCreatedAt: '2024-09-06 23:10:45',
      chargebackCreatedAt: '2024-04-18 03:23:21',
      amount: '5,000',
      issuerName: 'Visa',
      issuerCountry: 'USA',
      reasonCode: 'Fraud - Card-Absent Environment',
      disputeStatus: 'Lost',
      patternSeverityRate: '99%',
      fraudPattern: 'Exposed Fraud',
      fraudRing: 'None',
      compellingEvidence: 'Generate\nNot Recommended',
    },
    {
      id: 2,
      chargebackId: '32498794',
      transactionCreatedAt: '2023-09-11 13:45:10',
      chargebackCreatedAt: '2023-01-14 10:17:12',
      amount: '4,130.7',
      issuerName: 'MasterCard',
      issuerCountry: 'USA',
      reasonCode: 'Fraud - No Cardholder Authorization',
      disputeStatus: 'Lost',
      patternSeverityRate: '94%',
      fraudPattern: 'Identity Theft',
      fraudRing: 'VPN connection and risky domain @topmail',
      compellingEvidence: 'Generate\nNot Recommended',
    },
    {
      id: 3,
      chargebackId: '2340985',
      transactionCreatedAt: '2023-06-28 12:37:03',
      chargebackCreatedAt: '2023-11-11 16:58:04',
      amount: '566',
      issuerName: 'Visa',
      issuerCountry: 'Germany',
      reasonCode: 'Services Not Received',
      disputeStatus: 'Lost',
      patternSeverityRate: '68%',
      fraudPattern: 'Non Fraud',
      fraudRing: 'None',
      compellingEvidence: 'Irrelevant',
    },
    {
      id: 4,
      chargebackId: '98743957',
      transactionCreatedAt: '2023-07-26 13:19:32',
      chargebackCreatedAt: '2024-01-13 13:29:52',
      amount: '890',
      issuerName: 'American Express',
      issuerCountry: 'USA',
      reasonCode: 'Fraud - No Cardholder Authorization',
      disputeStatus: 'Won',
      patternSeverityRate: '',
      fraudPattern: 'Friendly Fraud',
      fraudRing: 'None',
      compellingEvidence: 'Generate\nRecommended',
    },
    {
      id: 5,
      chargebackId: '24098249',
      transactionCreatedAt: '2024-04-25 11:37:30',
      chargebackCreatedAt: '2023-11-04 17:37:33',
      amount: '3,214',
      issuerName: 'Visa',
      issuerCountry: 'China',
      reasonCode: 'Not as Described',
      disputeStatus: 'Lost',
      patternSeverityRate: '',
      fraudPattern: 'Non Fraud',
      fraudRing: 'None',
      compellingEvidence: 'Irrelevant',
    },
  ];

  const columns: GridColDef[] = [
    {
      field: 'chargebackId',
      headerName: 'Chargeback ID',
      flex: 0.5,
      renderCell: (params) => (
        <Button
          variant="text"
          sx={{
            textTransform: 'none',
            color: theme.palette.primary.main,
            fontWeight: 500,
            minWidth: 'auto',
            padding: 0,
            '&:hover': {
              backgroundColor: 'transparent',
              textDecoration: 'underline',
            },
          }}
        >
          {params.value}
        </Button>
      ),
    },
    {
      field: 'transactionCreatedAt',
      headerName: 'Transaction Created At',
      flex: 0.7,
    },
    // {
    //   field: 'chargebackCreatedAt',
    //   headerName: 'Chargeback Created At',
    //   flex: 0.7,
    // },
    {
      field: 'amount',
      headerName: 'Amount',
      flex: 0.4,
      align: 'right',
    },
    {
      field: 'reasonCode',
      headerName: 'Reason Code',
      flex: 1,
    },
    {
      field: 'disputeStatus',
      headerName: 'Dispute Status',
      flex: 0.5,
      renderCell: (params) => (
        <Chip
          label={params.value}
          size="small"
          color={params.value === 'Won' ? 'success' : 'error'}
          variant="outlined"
        />
      ),
    },
    {
      field: 'patternSeverityRate',
      headerName: 'Pattern Severity Rate',
      flex: 0.5,
      align: 'center',
    },
    {
      field: 'fraudPattern',
      headerName: 'Fraud Pattern',
      flex: 0.5,
    },
    // {
    //   field: 'fraudRing',
    //   headerName: 'Fraud Ring',
    //   flex: 1,
    // },
  ];


  return (
    <Box sx={{ p: 3, width: '100%', overflow: 'hidden' }}>

    <Paper
      sx={{ p: 3, width: '100%', overflow: 'hidden' }}
    > 
      {/* Data Grid */}
      <Card sx={{ width: '100%' }}>
        <CardContent sx={{ p: 0, width: '100%' }}>
          <Box sx={{ height: "auto", width: '100%' }}>
            <DataGrid
              rows={chargebacksData}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10, 25]}
              disableRowSelectionOnClick
              onRowClick={handleRowClick}
              slots={{
                toolbar: GridToolbar,
              }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 500 },
                },
              }}
              autoHeight
            />
          </Box>
        </CardContent>
      </Card>
      </Paper>

      {/* Chargeback Details Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
          },
        }}
      >
        <DialogTitle sx={{ pb: 1 }}>
          <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
            Chargeback Details
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            ID: {selectedRow?.chargebackId}
          </Typography>
        </DialogTitle>
        
        <DialogContent sx={{ pt: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Transaction Information */}
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                Transaction Information
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Chargeback ID
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {selectedRow?.chargebackId}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Amount
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2, fontWeight: 600, color: 'error.main' }}>
                    ${selectedRow?.amount}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Transaction Created At
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {selectedRow?.transactionCreatedAt}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Chargeback Created At
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {selectedRow?.chargebackCreatedAt}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Issuer Information */}
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                Issuer Information
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Issuer Name
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {selectedRow?.issuerName}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Issuer Country
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {selectedRow?.issuerCountry}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Dispute Information */}
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                Dispute Information
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Reason Code
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {selectedRow?.reasonCode}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Dispute Status
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label={selectedRow?.disputeStatus}
                      size="medium"
                      color={selectedRow?.disputeStatus === 'Won' ? 'success' : 'error'}
                      variant="filled"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Fraud Analysis */}
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                Fraud Analysis
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Pattern Severity Rate
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2, fontWeight: 600 }}>
                    {selectedRow?.patternSeverityRate || 'N/A'}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Fraud Pattern
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {selectedRow?.fraudPattern}
                  </Typography>
                </Box>
                <Box sx={{ gridColumn: '1 / -1' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Fraud Ring
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {selectedRow?.fraudRing}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Compelling Evidence */}
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                Compelling Evidence
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Evidence Status
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {selectedRow?.compellingEvidence && (() => {
                    const [action, status] = selectedRow.compellingEvidence.split('\n');
                    return (
                      <Box>
                        {action && (
                          <Button
                            variant="contained"
                            size="small"
                            sx={{
                              textTransform: 'none',
                              mr: 2,
                              mb: 1,
                            }}
                          >
                            {action}
                          </Button>
                        )}
                        <Typography
                          variant="body2"
                          sx={{
                            color: status === 'Recommended' ? 'success.main' : 'text.secondary',
                            fontWeight: 500,
                          }}
                        >
                          {status}
                        </Typography>
                      </Box>
                    );
                  })()}
                </Box>
              </Box>
            </Box>
          </Box>
        </DialogContent>
        
        <DialogActions sx={{ p: 3, pt: 1 }}>
          <Button onClick={handleCloseDialog} variant="outlined">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Chargebacks;
