import Head from "next/head";

import ProductImage from "../components/productComponent/productImage";
import SideImagesContainer from "../components/productComponent/sideImagesContainer";
import Quantity from "../components/productComponent/quantity";
import ButtonPrimary from "../components/buttons/primaryButton";
import ProductList from "../components/cotainers/productLishContainer";
import ColorPalat from "../components/productComponent/colorPalat";

const ProductPage = () => {
  return (
    <>
      <Head>
        <script src="/assets/js/swiper.js"></script>
        <script src="/assets/js/swiper-custom.js"></script>
      </Head>
      <section id="product-show">
        <div className="container pb-5">
          <div className="row position-relative">
            {/* <!-- product image --> */}
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-3 py-lg-3 d-none d-lg-block">
                  <SideImagesContainer />
                </div>
                <div className="col-12 col-lg-9 px-0 px-md-3">
                  <ProductImage />
                </div>
              </div>
            </div>
            {/* <!-- product-details --> */}
            <div className="col-12 col-md-6 px-md-4 px-3">
              {/* <!--================= details ===================--> */}
              <div className="details py-3 d-flex flex-md-column justify-content-between self-sligns-center">
                <div>
                  <h1 className="heading heading-primary-lg font-weight-bold mb-1 text-truncate">
                    Gold Crown
                  </h1>
                  <p className="paragraph-text text-muted mb-0">Gold Plated</p>
                </div>
                <div className="mt-md-3 d-flex flex-column flex-md-row justify-content-start align-items-center">
                  <h1 className="offer-price heading heading-primary text-primary mb-0">
                    $&nbsp;11.12
                  </h1>
                  <p className="price ml-md-3 mb-0 paragraph-text text-muted">
                    $&nbsp;21.12
                  </p>
                </div>
              </div>
              {/* <!--==================== detils end =====================-->
  
              <!--==================== Quantity =====================--> */}
              <Quantity />
              {/* <!--==================== Quantity end =====================-->
  
              <!--==================== Color =====================--> */}
              <ColorPalat />
              {/* <!--==================== Color end =====================-->
  
              <!--==================== Button  =====================--> */}
              <div className="text-center text-md-left mt-5">
                <ButtonPrimary btnSize="btn-big">Add To Cart</ButtonPrimary>
              </div>
              {/* <!--==================== Button end =====================--> */}
            </div>
          </div>
        </div>

        <ProductList title="Similar items you may like" />

        <style jsx>{`
          #product-show {
            margin-top: 50px;
          }

          @media screen and (max-width: 767px) {
            #product-show {
              margin-top: 0px;
            }
          }
          .price {
            text-decoration: line-through !important;
          }
        `}</style>
      </section>
    </>
  );
};

export default ProductPage;
