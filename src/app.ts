// import express from "express";
import express, { Express, Request, Response } from 'express'
import logger from "morgan";
import * as path from "path";
import bodyParser from "body-parser";
import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
import index from "./routes/index";
import catalogRouter from './routes/catalog.routes';  //Import routes for "catalog" area of site
import  userRouter  from "./routes/flds_user.routes";
import articlesRouter from './routes/articles.router';
// const flds_userRouter = require('./routes/flds_user.routes.ts');  //Import routes for "product" area of site
// Create Express server
export const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../public")));
// console.log( __dirname );
// console.log( __filename );

//middleware
app.use('/', index);
app.use('/catalog', catalogRouter);
//
// app.get('/', (req: Request, res: Response) => {
//   // console.log( req );
//   res.status(200).send('Welcome');
// });
app.use('/user', userRouter);
app.use('/articles', articlesRouter);

// app.use('/catalog/user', index);  // Add product routes to middleware chain.
// console.log( __dirname );
// console.log( __filename );

app.use(errorNotFoundHandler);
app.use(errorHandler);
