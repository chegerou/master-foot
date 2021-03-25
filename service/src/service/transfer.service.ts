import Transfer from "../models/transfer.model";
import TransferRepository from "../repository/transfer.repository";

export default class TransferService{ 
    private repository: TransferRepository;

    constructor(){
        this.repository = new TransferRepository();
    }

    public store = async(data: Transfer): Promise<Transfer> => this.repository.store(data);

    public listById = async(id: number): Promise<Transfer[]> => this.repository.listById(id);
}