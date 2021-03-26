import { Request, Response } from "express";
import Stadium from "../models/stadium.model";
import StadiumService from "../service/stadium.service";

export default class StadiumController {

    private service: StadiumService;

    constructor() {
        this.service = new StadiumService();
    }

    public store = async (req: Request, res: Response): Promise<Response> => {
        const result = await this.service.store(req.body as Stadium);
        return res.send(result);
    }

    public show = async (req: Request, res: Response): Promise<Response> => {
        const result = await this.service.show((req.params.id as unknown) as number);
        return res.send(result);
    }

    public list = async (req: Request, res: Response): Promise<Response> => {
        const result = await this.service.list();
        return res.send(result);
    }

    public update = async (req: Request, res: Response): Promise<Response> => {
        const result = await this.service.update(req.body as Stadium);
        return res.send(result);
    }

    public remove = async (req: Request, res: Response): Promise<Response> => {
        const result = await this.service.remove((req.params.id as unknown) as number);
        return res.send(result);
    }
}