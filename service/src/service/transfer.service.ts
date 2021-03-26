import Transfer from "../models/transfer.model";
import TransferRepository from "../repository/transfer.repository";

export default class TransferService{ 
    private repository: TransferRepository;

    constructor(){
        this.repository = new TransferRepository();
    }

    public store = async(data: Transfer): Promise<Transfer> => this.repository.store(data);

    public listByIdPlayer = async(id: number): Promise<Transfer[]> => this.repository.listByIdPlayer(id);

    public list = async(): Promise<Transfer[]> => this.repository.list();

    public show = async (id: number): Promise<Transfer> => this.repository.show(id);

    public update = async (data: Transfer): Promise<Transfer> => {
        await this.repository.updateData(data);
        return this.show(data.id);
    };

    public remove = async (id: number): Promise<string> => {
        const object = await this.show(id);
        if(object){
            await this.repository.removeData(id);
            return 'O estádio foi removido.'
        }
        return 'Não é possível remover uma transação que não se encontra na base de dados.';
    };
}