export class foodstuff{
    public name: string;
    public description: string;
    public imagePath: string;
    public price:number;
    public rating?: number;

    constructor(name:string, desc:string,price:number, imagePath:string,rating?:number){
        this.name=name;
        this.description=desc;
        this.price=price;
        this.imagePath=imagePath;
        this.rating = rating;
    }
    static createWithoutRating(name: string, description: string, price: number, imagePath: string): foodstuff {
        return new foodstuff(name, description, price, imagePath);
    }
    static createWithRating(name: string, description: string, price: number, imagePath: string, rating: number): foodstuff {
        return new foodstuff(name, description, price, imagePath, rating);
    }
}