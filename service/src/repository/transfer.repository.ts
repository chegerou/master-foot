import { DeleteResult, getRepository, Repository, UpdateResult } from "typeorm";
import Transfer from "../models/transfer.model";

export default class TransferRepository extends Repository<Transfer>{
    private repository: Repository<Transfer>;

    constructor() {
        super();
        this.repository = getRepository(Transfer);
    }

    public store = async (data: Transfer): Promise<Transfer> => this.repository.save(data);

    public listByIdPlayer = async (id_player: number): Promise<Transfer[]> => this.repository
        .find({ where: { id_player }, relations: ['player', 'team_origin', 'team_destination'] });

    public list = async (): Promise<Transfer[]> => this.repository.find();

    public show = async (id: number): Promise<Transfer> => this.repository.findOne({ where: { id } });

    public updateData = async (data: Transfer): Promise<UpdateResult> => this.repository.update(data.id, data);

    public removeData = async (id: number): Promise<DeleteResult> => this.repository.delete(id);
}