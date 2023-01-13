import express from "express";
import logger from "morgan";
import * as path from "path";

import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
import { index } from "./routes/index";
import  router  from "./routes/flds_user.routes";
// const flds_userRouter = require('./routes/flds_user.routes.ts');  //Import routes for "product" area of site
// Create Express server
export const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "../public")));
app.use("/", index);
app.use('/catalog/user', index);  // Add product routes to middleware chain.
// console.log( __dirname );
// console.log( __filename );

app.use(errorNotFoundHandler);
app.use(errorHandler);
