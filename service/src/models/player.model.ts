import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Team from "./team.model";

@Entity('player')
export default class Player {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ length: '256' })
    full_name: string;
    
    @Column({ length: '256' })
    short_name: string;
    
    @Column()
    id_team: number;

    @OneToOne(() => Team)
    @JoinColumn({name:'id_team'})
    team: Team;
}