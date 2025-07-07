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

export interface CardComponentProps {
   product: Product;
   onClick: (id: number) => void;
   onViewDetails: (id: number) => void;
   onAddToCart: (id: number) => void;
}

export type ImageProps = {
   src: string;
   alt?: string;
   className?: string;
   style?: React.CSSProperties;
   onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
   loading?: 'lazy' | 'eager';
};

export type CommentProps = {
   id: string;
   userId: string;
   content: string;
   createdAt: string;
   updatedAt: string;
   user?: {
      id: string;
      username: string;
      avatarUrl?: string;
   };
   replies?: CommentProps[];
   imageUrls?: string[];
};
