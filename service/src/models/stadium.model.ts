import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('stadium')
export default class Stadium {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: '256'})
    full_name: string;

    @Column({length: '256'})
	short_name: string;
    
    @Column()
	capacity: number;
}