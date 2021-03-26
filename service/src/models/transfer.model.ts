import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Player from "./player.model";
import Team from "./team.model";

@Entity('transfer')
export default class Transfer {
	
    @PrimaryGeneratedColumn()
    id: number;
	
    @Column()
    origin: number;
	
    @Column()
    destination: number;
	
    @Column()
    moment: Date;
	
    @Column()
    id_player: number;

    @ManyToOne(() => Player)
    @JoinColumn({name: 'id_player'})
    player: Player;

    @ManyToOne(() => Team)
    @JoinColumn(({name:'origin', referencedColumnName: 'id'}))
    team_origin: Team;

    @ManyToOne(() => Team)
    @JoinColumn(({name:'destination', referencedColumnName: 'id'}))
    team_destination: Team;
}