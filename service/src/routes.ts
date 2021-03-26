import {Router} from 'express';
import PlayerRoutes from './routers/player.routes';
import StadiumRoutes from './routers/stadium.routes';
import TeamRoutes from './routers/team.routes';
import TransferRoutes from './routers/transfer.routes';

export default class Routes{
    private router: Router;

    constructor(){
        this.router = Router();
    }

    public init = (): Router =>{
        this.router.use(new StadiumRoutes().getRoutes());
        this.router.use(new TeamRoutes().getRoutes());
        this.router.use(new PlayerRoutes().getRoutes());
        this.router.use(new TransferRoutes().getRoutes());
        return this.router;
    }
}