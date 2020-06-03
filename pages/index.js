// import Head from "next/head";

import TopContainer from "../components/cotainers/topOffersContainer";
import ProductContainer from "../components/cotainers/productLishContainer";

const IndexPage = () => {
  return (
    <>
      {/* <!--  top offers --> */}
      <TopContainer />
      {/* <!--  Product Container --> */}
      <ProductContainer
        key="1"
        title="Deals Of The"
        activeTitle="Day"
        content="10 Hours 14 Minutes"
      />
      <ProductContainer key="2" title="Latest Arrivals" />
    </>
  );
};

// IndexPage.Layout = DefaultLayout;
export default IndexPage;
