import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Photos = () => {
    const { id } = useParams(); 
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
            .then(response => response.json())
            .then(data => {
                setPhotos(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    return (
        <div>
            <h1>Photos</h1>
            <Link to={`/albums/${id}/details`}><button>Return</button></Link>
            <div className="photos-container">
                {photos.map(photo => (
                    <div key={photo.id} className="photo-item">
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                        <p>{photo.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Photos;
