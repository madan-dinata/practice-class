import { findPlaylists } from "../models/playlist.model.js";

  export const playSong = (id) => {
    const playlist = findPlaylists().find((playlist) => playlist.id == id);
    playlist.play_count++
    return playlist
  }

  export const mostPlaying = () => {
    return findPlaylists().sort((a,b) => b.play_count - a.play_count)
  }