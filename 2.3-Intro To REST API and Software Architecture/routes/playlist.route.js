import { Router } from "express";
const router = Router();

import { getMostPlaying, getPlaylists, playPlaylist } from "../controllers/playlist.controller.js";

router.get("/playlists", getPlaylists);
router.put("/playlists/:id", playPlaylist);
router.get("/playlists/most-played", getMostPlaying);

export default router;
