import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import {
  Security,
  DataUsage,
  Visibility,
  Delete,
  Lock,
  CheckCircle,
  Warning,
  Info,
  ExpandMore,
  Shield
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you upload documents, create an account, or contact us. This includes document content, metadata, and usage analytics.",
      icon: <DataUsage />
    },
    {
      title: "How We Use Your Information",
      content: "We use your information to provide our AI analysis services, improve our algorithms, ensure security, and communicate with you about our services.",
      icon: <Visibility />
    },
    {
      title: "Data Security",
      content: "We implement industry-standard security measures including encryption, access controls, and regular security audits to protect your data.",
      icon: <Security />
    },
    {
      title: "Data Retention",
      content: "Documents are automatically deleted after 30 days. You can delete your data at any time through your account settings.",
      icon: <Delete />
    },
    {
      title: "Your Rights",
      content: "You have the right to access, correct, delete, and export your data. You can also opt out of certain data processing activities.",
      icon: <CheckCircle />
    },
    {
      title: "Third-Party Services",
      content: "We may use third-party services for analytics and security. These services are bound by strict data protection agreements.",
      icon: <Info />
    }
  ];

  const privacyPrinciples = [
    "Transparency in data collection and usage",
    "Minimal data collection for service provision",
    "Strong encryption for data protection",
    "User control over personal data",
    "Regular security audits and updates",
    "Compliance with GDPR and other regulations"
  ];

  const dataTypes = [
    {
      type: "Document Content",
      description: "The actual text and content of uploaded legal documents",
      retention: "30 days or until deletion",
      purpose: "AI analysis and processing"
    },
    {
      type: "Usage Analytics",
      description: "How you interact with our platform",
      retention: "12 months",
      purpose: "Service improvement and optimization"
    },
    {
      type: "Account Information",
      description: "Email, name, and account preferences",
      retention: "Until account deletion",
      purpose: "Account management and communication"
    },
    {
      type: "Technical Data",
      description: "IP addresses, device information, and logs",
      retention: "90 days",
      purpose: "Security and fraud prevention"
    }
  ];

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
            Privacy Policy
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Last updated: January 15, 2024
          </Typography>
          <Chip 
            label="GDPR Compliant" 
            color="success" 
            sx={{ mt: 2 }}
          />
        </Box>

        {/* Privacy Principles */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <Shield sx={{ mr: 1 }} />
            Our Privacy Principles
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {privacyPrinciples.map((principle, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircle sx={{ mr: 1, color: 'success.main', fontSize: 20 }} />
                    <Typography variant="body2">
                      {principle}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Main Content */}
        <Grid container spacing={3}>
          {sections.map((section, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Paper sx={{ p: 3, height: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ 
                      p: 1, 
                      borderRadius: 2, 
                      backgroundColor: 'primary.light',
                      color: 'primary.main',
                      mr: 2
                    }}>
                      {section.icon}
                    </Box>
                    <Typography variant="h6" fontWeight="bold">
                      {section.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {section.content}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Data Types */}
        <Paper sx={{ p: 3, mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Data Collection Details
          </Typography>
          <Divider sx={{ mb: 3 }} />
          
          {dataTypes.map((dataType, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Accordion sx={{ mb: 1 }}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {dataType.type}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {dataType.description}
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="caption" color="text.secondary">
                          Retention Period:
                        </Typography>
                        <Typography variant="body2" fontWeight="bold">
                          {dataType.retention}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="caption" color="text.secondary">
                          Purpose:
                        </Typography>
                        <Typography variant="body2" fontWeight="bold">
                          {dataType.purpose}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Paper>

        {/* Security Measures */}
        <Paper sx={{ p: 3, mt: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <Lock sx={{ mr: 1 }} />
            Security Measures
          </Typography>
          <Divider sx={{ mb: 3 }} />
          
          <List>
            <ListItem>
              <ListItemIcon>
                <Security sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText
                primary="End-to-End Encryption"
                secondary="All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption."
              />
            </ListItem>
            
            <ListItem>
              <ListItemIcon>
                <Shield sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText
                primary="Access Controls"
                secondary="Strict access controls and authentication mechanisms to prevent unauthorized access."
              />
            </ListItem>
            
            <ListItem>
              <ListItemIcon>
                <CheckCircle sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText
                primary="Regular Audits"
                secondary="We conduct regular security audits and penetration testing to ensure data protection."
              />
            </ListItem>
            
            <ListItem>
              <ListItemIcon>
                <Warning sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText
                primary="Incident Response"
                secondary="We have a comprehensive incident response plan and will notify users of any data breaches."
              />
            </ListItem>
          </List>
        </Paper>

        {/* Contact Information */}
        <Paper sx={{ p: 3, mt: 4, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Questions about your privacy?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Contact our Data Protection Officer at privacy@legaldocai.com
          </Typography>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default PrivacyPolicyPage; 