import React from "react";
import CarouselBox from "../UI/CarouselBox/CarouselBox";
import CarouselBoxCard from "../UI/CarouselBox/CarouselBoxCard";
import { IProduct } from "../../lib/types/products";

interface Props {
  products: IProduct[];
}
const SimilarProducts: React.FC<Props> = ({ products }) => {
  return (
    <div>
      <CarouselBox title="similarProducts" full={true}>
        {products.map((product) => (
          <CarouselBoxCard key={product.slug.current} product={product} />
        ))}
      </CarouselBox>
    </div>
  );
};

export default SimilarProducts;
