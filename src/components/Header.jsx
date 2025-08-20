import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Search,
  Menu as MenuIcon,
  AccountCircle,
  Notifications,
  Help,
  Settings
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMobileMenuAnchor(null);
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMenuAnchor);

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMenuAnchor}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Home
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/upload" style={{ textDecoration: 'none', color: 'inherit' }}>
          Document Upload
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/analysis" style={{ textDecoration: 'none', color: 'inherit' }}>
          Analysis
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/literature-search" style={{ textDecoration: 'none', color: 'inherit' }}>
          Literature Search
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/knowledge-graph" style={{ textDecoration: 'none', color: 'inherit' }}>
          Knowledge Graph
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/compare" style={{ textDecoration: 'none', color: 'inherit' }}>
          Compare
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/help" style={{ textDecoration: 'none', color: 'inherit' }}>
          Help
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
    </Menu>
  );

  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{ 
        backgroundColor: 'white',
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo and Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Search sx={{ mr: 1, color: 'primary.main' }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ 
              display: { xs: 'none', sm: 'block' },
              color: 'primary.main',
              fontWeight: 600
            }}
          >
            ResearchDoc AI
          </Typography>
          <Chip 
            label="Research" 
            size="small" 
            color="secondary" 
            sx={{ ml: 1, height: 20 }}
          />
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              component={Link}
              to="/"
              color="inherit"
              sx={{ 
                color: 'text.primary',
                fontWeight: location.pathname === '/' ? 600 : 400
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/upload"
              color="inherit"
              sx={{ 
                color: 'text.primary',
                fontWeight: location.pathname === '/upload' ? 600 : 400
              }}
            >
              Upload
            </Button>
            <Button
              component={Link}
              to="/analysis"
              color="inherit"
              sx={{ 
                color: 'text.primary',
                fontWeight: location.pathname === '/analysis' ? 600 : 400
              }}
            >
              Analysis
            </Button>
            <Button
              component={Link}
              to="/literature-search"
              color="inherit"
              sx={{ 
                color: 'text.primary',
                fontWeight: location.pathname === '/literature-search' ? 600 : 400
              }}
            >
              Literature
            </Button>
            <Button
              component={Link}
              to="/knowledge-graph"
              color="inherit"
              sx={{ 
                color: 'text.primary',
                fontWeight: location.pathname === '/knowledge-graph' ? 600 : 400
              }}
            >
              Knowledge
            </Button>
            <Button
              component={Link}
              to="/compare"
              color="inherit"
              sx={{ 
                color: 'text.primary',
                fontWeight: location.pathname === '/compare' ? 600 : 400
              }}
            >
              Compare
            </Button>
            <Button
              component={Link}
              to="/help"
              color="inherit"
              sx={{ 
                color: 'text.primary',
                fontWeight: location.pathname === '/help' ? 600 : 400
              }}
            >
              Help
            </Button>
          </Box>
        )}

        {/* Right Side Actions */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Notifications */}
          <IconButton
            size="large"
            aria-label="show notifications"
            color="inherit"
            sx={{ color: 'text.secondary' }}
          >
            <Notifications />
          </IconButton>

          {/* Settings */}
          <IconButton
            size="large"
            aria-label="show settings"
            color="inherit"
            sx={{ color: 'text.secondary' }}
          >
            <Settings />
          </IconButton>

          {/* Profile Menu */}
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            sx={{ color: 'text.secondary' }}
          >
            <AccountCircle />
          </IconButton>

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              sx={{ color: 'text.secondary' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
      {renderMenu}
      {renderMobileMenu}
    </AppBar>
  );
};

export default Header; 