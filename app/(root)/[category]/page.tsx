"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "lib/hooks";
import {
  fetchProductsByCategory,
  productByCategoryAPIStatus,
  productByCategoryProducts,
} from "lib/features/products/productsByCategory.slice";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import Loader from "@/components/shared/Loader/Loader";

const page = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const apiStatus = useAppSelector(productByCategoryAPIStatus);
  const products = useAppSelector(productByCategoryProducts);
  const [clothingCategory, setClothingCategory] = useState("");

  useEffect(() => {
    const pathParameter = params.category;
    if (pathParameter !== undefined) {
      const pathName = location.pathname.substring(1);
      if (pathName === "mens-clothing") {
        const params = {
          category: `men's clothing`,
        };
        setClothingCategory(`men's clothing`);
        dispatch(fetchProductsByCategory(params));
      } else if (pathName === "womens-clothing") {
        const params = {
          category: `women's clothing`,
        };
        setClothingCategory(`women's clothing`);
        dispatch(fetchProductsByCategory(params));
      }
    }
  }, [params]);

  if (apiStatus === "loading") {
    return <Loader />;
  }
  return (
    <section>
      <SectionTitle title={clothingCategory} />

      <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 custom-grid">
        {products.length > 0 &&
          products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
      </div>
    </section>
  );
};

export default page;
