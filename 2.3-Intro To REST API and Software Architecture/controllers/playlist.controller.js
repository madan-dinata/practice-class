import { mostPlaying, playSong } from "../services/playlist.service.js";
import { findPlaylists } from "../models/playlist.model.js";

export const getPlaylists = (req, res) => {
  try {
    res.status(200).send({
      message: `Successfully get playlists`,
      data: findPlaylists(),
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const playPlaylist = (req, res) => {
  try {
    const playlist = playSong(req.params.id);
    if (!playlist) {
      return res.status(400).send({
        message: `Playlist by id ${req.params.id} not found`,
      });
    }
    res.status(200).send({
      message: `Successfully play song playlist id ${req.params.id}`,
      data: playlist,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getMostPlaying = (req, res) => {
    try {
        res.status(200).send({
          message: `Successfully get most played song`,
          data: mostPlaying(),    
        });
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
};
