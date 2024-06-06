
import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom"
import Applayout from "./Applayout"
import Home from "./pages/Home"
import Videolayout from "./pages/Video_player/Videolayout"
import Contextapi from "./Contextapi"
import Shorts from "./pages/Shorts.jsx";
import TrendingLayout from "./pages/Trending/TrendingLayout.jsx"
import RecentTrending from "./pages/Trending/RecentTrending.jsx"
import MusicTrend from "./pages/Trending/MusicTrend.jsx"
import GameTrend from "./pages/Trending/GameTrend.jsx"
import MovieTrend from "./pages/Trending/MovieTrend.jsx"
import ChannelLayout from "./pages/Channel/ChannelDetails.jsx"
import ChannelCommunity from "./pages/Channel/ChannelCommunity.jsx"
import ChannelVideos from "./pages/Channel/ChannelVideos.jsx"
import ChannelShorts from "./pages/Channel/ChannelShorts.jsx"
import ChannelPlaylist from "./pages/Channel/ChannelPlaylist.jsx"

// import GlobalStyles from "./Styles/GlobalStyles.js"


function App() {
  return (
  <BrowserRouter>
    <Contextapi>
      <Routes>
          <Route element={<Applayout/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="video/:id" element={<Videolayout/>}/>
              <Route path="shorts/:short_id" element={<Shorts/>} />
              <Route path="trending" element={<TrendingLayout/>}>
                  <Route index element={<Navigate replace to="now"/>}/>
                  <Route path="now" element={<RecentTrending/>}/>
                  <Route path="music" element={<MusicTrend/>}/>
                  <Route path="gamming" element={<GameTrend/>}/>
                  <Route path="movies" element={<MovieTrend/>}/>
              </Route>
              <Route path="channel/:ch_id" element={<ChannelLayout/>}>
                    <Route index element={<Navigate replace to="videos"/>}/>
                    <Route path="videos" element={<ChannelVideos/>}/>
                    <Route path="shorts" element={<ChannelShorts/>}/>
                    <Route path="playlist" element={<ChannelPlaylist/>}/>
                    <Route path="community" element={<ChannelCommunity/>}/>
              </Route>
          </Route>
      </Routes>
    </Contextapi>
  </BrowserRouter>
  )
}

export default App
