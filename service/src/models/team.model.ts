import { Column, Entity,JoinColumn,OneToOne,PrimaryGeneratedColumn } from "typeorm";
import Stadium from "./stadium.model";

@Entity('team')
export default class Team {

    @PrimaryGeneratedColumn()
    id: number;

	 @Column({length: '256'})
    full_name: string;
	
     @Column({length: '256'})
    short_name: string;
	
    @Column()
    founded: Date;
	
    @Column()
    id_stadium: number;

    @OneToOne(() => Stadium)
    @JoinColumn({name: 'id_stadium'})
    stadium: Stadium;
}