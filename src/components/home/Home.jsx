import React from'react'
import './home.css'
import { getSpotifyToken } from '../../services/spotifyService'
import { getTopTracks } from '../../services/songService'

function Home() {
    
    getTopTracks(getSpotifyToken());
    return (
        <section className='banner'>
            
        </section>
    )
}

export default Home;