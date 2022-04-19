import React from 'react'
import { useHistory } from 'react-router-dom'

export default function SearchBarItem({album, resetSearch}) {
  let history = useHistory();
  function handleClick() {
      resetSearch();
      fetch('/albums', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(album)
      })
      .then(res => res.json())
      .then(data => history.push(`/albums/${data.id}`))
      .catch(error => console.log(error))
  }

  console.log(album.spotify_id)
  return (
      <div className="search-item" onClick={handleClick}>
          <img src={album.album_art_url} style={{height: '50px', width: '50px'}} alt={album.title}/>
          <p>{album.title}</p>
      </div>
  )
}
