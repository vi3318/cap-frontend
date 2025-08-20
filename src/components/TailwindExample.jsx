import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const TailwindExample = () => {
  return (
    <div className="min-h-screen gradient-bg p-8">
      {/* Tailwind-only section */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-primary-800 mb-4">
            Hybrid Approach: Material-UI + Tailwind
          </h1>
          <p className="text-lg text-primary-600">
            Best of both worlds - Material-UI components with Tailwind utilities
          </p>
        </motion.div>

        {/* Grid with Tailwind classes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Tailwind-only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-hover bg-white rounded-2xl p-6 shadow-lg border border-primary-200"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                <span className="text-primary-600 text-xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-800">Tailwind Only</h3>
            </div>
            <p className="text-primary-600 mb-4">
              Pure Tailwind CSS with utility classes for maximum flexibility.
            </p>
            <button className="btn-primary w-full">
              Tailwind Button
            </button>
          </motion.div>

          {/* Card 2: Material-UI only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-hover"
          >
            <Box sx={{ 
              bgcolor: 'background.paper', 
              borderRadius: 3, 
              p: 3, 
              height: '100%',
              border: '1px solid',
              borderColor: 'divider'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ 
                  width: 48, 
                  height: 48, 
                  bgcolor: 'primary.100', 
                  borderRadius: 2, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  mr: 2 
                }}>
                  <span style={{ fontSize: 20 }}>⚛️</span>
                </Box>
                <Typography variant="h6" fontWeight="bold">
                  Material-UI Only
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Pure Material-UI components with sx prop styling.
              </Typography>
              <Button variant="contained" fullWidth>
                Material Button
              </Button>
            </Box>
          </motion.div>

          {/* Card 3: Hybrid approach */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-hover bg-white rounded-2xl p-6 shadow-lg border border-primary-200"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-800">Hybrid Approach</h3>
            </div>
            <p className="text-primary-600 mb-4">
              Material-UI components enhanced with Tailwind utilities.
            </p>
            <Button 
              variant="contained" 
              fullWidth
              className="!bg-primary-600 hover:!bg-primary-700 !text-white !font-semibold !py-3 !px-6 !rounded-xl !transition-all !duration-300 hover:!scale-105 hover:!shadow-lg"
            >
              Hybrid Button
            </Button>
          </motion.div>
        </div>

        {/* Benefits section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 glass-effect rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-primary-800 mb-6 text-center">
            Benefits of Hybrid Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-primary-700">Material-UI's pre-built components</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-primary-700">Tailwind's utility-first styling</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-primary-700">Better performance optimization</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-primary-700">Flexible customization</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-primary-700">Consistent design system</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-primary-700">Rapid prototyping</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TailwindExample; 