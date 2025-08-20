import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  TextField,
  Card,
  CardContent,
  Chip,
  Divider
} from '@mui/material';
import {
  ExpandMore,
  Help,
  QuestionAnswer,
  VideoLibrary,
  Book,
  ContactSupport,
  Search,
  Email,
  Phone,
  Chat,
  Article,
  School,
  Security,
  Speed,
  CheckCircle
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: "How do I upload a document for analysis?",
      answer: "Simply drag and drop your legal document (PDF, Word, or text file) into the upload area, or click to browse and select a file. Our AI will automatically analyze the document and provide comprehensive insights."
    },
    {
      question: "What file types are supported?",
      answer: "We support PDF, DOCX, DOC, TXT, and image files (JPG, PNG). For best results, we recommend using PDF format as it preserves document formatting."
    },
    {
      question: "How accurate is the legal analysis?",
      answer: "Our AI achieves 94.2% accuracy in legal document analysis. The system uses advanced NLP and legal knowledge graphs to provide reliable insights, but we always recommend consulting with legal professionals for critical decisions."
    },
    {
      question: "Is my data secure and private?",
      answer: "Yes, we prioritize data security. All documents are encrypted in transit and at rest. We comply with GDPR and other privacy regulations. Your data is never shared with third parties without explicit consent."
    },
    {
      question: "How long does analysis take?",
      answer: "Most documents are analyzed within 2-3 seconds. Complex legal documents may take up to 30 seconds. You'll see a progress indicator during processing."
    },
    {
      question: "Can I export analysis results?",
      answer: "Yes, you can export analysis results as PDF reports. Go to the analysis results page and click the 'Export Report' button to download a comprehensive analysis report."
    }
  ];

  const helpCategories = [
    {
      title: "Getting Started",
      icon: <School />,
      description: "Learn the basics of using our platform",
      items: ["Uploading Documents", "Understanding Results", "Exporting Reports"]
    },
    {
      title: "Security & Privacy",
      icon: <Security />,
      description: "Information about data protection",
      items: ["Data Encryption", "Privacy Policy", "GDPR Compliance"]
    },
    {
      title: "API Documentation",
      icon: <Book />,
      description: "Technical documentation for developers",
      items: ["Authentication", "Endpoints", "Rate Limits"]
    },
    {
      title: "Video Tutorials",
      icon: <VideoLibrary />,
      description: "Step-by-step video guides",
      items: ["Quick Start Guide", "Advanced Features", "Troubleshooting"]
    }
  ];

  const contactMethods = [
    {
      title: "Email Support",
      icon: <Email />,
      description: "Get help via email",
      action: "support@legaldocai.com",
      color: "primary"
    },
    {
      title: "Live Chat",
      icon: <Chat />,
      description: "Real-time assistance",
      action: "Start Chat",
      color: "success"
    },
    {
      title: "Phone Support",
      icon: <Phone />,
      description: "Call us directly",
      action: "+1 (555) 123-4567",
      color: "info"
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom>
            Help Center
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Find answers to your questions and get the support you need
          </Typography>
          
          {/* Search */}
          <Box sx={{ maxWidth: 600, mx: 'auto' }}>
            <TextField
              fullWidth
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />
              }}
              sx={{ mb: 3 }}
            />
          </Box>
        </Box>

        {/* Help Categories */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {helpCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%', cursor: 'pointer', '&:hover': { boxShadow: 4 } }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ 
                        p: 1, 
                        borderRadius: 2, 
                        backgroundColor: 'primary.light',
                        color: 'primary.main',
                        mr: 2
                      }}>
                        {category.icon}
                      </Box>
                      <Typography variant="h6" fontWeight="bold">
                        {category.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {category.description}
                    </Typography>
                    <List dense>
                      {category.items.map((item, idx) => (
                        <ListItem key={idx} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircle sx={{ fontSize: 16, color: 'success.main' }} />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Contact Methods */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {contactMethods.map((method, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Paper sx={{ p: 3, textAlign: 'center' }}>
                  <Box sx={{ 
                    p: 2, 
                    borderRadius: '50%', 
                    backgroundColor: `${method.color}.light`,
                    color: `${method.color}.main`,
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {method.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {method.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {method.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    color={method.color}
                    startIcon={method.icon}
                  >
                    {method.action}
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* FAQ Section */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <QuestionAnswer sx={{ mr: 1 }} />
            Frequently Asked Questions
          </Typography>
          
          {filteredFaqs.length > 0 ? (
            <Box sx={{ mt: 3 }}>
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Accordion sx={{ mb: 1 }}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2" color="text.secondary">
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </motion.div>
              ))}
            </Box>
          ) : (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="body1" color="text.secondary">
                No results found for "{searchQuery}". Try a different search term.
              </Typography>
            </Box>
          )}
        </Paper>
      </motion.div>
    </Container>
  );
};

export default HelpPage; 