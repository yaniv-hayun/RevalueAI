import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import {
  Dashboard as DashboardIcon,
  Analytics as AnalyticsIcon,
  Security as SecurityIcon,
  Assessment as AssessmentIcon,
  TrendingUp as TrendingUpIcon,
  AccountBalance as AccountBalanceIcon,
  Settings as SettingsIcon,
  Help as HelpIcon,
  LightMode,
  DarkMode,
  Logout as LogoutIcon,
  AccountCircle,
  PlayArrow as ActionsIcon,
  Receipt as ChargebacksIcon,
  Apps as AppsIcon,
  CloudUpload as UploadIcon,
  Api as ApiIcon,
  Store as ShopifyIcon,
  Payment as StripeIcon,
  ShoppingCart as WooCommerceIcon,
} from '@mui/icons-material';
import Popover from '@mui/material/Popover';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { useTheme as useCustomTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import RevalueAILogo from './RevalueAILogo';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const theme = useTheme();
  const { mode, toggleTheme } = useCustomTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const [profileAnchorEl, setProfileAnchorEl] = React.useState<HTMLElement | null>(null);
  const [integrationAnchorEl, setIntegrationAnchorEl] = React.useState<HTMLElement | null>(null);
  const [imageError, setImageError] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleUserLogout = () => {
    logout();
    navigate('/login');
  };

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  const handleLogoutFromPopover = () => {
    handleProfileClose();
    handleUserLogout();
  };

  const handleIntegrationClick = (event: React.MouseEvent<HTMLElement>) => {
    setIntegrationAnchorEl(event.currentTarget);
  };

  const handleIntegrationClose = () => {
    setIntegrationAnchorEl(null);
  };

  const handleIntegrationSelect = (integration: string) => {
    console.log(`Selected integration: ${integration}`);
    handleIntegrationClose();
    // Here you can add navigation or other logic for each integration
  };

  const profileOpen = Boolean(profileAnchorEl);
  const integrationOpen = Boolean(integrationAnchorEl);

  const handleImageError = () => {
    setImageError(true);
  };

  // Reset image error when user changes
  React.useEffect(() => {
    setImageError(false);
  }, [user?.picture]);

  const mainMenuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'Analytics', icon: <AnalyticsIcon />, path: '/analytics' },
    { text: 'Actions', icon: <ActionsIcon />, path: '/actions' },
    { text: 'Chargebacks', icon: <ChargebacksIcon />, path: '/chargebacks' },
    // { text: 'Fraud Detection', icon: <SecurityIcon />, path: '/fraud-detection' },
    // { text: 'Reports', icon: <AssessmentIcon />, path: '/reports' },
  ];

  const integrationOptions = [
    { 
      name: 'Upload CSV', 
      icon: <UploadIcon />, 
      description: 'Upload transaction data via CSV file',
      action: 'upload-csv'
    },
    { 
      name: 'API Integration', 
      icon: <ApiIcon />, 
      description: 'Connect via REST API',
      action: 'api'
    },
    { 
      name: 'Shopify', 
      icon: <ShopifyIcon />, 
      description: 'Connect your Shopify store',
      action: 'shopify'
    },
    { 
      name: 'Stripe', 
      icon: <StripeIcon />, 
      description: 'Connect your Stripe account',
      action: 'stripe'
    },
    { 
      name: 'WooCommerce', 
      icon: <WooCommerceIcon />, 
      description: 'Connect your WooCommerce store',
      action: 'woocommerce'
    },
  ];

  // const secondaryMenuItems = [
  //   { text: 'Trends', icon: <TrendingUpIcon />, path: '/trends' },
  //   { text: 'Transactions', icon: <AccountBalanceIcon />, path: '/transactions' },
  //   { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  //   { text: 'Help', icon: <HelpIcon />, path: '/help' },
  // ];

  return (
    <Box sx={{ display: 'flex', bgcolor: 'background.default', minHeight: '100vh' }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <RevalueAILogo size="small" showTagline={false} variant="horizontal" />
            {/* <Typography variant="h6" noWrap component="div" sx={{ ml: 2 }}>
              Fraud Advisory Dashboard
            </Typography> */}
          </Box>
          <IconButton
            onClick={handleIntegrationClick}
            color="inherit"
            aria-label="integration options"
            sx={{ mr: 1 }}
          >
            <AppsIcon />
          </IconButton>
          <IconButton
            onClick={toggleTheme}
            color="inherit"
            aria-label="toggle theme"
            sx={{ mr: 2 }}
          >
            {mode === 'light' ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
 
         
        <Divider />
        <List>
          {mainMenuItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                selected={location.pathname === item.path}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <Divider />
        <List>
          {secondaryMenuItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                selected={location.pathname === item.path}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        
        {/* User Profile Section */}
        <Box sx={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          right: 0, 
          p: 2,
          borderTop: 1,
          borderColor: 'divider',
          bgcolor: 'background.paper'
        }}>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: open ? 'flex-start' : 'center',
              gap: open ? 2 : 0,
              cursor: 'pointer',
              borderRadius: 1,
              p: 1,
              width: '100%',
              '&:hover': {
                backgroundColor: 'action.hover',
              },
              transition: 'background-color 0.2s'
            }}
            onClick={handleProfileClick}
          >
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
              {user?.picture && !imageError ? (
                <img 
                  src={user.picture} 
                  alt={user.name} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                  onError={handleImageError}
                />
              ) : (
                <Typography variant="caption" sx={{ color: 'white', fontWeight: 600 }}>
                  {user?.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase() : 'U'}
                </Typography>
              )}
            </Avatar>
            {open && (
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="body2" noWrap sx={{ fontWeight: 'medium' }}>
                  {user?.name}
                </Typography>
                <Typography variant="caption" color="text.secondary" noWrap>
                  {user?.email}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        {/* Profile Popover */}
        <Popover
          open={profileOpen}
          anchorEl={profileAnchorEl}
          onClose={handleProfileClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          sx={{
            '& .MuiPopover-paper': {
              minWidth: 280,
              borderRadius: 2,
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            }
          }}
        >
          <Box sx={{ p: 2 }}>
            {/* Profile Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, pb: 2, borderBottom: 1, borderColor: 'divider' }}>
              <Avatar sx={{ width: 48, height: 48, bgcolor: 'primary.main' }}>
                {user?.picture && !imageError ? (
                  <img 
                    src={user.picture} 
                    alt={user.name} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                    onError={handleImageError}
                  />
                ) : (
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                    {user?.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase() : 'U'}
                  </Typography>
                )}
              </Avatar>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {user?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user?.email}
                </Typography>
              </Box>
            </Box>

            {/* Profile Actions */}
            <List sx={{ p: 0 }}>
              <ListItem disablePadding>
                <ListItemButton 
                  onClick={handleLogoutFromPopover}
                  sx={{ 
                    borderRadius: 1,
                    '&:hover': {
                      backgroundColor: 'error.light',
                      color: 'error.contrastText',
                    }
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Logout" 
                    primaryTypographyProps={{ 
                      fontWeight: 500 
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Popover>

        {/* Integration Popover */}
        <Popover
          open={integrationOpen}
          anchorEl={integrationAnchorEl}
          onClose={handleIntegrationClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          sx={{
            '& .MuiPopover-paper': {
              minWidth: 320,
              borderRadius: 2,
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            }
          }}
        >
          <Box sx={{ p: 2 }}>
            {/* Integration Header */}
            <Box sx={{ mb: 2, pb: 2, borderBottom: 1, borderColor: 'divider' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                Choose Integration Method
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Select how you want to integrate with RevalueAI
              </Typography>
            </Box>

            {/* Integration Options */}
            <List sx={{ p: 0 }}>
              {integrationOptions.map((option) => (
                <ListItem key={option.action} disablePadding sx={{ mb: 1 }}>
                  <ListItemButton 
                    onClick={() => handleIntegrationSelect(option.action)}
                    sx={{ 
                      borderRadius: 1,
                      p: 2,
                      '&:hover': {
                        backgroundColor: 'primary.light',
                        color: 'primary.contrastText',
                        '& .MuiListItemIcon-root': {
                          color: 'primary.contrastText',
                        }
                      }
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 48, color: 'primary.main' }}>
                      {option.icon}
                    </ListItemIcon>
                    <Box sx={{ flex: 1 }}>
                      <ListItemText 
                        primary={option.name}
                        secondary={option.description}
                        primaryTypographyProps={{ 
                          fontWeight: 600,
                          fontSize: '0.95rem'
                        }}
                        secondaryTypographyProps={{
                          fontSize: '0.8rem'
                        }}
                      />
                    </Box>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Popover>
      </Drawer>
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          bgcolor: 'background.default',
          minHeight: '100vh',
          color: 'text.primary'
        }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default Sidebar;
