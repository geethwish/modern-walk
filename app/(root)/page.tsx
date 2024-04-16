"use client";
import Carousel from "@/components/shared/Carousel/Carousel";
import CategoryCard from "@/components/shared/CategoryCard/CategoryCard";
import Loader from "@/components/shared/Loader/Loader";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import {
  cleanFlashSales,
  fetchFlashProducts,
  flashProducts,
  flashProductsApiStatus,
} from "lib/features/products/flashSales.slice";
import { useAppDispatch, useAppSelector } from "lib/hooks";
import React, { useEffect } from "react";
import { SwiperSlide } from "swiper/react";
const page = () => {
  const dispatch = useAppDispatch();
  const apiStatus = useAppSelector(flashProductsApiStatus);
  const products = useAppSelector(flashProducts);

  // fetch flash product when component loading
  useEffect(() => {
    dispatch(fetchFlashProducts({ limit: 20 }));

    return () => {
      dispatch(cleanFlashSales());
    };
  }, []);

  if (apiStatus === "loading") {
    return <Loader />;
  }

  return (
    <main>
      <section>
        <SectionTitle title="Flash Sales" />
        {products.length > 0 && (
          <Carousel>
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Carousel>
        )}
      </section>
      <section>
        <SectionTitle title="Categories" />
        <div className="grid grid-cols-2 gap-8 px-2">
          <CategoryCard
            title={"men's clothing"}
            color="#2bd9af"
            path="mens-clothing"
          />
          <CategoryCard
            title={"women's clothing"}
            color="#ff5e84"
            path="womens-clothing"
          />
        </div>
      </section>
    </main>
  );
};

export default page;
