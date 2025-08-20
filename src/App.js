import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LegalAnalysisApp from './components/LegalAnalysisApp';
import AnalysisPage from './components/AnalysisPage';
import HelpPage from './components/HelpPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import Header from './components/Header';
import Footer from './components/Footer';
import KnowledgeGraphExplorer from './components/KnowledgeGraphExplorer.jsx';
import LiteratureSearchPage from './components/LiteratureSearchPage.jsx';
import CompareDocumentsPage from './components/CompareDocumentsPage.jsx';

// Create custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2E3B55',
      light: '#4A5568',
      dark: '#1A202C',
    },
    secondary: {
      main: '#E53E3E',
      light: '#FC8181',
      dark: '#C53030',
    },
    background: {
      default: '#F7FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2D3748',
      secondary: '#718096',
    },
    success: {
      main: '#38A169',
      light: '#68D391',
      dark: '#2F855A',
    },
    warning: {
      main: '#D69E2E',
      light: '#F6E05E',
      dark: '#B7791F',
    },
    error: {
      main: '#E53E3E',
      light: '#FC8181',
      dark: '#C53030',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 700,
      color: '#2D3748',
    },
    h5: {
      fontWeight: 600,
      color: '#2D3748',
    },
    h6: {
      fontWeight: 600,
      color: '#2D3748',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          fontWeight: 600,
          padding: '12px 24px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(0px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 4px 25px rgba(0, 0, 0, 0.08)',
          border: '1px solid #E2E8F0',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 4px 25px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#2D3748',
          boxShadow: '0 2px 15px rgba(0, 0, 0, 0.08)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 500,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            },
            '&.Mui-focused': {
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            },
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          backgroundColor: 'background.default'
        }}>
          <Header />
          <Box sx={{ flex: 1 }}>
                             <Routes>
                   <Route path="/" element={<HomePage />} />
                   <Route path="/upload" element={<LegalAnalysisApp />} />
                   <Route path="/analysis" element={<AnalysisPage />} />
                   <Route path="/literature-search" element={<LiteratureSearchPage />} />
                   <Route path="/knowledge-graph" element={<KnowledgeGraphExplorer />} />
                   <Route path="/compare" element={<CompareDocumentsPage />} />
                   <Route path="/help" element={<HelpPage />} />
                   <Route path="/terms" element={<TermsOfServicePage />} />
                   <Route path="/privacy" element={<PrivacyPolicyPage />} />
                 </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App; 