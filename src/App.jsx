import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Song from './Song'
import { Albom } from './Albom'
import { Songlist} from './Songlist'
import  Playlist  from './Playlist'


function App() {
  const [songs,setSong]=useState([
    {id:101,title:"Varel em momery",artist:"Hayko"},
    {id:102,title:"Arajiny Aramn er",artist:"Artash"},
    {id:103,title:"Krunkner",artist:"Aida"},
    {id:104,title:"Erg",artist:"Hayko"}
  ])
  const [playlist, setPlaylist] = useState([]);
 
  const removeSong=id=>{
    setSong(songs.filter(x=>x.id!=id))
  }


const moveToPlaylist = (id) => {

   setPlaylist((prevPlaylist) => {
   const findSong = songs.find((elm) => elm.id === id);
   if (prevPlaylist.some((elm) => elm.id === id)) {
     return prevPlaylist; 
     }
    return [...prevPlaylist, findSong];
   });
};

const moveDown = id => {
  const index = playlist.findIndex(elm => elm.id === id);
  if (index >= 0 && index <playlist.length - 1) {
    const newPlaylist = [...playlist]
    ;[newPlaylist[index], newPlaylist[index + 1]] = [newPlaylist[index + 1], newPlaylist[index]];
    setPlaylist(newPlaylist);
  }
};
  
  return (
    <>
    <h1>HELLO !</h1>
    {/* <Albom name="Music" year={2004}>
    <Song
    title="Hips don't lie"
    artist="Shakira"
    duration={5}/>
     <Song
    title="Hips don't lie"
    artist="Shakira"
    duration={5}/>
     <Song
    title="Hips don't lie"
    artist="Shakira"
    duration={5}/>
    </Albom> */}
    <Songlist
      items={songs}
      onDelete={removeSong}
      onMove={moveToPlaylist}
    />
    <Playlist 
    items={playlist}
     onDelete={removeSong} 
     onMoveDown={moveDown} />
    
    </>
  )
}

export default App
