import { Router } from "express";
import PlayerController from "../controllers/player.controller";


export default class PlayerRoutes {
    private service: PlayerController;

    constructor() {
        this.service = new PlayerController();
    }

    public getRoutes = (): Router => {
        const router = Router();
        router.use('/player', router);
        router.get('/', this.service.list);
        router.post('/', this.service.store);
        router.put('/', this.service.update);
        router.get('/:id', this.service.show);
        router.delete('/:id', this.service.remove);
        return router;
    }
}