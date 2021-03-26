import {Router} from 'express';
import StadiumRoutes from './routers/stadium.routes';

export default class Routes{
    private router: Router;

    constructor(){
        this.router = Router();
    }

    public init = (): Router =>{
        this.router.use(new StadiumRoutes().getRoutes());
        return this.router;
    }
}