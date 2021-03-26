import { Router } from "express";
import TeamController from "../controllers/team.controller";

export default class TeamRoutes {
    private service: TeamController;

    constructor() {
        this.service = new TeamController();
    }

    public getRoutes = (): Router => {
        const router = Router();
        router.use('/team', router);
        router.get('/', this.service.list);
        router.post('/', this.service.store);
        router.put('/', this.service.update);
        router.get('/:id', this.service.show);
        router.delete('/:id', this.service.remove);
        return router;
    }
}