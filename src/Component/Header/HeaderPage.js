import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { Link } from 'react-router-dom';

import HistoryIcon from '@mui/icons-material/History';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LogoutIcon from '@mui/icons-material/Logout';


function ResponsiveAppBar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
 



  return (
    // <AppBar position="static">
    //   <Container maxWidth="xl">
    //     <Toolbar disableGutters>
    //       <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
    //       <Typography
    //         variant="h6"
    //         noWrap
    //         component="a"
    //         href="/"
    //         sx={{
    //           mr: 2,
    //           display: { xs: 'none', md: 'flex' },
    //           fontFamily: 'monospace',
    //           fontWeight: 700,
    //           letterSpacing: '.3rem',
    //           color: 'inherit',
    //           textDecoration: 'none',
    //         }}
    //       >
    //         LOGO
    //       </Typography>

    //       <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
    //         <IconButton
    //           size="large"
    //           aria-label="account of current user"
    //           aria-controls="menu-appbar"
    //           aria-haspopup="true"
    //           onClick={handleOpenNavMenu}
    //           color="inherit"
    //         >
    //           <MenuIcon />
    //         </IconButton>
    //         <Menu
    //           id="menu-appbar"
    //           anchorEl={anchorElNav}
    //           anchorOrigin={{
    //             vertical: 'bottom',
    //             horizontal: 'left',
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: 'top',
    //             horizontal: 'left',
    //           }}
    //           open={Boolean(anchorElNav)}
    //           onClose={handleCloseNavMenu}
    //           sx={{
    //             display: { xs: 'block', md: 'none' },
    //           }}
    //         >
    //           {pages.map((page) => (
    //             <MenuItem key={page} onClick={handleCloseNavMenu}>
    //               <Typography textAlign="center">{page}</Typography>
    //             </MenuItem>
    //           ))}
    //         </Menu>
    //       </Box>
    //       <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
    //       <Typography
    //         variant="h5"
    //         noWrap
    //         component="a"
    //         href=""
    //         sx={{
    //           mr: 2,
    //           display: { xs: 'flex', md: 'none' },
    //           flexGrow: 1,
    //           fontFamily: 'monospace',
    //           fontWeight: 700,
    //           letterSpacing: '.3rem',
    //           color: 'inherit',
    //           textDecoration: 'none',
    //         }}
    //       >
    //         LOGO
    //       </Typography>
    //       <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    //         {pages.map((page) => (
    //           <Button
    //             key={page}
    //             onClick={handleCloseNavMenu}
    //             sx={{ my: 2, color: 'white', display: 'block' }}
    //           >
    //             {page}
    //           </Button>
    //         ))}
    //       </Box>

    //       <Box sx={{ flexGrow: 0 }}>
    //       <div className="div-nav-iconmenu"></div>
    //         <Tooltip title="Open settings">
    //           <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
    //             <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
    //           </IconButton>
    //         </Tooltip>
           
    //             <Menu
    //             sx={{ mt: '45px' }}
    //             id="menu-appbar"
    //             anchorEl={anchorElUser}
    //             anchorOrigin={{
    //                 vertical: 'top',
    //                 horizontal: 'right',
    //             }}
    //             keepMounted
    //             transformOrigin={{
    //                 vertical: 'top',
    //                 horizontal: 'right',
    //             }}
    //             open={Boolean(anchorElUser)}
    //             onClose={handleCloseUserMenu}
    //             >
    //             {settings.map((setting) => (
                   
    //                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
    //                 <div className='div-nav-menu'>   
    //                   <Typography textAlign="center">{setting}</Typography>
    //                 </div>  
    //                 </MenuItem>
                     
    //             ))}
                
    //             </Menu>
            
    //       </Box>
    //     </Toolbar>
    //   </Container>
    // </AppBar>
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    {/* <MenuIcon /> */}
                    <img src='../logo.png' alt='logo' width="170px" height="150px"/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                   <span className='spanNav-bar'>
                    <ul>
                      
                        <li>
                          <Link to='/'>Home</Link>
                        </li>
                        <li>
                          <Link to='/'>About Us</Link>
                        </li>
                        <li>
                          <Link to='/'>Video</Link>
                        </li>
                    </ul>
                   </span>
                </Typography>
                {/* {auth && (
                    <div className='div-Menu'>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 0 }}
                        >
                            <MenuIcon />
                        </IconButton>
                      
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <span className='span-Nav-Menu'>
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                               </span>
                            </Menu>
                       
                    </div>
                )} */}
               <span  className='div-Navmenu'>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
          <spna className="span-signIn">Sign In &nbsp;</spna><AccountCircle />
          &nbsp;&nbsp;&nbsp;<IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
            </Button>
            </span>   
                </Toolbar>
            </AppBar>
        </Box>
           
        <Menu
            id="basic-menu Nav-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            
            }}
        >
            <MenuItem onClick={handleClose}>Language English</MenuItem>
            <MenuItem onClick={handleClose}>Countery/Region</MenuItem>
            <MenuItem onClick={handleClose}>Location</MenuItem>
            <MenuItem onClick={handleClose}>Voice Seachh</MenuItem>
            <MenuItem onClick={handleClose}>More</MenuItem>
            <MenuItem onClick={handleClose}>Safe Search</MenuItem>
            <MenuItem onClick={handleClose}><HistoryIcon/> Search History</MenuItem>
            <MenuItem onClick={handleClose}>My Bing</MenuItem>
            <MenuItem onClick={handleClose}><PrivacyTipIcon/>Privacy</MenuItem>
            <MenuItem onClick={handleClose}><FeedbackIcon/>Feedback</MenuItem>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}><SettingsApplicationsIcon/>Setting</MenuItem>
            <MenuItem onClick={handleClose}><LogoutIcon/>Logout</MenuItem>
        </Menu>
        
    </div>
  );
}
export default ResponsiveAppBar;