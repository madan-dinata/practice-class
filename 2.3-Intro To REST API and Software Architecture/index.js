import express from "express"
import cors from "cors"
import morgan from "morgan"

import playlistRouter from "./routes/playlist.route.js"

const app = express()
const port = 3000
const api = "/api/v1"

app.use(morgan("dev"))
app.use(cors()) 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(api, playlistRouter)

app.get("/", (req, res) => {
    res.send({ message: "Api Simple Spotify" })
})

app.get("*", (req, res) => {
    res.status(404).send({ message: "Url Not Found" })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
