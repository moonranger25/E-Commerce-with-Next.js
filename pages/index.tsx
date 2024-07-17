import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { specialOfferProductsActions } from "../store/specialOfferProducts-slice";
import { newestProductsActions } from "../store/newestProduct-slice";

import dynamic from "next/dynamic";
import { client } from "../lib/client";

import Carousel from "../components/carousel";
import Benefits from "../components/Benefits";

const Category = dynamic(() => import("../components/category/Category"));
const Offers = dynamic(() => import("../components/Offers/Offers"));
const Newest = dynamic(() => import("../components/newest/Newest"));
const Brands = dynamic(() => import("../components/brands"));
const Banners = dynamic(() => import("../components/banners"), { ssr: false });

import { IProduct } from "../lib/types/products";
import { newestProductsFn } from "../utilities/sortByTimeStamp";

const Home: NextPage<{ products: IProduct[] }> = ({
  products,
}: {
  products: IProduct;
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const offersProducts = products.filter((item) => item.discount);
    dispatch(specialOfferProductsActions.addProducts(offersProducts));

    const sortedProductsByTimeStamp = newestProductsFn(products);
    dispatch(newestProductsActions.addProducts(sortedProductsByTimeStamp));
  }, [dispatch, products]);

  return (
    <div>
      <Carousel />
      <Benefits />
      <Offers />
      <Category />
      <Newest />
      <Brands />
      <Banners />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const productQuery = `*[_type=='product']`;
  const products = await client.fetch(productQuery);

  return {
    props: {
      products,
    },
  };
};
