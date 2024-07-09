import React from "react";
import CarouselBox from "../UI/CarouselBox/CarouselBox";
import { IProduct } from "../../lib/types/products";
import CarouselBoxCard from "../UI/CarouselBox/CarouselBoxCard";

interface Props {
  products: IProduct[];
}
const SimilarProducts: React.FC<Props> = ({
  products,
}: {
  products: IProduct;
}) => {
  return (
    <div>
      <CarouselBox title="similarProducts" full={true}>
        {products.map((product) => {
            <CarouselBoxCard key={product.slug.current} product={product} />
        })}
      </CarouselBox>
    </div>
  );
};

export default SimilarProducts;
