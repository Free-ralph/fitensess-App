import {Box, Stack, Typography, Button} from '@mui/material'
import { Link } from 'react-router-dom'


const ExerciseCard = ({exercise}) => {
    return (
        <Link className='exercise-card'  to = {`/exercise/${exercise.id}`}>
            <img height="20px" src = {exercise.gifUrl} alt = {`${exercise.name} gif`} loading = 'lazy' />
            <Stack direction = 'row'>
                <Button sx = {{ml : '21px', color :'#fff', background : '#ffa9a9', fontSize : '14px', 
                borderRadius : '20px', textTransform : 'capitalize'}}>
                    {exercise.bodyPart}
                </Button>
                <Button sx = {{ml : '21px', color :'#fff', background : '#fcc757', fontSize : '14px', 
                borderRadius : '20px', textTransform : 'capitalize'}}>
                    {exercise.target}
                </Button>
            </Stack>
            <Typography ml = "21px" 
                color = '#000'
                fontSize = "24px" 
                fontWeight = "bold" 
                mt = "11px" pb ="10px" 
                textTransform = "capitalize">
                    {exercise.name}
            </Typography>
        </Link>
    )
}


export default ExerciseCard 