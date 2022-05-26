import "./Homepage.scss";
import Header from "../../shared/header/Header";
import Carousel from "../../ui/carousel/Carousel";
import Category from "../../ui/category/Category";
import FlashSale from "../../ui/flash-sale/Flash-sale";
import Trending from "../../ui/trending/Trending";
import Suggestion from "../../ui/suggestion/Suggestion";
import Layout from "../../shared/layout/Layout";
import CategoryClassComponent from "../../ui/category/CategoryClass";

const Home = () => {
  return (
    <Layout>
      <Carousel />
      <main className="bg-gray py-4">
        <CategoryClassComponent />
        <FlashSale />
        <Trending />
        <Suggestion />
      </main>
    </Layout>
  );
};

export default Home;
