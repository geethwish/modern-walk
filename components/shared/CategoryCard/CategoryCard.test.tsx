/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from "@testing-library/react";
import CategoryCard from "./CategoryCard";
import TestComponentWrapper from "@/components/shared/TestComponentWrapper/TestComponentWrapper";

describe("Category card test", () => {
  it("Render category card", async () => {
    render(
      <TestComponentWrapper>
        <CategoryCard
          title={"men's clothing"}
          color="#2bd9af"
          path="mens-clothing"
        />
      </TestComponentWrapper>
    );
    const element = await waitFor(() => screen.getByText(/men's clothing/i));
    expect(element).toBeInTheDocument();
  });
});
