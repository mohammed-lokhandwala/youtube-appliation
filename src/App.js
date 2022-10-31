import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Box} from "@mui/material"
import {Navbar, Feed, SearchFeed, ChannelDetail, VideoDetail,Missing,Testing} from './components'

const App = () => (
<BrowserRouter>
<Box sx={{backgroundColor: '#000'}}>
<Navbar></Navbar>
<Routes>
  <Route path='/' excat element={<Feed></Feed>}></Route>
  <Route path='/video/:id' element={<VideoDetail></VideoDetail>}></Route>
  <Route path='/channel/:id' element={<ChannelDetail></ChannelDetail>}></Route>
  <Route path='/search/:searchTerm' element={<SearchFeed></SearchFeed>}></Route>
  <Route path="/testing" element={<Testing></Testing>}></Route>
  <Route path='*' element={<Missing></Missing>}></Route>
</Routes>

</Box>
</BrowserRouter>


);

export default App;
