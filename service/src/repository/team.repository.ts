import { DeleteResult, getRepository, Repository, UpdateResult } from "typeorm";
import Team from "../models/team.model";

export default class TeamRepository extends Repository<Team> {
    private repository: Repository<Team>;

    constructor(){
        super();
        this.repository = getRepository(Team);
    }

    public store = async(data:Team): Promise<Team> => this.repository.save(data);

    public list = async (): Promise<Team[]> => this.repository.find();

    public show = async (id: number): Promise<Team> => this.repository.findOne({ where: { id } });

    public updateData = async (data: Team): Promise<UpdateResult> => this.repository.update(data.id, data);

    public removeData = async (id: number): Promise<DeleteResult> => this.repository.delete(id);

}