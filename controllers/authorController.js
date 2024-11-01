import db from "../db.js"

export default async function getAuthorById(req, res) {
    const { authorId } = req.params;

    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
        res.status(404).send("Author not found");
        return;
    }

    res.send(`Author Name: ${author.name}`);
}