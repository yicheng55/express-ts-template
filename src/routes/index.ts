import express from 'express';
import * as controller from "../controllers/index";

const router = express.Router();
router.get('/', function (req, res) {
    console.log('req = %s', req);
    res.redirect('/catalog');
});

// router.get('/', articlesController.getAll)
// index.get("/", controller.index);
export { router as default };
