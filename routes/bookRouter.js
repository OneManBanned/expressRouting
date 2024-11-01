import { Router } from "express";

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All Books"));
bookRouter.get("/:bookId", (req, res) => {
    const { bookId } = req.params;
    res.send(`Books ID: ${bookId}`);
});
bookRouter.route("/:bookId/reserve")
    .get((req, res) => {
    const { bookId } = req.params;
    res.send(`reserve book ${bookId}?`);
    })
    .post((req, res) => {
    const { bookId } = req.params;
    res.send(`book ${bookId} reserved`);
});

export default bookRouter;
