import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
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
    image: string;
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
    <div>
      <Card className="w-[340px] product-card p-4 h-fit">
        <CardHeader>
          <CardTitle className="product-card-title">{title ?? ""}</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <div className="product-image">
            <img src={getImageUrl()} alt={title} />
          </div>
          <div
            className={`product-card-footer mt-8 ${
              category === "men's clothing" ? "bg-[#2bd9af]" : "bg-[#ff5e84]"
            }`}
          >
            <div className="product-price">RS {price}</div>
            <p className="product-description">{description}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
