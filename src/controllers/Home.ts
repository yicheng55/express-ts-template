/**
 * Define the API base url
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

// import Locals from '../../providers/Locals';
import express, { Express, Request, Response } from 'express'

class Home {
	public static index(req: Request, res: Response): any {
		return res.json({
			message: 'Locals.config().name',
		});
	}
}

export default Home;
