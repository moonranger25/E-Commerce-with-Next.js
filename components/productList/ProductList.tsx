import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { IProduct } from "../../lib/types/products";
import { useLanguage } from "../../hooks/useLanguage";
import SubmenuCategory from "./SubmenuCategory";
import Card from "../UI/card/Card";
import Breadcrumb from "../UI/Breadcrumb";
import { SortedProductsListActions } from "../../store/sortedProductList-slice";
import { IProductListRootState } from '../../lib/types/productList';

interface Props {
  productList: IProduct[];
}
const ProductList: React.FC<Props> = ({
  productList,
}: {
  productList: Props;
}) => {
  const router = useRouter();
  const { t } = useLanguage();

  let isInNewestProductsPage =
    router.pathname === "/newestProducts" ? true : false;

  const [selectedRadioBtn, setSelectedRadioBtn] = useState<string>("all");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      SortedProductsListActions.sortProductList({
        productList: productList,
        sortBasedOn: selectedRadioBtn,
      })
    );
  }, [dispatch, productList, selectedRadioBtn]);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedRadioBtn(e.currentTarget.id);
  }

  const sortedProductList = useSelector(
    (state: IProductListRootState) => state.sortedProductsList.productsList
  );

  return (
    <div>
      <Breadcrumb />
      <SubmenuCategory />
      <div className="w-full xl:max-w-[2100px] mx-auto">
        {isInNewestProductsPage && productList.length ? (
          <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12">
            {productList
              ? productList.map((product: IProduct) => {
                  return <Card key={product.slug.current} product={product} />;
                })
              : null}
          </div>
        ) : sortedProductList && sortedProductList.length ? (
          <div>
            <Sort
              selectedBtn={selectedRadioBtn}
              onChangeSelectedBtn={onChangeHandler}
            />
            <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12">
              {sortedProductList.map((product: IProduct) => {
                return <Card key={product.slug.current} product={product} />;
              })}
            </div>
          </div>
        ) : (
          <p className="text-palette-mute text-center mt-8">{t.noProduct}</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
