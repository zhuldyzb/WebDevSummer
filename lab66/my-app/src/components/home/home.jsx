import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <div>
                <Link to={`/albums`}><button>Albums</button></Link>
                <Link to={'/about'}><button>About Us</button></Link>
            </div>
            
        </div>
    );
};

export default Home;
