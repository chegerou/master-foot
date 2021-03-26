import { Request, Response } from "express";
import Transfer from "../models/transfer.model";
import TransferService from "../service/transfer.service";

export default class TransferController {

    private service: TransferService;

    constructor() {
        this.service = new TransferService();
    }

    public store = async (req: Request, res: Response): Promise<Response> => {
        const result = await this.service.store(req.body as Transfer);
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

    public listByIdPlayer = async (req: Request, res: Response): Promise<Response> => {
        const result = await this.service.listByIdPlayer((req.params.id as unknown) as number);
        return res.send(result);
    }

    public update = async (req: Request, res: Response): Promise<Response> => {
        const result = await this.service.update(req.body as Transfer);
        return res.send(result);
    }

    public remove = async (req: Request, res: Response): Promise<Response> => {
        const result = await this.service.remove((req.params.id as unknown) as number);
        return res.send(result);
    }
}