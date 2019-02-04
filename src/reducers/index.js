import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      artist: "Kormac",
      title: "Love On The Line",
      duration: "6:13",
      url: "https://www.youtube.com/watch?v=ZCBn0mjLWaA"
    },
    {
      artist: "Player 2",
      title: "If You Really Want Someone",
      duration: "6:12",
      url: "https://www.youtube.com/watch?v=MK25zEoaE08"
    },
    {
      artist: "OFFAIAH",
      title: "Work It Out",
      duration: "6:21",
      url: "https://www.youtube.com/watch?v=Nt26jLSE3To"
    },
    {
      artist: "Jack Back",
      title: "It Happens Sometimes - OFFAIAH Remix",
      duration: "3:10",
      url: "https://www.youtube.com/watch?v=vi0nsqwrXvU"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

// Kormac https://www.youtube.com/watch?v=ZCBn0mjLWaA
// Player 2 - 'If You Really Want Someone' https://www.youtube.com/watch?v=MK25zEoaE08
// OFFAIAH 'Work It Out' https://www.youtube.com/watch?v=Nt26jLSE3To
// Jack Back '(It Happens Sometimes' (OFFAIAH Remix) https://www.youtube.com/watch?v=vi0nsqwrXvU
