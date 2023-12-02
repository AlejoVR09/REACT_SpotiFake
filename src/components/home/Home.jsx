import './home.css'
import { React, useEffect, useState } from'react'
import { getSpotifyToken } from '../../services/spotifyService'
import { getTopTracks } from '../../services/songService'

function Home() {
    const [inCharge, setInCharge] = useState(true);
    const [songs, setSongs] = useState(null);

    useEffect(
        ()=>{
            getSpotifyToken()
            .then(response => 
                {
                    console.log(response)
                    getTopTracks(response)
                    .then(response => 
                        {
                            console.log(response)
                            setInCharge(false)
                            setSongs(response.tracks)
                        }
                    );

                }
            );
        },
        []
    );
    
    if (inCharge) {
        return (
            <>
                <h1>
                    Charging.....
                </h1>
            </>
        )
    }
    else{
        return (
            <section className='banner'>
                <div className='container'>
                    <div className="row row-cols-1 row cols-md-5">
                        {
                            songs.map( song => {
                                return (
                                        <div className='col'>
                                            <div className='card h-100 shadow'>
                                                <h3>{song.name}</h3>
                                                <audio src={song.preview_url} controls></audio>
                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;