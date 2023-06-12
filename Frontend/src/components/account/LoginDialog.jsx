import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material"

import ConnectContent from "./ConnectContent";

const Componet = styled(Box)`
    display: flex;
`;

const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`;

const Title = styled(Typography)`
    font-size: 26px;
    color: #525252;
    font-weight: 300;
    font-family: inherit;
    margin-bottom: 25px;
`;

const StyledList = styled(List)`
    & > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;

const LoadingContent = styled(Box)`
    position: relative;

`

const dialogStyle = {
    height: '96%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden',
};

const LoginDialog = () => {

    return(
        <Dialog 
            open={true}
            PaperProps={{ sx: dialogStyle}}
            hideBackdrop={true}
        >
            <Componet>
                <Container>
                    <Title>Usa Chat Bot en tu Whatsapp:</Title>
                    <StyledList>
                        <ListItem>1. Abre WhatsApp en tu teléfono.</ListItem>
                        <ListItem>2. Toca Menú o Configuracion y seleciona Dispositivos vinculados.</ListItem>
                        <ListItem>3. Toca Vincular un dispositivo.</ListItem>
                        <ListItem>4. Apunta tu teléfono hacia esta pantalla para escanear el código QR.</ListItem>
                    </StyledList>
                </Container>
                <LoadingContent>
                    <ConnectContent/>
                </LoadingContent>
            </Componet>
        </Dialog>
    )

}

export default LoginDialog