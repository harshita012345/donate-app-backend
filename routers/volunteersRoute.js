const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Volunteer = require('../models/volunteersModel');

const volunteersRoute = express.Router();

volunteersRoute.get(
    '/volunteers',
    expressAsyncHandler(async (req, res) => {
        const vlounteers = await Volunteer.find({});
        try {
            res.send({ results: vlounteers })
        } catch (error) {
            res.status(500).send(error);
        }
    })
);
volunteersRoute.post(
    '/create-volunteers',
    expressAsyncHandler(async (req, res) => {
        const vount = new Volunteer(req.body)
        try {
            await vount.save()
            res.send(vount);
        }
        catch (error) {
            res.status(500).send(error);
        }
    })
);

module.exports = volunteersRoute;