import db from "../db.js";

const asyncUtil = (fn) =>
    function asyncUtilWrap(...args) {
        const fnReturn = fn(...args);
        const next = args[args.length - 1];
        return Promise.resolve(fnReturn).catch(next);
    };

const getAuthorById = asyncUtil(async (req, res) => {
    const { authorId } = req.params;

    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
        res.status(404).send("Author not found");
        return;
    }

    res.send(`Author Name: ${author.name}`);
});

export default getAuthorById;
