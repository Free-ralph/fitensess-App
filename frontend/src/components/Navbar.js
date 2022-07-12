import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
    return (
        <Stack 
            direction = 'row'
            sx = {{
                gap : {sm : '122px', xs : '40px'},
                mt : '15px'
            }}
            px = '20px'>
            <Link to = '/'>
                <img 
                    src = {Logo} 
                    alt = 'Logo'
                    style = {{ width : "48px", height : '48px'}}/>
            </Link>
            <Stack 
                direction = 'row'
                gap = "36px"
                alignItems = "flex-end"
                fontSize = '24px'>
                <Link 
                    to = '/'
                    style={{borderBottom : '3px solid #FF2625', textDecoration : 'none', color : "#3A1212"}}>Home</Link>
                <a 
                    href = "#exercises"
                    style={{textDecoration : 'none', color : "#3A1212"}} >Exercise
                </a>
            </Stack>
        </Stack>
    )
}

export default Navbar