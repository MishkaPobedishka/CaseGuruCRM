import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import auth from "../store/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleGoToMetrics = async (e) => {
        e.preventDefault();
        navigate('/metrics');
    };
    const handleLogout = async (e) => {
        e.preventDefault();
        await auth.logout();
    }

    return (
        <AppBar position='sticky'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                        mr: 1,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 600,
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        Карук Михаил Иванович
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {auth.user.vacancy === 'HR-менеджер' &&
                        <Button
                            onClick={handleGoToMetrics}
                            sx={{ my: 2, fontSize: 20, color: 'white', display: 'block' }}
                        >
                            Метрики
                        </Button>
                    }   
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Button
                        onClick={handleLogout} 
                        sx={{ p: 1, fontSize: 20, color: 'white', display: 'block' }}
                        >
                            Выйти
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;