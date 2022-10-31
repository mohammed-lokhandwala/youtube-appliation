import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from "@mui/material"
import {Videos, ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
const ChannelDetail = () => {
  const [ChannelDetails, setChannelDetails] = useState()
  const [videos,setvideos] = useState([])
  const {id} = useParams();

  useEffect(() => {
  
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) => setChannelDetails(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`).then((data) => setvideos(data?.items))


  },[id])
  return (
    <Box minHeight="95vh">
    <Box >
      <div
      style={{background: 'radial-gradient(circle, rgba(63,94,251,1) 72%, rgba(244,80,113,0.9475140397956058) 100%)', zIndex: 10, height: '300px'}}
      />
      <ChannelCard ChannelDetails={ChannelDetails} marginTop="-93px"></ChannelCard>
   


    </Box>
     <Box p={2} display="flex">
     <Box sx={{mr: {sm: '100px'}}}/>
        <Videos videos={videos}/>
      
     </Box>
    
    </Box>
  )
}

export default ChannelDetail