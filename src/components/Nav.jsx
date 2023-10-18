import * as React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, CssBaseline, Divider, IconButton, List, ListItem, ListItemButton, ListItemText, 
    Toolbar, Typography, Button, Drawer } from '@mui/material';

 
    const drawerWidth = 240;
    const navItems = ['List of Books', 'Detail'];
  
    function DrawerAppBar(props) {
      const { window } = props;
      const [mobileOpen, setMobileOpen] = React.useState(false);
      const naviget = useNavigate();
    
      const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
      };
    
      const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography onClick ={() => naviget("/")}variant="h6" sx={{ my: 2 }}>
          Book Finder Objective
          </Typography>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    
      const container = window !== undefined ? () => window().document.body : undefined;
    
      return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar component="nav">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                onClick={()=> naviget("/")}
              >
                Book Finder Objective
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                  <Button onClick={()=> naviget(item.path)} key={item.naviget} sx={{ color: '#fff' }}>
                    {item.naviget}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, 
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {drawer}
            </Drawer>
          </nav>

        </Box>
      );
    }
    
    DrawerAppBar.propTypes = {

      window: PropTypes.func,
    };
    
    export default DrawerAppBar;    