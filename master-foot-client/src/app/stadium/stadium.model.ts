export class Stadium {
    id: number;
    full_name: string;
	short_name: string;
	capacity: number;

    constructor(stadium: any){
        stadium = stadium || {};
        this.id = stadium.id || null;
        this.full_name = stadium.full_name || null;
        this.short_name = stadium.short_name || null;
        this.capacity = stadium.capacity || null;
    }
}
