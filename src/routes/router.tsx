import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RootLayout } from ".";
import { AboutPage, Home, NotFound } from "..";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
