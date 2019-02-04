// This is an Action creator for Redux

export const selectSong = song => {
	// Return an action
	return {
		type: 'SONG_SELECTED',
		payload: song,
	};
};
