import Player from "../models/player.model";
import PlayerRepository from "../repository/player.repository";

export default class PlayerService{ 
    private repository: PlayerRepository;

    constructor(){
        this.repository = new PlayerRepository();
    }

    public store = async(data: Player): Promise<Player> => this.repository.store(data);
}