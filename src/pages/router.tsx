import { createBrowserRouter } from "react-router-dom";
import { FormPage } from "./form-page/FormPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <FormPage />,
  },
]);
