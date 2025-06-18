import CardComponent from "@/components/CardComponent";
import HorizontalCardComponent from "@/components/HorizontalCardComponent";
import type { ICardComponentProps } from "@/interface/ICardComponentProps";

interface ICardComponentPropsWithId extends ICardComponentProps {
  id: number;
}

const data: ICardComponentPropsWithId[] = [
  {
    id: 1,
    title: "Product 1",
    description: "Description for product 1",
    imageUrl: "/images/product1.jpg",
    price: 19.99,
    quantity: 1,
  },
  {
    id: 2,
    title: "Product 2",
    description: "Description for product 2",
    imageUrl: "/images/product2.jpg",
    price: 29.99,
    quantity: 1,
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description for product 3",
    imageUrl: "/images/product3.jpg",
    price: 39.99,
    quantity: 1,
  },
  {
    id: 4,
    title: "Product 4",
    description: "Description for product 4",
    imageUrl: "/images/product4.jpg",
    price: 49.99,
    quantity: 1,
  }
];

function HotProducts() {
    return <div className="w-full h-full flex flex-wrap justify-evenly items-center gap-2">
                  <CardComponent
                    key={data[0].id}
                    imageUrl={data[0].imageUrl}
                    title={data[0].title}
                    description={data[0].description}
                    price={data[0].price}
                    quantity={data[0].quantity}
                    onClickLiked={data[0].onClickLiked}
                  />
                  <div className="flex flex-col gap-2">
                    <HorizontalCardComponent/>
                    <HorizontalCardComponent/>
                  </div>
                  <div className="flex flex-col gap-2">
                    <HorizontalCardComponent/>
                    <HorizontalCardComponent/>
                  </div>
                  <CardComponent
                    key={data[1].id}
                    imageUrl={data[1].imageUrl}
                    title={data[1].title}
                    description={data[1].description}
                    price={data[1].price}
                    quantity={data[1].quantity}
                    onClickLiked={data[1].onClickLiked}
                  />
            </div>;
}

export default HotProducts;
