import React from "react";
import HeaderTop from "../../components/HeaderTop";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
import HomePage from "../../components/HomePage";
import Layout from "../../components/Layout";
import HappyCustomers from "../../components/HappyCustomers";
import WhoWeAre from "../../components/WhoWeAre";
import LatestProperties from "../../components/LatestProperties";
import TrendingBlogs from "../../components/TrendingBlogs";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="relative w-full">
      <HeaderTop />
      <Navbar />
      <Background />
      <Layout>
        <HomePage />
        <HappyCustomers />
        <WhoWeAre />
        <LatestProperties />
      </Layout>
      <TrendingBlogs />
      <Layout>
        <Testimonials />
      </Layout>
      <Footer />
    </div>
  );
};

export default Home;
