import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactPlayer from "react-player"
import {Typography, Box, Stack} from "@mui/material"
import { CheckCircle, SentimentVeryDissatisfiedTwoTone } from '@mui/icons-material'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import Loader from './Loader'
import {Videos} from "./"
const VideoDetail = () => {



  const {id} = useParams()
  const [videoDetail, setVideoDetail] = useState()

  

  useEffect(() => {
   
    fetchFromAPI(`videos?part=snippet,statistic&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]))
   
  },[id])

    if(!videoDetail?.snippet) {
      return <Loader/>
    }

  return (
    <Box minHeight="95vh">
      <Stack direction={{xs: 'column', md: 'row'}}>
        <Box flex={1}>
            <Box sx={{width: '100%', position: 'sticky', top: '86px'}}>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
             
             
              <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {videoDetail?.snippet?.title }
            </Typography>
           
             <Stack display="flex" direction="row" alignItems="center" gap="20px" marginTop="-20px">
             
             <Typography color="#fff" variant="h6" fontWeight="light" p={2}>
              {videoDetail?.statistics?.likeCount} Likes
            </Typography>

            <Typography  color="#fff" variant="h6" fontWeight="light" p={2}>
              {videoDetail?.statistics?.viewCount } Views
            </Typography>
           

             </Stack>
            
               <Box>
            
               </Box>

            <Stack>
              
            </Stack>
            </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail