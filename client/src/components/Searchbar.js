import React, {useState, useEffect, useRef} from 'react'
import SearchBarItem from './SearchBarItem'



export default function Searchbar() {
  const [albums, setAlbums] = useState([])
  const [search, setSearch] = useState('')
  const isMounted = useRef(false)
  const debouncedSearch = useDebounce(search, 100)

  const renderResults = albums.map(album => {
      return (
          <SearchBarItem album={album} key={album.spotify_id} resetSearch={() => setSearch("")}/>
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
      if(debouncedSearch !== ""){
        fetch('/queried_albums', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({q: debouncedSearch})
        })
        .then(res => res.json())
        .then(data => {
            setAlbums(formatResponse(data))
        })          
        .catch(error => console.log(error))
      } else{
        console.log("should be getting rid of search container")
        setAlbums(() => [])
      }
  }, [debouncedSearch])

  //debounce hook
  //only changes value in state after delay
  
  function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
      () => {
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);

        return () => {
          clearTimeout(handler);
        };
      },
      [value, delay]
    );
    return debouncedValue;
  }
  
  return (
    <div className="search-container">
        <div className="searchbar">
            <form className="search-form">
                <label>Search: </label>
                    <input type="text" name="query" id="query" onChange={e => setSearch(e.target.value)} value={search}/>
                        <div className="search-item-container">
                            {renderResults}
                        </div>
            </form>
        </div>
    </div>
  )
}
