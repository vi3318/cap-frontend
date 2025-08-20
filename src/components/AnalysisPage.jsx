import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  LinearProgress,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Button,
  Stack
} from '@mui/material';
import {
  TrendingUp,
  Assessment,
  School,
  Science,
  Book,
  Timeline,
  Verified,
  Analytics,
  Psychology,
  Compare
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const AnalysisPage = () => {
  const [analytics, setAnalytics] = useState({
    totalDocuments: 1247,
    processedToday: 23,
    averageProcessingTime: 2.3,
    accuracyRate: 94.2,
    researchPapers: 456,
    technicalDocs: 234,
    academicPapers: 389,
    literatureReviews: 168
  });

  const [recentAnalyses, setRecentAnalyses] = useState([
    {
      id: 1,
      title: "Machine Learning in Healthcare Applications",
      type: "Research Paper",
      confidence: 0.96,
      entities: 15,
      topics: ["AI", "Healthcare", "Machine Learning"],
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      title: "Quantum Computing Algorithms Review",
      type: "Literature Review",
      confidence: 0.89,
      entities: 12,
      topics: ["Quantum Computing", "Algorithms", "Computer Science"],
      timestamp: "4 hours ago"
    },
    {
      id: 3,
      title: "Climate Change Impact Assessment",
      type: "Technical Report",
      confidence: 0.92,
      entities: 18,
      topics: ["Climate Science", "Environmental Impact", "Data Analysis"],
      timestamp: "6 hours ago"
    },
    {
      id: 4,
      title: "Blockchain Technology in Finance",
      type: "Academic Paper",
      confidence: 0.94,
      entities: 14,
      topics: ["Blockchain", "Finance", "Technology"],
      timestamp: "8 hours ago"
    }
  ]);

  const [processingStats, setProcessingStats] = useState({
    documentsInQueue: 5,
    currentlyProcessing: 2,
    completedToday: 23,
    averageAccuracy: 94.2
  });

  return (
    <Box sx={{ p: 3, maxWidth: 1400, mx: 'auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 1 }}>
          Research Analytics Dashboard
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Comprehensive insights into research document processing and analysis performance
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {/* Key Metrics */}
        <Grid item xs={12} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <School sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  {analytics.totalDocuments.toLocaleString()}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Total Documents
                </Typography>
                <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
                  +{analytics.processedToday} today
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Verified sx={{ fontSize: 48, color: 'success.main', mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  {analytics.accuracyRate}%
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Accuracy Rate
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={analytics.accuracyRate} 
                  sx={{ mt: 2, height: 8, borderRadius: 4 }}
                  color="success"
                />
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Timeline sx={{ fontSize: 48, color: 'warning.main', mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  {analytics.averageProcessingTime}s
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Avg. Processing Time
                </Typography>
                <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
                  Optimized performance
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <TrendingUp sx={{ fontSize: 48, color: 'info.main', mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  {analytics.processedToday}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Processed Today
                </Typography>
                <Typography variant="body2" color="primary.main" sx={{ mt: 1 }}>
                  Active processing
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Document Type Distribution */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Science sx={{ mr: 1, color: 'primary.main' }} />
                  Document Type Distribution
                </Typography>
                
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body1">Research Papers</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress 
                        variant="determinate" 
                        value={(analytics.researchPapers / analytics.totalDocuments) * 100} 
                        sx={{ width: 100, height: 8, borderRadius: 4 }}
                        color="primary"
                      />
                      <Typography variant="body2" fontWeight={600}>
                        {analytics.researchPapers}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body1">Technical Documents</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress 
                        variant="determinate" 
                        value={(analytics.technicalDocs / analytics.totalDocuments) * 100} 
                        sx={{ width: 100, height: 8, borderRadius: 4 }}
                        color="secondary"
                      />
                      <Typography variant="body2" fontWeight={600}>
                        {analytics.technicalDocs}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body1">Academic Papers</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress 
                        variant="determinate" 
                        value={(analytics.academicPapers / analytics.totalDocuments) * 100} 
                        sx={{ width: 100, height: 8, borderRadius: 4 }}
                        color="success"
                      />
                      <Typography variant="body2" fontWeight={600}>
                        {analytics.academicPapers}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body1">Literature Reviews</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress 
                        variant="determinate" 
                        value={(analytics.literatureReviews / analytics.totalDocuments) * 100} 
                        sx={{ width: 100, height: 8, borderRadius: 4 }}
                        color="warning"
                      />
                      <Typography variant="body2" fontWeight={600}>
                        {analytics.literatureReviews}
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Processing Status */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Analytics sx={{ mr: 1, color: 'primary.main' }} />
                  Processing Status
                </Typography>
                
                <Stack spacing={3}>
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body1">Documents in Queue</Typography>
                      <Typography variant="h6" color="warning.main">
                        {processingStats.documentsInQueue}
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={(processingStats.documentsInQueue / 10) * 100} 
                      sx={{ height: 8, borderRadius: 4 }}
                      color="warning"
                    />
                  </Box>

                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body1">Currently Processing</Typography>
                      <Typography variant="h6" color="info.main">
                        {processingStats.currentlyProcessing}
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={(processingStats.currentlyProcessing / 5) * 100} 
                      sx={{ height: 8, borderRadius: 4 }}
                      color="info"
                    />
                  </Box>

                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body1">Completed Today</Typography>
                      <Typography variant="h6" color="success.main">
                        {processingStats.completedToday}
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={(processingStats.completedToday / 50) * 100} 
                      sx={{ height: 8, borderRadius: 4 }}
                      color="success"
                    />
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Recent Analyses */}
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Assessment sx={{ mr: 1, color: 'primary.main' }} />
                  Recent Research Analyses
                </Typography>
                
                <Grid container spacing={2}>
                  {recentAnalyses.map((analysis) => (
                    <Grid item xs={12} md={6} key={analysis.id}>
                      <Paper sx={{ p: 2, height: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                          <Typography variant="h6" sx={{ flex: 1, mr: 2 }}>
                            {analysis.title}
                          </Typography>
                          <Chip 
                            label={`${(analysis.confidence * 100).toFixed(0)}% confidence`}
                            color="primary"
                            size="small"
                          />
                        </Box>
                        
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Type: {analysis.type} • {analysis.timestamp}
                        </Typography>
                        
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                          {analysis.topics.map((topic, index) => (
                            <Chip
                              key={index}
                              label={topic}
                              variant="outlined"
                              size="small"
                              color="secondary"
                            />
                          ))}
                        </Box>
                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="body2" color="text.secondary">
                            Entities: {analysis.entities}
                          </Typography>
                          <Button variant="outlined" size="small" color="primary">
                            View Details
                          </Button>
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnalysisPage; 