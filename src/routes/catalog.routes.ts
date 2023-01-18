
import { Router } from 'express';
const router = Router();

import { create, findAll, findAllPublished, findOne, update, deletefn, deleteAll } from "../controllers/tutorial.controller.js";

// 在每一個請求被處理之前都會執行的 middleware
router.use(function(req, res, next) {

  // 輸出記錄訊息至終端機
  console.log('catalog router.use =', req.method + req.url);

  // 繼續路由處理
  next();
});

// http://192.168.248.34:3000/catalog/ test --------------------------------------------------------------
// Create a new Tutorial
router.post("/", create);

// Retrieve all Tutorials
router.get("/", findAll);

// Retrieve all published Tutorials
router.get("/published", findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", findOne);

// Update a Tutorial with id
router.put("/:id", update);

// Delete a Tutorial with id
router.delete("/:id", deletefn);

// Delete all Tutorials
router.delete("/", deleteAll);

export default router;
