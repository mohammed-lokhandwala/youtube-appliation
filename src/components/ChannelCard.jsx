import React from 'react'
import { CardMedia, CardContent, Typography, Box } from '@mui/material'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
const ChannelCard = ({ChannelDetails,marginTop}) => {
  return (
    <Box sx={{   boxShadow: 'none',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: { xs: '356px', md: '320px' },
    height: '326px',
    margin: 'auto',
    marginTop,
    }}>
  
   <Link to={`/channel/${ChannelDetails?.id?.channelId}`}>

    <CardContent sx={{display:'flex', flexDirection: 'column', justifyContent: 'center', textAlign:'center',color: '#fff'}}>
      <CardMedia image={ChannelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture} 
       alt={ChannelDetails?.sippet?.title}
       sx={{borderRadius: '50%', height: '180px', width: '180px', mb: 2,border: '1px solid #e3e3e3'}}
      >
        </CardMedia>
        <Typography variant="h6">
            {ChannelDetails?.snippet?.title} 
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />

            </Typography> 
    </CardContent>
   </Link>
    </Box>
  )
}

export default ChannelCard