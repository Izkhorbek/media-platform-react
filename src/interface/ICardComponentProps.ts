export interface ICardComponentProps {
      imageUrl?: string;
      title: string;
      description: string;
      price: string | number;
      quantity: string | number;
      onClickLiked?: () => void;
}
