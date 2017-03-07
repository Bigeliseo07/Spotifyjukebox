/*******************
    DATA TASKS
********************/

const SpotifyAPI = {};


SpotifyAPI.urlBase = 'https://api.spotify.com';

SpotifyAPI.version = 1;

SpotifyAPI.getUrlBase = () => {
    const {urlBase, version} = SpotifyAPI;
    return urlBase + '/v' + version + '/';
    //     https://api.spotify.com/v1/
}; 


SpotifyAPI.getUrlString = (endpoint) => {
    return SpotifyAPI.getUrlBase() + endpoint + '/?';
    // ^^^ https://api.spotify.com/v1search/?
}; // getUrlString


SpotifyAPI.search = (q = reqParam(), type = 'track') => {
    // search?q=adele&type=track
    return new Promise((resolve, reject) => {
        const url = SpotifyAPI.getUrlString('search') + 'q=' + q + '&type=' + type;
        
        const http = new XMLHttpRequest();
        http.open('GET', url);

        http.onload = () => {
            const data = JSON.parse(http.responseText);
            resolve(data);
        };

        http.send();
    });
}; // SpotifyAPI.search

