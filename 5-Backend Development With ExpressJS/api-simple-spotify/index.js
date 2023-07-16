const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let songs = [];

app.get("/song", (req, res) => {
  try {
    res.status(200).send(songs);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/song/:id", (req, res) => {
  try {
    const { id } = req.params
    const song = songs.find(song => song.id == id)
    if (!song) {
      return res.status(400).send({ message: "Song not found" })
    }
    res.status(200).send(song);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post("/song", (req, res) => {
  try {
    const { title, artist, url } = req.body;

    if (!title || !artist || !url) {
      return res.status(400).send({ error: "Fields can not be empty" });
    }

    const song = {
      id: songs.length + 1,
      title,
      artist,
      url,
    };

    songs.push(song);
    res.status(201).send({ message: "Song added to playlist" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
