import { Request, Response } from "express";
import Player from "../models/player.model";
import PlayerService from "../service/player.service";

export default class PlayerController {

    private service: PlayerService;

    constructor() {
        this.service = new PlayerService();
    }

    public store = async (req: Request, res: Response): Promise<Response> => {
        const result = await this.service.store(req.body as Player);
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
        const result = await this.service.update(req.body as Player);
        return res.send(result);
    }

    public remove = async (req: Request, res: Response): Promise<Response> => {
        const result = await this.service.remove((req.params.id as unknown) as number);
        return res.send(result);
    }
}