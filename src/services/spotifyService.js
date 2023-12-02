
export async function getSpotifyToken() {
    const URL_TOKEN_SERVICE = 'https://accounts.spotify.com/api/token';
    const HTTP_METHOD = 'POST';
    
    const CLIENT_ID = '7f372eae13a940dfbab367d27636c9c2'
    const CLIENT_SECRET = '438bf9271ba74eb1ae3a95176b33f26d'
    const CLIENT_GRANT_TYPE = 'client_credentials'

    const REQUEST_TOKEN = {
        method: HTTP_METHOD,
        headers: {
            "Content-type" : 'application/x-www-form-urlencoded'
        },
        body: `grant_type=${CLIENT_GRANT_TYPE}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    };

    try {

        let response = await fetch(URL_TOKEN_SERVICE, REQUEST_TOKEN);
        let jsonResponse = await response.json();
        return `${jsonResponse["token_type"]} ${jsonResponse["access_token"]}`;

    } catch (error) {

        console.log(error);
        
    }

    

    
}