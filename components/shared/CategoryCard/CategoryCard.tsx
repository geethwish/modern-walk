import Link from "next/link";
import React, { FC } from "react";

interface ICategoryCard {
  title: string;
  color: string;
  path: string;
}
const CategoryCard: FC<ICategoryCard> = ({ path, title, color }) => {
  return (
    <Link href={`/${path}`} className={`category-card bg-[${color}]`}>
      <h3 className="text-white category-card-title">{title}</h3>
    </Link>
  );
};

export default CategoryCard;
