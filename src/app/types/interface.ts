export interface IProduct {
    _id: string;
    name: string;
    price: number;
    image: string;
    
  }

  export interface IDynamic {
    _id : string,
    name: string,
    price: number,
    description: string,
    category:string,
    image: string,
    colors: string[],
    sizes: string[],
    discountPercent: number,
    
  }