import React, {useState, useEffect, useRef} from 'react'
import SearchBarItem from './SearchBarItem'



export default function Searchbar() {
  const [albums, setAlbums] = useState([])
  const [search, setSearch] = useState('')
  const isMounted = useRef(false)

  const renderResults = albums.map(album => {
      return (
          <SearchBarItem album={album} />
        )
  })

  function formatResponse(res){
      return res.albums.items.map(album => {
          return {
              title: album.name,
              artist: album.artists[0].name,
              album_art_url: album.images[0].url,
              release_date: album.release_date,
              total_tracks: album.total_tracks,
              spotify_id: album.id
          }
      })
  }

  useEffect(() => {
      if(isMounted.current){
        console.log(JSON.stringify({q: search}))
        fetch('/queried_albums', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({q: search})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setAlbums(formatResponse(data))
        })
        .catch(error => console.log(error))
      }else{
        isMounted.current = true
      }
  }, [search])
  
  return (
    <div>
        <form>
            <label>
                Search:
                <input type="text" name="query" id="query" onChange={e => setSearch(e.target.value)} value={search}/>
            </label>
        </form>
        {albums.length > 0 && renderResults}
    </div>
  )
}
