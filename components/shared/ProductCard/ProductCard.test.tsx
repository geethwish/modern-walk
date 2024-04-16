/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from "@testing-library/react";
import ProductCard from "./ProductCard";
import TestComponentWrapper from "@/components/shared/TestComponentWrapper/TestComponentWrapper";

const product = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

const product2 = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "women's clothing",
  image: null,
  rating: {
    rate: 3.9,
    count: 120,
  },
};

const product3 = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: null,
  rating: {
    rate: 3.9,
    count: 120,
  },
};

describe("Product card test", () => {
  it("Render Product  card", async () => {
    render(
      <TestComponentWrapper>
        <ProductCard product={product} />
      </TestComponentWrapper>
    );
    const element = await waitFor(() =>
      screen.getByText(/Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i)
    );
    expect(element).toBeInTheDocument();
  });
  it("Render Product  card get image with relent category ", async () => {
    render(
      <TestComponentWrapper>
        <ProductCard product={product2} />
      </TestComponentWrapper>
    );

    const image: HTMLElement | any = await waitFor(() =>
      screen.getByAltText(
        /Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i
      )
    );
    if (image !== undefined) {
      expect(image.src).toContain("/assets/images/image1.png");
    }
  });
  it("Render Product  card with men's category and show default image", async () => {
    render(
      <TestComponentWrapper>
        <ProductCard product={product3} />
      </TestComponentWrapper>
    );

    const image: HTMLElement | any = await waitFor(() =>
      screen.getByAltText(
        /Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i
      )
    );
    if (image !== undefined) {
      expect(image.src).toContain("http://localhost/assets/images/image2.png");
    }
  });
});
