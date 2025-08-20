import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  Chip,
  CircularProgress,
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  IconButton,
  Tooltip,
  Paper,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  LinearProgress
} from '@mui/material';
import {
  Search,
  School,
  Article,
  Link as LinkIcon,
  ExpandMore,
  Download,
  Visibility,
  Star,
  TrendingUp,
  Science,
  Book,
  Description,
  OpenInNew,
  FilterList,
  Sort,
  Refresh
} from '@mui/icons-material';
import axios from 'axios';
import { motion } from 'framer-motion';

const LiteratureSearchPage = () => {
  const [searchTopic, setSearchTopic] = useState('');
  const [searchResults, setSearchResults] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedSource, setSelectedSource] = useState('all');
  const [maxResults, setMaxResults] = useState(10);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [paperDialogOpen, setPaperDialogOpen] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState('');

  const sources = [
    { id: 'all', name: 'All Sources', icon: <TrendingUp />, color: 'primary' },
    { id: 'google_scholar', name: 'Google Scholar', icon: <School />, color: 'success' },
    { id: 'arxiv', name: 'arXiv', icon: <Science />, color: 'info' },
    { id: 'pubmed', name: 'PubMed', icon: <Book />, color: 'warning' }
  ];

  const handleSearch = async () => {
    if (!searchTopic.trim()) {
      setError('Please enter a search topic');
      return;
    }

    setLoading(true);
    setError('');
    setLoadingStatus('Initializing search...');
    
    try {
      // Set loading status based on selected source
      if (selectedSource === 'all') {
        setTimeout(() => setLoadingStatus('Searching Google Scholar...'), 1000);
        setTimeout(() => setLoadingStatus('Scraping arXiv...'), 2000);
        setTimeout(() => setLoadingStatus('Finding papers on PubMed...'), 3000);
        setTimeout(() => setLoadingStatus('Processing results...'), 4000);
      } else if (selectedSource === 'google_scholar') {
        setTimeout(() => setLoadingStatus('Searching Google Scholar...'), 1000);
        setTimeout(() => setLoadingStatus('Processing results...'), 2000);
      } else if (selectedSource === 'arxiv') {
        setTimeout(() => setLoadingStatus('Scraping arXiv...'), 1000);
        setTimeout(() => setLoadingStatus('Processing results...'), 2000);
      } else if (selectedSource === 'pubmed') {
        setTimeout(() => setLoadingStatus('Finding papers on PubMed...'), 1000);
        setTimeout(() => setLoadingStatus('Processing results...'), 2000);
      }
      
      const response = await axios.post('https://web-production-d301.up.railway.app/search-papers', {
        topic: searchTopic,
        max_results: maxResults,
        sources: selectedSource === 'all' ? ['google_scholar', 'arxiv', 'pubmed'] : [selectedSource]
      });

      if (response.data.success) {
        setSearchResults(response.data.results);
        setLoadingStatus('Search completed successfully!');
        setTimeout(() => setLoadingStatus(''), 2000);
      } else {
        setError(response.data.error || 'Search failed');
        setLoadingStatus('');
      }
    } catch (err) {
      console.error('Search error:', err);
      setError('Failed to search papers. Please try again.');
      setLoadingStatus('');
    } finally {
      setLoading(false);
    }
  };

  const handlePaperClick = (paper) => {
    setSelectedPaper(paper);
    setPaperDialogOpen(true);
  };

  const getSourceIcon = (source) => {
    switch (source) {
      case 'google_scholar': return <School />;
      case 'arxiv': return <Science />;
      case 'pubmed': return <Book />;
      default: return <Article />;
    }
  };

  const getSourceColor = (source) => {
    switch (source) {
      case 'google_scholar': return 'success';
      case 'arxiv': return 'info';
      case 'pubmed': return 'warning';
      default: return 'default';
    }
  };

  const renderPaperCard = (paper, source) => (
    <motion.div
      key={`${source}-${paper.title}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card 
        sx={{ 
          mb: 2, 
          cursor: 'pointer',
          '&:hover': { 
            boxShadow: 4,
            transform: 'translateY(-2px)',
            transition: 'all 0.2s ease-in-out'
          }
        }}
        onClick={() => handlePaperClick(paper)}
      >
        <CardContent>
          <Box display="flex" alignItems="center" mb={1}>
            <Chip
              icon={getSourceIcon(source)}
              label={source.replace('_', ' ').toUpperCase()}
              color={getSourceColor(source)}
              size="small"
              sx={{ mr: 1 }}
            />
            {paper.citations && (
              <Chip
                icon={<Star />}
                label={paper.citations}
                variant="outlined"
                size="small"
                color="secondary"
              />
            )}
          </Box>
          
          <Typography variant="h6" component="h3" gutterBottom>
            {paper.title}
          </Typography>
          
          {paper.authors && (
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {paper.authors}
            </Typography>
          )}
          
          {paper.abstract && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              {paper.abstract.length > 200 
                ? `${paper.abstract.substring(0, 200)}...` 
                : paper.abstract
              }
            </Typography>
          )}
          
          {paper.arxiv_id && (
            <Typography variant="caption" color="text.secondary">
              arXiv: {paper.arxiv_id}
            </Typography>
          )}
        </CardContent>
        
        <CardActions>
          <Button 
            size="small" 
            startIcon={<Visibility />}
            onClick={(e) => {
              e.stopPropagation();
              if (paper.url) window.open(paper.url, '_blank');
            }}
          >
            View Paper
          </Button>
          {paper.pdf_url && (
            <Button 
              size="small" 
              startIcon={<Download />}
              onClick={(e) => {
                e.stopPropagation();
                window.open(paper.pdf_url, '_blank');
              }}
            >
              PDF
            </Button>
          )}
        </CardActions>
      </Card>
    </motion.div>
  );

  const renderSourceResults = (source, papers) => {
    if (!papers || papers.length === 0) return null;
    
    return (
      <Box key={source} sx={{ mb: 4 }}>
        <Box display="flex" alignItems="center" mb={2}>
          {getSourceIcon(source)}
          <Typography variant="h5" sx={{ ml: 1 }}>
            {source.replace('_', ' ').toUpperCase()}
          </Typography>
          <Chip 
            label={papers.length} 
            color="primary" 
            size="small" 
            sx={{ ml: 1 }}
          />
        </Box>
        
        <Grid container spacing={2}>
          {papers.map((paper, index) => (
            <Grid item xs={12} md={6} key={index}>
              {renderPaperCard(paper, source)}
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          🔬 Scientific Literature Search
        </Typography>
        
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 4 }}>
          Discover research papers across multiple academic sources using AI-powered search
        </Typography>
      </motion.div>

      {/* Search Interface */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Research Topic"
              placeholder="e.g., machine learning, quantum computing, climate change"
              value={searchTopic}
              onChange={(e) => setSearchTopic(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              variant="outlined"
              size="large"
            />
          </Grid>
          
          <Grid item xs={12} md={2}>
            <TextField
              fullWidth
              label="Max Results"
              type="number"
              value={maxResults}
              onChange={(e) => setMaxResults(Math.max(1, parseInt(e.target.value) || 1))}
              inputProps={{ min: 1, max: 50 }}
              variant="outlined"
            />
          </Grid>
          
          <Grid item xs={12} md={2}>
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={handleSearch}
              disabled={loading}
              startIcon={!loading ? <Search /> : null}
              sx={{ 
                height: 56,
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: loading ? 'none' : 'translateY(-1px)',
                  boxShadow: loading ? 'none' : 3
                },
                transition: 'all 0.2s ease-in-out'
              }}
            >
              {loading ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="body2">
                    {loadingStatus.includes('Google Scholar') ? 'Searching...' :
                     loadingStatus.includes('arXiv') ? 'Scraping...' :
                     loadingStatus.includes('Semantic Scholar') ? 'Finding...' :
                     loadingStatus.includes('Processing') ? 'Processing...' :
                     'Searching...'}
                  </Typography>
                </Box>
              ) : (
                'Search Papers'
              )}
            </Button>
          </Grid>
          
          <Grid item xs={12} md={2}>
            <Button
              fullWidth
              variant="outlined"
              size="large"
              onClick={() => {
                setSearchTopic('');
                setSearchResults({});
                setError('');
                setLoadingStatus('');
              }}
              startIcon={<Refresh />}
              sx={{ height: 56 }}
            >
              Clear
            </Button>
          </Grid>
        </Grid>

        {/* Loading Status Display */}
        {loadingStatus && (
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Typography 
              variant="body2" 
              color="primary" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: 1,
                mb: 1
              }}
            >
              <CircularProgress size={16} />
              {loadingStatus}
            </Typography>
            
            {/* Progress Bar */}
            <Box sx={{ width: '100%', maxWidth: 400, mx: 'auto' }}>
              <LinearProgress 
                variant="indeterminate" 
                sx={{ 
                  height: 4, 
                  borderRadius: 2,
                  backgroundColor: 'grey.200',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: 'primary.main'
                  }
                }} 
              />
            </Box>
            
            {/* Estimated Time */}
            <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
              ⏱️ Estimated time: 5-10 seconds
            </Typography>
          </Box>
        )}

        {/* Source Selection */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" gutterBottom>
            Select Sources:
          </Typography>
          <Box display="flex" gap={1} flexWrap="wrap">
            {sources.map((source) => (
              <Chip
                key={source.id}
                icon={source.icon}
                label={source.name}
                color={selectedSource === source.id ? source.color : 'default'}
                variant={selectedSource === source.id ? 'filled' : 'outlined'}
                onClick={() => setSelectedSource(source.id)}
                clickable
              />
            ))}
          </Box>
        </Box>
      </Paper>

      {/* Error Display */}
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {/* Search Results */}
      {Object.keys(searchResults).length > 0 && !loading && (
        <Box>
          {/* Summary Stats */}
          {searchResults.summary && (
            <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Search Summary
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                  <Typography variant="body2" color="text.secondary">
                    Total Papers Found
                  </Typography>
                  <Typography variant="h4" color="primary">
                    {searchResults.summary.total_papers_found}
                  </Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography variant="body2" color="text.secondary">
                    Sources Searched
                  </Typography>
                  <Typography variant="h4" color="success.main">
                    {searchResults.summary.sources_searched}
                  </Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography variant="body2" color="text.secondary">
                    Search Topic
                  </Typography>
                  <Typography variant="h6">
                    {searchResults.summary.search_topic}
                  </Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography variant="body2" color="text.secondary">
                    Search Time
                  </Typography>
                  <Typography variant="h6">
                    {new Date(searchResults.summary.timestamp * 1000).toLocaleTimeString()}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          )}

          {/* Results by Source */}
          <Tabs 
            value={activeTab} 
            onChange={(e, newValue) => setActiveTab(newValue)}
            sx={{ mb: 3 }}
          >
            <Tab label="All Results" />
            {Object.keys(searchResults).filter(key => key !== 'summary').map((source) => (
              <Tab 
                key={source} 
                label={source.replace('_', ' ').toUpperCase()} 
                icon={getSourceIcon(source)}
                iconPosition="start"
              />
            ))}
          </Tabs>

          {/* Tab Content */}
          {activeTab === 0 && (
            <Box>
              {Object.keys(searchResults).filter(key => key !== 'summary').map((source) => 
                renderSourceResults(source, searchResults[source])
              )}
            </Box>
          )}
          
          {Object.keys(searchResults).filter(key => key !== 'summary').map((source, index) => (
            <Box key={source} hidden={activeTab !== index + 1}>
              {renderSourceResults(source, searchResults[source])}
            </Box>
          ))}
        </Box>
      )}

      {/* Paper Details Dialog */}
      <Dialog 
        open={paperDialogOpen} 
        onClose={() => setPaperDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        {selectedPaper && (
          <>
            <DialogTitle>
              <Box display="flex" alignItems="center">
                {getSourceIcon(selectedPaper.source)}
                <Typography variant="h6" sx={{ ml: 1 }}>
                  Paper Details
                </Typography>
              </Box>
            </DialogTitle>
            <DialogContent>
              <Typography variant="h5" gutterBottom>
                {selectedPaper.title}
              </Typography>
              
              {selectedPaper.authors && (
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  <strong>Authors:</strong> {selectedPaper.authors}
                </Typography>
              )}
              
              {selectedPaper.abstract && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    <strong>Abstract:</strong>
                  </Typography>
                  <Typography variant="body2">
                    {selectedPaper.abstract}
                  </Typography>
                </Box>
              )}
              
              {selectedPaper.arxiv_id && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  <strong>arXiv ID:</strong> {selectedPaper.arxiv_id}
                </Typography>
              )}
              
              {selectedPaper.citations && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  <strong>Citations:</strong> {selectedPaper.citations}
                </Typography>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setPaperDialogOpen(false)}>
                Close
              </Button>
              {selectedPaper.url && (
                <Button 
                  variant="contained" 
                  startIcon={<OpenInNew />}
                  onClick={() => window.open(selectedPaper.url, '_blank')}
                >
                  View Paper
                </Button>
              )}
              {selectedPaper.pdf_url && (
                <Button 
                  variant="outlined" 
                  startIcon={<Download />}
                  onClick={() => window.open(selectedPaper.pdf_url, '_blank')}
                >
                  Download PDF
                </Button>
              )}
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Empty State */}
      {Object.keys(searchResults).length === 0 && !loading && !error && (
        <Box textAlign="center" sx={{ py: 8 }}>
          <Search sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Ready to Search
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Enter a research topic above to discover scientific papers from multiple academic sources.
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default LiteratureSearchPage;

