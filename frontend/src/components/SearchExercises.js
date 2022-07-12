import {Box, TextField, Stack, Typography, Button} from '@mui/material'
import { useEffect, useState } from 'react'
import {fetchData, exersiceOptions} from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'
const SearchExercises = ({bodyPart, setBodyPart, setExercises,}) => {

    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])
    const handleSearch = async () => {
        if(search){
            const data = await fetchData('/api/exercises/', exersiceOptions)
            const exerciseData = data.filter(
                (exercise) => exercise.name.toLowerCase().includes(search) 
                || exercise.bodyPart.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                )
            console.log(exerciseData)
            setExercises(exerciseData)
            setSearch('')
        }
    }

    useEffect(() => {
        const fetchExerciseData = async () => {
            const bodyPartsData = await fetchData('/api/exercises/bodyPartList', exersiceOptions)
            setBodyParts(['all', ...bodyPartsData])
        }
        fetchExerciseData()
    }, [])

    return(
        <Stack alignItems="Center" justifyContent = "center" mt='37px' p = "20px">
            <Typography textAlign='center' fontWeight = {700} variant = 'h4'>
                Awesome Exercise You <br/>
                Should Know
            </Typography>
            <Box position = "relative" mb = "72px" >
                <TextField 
                    sx = {{
                        input : {
                            fontWeight : "700", 
                            border : 'none', 
                            borderRadius : '4px'
                        }, 
                        width: {lg:'1170px', xs: '350px'}, 
                        backgroundColor : '#fff', 
                        borderRadius:'40px'
                    }}
                    placeholder = "Search Exercise"
                    type = "text" 
                    onChange = {(e) => {setSearch(e.target.value.toLowerCase())}}
                    value = {search} />
                <Button 
                    className = "search-btn" 
                    sx = {{ 
                        backgroundColor : '#FF2625', 
                        color : "#fff", 
                        width : {lg : '175px', xs : '80px'},
                        height : '56px',
                        textTransform : 'none', 
                        position : 'absolute',
                        fontSize : {lg : '20px', xs : '14px'}, 
                        right : '0'
                        }}
                        onClick = {handleSearch}>
                    Search
                </Button>
            </Box>
            <Box sx = {{position : 'relative', width : '100%', p:'20px'}} >
                <HorizontalScrollBar bodyPart = {bodyPart} setBodyPart = {setBodyPart} data = {bodyParts} />
            </Box>
        </Stack>
    )
}

export default SearchExercises