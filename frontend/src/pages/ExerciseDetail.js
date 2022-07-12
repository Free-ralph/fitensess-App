import { useEffect, useState } from "react"
import {Box} from '@mui/material'
import { useParams } from "react-router-dom"
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { fetchData , exersiceOptions, youtubeOptions} from '../utils/fetchData'

const ExerciseDetail = () => {

    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMuscleExercises,setTargetMuscleExercises] = useState([])
    const [equipmentExercises,setEquipmentExercises] = useState([])
    const { id } = useParams();
    useEffect(() => {
        const fetchExerciseData = async () => {
            const exerciseDbUrl = 'http://127.0.0.1:8000/api';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/${id}`, exersiceOptions);
            setExerciseDetail(exerciseDetailData)
          
            const similarTargeExercises =  await fetchData(`${exerciseDbUrl}/exercises/target-muscle/${exerciseDetailData.target}`, exersiceOptions);
            setTargetMuscleExercises(similarTargeExercises)


            const equipmentExercisesData =  await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exersiceOptions);
            setEquipmentExercises(equipmentExercisesData)

            const youtubeSearchData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions)
            setExerciseVideos(youtubeSearchData.contents)
        }
        fetchExerciseData()
    }, [id])

    if (!exerciseDetail) return <div>No Data</div>;
    return (
        <Box sx={{ mt: { lg: '30px', xs: '45px' } }}>
            <Detail exerciseDetial = {exerciseDetail} />
            <ExerciseVideos exerciseVideos = {exerciseVideos} name = {exerciseDetail.name} />
            <SimilarExercises equipmentExercises = {equipmentExercises} targetMuscleExercises = {targetMuscleExercises} name = {exerciseDetail.name}/>
        </Box>
    )
}

export default ExerciseDetail