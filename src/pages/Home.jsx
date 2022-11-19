import { Fragment } from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import ShopByBrand from "../components/ShopByBrand";
import ShopByLaptopType from "../components/ShopByLaptopType";
import AskPhoebeTryOurLaptopFinder from "../components/AskPhoebeTryOurLaptopFinder";
import classes from "./Home.module.css";
import OurTopSellers from "../components/OurTopSellers";
import ValueStatement from "../components/ValueStatement";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <ShopByLaptopType />
      <ShopByBrand />
      <AskPhoebeTryOurLaptopFinder />
      <OurTopSellers />
      <ValueStatement />
      <Footer />
    </Fragment>
  );
};

export default Home;
