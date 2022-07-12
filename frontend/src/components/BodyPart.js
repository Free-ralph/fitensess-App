import { Stack } from '@mui/material'
import { Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({item, bodyPart, setBodyPart}) => {
    return (
    <Stack 
        type = "button"
        alignItems = "center"
        justifyContent = 'center'
        className = 'bodyPart-card'
        sx = {{
                borderTop : bodyPart === item ? '4px solid #ff2625' : '', 
                backgroundColor : '#fff', 
                borderBottomLeftRadius: '20px', 
                width : '270px', 
                heigth: '280px', 
                cursor : 'pointer', 
                gap : '47px', 

            }}
        onClick = {(e) => {
            setBodyPart(item)
            window.scrollTo({ top: 1250, left: 100, behavior: 'smooth' });
        }}
        >
        <img src = {Icon} alt = 'gym-icon' style = {{
            width : '40px', 
            heigth : '40px',
            marginTop : '40px'
        }}/>
        <Typography fontSize = "24px" fontWeight = 'bold' textTransform = "capitalize" color = "#3A1212">{item}</Typography>
    </Stack>)
}

export default BodyPart