import express from "express";
import { allItems } from "../controllers/tasks";

const router = express.Router();

router.route("/").get(allitems);

module.exports = router;
