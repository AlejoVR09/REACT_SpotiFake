export async function getTopTracks(token){
    const ARTIST_ID = '6mUdeDZCsExyJLMdAfDuwh';

    const URL_SONG_SERVICE = `https://api.spotify.com/v1/artists/${ARTIST_ID}/top-tracks?market=us`;

    const REQUEST_SONG = {
        method: "GET",
        headers: "Authorization"+token

    }

    try {
        
        let response = await fetch(URL_SONG_SERVICE, REQUEST_SONG);
        console.log(response.json());
        return response.json();

    } catch (error) {
        console.log(error)
    }
}