import{ Box, Typography, Button } from '@mui/material' 
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
    return(
        <Box sx = {{
            mt : {lg  : '200px', xs :'70px'},
            ml : { sm: '50px'} 
            }} p = '20px'
            position ='relative'>
            <Typography 
                color = "#FF2625"
                fontSize="26px"
                fontWeight="600"
                mb = "20px">
                    Fitness Club
            </Typography>
            <Typography fontWeight ="700" sx = {{fontSize : {lg : '44px', xs:'40px'}}}mb = {3} >
                Sweat, Smile <br/> and Repeat
            </Typography> 
            <Typography fontSize = "22px" lineHeight = '35px' mb = "20px">Check out all out the most effective exercises</Typography>
            <Button variant = "contained" href='#exercises' color = "error" sx = {{backgroundColor : '#FF2625'}} >Explore Exercises</Button>
            <Typography fontSize = "200px" color = "#FF2625"sx = {{opacity : 0.1, display : {lg : 'block', xs : 'none'}}} >Exercise</Typography>
            <img className='hero-banner-img' src = {HeroBannerImage} alt = "hero-banner" />
        </Box>
    )
}

export default  HeroBanner