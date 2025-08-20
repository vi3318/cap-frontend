import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  Stack
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Twitter,
  Email,
  Shield,
  School,
  Science,
  Book
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Science sx={{ mr: 1, color: 'primary.main', fontSize: 32 }} />
                <Typography variant="h5" component="div" sx={{ fontWeight: 600, color: 'primary.main' }}>
                  ResearchDoc AI
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Advanced AI-powered research document analysis and knowledge discovery platform. 
                Transform your research workflow with intelligent document processing, entity extraction, 
                and knowledge graph generation.
              </Typography>
              <Stack direction="row" spacing={1}>
                <IconButton color="primary" size="small">
                  <GitHub />
                </IconButton>
                <IconButton color="primary" size="small">
                  <LinkedIn />
                </IconButton>
                <IconButton color="primary" size="small">
                  <Twitter />
                </IconButton>
                <IconButton color="primary" size="small">
                  <Email />
                </IconButton>
              </Stack>
            </Box>
          </Grid>

          {/* Features Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Features
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="text.secondary" underline="hover" sx={{ display: 'block' }}>
                Document Analysis
              </Link>
              <Link href="#" color="text.secondary" underline="hover" sx={{ display: 'block' }}>
                Knowledge Graphs
              </Link>
              <Link href="#" color="text.secondary" underline="hover" sx={{ display: 'block' }}>
                Literature Search
              </Link>
              <Link href="#" color="text.secondary" underline="hover" sx={{ display: 'block' }}>
                Entity Extraction
              </Link>
              <Link href="#" color="text.secondary" underline="hover" sx={{ display: 'block' }}>
                Document Comparison
              </Link>
            </Stack>
          </Grid>

          {/* Research Areas */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Research Areas
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="text.secondary" underline="hover" sx={{ display: 'block' }}>
                Academic Papers
              </Link>
              <Link href="#" color="text.secondary" underline="hover" sx={{ display: 'block' }}>
                Technical Reports
              </Link>
              <Link href="#" color="text.secondary" underline="hover" sx={{ display: 'block' }}>
                Literature Reviews
              </Link>
              <Link href="#" color="text.secondary" underline="hover" sx={{ display: 'block' }}>
                Research Proposals
              </Link>
              <Link href="#" color="text.secondary" underline="hover" sx={{ display: 'block' }}>
                Conference Papers
              </Link>
            </Stack>
          </Grid>

          {/* Support Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Support
            </Typography>
            <Stack spacing={1}>
              <Link href="/help" color="text.secondary" underline="hover" sx={{ display: 'block' }}>
                Help Center
              </Link>
              <Link href="#" color="text.secondary" underline="hover" sx={{ display: 'block' }}>
                Documentation
              </Link>
              <Link href="#" color="text.secondary" underline="hover" sx={{ display: 'block' }}>
                API Reference
              </Link>
              <Link href="#" color="text.secondary" underline="hover" sx={{ display: 'block' }}>
                Community Forum
              </Link>
              <Link href="#" color="text.secondary" underline="hover" sx={{ display: 'block' }}>
                Contact Support
              </Link>
            </Stack>
          </Grid>

          {/* Company Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Company
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="text.secondary" underline="hover" sx={{ display: 'block' }}>
                About Us
              </Link>
              <Link href="#" color="text.secondary" underline="hover" sx={{ display: 'block' }}>
                Careers
              </Link>
              <Link href="#" color="text.secondary" underline="hover" sx={{ display: 'block' }}>
                Press
              </Link>
              <Link href="#" color="text.secondary" underline="hover" sx={{ display: 'block' }}>
                Partners
              </Link>
              <Link href="#" color="text.secondary" underline="hover" sx={{ display: 'block' }}>
                Blog
              </Link>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Bottom Section */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' } }}>
          <Typography variant="body2" color="text.secondary">
            © 2024 ResearchDoc AI. All rights reserved.
          </Typography>
          
          <Stack direction="row" spacing={3} sx={{ mt: { xs: 2, md: 0 } }}>
            <Link href="/terms" color="text.secondary" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
              <Shield sx={{ mr: 0.5, fontSize: 16 }} />
              Terms of Service
            </Link>
            <Link href="/privacy" color="text.secondary" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
              <Shield sx={{ mr: 0.5, fontSize: 16 }} />
              Privacy Policy
            </Link>
            <Link href="#" color="text.secondary" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
              <School sx={{ mr: 0.5, fontSize: 16 }} />
              Academic Use
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 