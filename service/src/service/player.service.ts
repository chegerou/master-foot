import Player from "../models/player.model";
import PlayerRepository from "../repository/player.repository";

export default class PlayerService{ 
    private repository: PlayerRepository;

    constructor(){
        this.repository = new PlayerRepository();
    }

    public store = async(data: Player): Promise<Player> => this.repository.store(data);

    public list = async(): Promise<Player[]> => this.repository.list();

    public show = async (id: number): Promise<Player> => this.repository.show(id);

    public update = async (data: Player): Promise<Player> => {
        await this.repository.updateData(data);
        return this.show(data.id);
    };

    public remove = async (id: number): Promise<string> => {
        const object = await this.show(id);
        if(object){
            await this.repository.removeData(id);
            return 'O estádio foi removido.'
        }

        return 'Não é possível remover um jogador que não se encontra na base de dados.';
    };
}