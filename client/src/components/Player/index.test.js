import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Player from "./index";

test("Player displays when given data", () => {
  const player = {
    country: "United States",
    id: 0,
    name: "Alex Morgan",
    searches: 100
  };

  const { getByText } = render(<Player {...player} />);
  expect(getByText(/name/i)).toHaveTextContent("Name: Alex Morgan");
});
