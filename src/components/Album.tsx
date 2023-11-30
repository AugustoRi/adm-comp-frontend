"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Image from 'next/image'
import Logo from "/assets/logo.png";
import { Paper } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// Extrato da conta
// Pix
// Ted
// Aposentadoria
// Emprestimo
// Cartao de credito(Extrato cartao de credito)
// Tutoriais(
// Saque
// Deposito
// Cheque sem fundo
// ) 


const cards = [
    {
        //image
        id: 0,
        title: "Tutoriais",
        descricao: "Clique aqui caso queira utilizar algum tutorial de acesso a funcionalidades!",
        imagem: "https://img.freepik.com/vetores-premium/conceito-de-banner-de-site-tutorial-com-design-plano-de-linha-fina_56103-108.jpg"
    },
    {
        id: 1,
        title: "Extrato da conta",
        descricao: "Clique aqui para vizualizar o extrato da sua conta!",
        imagem: "data:image/jpeg;base64,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"
    },
    {
        id: 2,
        title: "Pix",
        descricao: "Clique aqui para realizar, receber ou vizualizar suas chaves Pix!",
        imagem: "https://ogimg.infoglobo.com.br/economia/24674798-362-f5c/FT1086A/PIX1.jpg"
    },
    {
        id: 3,
        title: "Ted",
        descricao: "Clique aqui para realizar ou visualizar transferências via Ted!",
        imagem: "https://media.istockphoto.com/id/1452706695/pt/vetorial/money-transfer-icon-in-vector-logotype.jpg?s=612x612&w=0&k=20&c=mDNkN6rPnkLm6mmvuXjm_ey81-2be71ftKt_WPAuLu0="
    },
    {
        id: 4,
        title: "Aposentadoria",
        descricao: "Clique aqui para visualizar mais informações da sua aposentadoria!",
        imagem: "https://empresta.com.br/wp-content/uploads/2023/08/como-dar-entrada-na-aposentadoria-por-idade-pela-internet-Empresta-Bem-Melhor-_1_-720x480.webp"
    },
    {
        id: 5,
        title: "Empréstimo",
        descricao: "Clique aqui para solicitar ou visualizar antigos pedidos de empréstimo!",
        imagem: "https://www.infomoney.com.br/wp-content/uploads/2019/06/dinheiro-emprestimo.jpg?fit=900%2C600&quality=50&strip=all"
    },
    {
        id: 6,
        title: "Cartão de credito",
        descricao: "Clique aqui para conferir, pagar ou visualizar assuntos relacionados a seu cartão de crédito!",
        imagem: "https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-credit-card-commercial-element-cardfinancial-elementai-illustration-png-image_595759.jpg"
    },
]

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() { 
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
            <Image
                src="/assets/logo.png"
                alt="Enterprise Logo"
                width={280}
                height={180}
                style={{
                    cursor: "pointer"
                }}
            />
          <Typography variant="h6" color="inherit" noWrap>
                Bem vindo!
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.primary',
            pt: 8,
            pb: 6,
          }}
        >
          <Container 
            maxWidth="sm" 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left',
                gap: 1
            }}>
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="text.secondary"
              gutterBottom
            >
              Saldo
            </Typography>
            <Typography component="h2" variant="h2" align="center" color="text.primary" paragraph>
              R$ 100,00
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/* <Button variant="contained">Main call to action</Button> */}
              {/* <Button variant="outlined">Secondary action</Button> */}
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Paper elevation={12}>
                    <Card
                    sx={{ height: '100%', minHeight: 350, display: 'flex', flexDirection: 'column' }}
                    >
                    <CardMedia
                            component="div"
                            sx={{
                            // 16:9
                            pt: '56.25%',
                            }}
                            image={card.imagem}
                        />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                        </Typography>
                        <Typography>
                        {card.descricao}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Clique aqui</Button>
                    </CardActions>
                    </Card>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}