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
  Chip
} from '@mui/material';
import {
  Gavel,
  Security,
  Shield,
  Description,
  CheckCircle,
  Warning,
  Info
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const TermsOfServicePage = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using LegalDoc AI, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
      icon: <CheckCircle />
    },
    {
      title: "Description of Service",
      content: "LegalDoc AI provides AI-powered legal document analysis and risk assessment services. Our platform uses advanced machine learning algorithms to analyze legal documents and provide insights, but should not be considered as legal advice.",
      icon: <Description />
    },
    {
      title: "User Responsibilities",
      content: "Users are responsible for ensuring they have the right to upload and analyze documents. Users must not upload confidential or proprietary information without proper authorization.",
      icon: <Warning />
    },
    {
      title: "Privacy and Data Protection",
      content: "We are committed to protecting your privacy. All data is encrypted in transit and at rest. We comply with GDPR and other applicable privacy regulations.",
      icon: <Shield />
    },
    {
      title: "Intellectual Property",
      content: "The service and its original content, features, and functionality are owned by LegalDoc AI and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.",
      icon: <Gavel />
    },
    {
      title: "Limitation of Liability",
      content: "LegalDoc AI is provided 'as is' without warranties of any kind. We are not liable for any damages arising from the use of our service. Legal analysis should be verified by qualified legal professionals.",
      icon: <Info />
    }
  ];

  const keyPoints = [
    "Service is provided 'as is' without warranties",
    "Users must have authorization to upload documents",
    "AI analysis is not a substitute for legal advice",
    "Data is encrypted and protected",
    "Service complies with privacy regulations",
    "Users are responsible for document accuracy"
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
            Terms of Service
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Last updated: January 15, 2024
          </Typography>
          <Chip 
            label="Version 1.0" 
            color="primary" 
            sx={{ mt: 2 }}
          />
        </Box>

        {/* Key Points */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <Info sx={{ mr: 1 }} />
            Key Points
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {keyPoints.map((point, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircle sx={{ mr: 1, color: 'success.main', fontSize: 20 }} />
                    <Typography variant="body2">
                      {point}
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

        {/* Additional Terms */}
        <Paper sx={{ p: 3, mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Additional Terms
          </Typography>
          <Divider sx={{ mb: 3 }} />
          
          <List>
            <ListItem>
              <ListItemIcon>
                <Security sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText
                primary="Security"
                secondary="We implement industry-standard security measures to protect your data. All communications are encrypted using SSL/TLS protocols."
              />
            </ListItem>
            
            <ListItem>
              <ListItemIcon>
                <Shield sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText
                primary="Data Retention"
                secondary="Documents are automatically deleted after 30 days unless you choose to store them longer. You can delete your data at any time."
              />
            </ListItem>
            
            <ListItem>
              <ListItemIcon>
                <Gavel sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText
                primary="Governing Law"
                secondary="These terms are governed by the laws of the jurisdiction where LegalDoc AI operates. Any disputes will be resolved through arbitration."
              />
            </ListItem>
            
            <ListItem>
              <ListItemIcon>
                <Description sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText
                primary="Changes to Terms"
                secondary="We may update these terms from time to time. Users will be notified of significant changes via email or through the platform."
              />
            </ListItem>
          </List>
        </Paper>

        {/* Contact Information */}
        <Paper sx={{ p: 3, mt: 4, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Questions about these terms?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Contact us at legal@legaldocai.com for any questions regarding these terms of service.
          </Typography>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default TermsOfServicePage; 