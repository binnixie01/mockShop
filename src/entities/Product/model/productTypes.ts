interface Variant {
  node: {
    price: {
      amount: string;
      currencyCode: string;
    };
  };
}

export interface ProductCardProps {
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

