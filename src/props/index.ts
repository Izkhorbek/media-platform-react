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
