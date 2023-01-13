'use strict';
import express from 'express';
const router = express.Router();

import * as flds_user from "../controllers/flds_user.controller.js";

// 在每一個請求被處理之前都會執行的 middleware
router.use(function(req, res, next) {

  // 輸出記錄訊息至終端機
  console.log('flds_user.router.use =', req.method + req.url);

  // 繼續路由處理
  next();
});

// // Retrieve all flds_user
// router.get("/", flds_user.findAll);
// // router.post("/", flds_user.findAll);
// router.post("/", flds_user.create);

// router.get("/findsearch", flds_user.findSearch);

// // // Retrieve all flds_user
// // router.get("/create", flds_user.findAll);
// // // Create a new Location
// // router.post("/create", flds_user.create);

// // Retrieve a single Location with id
// router.get("/:id", flds_user.findOne);
// // router.post("/:id", flds_user.create);

// // Update a Location with id
// router.put("/:id", flds_user.update);

// // Delete a Location with id
// router.delete("/:id", flds_user.delete);

// // Delete all Location
// // router.delete("/", flds_user.deleteAll);

// // module.exports = router;
export default router;

// ********  說明  ********
// 是以 REST 風格來開發 RESTful API
// 獲取使用者資料 /GET /users
// 獲取使用者資料 /GET /user/1
// 新增使用者資料 /POST /user
// 更新使用者資料 /PUT /user/1
// 刪除使用者資料 /DELETE /user/1
