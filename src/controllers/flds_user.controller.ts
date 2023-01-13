
import { Router } from 'express';
// import * as expressJwt from 'express-jwt';

// import Locals from '../providers/Locals';

import HomeController from '../controllers/Home';
// import LoginController from '../controllers/Api/Auth/Login';
// import RegisterController from '../controllers/Api/Auth/Register';
// import RefreshTokenController from '../controllers/Api/Auth/RefreshToken';

const router = Router();

router.get('/', HomeController.index);

// router.post('/auth/login', LoginController.perform);
// router.post('/auth/register', RegisterController.perform);
// router.post('/auth/refresh-token', expressJwt({ secret: Locals.config().appSecret }), RefreshTokenController.perform);

export default router;


// 'use strict';
// import async from 'async';
// import { isNullOrUndefined } from 'url/util.js';
// import Flds_user from '../models/flds_user.model.js';
// const Logger = require('../comm/logger').Controllerlogger;

// // Logger.info('//*********************** Flds_user.controller.js start..... *******************// ');

// // Create and Save a new Flds_user
// exports.create = async(req, res) => {
//   // Validate request
//   console.log('create query = %s', req.query);
//   console.log('create body = %s', req.body);
//   console.log('create params = %s', req.params);

//   if (!req.body) {
//     let msg = {
//       message: "Content can not be empty!"
//     };
//     res.status(400);
//     res.json(msg);
//     return ;
//   }

//   try {
//     const flds_user = new Flds_user({
//       users_id : req.body.users_id,
//       name : req.body.name,
//       compid: req.body.compid,
//       deptid : req.body.deptid,
//       password : req.body.password,
//     });
//     console.log('Flds_user = %s', flds_user);

//     let Flds_comp = global.userConfig.flds_comp;
//     const TABLE_NAME = Flds_comp+'.flds_user';

//       // 第二種方式同步語法
//       const result2 = await Flds_user.create(flds_user, TABLE_NAME);
//       console.log('result2');
//       console.log(result2);
//       // res.json(result2);
//       let msgret = {
//         code: 200,
//         msg: `Flds_user creat successfully  users_id: ${result2.users_id}`,
//         data: result2
//       };
//       res.json(msgret);

//   } catch (error) {
//     // console.log(error.code);
//     res.status(500);
//     let msgret = {
//       code: error.errno,
//       msg: error.code,
//       sqlMessage: error.sqlMessage
//       // data: error
//     };
//     res.json(msgret);
//     Logger.info('msgret = %s', msgret);
//   }

// };

// // 同步功能實現 async/await/Promise .
// exports.findAll = async(req, res) => {
//   console.log('findAll query = %s', req.query);
//   console.log('findAll body = %s', req.body);
//   console.log('findAll params = %s', req.params);

//   // let table = 'products';
//   // const promise1 = await Flds_user.getAll(table);
//   // console.log('promise1');
//   // console.log(promise1);
//   // // res.json(promise1);

//   // table = 'Flds_user_tables';
//   let table = `${global.userConfig.flds_comp}.flds_user`;
//   // 跨不同資料庫+table, #RFID.資料庫代號=公司代號
//   console.log('table: %s', table);
//   const promise2 = await Flds_user.getAll(table);
//   console.log('promise2');
//   console.log(promise2);
//   // res.json(promise2);

//   let msgret = {
//     code: 200,
//     msg: `flds_user findAll successfully.`,
//     data: promise2
//   };
//   res.json(msgret);
// };


// // 同步功能實現 async/await/Promise .
// exports.findSearch = async(req, res) => {
//   console.log('findSearch query = %s', req.query);
//   console.log('findSearch body = %s', req.body);
//   console.log('findSearch params = %s', req.params);

//   // let table = 'products';
//   // const promise1 = await Flds_user.getAll(table);
//   // console.log('promise1');
//   // console.log(promise1);
//   // // res.json(promise1);
//   try {
//     // table = 'Flds_user_tables';
//     let table = `${global.userConfig.flds_comp}.flds_user`;
//     // 跨不同資料庫+table, #RFID.資料庫代號=公司代號
//     console.log('table: %s', table);
//     const result = await Flds_user.findSearch(table, req.query);
//     console.log('result');
//     console.log(result);
//     // res.json(promise2);

//     if(isNullOrUndefined(result[0])){
//       let msgret = {
//         code: 200,
//         msg: `Flds_user Not find list.`,
//         // data: result
//       };
//       res.json(msgret);
//       return ;
//     }

//     let msgret = {
//       code: 200,
//       msg: `Flds_user findSearch successfully.`,
//       data: result
//     };
//     res.json(msgret);

//   } catch (error) {
//     console.log(error);
//     // console.log(result_LocationID);
//     res.status(500);
//     let msgret = {
//       code: 500,
//       msg: 'findSearch error.',
//       // sqlMessage: error.sqlMessage
//       // data: error
//     };
//     res.json(msgret);
//     Logger.info('msgret = %s', msgret);
//   }

// };

