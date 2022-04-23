import Home from "./../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Landing Page ", () => {
    it("renders Header, Footer", () => {
      render(<Home/>);
      expect(screen.getByText("ROCK")).toBeInTheDocument();
      expect(screen.getByText("PAPER")).toBeInTheDocument();
      expect(screen.getByText("SCISSORS")).toBeInTheDocument();
      expect(screen.getByText("LIZARD")).toBeInTheDocument();
      expect(screen.getByText("SPOCK")).toBeInTheDocument();
      expect(screen.getByText("RULES")).toBeInTheDocument();

    });

  });