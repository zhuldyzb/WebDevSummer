import React, { useState } from 'react';
import {albumsList} from "./albumsList"
import { Link } from 'react-router-dom';

const Albums = () => {
    const [albums, setAlbums] = useState(albumsList);
    const handleClickDelete =  (id) => {
      const updatedAlbums = albums.filter(album => album.id !== id);
      setAlbums(updatedAlbums);
     }
    return (
        <div>
            <h1>List of Albums</h1>
            <Link to={`/`}><button>Home</button></Link>
            <div className="album-container">
            {albums.map((album, id) => {
          return (
            <div >
             <Link className="details" to={`/albums/${album.id}/details`}>{album.title}</Link>
              <button onClick={()=> handleClickDelete(album.id)}>Delete</button>
            </div>
          );
        })}
        </div>

            
        </div>
    );
};


export default Albums;