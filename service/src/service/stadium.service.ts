import Stadium from "../models/stadium.model";
import StadiumRepository from "../repository/stadium.repository";

export default class StadiumService{ 
    private repository: StadiumRepository;

    constructor(){
        this.repository = new StadiumRepository();
    }

    public store = async(data: Stadium): Promise<Stadium> => this.repository.store(data);
}