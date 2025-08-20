import React, { useState, useEffect } from 'react';
import {
  Container, Typography, Box, Button, Card, CardContent, Grid, Chip,
  Paper, IconButton, Fade, Zoom, Slide
} from '@mui/material';
import {
  Science, School, Article, TrendingUp, Speed, Security, Analytics,
  CloudDownload, Search, AutoAwesome, Rocket, Psychology, DataUsage,
  BrokenImage, Visibility, OpenInNew, PlayArrow, ArrowForward
} from '@mui/icons-material';
import { motion, useScroll, useTransform, useInView as useInViewFramer } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated, useTrail } from '@react-spring/web';
import Tilt from 'react-parallax-tilt';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Glitch effect for title
  const [glitchActive, setGlitchActive] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Features data
  const features = [
    {
      icon: <Science />,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze documents with 95+ accuracy",
      color: "#1976d2",
      delay: 0
    },
    {
      icon: <Search />,
      title: "Multi-Source Search",
      description: "Search across Google Scholar, arXiv, and Semantic Scholar simultaneously",
      color: "#388e3c",
      delay: 0.1
    },
    {
      icon: <Speed />,
      title: "Lightning Fast",
      description: "Concurrent processing delivers results in seconds, not minutes",
      color: "#f57c00",
      delay: 0.2
    },
    {
      icon: <Security />,
      title: "Enterprise Security",
      description: "Bank-level encryption and privacy protection for your documents",
      color: "#d32f2f",
      delay: 0.3
    },
    {
      icon: <Analytics />,
      title: "Smart Analytics",
      description: "Comprehensive insights and visualizations from your research data",
      color: "#7b1fa2",
      delay: 0.4
    },
    {
      icon: <Psychology />,
      title: "Knowledge Graphs",
      description: "Interactive knowledge graphs reveal hidden connections",
      color: "#0097a7",
      delay: 0.5
    }
  ];

  // Statistics data
  const stats = [
    { number: "10,000+", label: "Documents Processed", icon: <Article /> },
    { number: "99.2%", label: "Accuracy Rate", icon: <TrendingUp /> },
    { number: "3", label: "Academic Sources", icon: <School /> },
    { number: "<2s", label: "Average Response", icon: <Speed /> }
  ];

  // Animated counter hook
  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
      threshold: 0.3,
      triggerOnce: true
    });

    useEffect(() => {
      if (inView) {
        let startTime;
        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = (currentTime - startTime) / duration;
          
          if (progress < 1) {
            setCount(Math.floor(end * progress));
            requestAnimationFrame(animate);
          } else {
            setCount(end);
          }
        };
        requestAnimationFrame(animate);
      }
    }, [inView, end, duration]);

    return [count, ref];
  };

  // Trail animation for features
  const trail = useTrail(features.length, {
    from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
    to: { opacity: isLoaded ? 1 : 0, transform: 'translate3d(0,0px,0)' },
    config: { mass: 1, tension: 280, friction: 60 }
  });

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 opacity-10"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            filter: 'blur(40px)'
          }}
        />
      </motion.div>
      
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 opacity-10"
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            right: '15%',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            filter: 'blur(60px)'
          }}
        />
      </motion.div>

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Box sx={{ pt: 12, pb: 8, textAlign: 'center' }}>
            {/* Glitch Title Effect */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3rem', md: '4.5rem' },
                  fontWeight: 800,
                  color: 'white',
                  mb: 2,
                  textShadow: '0 0 20px rgba(255,255,255,0.5)',
                  position: 'relative',
                  '&::before': glitchActive ? {
                    content: '"Research Document Analysis System"',
                    position: 'absolute',
                    top: 0,
                    left: 2,
                    color: '#ff0000',
                    background: 'transparent',
                    clipPath: 'inset(0 0 0 0)',
                    animation: 'glitch-1 0.2s infinite'
                  } : {},
                  '&::after': glitchActive ? {
                    content: '"Research Document Analysis System"',
                    position: 'absolute',
                    top: 0,
                    left: -2,
                    color: '#00ff00',
                    background: 'transparent',
                    clipPath: 'inset(0 0 0 0)',
                    animation: 'glitch-2 0.2s infinite'
                  } : {},
                  '@keyframes glitch-1': {
                    '0%, 100%': { clipPath: 'inset(0 0 0 0)' },
                    '20%': { clipPath: 'inset(20px 0 30px 0)' },
                    '40%': { clipPath: 'inset(54px 0 12px 0)' },
                    '60%': { clipPath: 'inset(37px 0 45px 0)' },
                    '80%': { clipPath: 'inset(12px 0 67px 0)' }
                  },
                  '@keyframes glitch-2': {
                    '0%, 100%': { clipPath: 'inset(0 0 0 0)' },
                    '20%': { clipPath: 'inset(67px 0 12px 0)' },
                    '40%': { clipPath: 'inset(30px 0 54px 0)' },
                    '60%': { clipPath: 'inset(45px 0 20px 0)' },
                    '80%': { clipPath: 'inset(12px 0 37px 0)' }
                  }
                }}
              >
                Research Document Analysis System
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h4"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  mb: 4,
                  fontWeight: 300,
                  maxWidth: 800,
                  mx: 'auto'
                }}
              >
                AI-Powered Research Platform for Academic Literature Discovery & Analysis
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 6 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Rocket />}
                  onClick={() => navigate('/analysis')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(255, 105, 135, .4)',
                    },
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  Start Analysis
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Search />}
                  onClick={() => navigate('/literature-search')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  Search Papers
                </Button>
              </Box>
            </motion.div>

            {/* Feature Chips */}
            <motion.div variants={itemVariants}>
              <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
                {['AI-Powered', 'Multi-Source', 'Real-time', 'Secure'].map((chip, index) => (
                  <Chip
                    key={chip}
                    label={chip}
                    sx={{
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.3)',
                        transform: 'scale(1.05)',
                      },
                      transition: 'all 0.3s ease-in-out'
                    }}
                  />
                ))}
              </Box>
            </motion.div>
          </Box>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Paper
            elevation={10}
            sx={{
              p: 4,
              mb: 8,
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: 4,
              border: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={stat.label}>
                  <Box sx={{ textAlign: 'center' }}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconButton
                        sx={{
                          mb: 2,
                          backgroundColor: 'primary.main',
                          color: 'white',
                          '&:hover': { backgroundColor: 'primary.dark' }
                        }}
                      >
                        {stat.icon}
                      </IconButton>
                    </motion.div>
                    <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
                      {stat.number}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </motion.div>

        {/* Features Section */}
        <Box sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                color: 'white',
                mb: 6,
                fontWeight: 700
              }}
            >
              Powerful Features
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {trail.map((style, index) => {
              const feature = features[index];
              return (
                <Grid item xs={12} md={6} lg={4} key={feature.title}>
                  <animated.div style={style}>
                    <Tilt
                      tiltMaxAngleX={10}
                      tiltMaxAngleY={10}
                      perspective={1000}
                      scale={1.02}
                      transitionSpeed={2000}
                      gyroscope={true}
                    >
                      <Card
                        sx={{
                          height: '100%',
                          background: 'rgba(255,255,255,0.95)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255,255,255,0.2)',
                          borderRadius: 3,
                          transition: 'all 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                          }
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box
                            sx={{
                              display: 'inline-flex',
                              p: 2,
                              borderRadius: 2,
                              backgroundColor: feature.color,
                              color: 'white',
                              mb: 2
                            }}
                          >
                            {feature.icon}
                          </Box>
                          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                            {feature.title}
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            {feature.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Tilt>
                  </animated.div>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Paper
            elevation={10}
            sx={{
              p: 6,
              mb: 8,
              textAlign: 'center',
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              color: 'white',
              borderRadius: 4
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Ready to Transform Your Research?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Join thousands of researchers using our AI-powered platform
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              onClick={() => navigate('/analysis')}
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                backgroundColor: 'white',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.3s ease-in-out'
              }}
            >
              Get Started Now
            </Button>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HomePage;