import { Router } from "express";
import TransferController from "../controllers/transfer.controller";


export default class TransferRoutes {
    private service: TransferController;

    constructor() {
        this.service = new TransferController();
    }

    public getRoutes = (): Router => {
        const router = Router();
        router.use('/transfer', router);
        router.get('/', this.service.list);
        router.post('/', this.service.store);
        router.put('/', this.service.update);
        router.get('/player/:id', this.service.listByIdPlayer);
        router.get('/:id', this.service.show);
        router.delete('/:id', this.service.remove);
        return router;
    }
}