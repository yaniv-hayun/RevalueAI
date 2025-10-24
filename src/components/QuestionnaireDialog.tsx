import React, { useState, useRef, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  TextField,
  Paper,
  Avatar,
  IconButton,
  Chip
} from '@mui/material';
import {
  Send as SendIcon,
  SmartToy as BotIcon,
  Person as PersonIcon
} from '@mui/icons-material';

interface QuestionnaireData {
  industry: string;
  annualRevenue: string;
  fraudTeamSize: string;
  fraudVendor: string;
  mainRegion: string;
  fraudChallenges: string[];
  fraudPriorities: string[];
  additionalInfo: string;
}

interface ChatMessage {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

interface QuestionnaireDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: QuestionnaireData) => void;
}

const questions = [
  {
    id: 'industry',
    question: "What industry are you in? Please describe your business or select from common industries like Fashion & Apparel, Consumer Electronics, Food & Beverage, Health & Beauty, Home & Furniture, or Other.",
    field: 'industry' as keyof QuestionnaireData
  },
  {
    id: 'annualRevenue',
    question: "What is your annual revenue? Please provide an estimate or range (e.g., $0-100K, $100K-1M, $1M-10M, or more than $10M).",
    field: 'annualRevenue' as keyof QuestionnaireData
  },
  {
    id: 'fraudTeamSize',
    question: "What is the size of your internal fraud team? Please let us know if you have 1-2 people, 2-5 people, more than 5 people, or if you don't have an internal fraud team.",
    field: 'fraudTeamSize' as keyof QuestionnaireData
  },
  {
    id: 'fraudVendor',
    question: "Do you currently use a fraud prevention vendor? Please let us know if you use one, don't use one, or are not sure.",
    field: 'fraudVendor' as keyof QuestionnaireData
  },
  {
    id: 'mainRegion',
    question: "What is your main region of business? Please tell us if you operate primarily in North America, Europe, Asia-Pacific, Latin America, or other regions.",
    field: 'mainRegion' as keyof QuestionnaireData
  },
  {
    id: 'fraudChallenges',
    question: "What are your main fraud management challenges? You can mention multiple challenges like effectively using data to manage fraud, gaps in fraud tool capabilities, identifying new types of fraud, lack of internal resources, or data availability issues.",
    field: 'fraudChallenges' as keyof QuestionnaireData
  },
  {
    id: 'fraudPriorities',
    question: "What are your fraud management priorities? Please tell us about your main goals, such as reducing fraud and chargebacks, improving customer experience, or minimizing fraud-related operational costs.",
    field: 'fraudPriorities' as keyof QuestionnaireData
  },
  {
    id: 'additionalInfo',
    question: "Is there anything else you'd like to share about your business, specific fraud challenges, or goals that we haven't covered? This will help us provide you with more personalized recommendations.",
    field: 'additionalInfo' as keyof QuestionnaireData
  }
];

