    /*******************
        GENERAL UTILITY FUNCTIONS
    ********************/

    function reqParam() {
        throw new Error('This is a required param!');
    }

    /*******************
        DATA TASKS
    ********************/

    const SpotifyAPI = {};

    SpotifyAPI.search = (q = reqParam(), type = 'track') => {

    };

    SpotifyAPI.getTrack = (trackId = reqParam()) => {

    };
    SpotifyAPI.getTracks = (trackIds = reqParam()) => {

    }; 

    /*******************
        PLAYLIST MANAGEMENT
    ********************/

    const PlaylistManager = {};

   
    PlaylistManager.tracks = [];

    
    PlaylistManager.currentSong = 0;

    PlaylistManager.addTrack = (trackId = reqParam()) => {

    }; // PlaylistManager.addTrack

    PlaylistManager.render = () => {

    }; // PlaylistManager.render
    /*
        @func playNextSong
        @desc - pauses current song 
        plays next song
    */
    PlaylistManager.playNextSong = () => {
       
    }; 