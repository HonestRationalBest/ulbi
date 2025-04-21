import { fireEvent, render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

describe("Sidebar component", () => {
  it("render", () => {
    render(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  it("toggles collapse state when button is clicked", () => {
    render(<Sidebar />);
    const button = screen.getByTestId("sidebar-button");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    fireEvent.click(button);
    expect(button).toHaveTextContent(">");

    fireEvent.click(button);
    expect(button).toHaveTextContent("<");
  });

  it("applies collapsed class when collapsed", () => {
    render(<Sidebar />);
    const sidebar = screen.getByTestId("sidebar");
    const toggleButton = screen.getByTestId("sidebar-button");

    fireEvent.click(toggleButton);
    expect(sidebar.className).toHaveClass("collapsed");
  });
});
