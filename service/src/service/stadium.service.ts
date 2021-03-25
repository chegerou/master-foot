import Stadium from "../models/stadium.model";
import StadiumRepository from "../repository/stadium.repository";

export default class StadiumService{ 
    private repository: StadiumRepository;

    constructor(){
        this.repository = new StadiumRepository();
    }

    public store = async(data: Stadium): Promise<Stadium> => this.repository.store(data);

    public list = async(): Promise<Stadium[]> => this.repository.list();

    public show = async (id: number): Promise<Stadium> => this.repository.show(id);

    public update = async (data: Stadium): Promise<Stadium> => {
        await this.repository.updateData(data);
        return this.show(data.id);
    };

    public remove = async (id: number): Promise<string> => {
        const object = await this.show(id);
        if(object){
            await this.repository.removeData(id);
            return 'O estádio foi removido.'
        }

        return 'Não é possível remover um estádio que não se encontra na base de dados.';
    };
}