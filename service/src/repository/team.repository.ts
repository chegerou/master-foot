import { getRepository, Repository } from "typeorm";
import Team from "../models/team.model";

export default class TeamRepository extends Repository<Team> {
    private repository: Repository<Team>;

    constructor(){
        super();
        this.repository = getRepository(Team);
    }

    public store = async(data:Team): Promise<Team> => this.repository.save(data);

}