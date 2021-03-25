import { getRepository, Repository } from "typeorm";
import Stadium from "../models/stadium.model";

export default class StadiumRepository extends Repository<Stadium>{
    private repository: Repository<Stadium>;

    constructor(){
        super();
        this.repository = getRepository(Stadium);
    }

    public store = async(data:Stadium): Promise<Stadium> => this.repository.save(data);
}