// // Find a single Flds_user by Id
// exports.findOne = async(req, res) => {
//   console.log('Flds_user findOne query = %s', req.query);
//   console.log('Flds_user findOne body = %s', req.body);
//   console.log('Flds_user findOne params = %s', req.params);
//   // JSON.stringify(shelfrecord)
//   let Flds_comp = global.userConfig.flds_comp;
//   const TABLE_NAME = Flds_comp+'.flds_user';

//   try {
//       let result;
//       result = await Flds_user.findById(req.params.id, TABLE_NAME);
//       console.log('result');
//       console.log(result);

//       let msgret = {
//         code: 200,
//         msg: `Flds_user findOne:  ${req.params.id} successfully.`,
//         data: result
//       };
//       res.json(msgret);

//   } catch (error) {
//     // console.log(error.code);
//     res.status(500);
//     let msgret = {
//       code: error.errno,
//       msg: error.code,
//       sqlMessage: error.sqlMessage
//       // data: error
//     };
//     res.json(msgret);
//     Logger.info('msgret = %s', msgret);
//   }
// };

// // Update a flds_user identified by the id in the request
// exports.update = async(req, res) => {
//   console.log('update query = %s', req.query);
//   console.log('update body = %s', req.body);
//   console.log('update params = %s', req.params);
//   try {
//       const flds_user = new Flds_user({
//         users_id : req.params.id,
//         name : req.body.name,
//         compid: req.body.compid,
//         deptid : req.body.deptid,
//         password : req.body.password,
//       });

//       // console.log('flds_user = %s', flds_user);
//       Logger.info('flds_user = %s', flds_user);


//       let Flds_comp = global.userConfig.flds_comp;
//       const TABLE_NAME = Flds_comp+'.flds_user';
//       const result = await Flds_user.updateById((req.params.id), flds_user, TABLE_NAME);
//       console.log(result);

//       // if(result.result === 'not_found')
//       if( isNullOrUndefined(result[0]) )
//       {
//         let msgret = {
//           code: 500,
//           msg: `Not found uid: ${req.params.id}`
//           // data: data
//         };

//         res.status(500);
//         res.json(msgret);
//         Logger.info('msgret = %s', msgret);
//       }
//       else{
//         let msgret = {
//           code: 200,
//           msg: `Flds_user updateById successfully.`,
//           data: result
//         };
//         res.json(msgret);
//       }

//   } catch (error) {
//     // console.log(error.code);
//     res.status(500);
//     let msgret = {
//       code: error.errno,
//       msg: error.code,
//       sqlMessage: error.sqlMessage
//       // data: error
//     };
//     res.json(msgret);
//     Logger.info('msgret = %s', msgret);
//   }
// };

// // Delete a Flds_user with the specified id in the request
// exports.delete = async(req, res) => {
//   console.log('delete query = %s', req.query);
//   console.log('delete body = %s', req.body);
//   console.log('delete params = %s', req.params);
//   // JSON.stringify(req.params.id)

//   try {
//     let Flds_comp = global.userConfig.flds_comp;
//     const TABLE_NAME = Flds_comp+'.flds_user';
//     const result1 = await Flds_user.remove(req.params.id, TABLE_NAME);
//     // const result = await Product.findByPn(req.params.id);
//     // console.log('result1:');
//     console.log(result1);

//     // if(result1.result === 'not_found'){
//     if( isNullOrUndefined(result1[0]) ) {
//       let msgret = {
//         code: 400,
//         msg: `Not found users_id: ${req.params.id}`
//         // data: data
//       };

//       res.status(500);
//       res.json(msgret);
//       Logger.info('msgret = %s', msgret);
//     }
//     else{
//       let msgret = {
//         code: 200,
//         msg: `deleteOne successfully users_id: ${req.params.id}`,
//         // data: result1
//       };
//       res.json(msgret);
//     }

//   } catch (error) {
//     // console.log(error.code);
//     res.status(500);
//     let msgret = {
//       code: error.errno,
//       msg: error.code,
//       sqlMessage: error.sqlMessage
//       // data: error
//     };
//     res.json(msgret);
//     Logger.info('msgret = %s', msgret);
//   }

// };

// // Delete all Flds_user from the database.
// exports.deleteAll = async(req, res) => {
//   console.log('delete query = %s', req.query);
//   console.log('delete body = %s', req.body);
//   console.log('delete params = %s', req.params);

//   try {

//     let Flds_comp = global.userConfig.flds_comp;
//     const TABLE_NAME = Flds_comp+'.flds_user';
//     const result1 = await Flds_user.removeAll(TABLE_NAME);
//     console.log(result1);

//     // Product.removeAll((err, data) => {
//     //   if (err)
//     //     res.status(500).send({
//     //       message:
//     //         err.message || "Some error occurred while removing all Products."
//     //     });
//     //   else res.send({ message: `All Products were deleted successfully!` });
//     // });
//     // res.send(req);
//     let msgret = {
//       code: 200,
//       msg: `Deleted ${result1.affectedRows} successfully `,
//       // data: result1
//     };
//     res.json(msgret);

//   } catch (error) {
//     // console.log(error.code);
//     res.status(500);
//     let msgret = {
//       code: error.errno,
//       msg: error.code,
//       sqlMessage: error.sqlMessage
//       // data: error
//     };
//     res.json(msgret);
//     Logger.info('msgret = %s', msgret);
//   }

// };
