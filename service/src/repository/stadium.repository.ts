import { DeleteResult, getRepository, Repository, UpdateResult } from "typeorm";
import Stadium from "../models/stadium.model";

export default class StadiumRepository extends Repository<Stadium>{
    private repository: Repository<Stadium>;

    constructor() {
        super();
        this.repository = getRepository(Stadium);
    }

    public store = async (data: Stadium): Promise<Stadium> => this.repository.save(data);

    public list = async (): Promise<Stadium[]> => this.repository.find();

    public show = async (id: number): Promise<Stadium> => this.repository.findOne({ where: { id } });

    public updateData = async (data: Stadium): Promise<UpdateResult> => this.repository.update(data.id, data);

    public removeData = async (id: number): Promise<DeleteResult> => this.repository.delete(id);
}