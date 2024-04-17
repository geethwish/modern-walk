import axios from "axios";
import { ProductCategoryType, ProductsFilter } from "./Products.types";

// Request flash products
export const requestProducts = (data: ProductsFilter) => {
  return new Promise((resolve, reject) => {
    axios
      .get("/products", { params: data })
      .then((response) => {
        resolve(response.data);
      })
      .catch((errors) => {
        reject(errors);
      });
  });
};

// Request products by given category
export const requestProductsByCategory = ({
  category,
  filters,
}: ProductCategoryType) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/products/category/${category}`, { params: filters ?? {} })
      .then((response) => {
        resolve(response.data);
      })
      .catch((errors) => {
        reject(errors);
      });
  });
};
