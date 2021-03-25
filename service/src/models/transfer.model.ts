import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @OneToOne(() => Team)
    @JoinColumn(({name:'origin'}))
    team_origin: Team;

    @OneToOne(() => Team)
    @JoinColumn(({name:'destination'}))
    team_destination: Team;
}