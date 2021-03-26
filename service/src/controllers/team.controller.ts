import { Request, Response } from "express";
import Team from "../models/team.model";
import TeamService from "../service/team.service";

export default class TeamController {

    private service: TeamService;

    constructor() {
        this.service = new TeamService();
    }

    public store = async (req: Request, res: Response): Promise<Response> => {
        const result = await this.service.store(req.body as Team);
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
        const result = await this.service.update(req.body as Team);
        return res.send(result);
    }

    public remove = async (req: Request, res: Response): Promise<Response> => {
        const result = await this.service.remove((req.params.id as unknown) as number);
        return res.send(result);
    }
}