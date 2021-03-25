import Team from "../models/team.model";
import TeamRepository from "../repository/team.repository";

export default class TeamService{ 
    private repository: TeamRepository;

    constructor(){
        this.repository = new TeamRepository();
    }

    public store = async(data: Team): Promise<Team> => this.repository.store(data);
}