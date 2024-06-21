import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { albumsList } from "/Users/zhuldyz/WebDevSummer/lab66/my-app/src/components/albums/albumsList.js";
import { Link } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const album = albumsList.find(album => album.id === parseInt(id, 10));

    const [editingTitle, setEditingTitle] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        setTitle(album.title);
    }, [album]);

    const handleTitleChange = (e) => {
        setEditingTitle(e.target.value);
    };

    const handleSave = () => {
        const updatedAlbumsList = albumsList.map(item => {
            if (item.id === album.id) {
                return { ...item, title: editingTitle };
            }
            return item;
        });

   

        albumsList.length = 0; 
        updatedAlbumsList.forEach(item => albumsList.push(item)); 
        setTitle(editingTitle);
    };

    return (
        <div>
            <div className="album-container">
                <div><h1>Details of the album – {title}</h1></div>
                <div>
                    <p>Title of this album – {title}</p>
                    <p>ID of this album – {album.id}</p>
                    <p>This album belongs to the user: {album.userId}</p>
                </div>
                <div>
                    <input type="text" value={editingTitle} placeholder={"Change the title"} onChange={handleTitleChange} onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleSave();
                            }
                        }}/>
                    <button onClick={handleSave}>Save</button>
                    <Link to={`/albums/${id}/photos`}><button>Photos</button></Link>
                    <Link to="/albums"><button>Return Back</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Details;
