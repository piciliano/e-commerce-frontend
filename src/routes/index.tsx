import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Home } from "../pages/home";
import { ProductDescriptionPage } from "../pages/productDescription";
import { Layout } from "../components/layout/layout";
import { CartContent } from "../pages/cartContent";
import { SignIn } from "../pages/signin";
import { DashBoard } from "../pages/dashboard";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDescriptionPage />} />
        <Route path="/cart" element={<CartContent />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
};
