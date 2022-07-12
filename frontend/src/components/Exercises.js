import { Box , Stack, Typography, Pagination} from '@mui/material'
import { useState, useEffect } from 'react'
import ExerciseCard from './ExerciseCard'
import { fetchData, exersiceOptions} from '../utils/fetchData.js'

const Exercises = ({bodyPart, exercises, setExercises}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const exercisePerPage = 9
    const indexOfLastExercise = currentPage * exercisePerPage
    const indexOfFirstExercise = indexOfLastExercise - exercisePerPage
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

    useEffect(() => {
        const fetchExerciseData = async () => {
            let data = []
            if (bodyPart === "all") {
                data = await fetchData(`/api/exercises`)
            } else {
                data = await fetchData(`/api/exercises/${bodyPart}`)
            }
            setExercises(data)
        }
        fetchExerciseData()
        
    }, [bodyPart,])

    const paginate = (e , value) => {
        setCurrentPage(value);
        window.scrollTo({ top : 1250 , behavior : 'smooth'});
    }
    return(
        <Box id = 'exercises'
            sx = {{mt : {lg : '110px'}}}
            mt = '50px'
            p = '20px'>
                <Typography textAlign='center' variant = 'h3' mb = "46px">
                    Showing results
                </Typography>
                <Stack direction ='row' sx = {{gap : {lg : "110px", xs : '50px'}}}
                flexWrap = "wrap" justifyContent='center' >
                    {currentExercises.map((exercise, index) => (
                        <ExerciseCard exercise = {exercise} key = {index} />
                    ))}
                </Stack>
                <Stack mt = "100px" alignItems = 'center'>
                    {exercises.length > 9 && (
                    <Pagination shape = "rounded"
                        count = {Math.ceil(exercises.length / exercisePerPage)} 
                        page = {currentPage}
                        defaultPage = {1}
                        color = 'standard'
                        size = "large"
                        onChange = {paginate}/>
                        )}
                </Stack>
                
        </Box>
    )
}

export default  Exercises