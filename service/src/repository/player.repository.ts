import { DeleteResult, getConnection, getRepository, Repository, UpdateResult } from "typeorm";
import Player from "../models/player.model";

export default class PlayerRepository extends Repository<Player>{
    private repository: Repository<Player>;

    constructor(){
        super();
        this.repository =  getRepository(Player);
    }

    public store = async(data:Player): Promise<Player> => this.repository.save(data);

    public list = async (): Promise<Player[]> => this.repository.find();

    public show = async (id: number): Promise<Player> => this.repository.findOne({ where: { id } });

    public updateData = async (data: Player): Promise<UpdateResult> => this.repository.update(data.id, data);

    public removeData = async (id: number): Promise<DeleteResult> => this.repository.delete(id);
}