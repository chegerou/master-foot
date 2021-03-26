import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
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

    @ManyToMany(() => Team)
    @JoinColumn({name:'id_team'})
    team: Team;
}