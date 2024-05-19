// React
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Libs
import { Stack, Avatar, Drawer, IconButton, List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';

// Assets
import ImgLogo from '../../assets/logoFPFBranco.png';
import ImgLogoMobile from '../../assets/logoFPFMobileBranco.png';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Styles
import {
  ContainerHeader,
  ContainerMenuLogo,
  ContainerLogo,
  ContainerLogoMobile,
  TitleHeader,
  ContainerMenuList,
} from './styles';

export default function Header() {
  const navigate = useNavigate();
  const [userAvatar] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogout = () => {
    navigate('/');
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const drawerContent = (
    <ContainerMenuList>
      <List>
        <ListItem sx={{ cursor: 'pointer' }} onClick={() => console.log('Opção menu 1')}>
          <ListItemText primary="Opcão menu 1" />
        </ListItem>
        <ListItem sx={{ cursor: 'pointer' }} onClick={() => console.log('Opção menu 2')}>
          <ListItemText primary="Opcão menu 2" />
        </ListItem>
        <ListItem sx={{ cursor: 'pointer' }} onClick={() => console.log('Opção menu 3')}>
          <ListItemText primary="Opcão menu 3" />
        </ListItem>
      </List>
    </ContainerMenuList>
  );

  return (
    <ContainerHeader>
      <ContainerMenuLogo containerWidth={{ xs: 20 }}>
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon sx={{ color: '#FFFFFF', fontSize: 50 }} />
        </IconButton>
        <ContainerLogo
          src={ImgLogo}
          alt='Federação Paulista de Futebol - Esse é o meu jogo'
          size={{ xs: 60, md: 70, lg: 70 }}
          display={{ xs: 'none' }}
        />
        <TitleHeader fontSize={{ xs: 10, sm: 14, md: 16 }} display={{ xs: 'none' }}>
          Federação Paulista de Futebol
        </TitleHeader>
      </ContainerMenuLogo>
      <ContainerLogoMobile
        src={ImgLogoMobile}
        alt='Federação Paulista de Futebol - Esse é o meu jogo'
        size={{ xs: 60, sm: 80 }}
        display={{ xs: 'flex' }}
      />
      <Stack direction='row' sx={{ marginRight: 2 }}>
        <IconButton onClick={handleMenuClick}>
          {userAvatar ? (
            <Avatar alt='User Profile' src={userAvatar} />
          ) : (
            <AccountCircleIcon sx={{ fontSize: 50, color: '#FFFFFF' }} />
          )}
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => { handleMenuClose(); handleLogout(); }}>Logout</MenuItem>
        </Menu>
      </Stack>
      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerContent}
      </Drawer>
    </ContainerHeader>
  );
}
