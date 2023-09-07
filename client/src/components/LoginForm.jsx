import React from "react";
import { Avatar, Button, CssBaseline, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { blue } from "@mui/material/colors";
import { observer } from "mobx-react-lite";
import auth from "../store/auth";

const LoginForm = observer( () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    await auth.login();
  };
  return (
    <>
      <Grid
        container
        position='absolute'
        top={0}
        left={0}
        height='100%'
        width='100%'
        flexDirection='column'
        alignItems =' center'
        justifyContent='center'
        >
        <CssBaseline/>
        <Avatar
                alt = 'logo'
                src = '/ic_partner_exchange.svg'
                variant = 'circular'
                sx = {{ bgcolor: blue[500],
                        mb: 1,
                        width: 70,
                        height: 70,
                }}
            />
        <Box item xs='auto'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography component='h1' variant='h5'>
                Авторизация
            </Typography>
            <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1}}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Ваш Email"
                    name="email"
                    value={auth.email}
                    onChange={(e) => auth.setEmail(e.target.value)}
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Ваш пароль"
                    type="password"
                    id="password"
                    value={auth.password}
                    onChange={(e) => auth.setPassword(e.target.value)}
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Войти
                </Button>
            </Box>
        </Box>
      </Grid>
    </>
  );
});

export default LoginForm;