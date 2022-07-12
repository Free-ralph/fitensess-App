import HorizontalScrollBar from './HorizontalScrollBar.js'
import { Box, Stack, Typography } from '@mui/material'
import Loader from './Loader';
const SimilarExercises = ({targetMuscleExercises, name, equipmentExercises}) => {
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
            <Typography sx={{ 
                fontSize: { lg: '35px', xs: '25px' },
                ml: '20px' }}
                textAlign = "center" 
                fontWeight={700} 
                color="#000" 
                mb="33px">
            Similar Target Muscle For  <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercises
            </Typography>
            <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
                {targetMuscleExercises.length !== 0 ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader />}
            </Stack>
            <Typography sx={{ fontSize: { lg: '35px', xs: '25px' }, ml: '20px' }} textAlign = "center" fontWeight={700} color="#000" mb="33px">
            Similar Equipment For  <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercises
            </Typography>
            <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
                {equipmentExercises.length !== 0 ? <HorizontalScrollBar data={equipmentExercises} /> : <Loader />}
            </Stack>
        </Box>
    )
}


export default SimilarExercises