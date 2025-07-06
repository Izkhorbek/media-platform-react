export interface ICardComponentProps {
   imageUrl: string;
   title: string;
   description: string;
   price: string | number;
   quantity: string | number;
   onClickLiked?: () => void;
}

export interface Product {
   id: number;
   name: string;
   price: number;
   originalPrice?: number;
   image: string;
   rating: number;
   reviews: number;
   seller: string;
   category: string;
   isHot?: boolean;
   isNew?: boolean;
   description: string;
   features: string[];
   images: string[];
}

export interface ProductModalProps {
   product: Product | null;
   open: boolean;
   onClose: () => void;
   onToggleWishlist: (id: number) => void;
   onAddToCart: (id: number) => void;
   isInWishlist: boolean;
}
