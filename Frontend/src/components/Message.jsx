import { AppBar, Toolbar, styled, Box} from '@mui/material';

// Components
import LoginDialog from './account/LoginDialog';

const Component = styled(Box)`
    height: 100vh;
    background: #eae6df;
`

const Header = styled(AppBar)`
    height: 222px;
    background-color: #00a884;
    box-shadow: none;
`

const Message = () => {

    return(
        <Component>
            <Header>
                <Toolbar>
                    
                </Toolbar>
            </Header>
            <LoginDialog/>
        </Component>
    )
}

export default Message