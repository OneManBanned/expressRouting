import db from "../db.js";
import CustomerNotFoundError from "../errors/customNotFoundError.js";

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
        throw new CustomerNotFoundError("Author not found");
    }

    res.send(`Author Name: ${author.name}`);
});

export default getAuthorById;
