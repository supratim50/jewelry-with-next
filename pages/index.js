// import Head from "next/head";

import TopOfferContainer from "../components/cotainers/topOffersContainer";
import ProductContainer from "../components/cotainers/productLishContainer";

const IndexPage = () => {
  return (
    <>
      {/* <!--  top offers --> */}
      <TopOfferContainer />
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
