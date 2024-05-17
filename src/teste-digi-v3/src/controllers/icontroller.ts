import { Request, Response } from "express";

export interface IController {
    invoke(req: Request, res: Response) : Promise<Response>
}