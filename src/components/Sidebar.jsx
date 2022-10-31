import React from 'react'
import {Stack} from "@mui/material"
import {categories} from "../utils/constants"
const Sidebar = ({selectedcategory,setselectedcategory}) => {

  
  return (
    <Stack direction="row"
    sx={{overflowY: "auto", height: {sx: "auto", md: "95%"}, flexDirection: {md: "column"}}}
    >

      {categories.map((category) => (
        <button className='category-btn' key={category.name} onClick={() => setselectedcategory(category.name)}
        style={{
            backgroundColor: category.name === selectedcategory && '#FC1503'
        }}
        >
            <span style={{color: category.name === selectedcategory ? 'white' : 'red', marginRight: '15px'}}>{category.icon}</span>
            <span style={{color: category.name === selectedcategory ? 'white' : 'red', marginRight: '15px'}}>{category.name}</span>
        </button>
      ))}

    </Stack>
  )
}

export default Sidebar