import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stepper,
  Step,
  StepLabel,
  Box,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup
} from '@mui/material';

interface QuestionnaireData {
  industry: string;
  annualRevenue: string;
  fraudTeamSize: string;
  fraudVendor: string;
  mainRegion: string;
  fraudChallenges: string[];
  fraudPriorities: string[];
}

interface QuestionnaireDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: QuestionnaireData) => void;
}

const steps = [
  'Industry',
  'Annual Revenue',
  'Fraud Team Size',
  'Fraud Prevention Vendor',
  'Main Region',
  'Fraud Challenges',
  'Fraud Priorities'
];

const QuestionnaireDialog: React.FC<QuestionnaireDialogProps> = ({ open, onClose, onSubmit }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<QuestionnaireData>({
    industry: '',
    annualRevenue: '',
    fraudTeamSize: '',
    fraudVendor: '',
    mainRegion: '',
    fraudChallenges: [],
    fraudPriorities: []
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({
      industry: '',
      annualRevenue: '',
      fraudTeamSize: '',
      fraudVendor: '',
      mainRegion: '',
      fraudChallenges: [],
      fraudPriorities: []
    });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    handleReset();
    onClose();
  };

  const handleSingleSelect = (field: keyof QuestionnaireData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMultiSelect = (field: 'fraudChallenges' | 'fraudPriorities', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 0:
        return formData.industry !== '';
      case 1:
        return formData.annualRevenue !== '';
      case 2:
        return formData.fraudTeamSize !== '';
      case 3:
        return formData.fraudVendor !== '';
      case 4:
        return formData.mainRegion !== '';
      case 5:
        return formData.fraudChallenges.length > 0;
      case 6:
        return formData.fraudPriorities.length > 0;
      default:
        return false;
    }
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ mt: 2 }}>
            <FormControl component="fieldset">
              <FormLabel component="legend" sx={{ mb: 2, fontWeight: 600 }}>
                What is your industry?
              </FormLabel>
              <RadioGroup
                value={formData.industry}
                onChange={(e) => handleSingleSelect('industry', e.target.value)}
              >
                <FormControlLabel value="fashion" control={<Radio />} label="Fashion & Apparel" />
                <FormControlLabel value="electronics" control={<Radio />} label="Consumer Electronics" />
                <FormControlLabel value="food" control={<Radio />} label="Food & Beverage / Grocery" />
                <FormControlLabel value="health" control={<Radio />} label="Health, Beauty & Drugstore" />
                <FormControlLabel value="home" control={<Radio />} label="Home & Furniture" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          </Box>
        );

      case 1:
        return (
          <Box sx={{ mt: 2 }}>
            <FormControl component="fieldset">
              <FormLabel component="legend" sx={{ mb: 2, fontWeight: 600 }}>
                What is your annual revenue?
              </FormLabel>
              <RadioGroup
                value={formData.annualRevenue}
                onChange={(e) => handleSingleSelect('annualRevenue', e.target.value)}
              >
                <FormControlLabel value="0-100k" control={<Radio />} label="$0 - $100K" />
                <FormControlLabel value="100k-1m" control={<Radio />} label="$100K - $1M" />
                <FormControlLabel value="1m-10m" control={<Radio />} label="$1M - $10M" />
                <FormControlLabel value="10m+" control={<Radio />} label="More than $10M" />
              </RadioGroup>
            </FormControl>
          </Box>
        );

      case 2:
        return (
          <Box sx={{ mt: 2 }}>
            <FormControl component="fieldset">
              <FormLabel component="legend" sx={{ mb: 2, fontWeight: 600 }}>
                What is the size of your internal fraud team?
              </FormLabel>
              <RadioGroup
                value={formData.fraudTeamSize}
                onChange={(e) => handleSingleSelect('fraudTeamSize', e.target.value)}
              >
                <FormControlLabel value="1-2" control={<Radio />} label="1-2" />
                <FormControlLabel value="2-5" control={<Radio />} label="2-5" />
                <FormControlLabel value="5+" control={<Radio />} label="More than 5" />
                <FormControlLabel value="none" control={<Radio />} label="There is no internal fraud team" />
              </RadioGroup>
            </FormControl>
          </Box>
        );

      case 3:
        return (
          <Box sx={{ mt: 2 }}>
            <FormControl component="fieldset">
              <FormLabel component="legend" sx={{ mb: 2, fontWeight: 600 }}>
                Do you currently use a fraud prevention vendor?
              </FormLabel>
              <RadioGroup
                value={formData.fraudVendor}
                onChange={(e) => handleSingleSelect('fraudVendor', e.target.value)}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
                <FormControlLabel value="not-sure" control={<Radio />} label="Not sure" />
              </RadioGroup>
            </FormControl>
          </Box>
        );

      case 4:
        return (
          <Box sx={{ mt: 2 }}>
            <FormControl component="fieldset">
              <FormLabel component="legend" sx={{ mb: 2, fontWeight: 600 }}>
                What is your main region of business?
              </FormLabel>
              <RadioGroup
                value={formData.mainRegion}
                onChange={(e) => handleSingleSelect('mainRegion', e.target.value)}
              >
                <FormControlLabel value="north-america" control={<Radio />} label="North America" />
                <FormControlLabel value="europe" control={<Radio />} label="Europe" />
                <FormControlLabel value="asia-pacific" control={<Radio />} label="Asia-Pacific" />
                <FormControlLabel value="latin-america" control={<Radio />} label="Latin America" />
              </RadioGroup>
            </FormControl>
          </Box>
        );

      case 5:
        return (
          <Box sx={{ mt: 2 }}>
            <FormControl component="fieldset">
              <FormLabel component="legend" sx={{ mb: 2, fontWeight: 600 }}>
                What is your main fraud management challenge? (you can pick more than one)
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.fraudChallenges.includes('data-management')}
                      onChange={() => handleMultiSelect('fraudChallenges', 'data-management')}
                    />
                  }
                  label="Effectively using data to manage fraud"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.fraudChallenges.includes('tool-gaps')}
                      onChange={() => handleMultiSelect('fraudChallenges', 'tool-gaps')}
                    />
                  }
                  label="Gaps in fraud tool capabilities"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.fraudChallenges.includes('new-fraud-types')}
                      onChange={() => handleMultiSelect('fraudChallenges', 'new-fraud-types')}
                    />
                  }
                  label="Identifying and responding to new types of fraud"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.fraudChallenges.includes('lack-resources')}
                      onChange={() => handleMultiSelect('fraudChallenges', 'lack-resources')}
                    />
                  }
                  label="Lack of internal resources"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.fraudChallenges.includes('data-access')}
                      onChange={() => handleMultiSelect('fraudChallenges', 'data-access')}
                    />
                  }
                  label="Data availability and access"
                />
              </FormGroup>
            </FormControl>
          </Box>
        );

      case 6:
        return (
          <Box sx={{ mt: 2 }}>
            <FormControl component="fieldset">
              <FormLabel component="legend" sx={{ mb: 2, fontWeight: 600 }}>
                What are your fraud management priorities?
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.fraudPriorities.includes('reduce-fraud')}
                      onChange={() => handleMultiSelect('fraudPriorities', 'reduce-fraud')}
                    />
                  }
                  label="Reducing fraud and chargebacks"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.fraudPriorities.includes('customer-experience')}
                      onChange={() => handleMultiSelect('fraudPriorities', 'customer-experience')}
                    />
                  }
                  label="Improving the customer experience"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.fraudPriorities.includes('minimize-costs')}
                      onChange={() => handleMultiSelect('fraudPriorities', 'minimize-costs')}
                    />
                  }
                  label="Minimizing fraud-related operational costs"
                />
              </FormGroup>
            </FormControl>
          </Box>
        );

      default:
        return 'Unknown step';
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          minHeight: '600px',
          maxHeight: '80vh'
        }
      }}
    >
      <DialogTitle>
        <Typography variant="h5" component="div" sx={{ fontWeight: 600, mb: 2 }}>
          Welcome to RevalueAI
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Help us understand your business better by completing this quick questionnaire
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </DialogTitle>

      <DialogContent sx={{ px: 3, py: 2 }}>
        {renderStepContent(activeStep)}
      </DialogContent>

      <DialogActions sx={{ px: 3, py: 2, justifyContent: 'space-between' }}>
        <Button
          onClick={handleBack}
          disabled={activeStep === 0}
          variant="outlined"
        >
          Back
        </Button>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button onClick={onClose} variant="outlined">
            Skip
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button
              onClick={handleSubmit}
              variant="contained"
              disabled={!isStepValid(activeStep)}
              sx={{ 
                bgcolor: '#0073E5',
                '&:hover': { bgcolor: '#005bb5' }
              }}
            >
              Complete
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              variant="contained"
              disabled={!isStepValid(activeStep)}
              sx={{ 
                bgcolor: '#0073E5',
                '&:hover': { bgcolor: '#005bb5' }
              }}
            >
              Next
            </Button>
          )}
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default QuestionnaireDialog;
