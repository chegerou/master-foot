import { Router } from "express";
import StadiumController from "../controllers/stadium.conroller";
export default class StadiumRoutes {
    private service: StadiumController;

    constructor() {
        this.service = new StadiumController();
    }

    public getRoutes = (): Router => {
        const router = Router();
        router.use('/stadium', router);
        router.get('/', this.service.list);
        router.post('/', this.service.store);
        router.put('/', this.service.update);
        router.get('/:id', this.service.show);
        router.delete('/:id', this.service.remove);
        return router;
    }
}