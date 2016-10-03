module app.domain{
    export interface IProduct{
        productId:number;
        productName:string;
        releaseDate:Date;
        price:number;
        productCode:string;
        description:string;
        imageUrl:string;
        calculateDiscount(percent:number): number;
    }
    
    export class product implements IProduct{
        constructor(public productId:number,
                    public productName: string,
                    public productCode:string,  
                    public releaseDate:Date,
                    public price:number,
                    public description:string,
                    public imageUrl:string){
        
        }
        calculateDiscount(percent:number): number{
            return this.price - (this.price * percent/100);
        }
    }
}