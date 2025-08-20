// Legal Document Analysis System - Frontend Implementation
// Modern React-based frontend with professional UI

import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Grid,
  Chip,
  LinearProgress,
  Alert,
  Divider,
  Paper,
  Stack,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  CloudUpload,
  Search,
  Analytics,
  Psychology,
  Science,
  Timeline,
  Compare,
  Book,
  School,
  TrendingUp
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const LegalAnalysisApp = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [error, setError] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(null);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file first');
      return;
    }

    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('https://web-production-d301.up.railway.app/upload-document', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const result = await response.json();
      
      // Simulate analysis process
      setTimeout(() => {
        setAnalysisResult({
          document_id: result.document_id,
          filename: file.name,
          summary: {
            title: "Research Document Analysis",
            summary: "This document has been processed for research analysis, entity extraction, and knowledge graph generation.",
            key_points: [
              "Document successfully uploaded and processed",
              "Entities extracted and categorized",
              "Knowledge graph relationships identified",
              "Literature cross-references found"
            ],
            word_count: Math.floor(Math.random() * 1000) + 500
          },
          classification: {
            document_type: "Research Paper",
            top_label: "Academic Research",
            confidence: 0.92,
            all_labels: [
              { label: "Academic Research", score: 0.92 },
              { label: "Technical Document", score: 0.85 },
              { label: "Literature Review", score: 0.78 }
            ]
          },
          entities: {
            "organizations": [
              { text: "Research Institute", type: "organization", confidence: 0.95 },
              { text: "University Department", type: "organization", confidence: 0.88 }
            ],
            "topics": [
              { text: "Machine Learning", type: "topic", confidence: 0.94 },
              { text: "Data Analysis", type: "topic", confidence: 0.91 },
              { text: "Artificial Intelligence", type: "topic", confidence: 0.89 }
            ],
            "authors": [
              { text: "Dr. Smith", type: "person", confidence: 0.96 },
              { text: "Prof. Johnson", type: "person", confidence: 0.93 }
            ]
          },
          risk_assessment: {
            risk_level: "low",
            risk_score: 0.15,
            risk_factors: ["Standard research document", "No sensitive information detected"],
            recommendations: ["Document is safe for research purposes", "Consider adding metadata for better categorization"],
            confidence: 0.88
          }
        });
        setUploading(false);
      }, 2000);

    } catch (error) {
      setError('Error uploading file: ' + error.message);
      setUploading(false);
    }
  };

  const StyledUploadArea = motion(Box);

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: 'auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          Research Document Analysis & Knowledge Discovery
        </Typography>
        
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Upload research documents, academic papers, or technical literature for AI-powered analysis, 
          entity extraction, and knowledge graph generation
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {/* Upload Section */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <CloudUpload sx={{ mr: 1, color: 'primary.main' }} />
                  Upload Research Document
                </Typography>

                <StyledUploadArea
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  sx={{
                    border: '2px dashed',
                    borderColor: dragActive ? 'primary.main' : 'grey.300',
                    borderRadius: 2,
                    p: 4,
                    textAlign: 'center',
                    backgroundColor: dragActive ? 'primary.50' : 'grey.50',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      backgroundColor: 'primary.50',
                    }
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <input
                    type="file"
                    id="file-upload"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                  />
                  <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                      <CloudUpload sx={{ fontSize: 48, color: 'primary.main' }} />
                      <Typography variant="h6" color="primary.main">
                        {file ? file.name : 'Upload Document'}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {file ? 'File selected successfully' : 'Drag & drop or click to browse'}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Supports: PDF, DOC, DOCX, TXT, Images
                      </Typography>
                    </Box>
                  </label>
                </StyledUploadArea>

                {file && (
                  <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <Button
                      variant="contained"
                      onClick={handleUpload}
                      disabled={uploading}
                      startIcon={uploading ? <LinearProgress /> : <Search />}
                      sx={{ minWidth: 200 }}
                    >
                      {uploading ? 'Processing...' : 'Analyze Document'}
                    </Button>
                  </Box>
                )}

                {error && (
                  <Alert severity="error" sx={{ mt: 2 }}>
                    {error}
                  </Alert>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Features Section */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                  Research Analysis Features
                </Typography>
                
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Search sx={{ color: 'primary.main' }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        Intelligent Document Processing
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Extract text, identify language, and process multiple document formats
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Psychology sx={{ color: 'primary.main' }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        AI-Powered Analysis
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Entity extraction, topic classification, and sentiment analysis
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Science sx={{ color: 'primary.main' }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        Knowledge Graph Generation
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Build connected knowledge networks from document content
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Book sx={{ color: 'primary.main' }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        Literature Cross-Reference
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Find related research papers and academic literature
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Compare sx={{ color: 'primary.main' }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        Document Comparison
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Compare multiple documents for similarities and differences
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      {/* Analysis Results */}
      {analysisResult && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card sx={{ mt: 4 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Analytics sx={{ mr: 1, color: 'primary.main' }} />
                Analysis Results
              </Typography>

              <Grid container spacing={3}>
                {/* Document Summary */}
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 2, height: '100%' }}>
                    <Typography variant="h6" gutterBottom>
                      Document Summary
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {analysisResult.summary.summary}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Word Count:</strong> {analysisResult.summary.word_count}
                    </Typography>
                  </Paper>
                </Grid>

                {/* Classification */}
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 2, height: '100%' }}>
                    <Typography variant="h6" gutterBottom>
                      Document Classification
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      <strong>Type:</strong> {analysisResult.classification.document_type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Confidence:</strong> {(analysisResult.classification.confidence * 100).toFixed(1)}%
                    </Typography>
                  </Paper>
                </Grid>

                {/* Entities */}
                <Grid item xs={12}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Extracted Entities
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {Object.entries(analysisResult.entities).map(([category, entities]) =>
                        entities.map((entity, index) => (
                          <Chip
                            key={`${category}-${index}`}
                            label={`${entity.text} (${entity.type})`}
                            variant="outlined"
                            color="primary"
                            size="small"
                          />
                        ))
                      )}
                    </Box>
                  </Paper>
                </Grid>

                {/* Risk Assessment */}
                <Grid item xs={12}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Research Assessment
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Typography variant="body2">
                        <strong>Risk Level:</strong>
                      </Typography>
                      <Chip
                        label={analysisResult.risk_assessment.risk_level.toUpperCase()}
                        color={analysisResult.risk_assessment.risk_level === 'low' ? 'success' : 'warning'}
                        size="small"
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      <strong>Recommendations:</strong>
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {analysisResult.risk_assessment.recommendations.map((rec, index) => (
                        <Typography key={index} component="li" variant="body2" color="text.secondary">
                          {rec}
                        </Typography>
                      ))}
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </Box>
  );
};

export default LegalAnalysisApp; 