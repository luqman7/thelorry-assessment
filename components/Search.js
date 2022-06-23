import React, { useState } from 'react'
import Songs from '../src/mock_data.json'
import SongsList from '../components/SongsList'

function Search() {
  const [searchSong, setSearchSong] = useState('')
  const ListSongs = Songs.song_playlist.data
  return (
    <div>
      <input 
        type="text" 
        className='bg-white/10 rounded-xl h-12 w-full p-3' 
        placeholder='Search'
        onChange={event => {setSearchSong(event.target.value)}}
      />

      {
        ListSongs.filter((item) => {
          if (searchSong == "") {
            return item
          } else if (item.song_name.toLowerCase().includes(searchSong.toLowerCase())) {
            return item
          }
        }).map((item) => {
          <SongsList 
            key={item.id}
            title={item.song_name}
            band={item.band_name}
            year={item.year}
            downloaded={item.downloaded}
          />
        })
      }
    </div>
  )
}

export default Search