const QuestionnaireDialog: React.FC<QuestionnaireDialogProps> = ({ open, onClose, onSubmit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [formData, setFormData] = useState<QuestionnaireData>({
    industry: '',
    annualRevenue: '',
    fraudTeamSize: '',
    fraudVendor: '',
    mainRegion: '',
    fraudChallenges: [],
    fraudPriorities: [],
    additionalInfo: ''
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (open && messages.length === 0) {
      // Initialize with welcome message and first question
      const welcomeMessage: ChatMessage = {
        id: 'welcome',
        type: 'bot',
        content: "Hi! I'm here to help you get started with RevalueAI. Let me ask you a few questions to understand your business better.",
        timestamp: new Date()
      };
      
      const firstQuestion: ChatMessage = {
        id: 'question-0',
        type: 'bot',
        content: questions[0].question,
        timestamp: new Date()
      };

      setMessages([welcomeMessage, firstQuestion]);
    }
  }, [open]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Store the answer
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.field === 'fraudChallenges' || currentQuestion.field === 'fraudPriorities') {
      // For multi-select fields, add to array
      setFormData(prev => ({
        ...prev,
        [currentQuestion.field]: [...(prev[currentQuestion.field] as string[]), inputValue.trim()]
      }));
    } else {
      // For single fields, replace the value
      setFormData(prev => ({
        ...prev,
        [currentQuestion.field]: inputValue.trim()
      }));
    }

    setInputValue('');

    // Move to next question or complete
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        const nextQuestion: ChatMessage = {
          id: `question-${currentQuestionIndex + 1}`,
          type: 'bot',
          content: questions[currentQuestionIndex + 1].question,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, nextQuestion]);
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        // All questions answered
        const completionMessage: ChatMessage = {
          id: 'completion',
          type: 'bot',
          content: "Perfect! Thank you for sharing all this valuable information about your business. This will help us customize RevalueAI to better serve your fraud prevention needs. You're all set to explore the platform!",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, completionMessage]);
      }
    }, 1000);
  };

  const handleSkipAdditional = () => {
    const skipMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: "I'll skip this for now",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, skipMessage]);

    // Move to completion
    setTimeout(() => {
      const completionMessage: ChatMessage = {
        id: 'completion',
        type: 'bot',
        content: "No problem! Thank you for providing the information you've shared. This will help us customize RevalueAI for your business needs. You're all set to explore the platform!",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, completionMessage]);
      setCurrentQuestionIndex(questions.length); // Mark as complete
    }, 1000);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const handleComplete = () => {
    onSubmit(formData);
    handleReset();
    onClose();
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setMessages([]);
    setInputValue('');
    setFormData({
      industry: '',
      annualRevenue: '',
      fraudTeamSize: '',
      fraudVendor: '',
      mainRegion: '',
      fraudChallenges: [],
      fraudPriorities: [],
      additionalInfo: ''
    });
  };

  const isComplete = currentQuestionIndex >= questions.length;

  const renderMessage = (message: ChatMessage) => {
    const isBot = message.type === 'bot';
    
    return (
      <Box
        key={message.id}
        sx={{
          display: 'flex',
          justifyContent: isBot ? 'flex-start' : 'flex-end',
          mb: 2,
          animation: 'fadeIn 0.3s ease-in'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 1,
            maxWidth: '80%',
            flexDirection: isBot ? 'row' : 'row-reverse'
          }}
        >
          <Avatar
            sx={{
              bgcolor: isBot ? 'primary.main' : 'grey.500',
              width: 32,
              height: 32
            }}
          >
            {isBot ? <BotIcon /> : <PersonIcon />}
          </Avatar>
          <Paper
            sx={{
              p: 2,
              bgcolor: isBot ? 'grey.100' : 'primary.main',
              color: isBot ? 'text.primary' : 'white',
              borderRadius: 2,
              boxShadow: 1
            }}
          >
            <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
              {message.content}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                mt: 1,
                opacity: 0.7,
                fontSize: '0.75rem'
              }}
            >
              {message.timestamp.toLocaleTimeString()}
            </Typography>
          </Paper>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            height: '80vh',
            display: 'flex',
            flexDirection: 'column'
          }
        }}
      >
      <DialogTitle sx={{ borderBottom: 1, borderColor: 'divider', pb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            <BotIcon />
          </Avatar>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              RevalueAI Assistant
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Let's get to know your business better
            </Typography>
          </Box>
        </Box>
        {!isComplete && (
          <Box sx={{ mt: 2 }}>
            <Chip 
              label={`Question ${currentQuestionIndex + 1} of ${questions.length}`}
              size="small"
              color="primary"
              variant="outlined"
            />
          </Box>
        )}
      </DialogTitle>

      <DialogContent 
        sx={{ 
          flex: 1, 
          overflow: 'auto', 
          p: 2,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box sx={{ flex: 1, overflow: 'auto', mb: 2 }}>
          {messages.map(renderMessage)}
          <div ref={messagesEndRef} />
        </Box>
      </DialogContent>

      {!isComplete && (
        <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}>
            <TextField
              fullWidth
              multiline
              maxRows={4}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                currentQuestionIndex === questions.length - 1 
                  ? "Share any additional information about your business or goals (optional)..."
                  : "Type your answer here..."
              }
              variant="outlined"
              size="small"
              sx={{ flex: 1 }}
            />
            <IconButton
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              color="primary"
              sx={{ 
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': { bgcolor: 'primary.dark' },
                '&:disabled': { bgcolor: 'grey.300' }
              }}
            >
              <SendIcon />
            </IconButton>
          </Box>
          {currentQuestionIndex === questions.length - 1 && (
            <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}>
              <Button
                onClick={handleSkipAdditional}
                variant="text"
                size="small"
                sx={{ color: 'text.secondary' }}
              >
                Skip this step
              </Button>
            </Box>
          )}
        </Box>
      )}

      <DialogActions sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
        <Button onClick={onClose} variant="outlined">
          {isComplete ? 'Close' : 'Skip'}
        </Button>
        {isComplete && (
          <Button
            onClick={handleComplete}
            variant="contained"
            sx={{ 
              bgcolor: '#0073E5',
              '&:hover': { bgcolor: '#005bb5' }
            }}
          >
            Complete Setup
          </Button>
        )}
      </DialogActions>
      </Dialog>
    </>
  );
};

export default QuestionnaireDialog;
