/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from "@testing-library/react";
import Page from "./page";
import TestComponentWrapper from "@/components/shared/TestComponentWrapper/TestComponentWrapper";

jest.mock("swiper/modules", () => ({
  Navigation: jest.fn(),
  Pagination: jest.fn(),
  Virtual: jest.fn(),
  FreeMode: jest.fn(),
}));

// mocked swipe functions
jest.mock("swiper/react", () => ({
  SwiperSlide: jest.fn(),
  useSwiper: jest.fn(),
  Swiper: jest.fn(),
}));

// mocked css files because some imports causes issues.
jest.mock("swiper/css", () => "");
jest.mock("swiper/css/pagination", () => "");
jest.mock("swiper/css/navigation", () => "");
jest.mock("swiper/css/free-mode", () => "");

describe("Landing page load successfully", () => {
  it("component loaded", async () => {
    render(
      <TestComponentWrapper>
        <Page />
      </TestComponentWrapper>
    );
    const element = await waitFor(() => screen.getByText("Flash Sales"));
    expect(element).toBeInTheDocument();
  });
});
