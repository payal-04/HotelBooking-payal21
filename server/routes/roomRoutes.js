import express from "express";
import {prot}


const roomRouter = express.Router();

roomRouter.post('/', upload.array("images",4),protect)