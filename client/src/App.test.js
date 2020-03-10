import React from "react";
import { render, waitForElement, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axiosMock from "axios";

import App from "./App";

test("App renders without crashing", () => {
  // act(() => );
  render(<App />);
});

test("App displays loading while fetching data", () => {
  const { getByText } = render(<App />);

  getByText(/loading/i);
});

// test("App displays player when axios resolves", async () => {
//   const { getByText } = render(<App />);

//   axiosMock.get.mockResolvedValueOnce({
//     data: [
//       {
//         country: "United States",
//         id: 0,
//         name: "Alex Morgan",
//         searches: 100
//       }
//     ]
//   });

//   const player = await waitForElement(() => getByText(/name/i));

//   expect(axiosMock.get).toHaveBeenCalledTimes(1);
//   expect(player).toHaveTextContent("Name: Alex Morgan");
// });
