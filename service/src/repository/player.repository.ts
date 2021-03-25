import { getConnection, getRepository, Repository } from "typeorm";
import Player from "../models/player.model";

export default class PlayerRepository extends Repository<Player>{
    private repository: Repository<Player>;

    constructor(){
        super();
        this.repository =  getRepository(Player);
    }

    public store = async(data:Player): Promise<Player> => this.repository.save(data);
}