import Team from "../models/team.model";
import TeamRepository from "../repository/team.repository";

export default class TeamService{ 
    private repository: TeamRepository;

    constructor(){
        this.repository = new TeamRepository();
    }

    public store = async(data: Team): Promise<Team> => this.repository.store(data);

    public list = async(): Promise<Team[]> => this.repository.list();

    public show = async (id: number): Promise<Team> => this.repository.show(id);

    public update = async (data: Team): Promise<Team> => {
        await this.repository.updateData(data);
        return this.show(data.id);
    };

    public remove = async (id: number): Promise<string> => {
        const object = await this.show(id);
        if(object){
            await this.repository.removeData(id);
            return 'O estádio foi removido.'
        }
        return 'Não é possível remover uma equipe que não se encontra na base de dados.';
    };
}