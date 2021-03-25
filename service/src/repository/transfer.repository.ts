import { getRepository, Repository } from "typeorm";
import Transfer from "../models/transfer.model";

export default class TransferRepository extends Repository<Transfer>{
    private repository: Repository<Transfer>;

    constructor() {
        super();
        this.repository = getRepository(Transfer);
    }

    public store = async (data: Transfer): Promise<Transfer> => this.repository.save(data);

    public listById = async (id_player: number): Promise<Transfer[]> => this.repository
        .find({ where: { id_player }, relations: ['player', 'team_origin', 'team_destination'] });
}