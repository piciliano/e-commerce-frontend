import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Home } from "../pages/home";
import { ProductDescriptionPage } from "../pages/productDescription";
import { Layout } from "../components/layout/layout";
import { CartContent } from "../pages/cartContent";
import { SignIn } from "../pages/signin";
import { DashBoard } from "../pages/addProduct";
import { MyProductsInDashboard } from "../pages/myProducts";
import { MyProfile } from "../pages/myProfile";
import { Paymentpage } from "../pages/payment";
import { PrivateRoute } from "./privateRoute";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/products/:id"
          element={
            <PrivateRoute>
              <ProductDescriptionPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartContent />
            </PrivateRoute>
          }
        />
        <Route
          path="/payment/:value"
          element={
            <PrivateRoute>
              <Paymentpage />
            </PrivateRoute>
          }
        />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashBoard />
          </PrivateRoute>
        }
      />
      <Route
        path="/myproducts"
        element={
          <PrivateRoute>
            <MyProductsInDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/myprofile"
        element={
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
