interface Variant {
  node: {
    price: {
      amount: string;
      currencyCode: string;
    };
  };
}

export interface ProductCardType {
  node: {
    id: string;
    title: string;
    description: string;
    featuredImage: {
      id: string;
      url: string;
    };
    variants: { edges: Variant[] };
  };
}
export interface ProductCardProps{
  product:ProductCardType;
}

interface Edges{
  node:{
    url:string
  }
}
export interface ProductID {
  id: string;
  title: string;
  description: string;
  images:{
    edges:Edges[];

  }
  variants:{edges:Variant[]}
}

