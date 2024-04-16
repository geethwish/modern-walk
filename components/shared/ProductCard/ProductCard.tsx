import React, { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Rating = {
  rate: number;
  count: number;
};
interface IProductCard {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string | null;
    rating: Rating;
  };
}

const ProductCard: FC<IProductCard> = ({ product }) => {
  const { title, category, description, image, price } = product;

  const getImageUrl = (): string => {
    // this function will handle when product not include any image url
    // will assign some locally stored images as default type

    if (image !== null) {
      return image;
    } else if (category === "men's clothing") {
      return "/assets/images/image2.png";
    } else {
      return "/assets/images/image1.png";
    }
  };

  return (
    <>
      <div className="relative">
        <Card className="product-card p-4 h-fit">
          <CardHeader>
            <CardTitle className="product-card-title">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <div className="product-image">
                <img src={getImageUrl()} alt={title} />
              </div>
              <div
                className={`product-card-footer mt-8 ${
                  category === "men's clothing"
                    ? "bg-[#2bd9af]"
                    : "bg-[#ff5e84]"
                }`}
              >
                <div className="product-price">RS {price}</div>
                <p className="product-description">{description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProductCard;
