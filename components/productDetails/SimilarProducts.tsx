import React from "react";
import CarouselBox from "../UI/CarouselBox/CarouselBox";
import { IProduct } from "../../lib/types/products";

interface Props {
  products: IProduct[];
}
const SimilarProducts: React.FC<Props> = ({ products }) => {
  return (
    <div>
      <CarouselBox title="similarProducts" full={true}></CarouselBox>
    </div>
  );
};

export default SimilarProducts;
