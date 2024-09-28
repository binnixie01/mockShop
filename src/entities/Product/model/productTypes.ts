interface Variant {
    node: {
      price: {
        amount: string;
        currencyCode: string;
      };
    };
  }

export interface ProductCardProps {
   node:{
      id: string;
      title: string;
      description:string
      featuredImage: {
        id: string;
        url: string;
      };
      variants:{edges:Variant[]}
  }}

export interface ProductID {
  id:string;
      title:string;
      description:string;
      featuredImage: {
        id:string;
        url:string;
      };
}

// export interface 