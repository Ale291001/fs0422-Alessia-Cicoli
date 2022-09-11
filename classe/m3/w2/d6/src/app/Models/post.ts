export class Post {
    id!:number;
    title:string;
    active:boolean;

    constructor(title:string, active:boolean) {
    
        this.title=title    
        this.active=active

    }
}
