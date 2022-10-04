import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import Payment from "./pages/Payment/Payment";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import Reservation from "./pages/Reservation/Reservation";
import WishList from "./pages/WishList/WishList";
import Account from "./pages/Account/Account";
import ScrollToTop from "./ScrollToTop";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/item-detail" element={<ItemDetail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/wish-list" element={<WishList />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
