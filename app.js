import express from "express"
import indexRouter from "./routes/indexRouter.js"
import authorRouter from "./routes/authorRouter.js"
import bookRouter from "./routes/bookRouter.js"
import { fileURLToPath } from "url"
import { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = process.env.PORT || 9000

app.use("/authors", authorRouter)
app.use("/books", bookRouter)
app.use("/", indexRouter)

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}!`))
