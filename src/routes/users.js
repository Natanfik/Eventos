import express from 'express';
import UserController from '../controllers/users.js';

const usersRouter = express.Router();

const usersController = new UserController();

usersRouter.get('/', async (req, res) => {
    const {success, statusCode, body} = await usersController.getUsers(req, res);
    res.status(statusCode).send({ success, statusCode, body});

}); 

export default usersRouter;
