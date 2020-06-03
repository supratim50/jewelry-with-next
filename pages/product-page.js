import Head from "next/head";
import ProductImage from "../components/productComponent/productImage";
import SideImagesContainer from "../components/productComponent/sideImagesContainer";

const ProductPage = () => {
  return (
    <>
      <Head>
        <script src="/assets/js/swiper.js"></script>
        <script src="/assets/js/swiper-custom.js"></script>
      </Head>
      <section id="product-show">
        <div className="container">
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
            <div className="col-12 col-md-6 px-md-4 px-2">
              {/* <!--================= details ===================--> */}
              <div className="details py-3 px-md-4 px-1 d-flex flex-md-column justify-content-between self-sligns-center">
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
              <div className="px-md-4 px-1">
                <div
                  className="btn-group quantity-box overflow-hidden"
                  role="group"
                  aria-label="Basic example"
                >
                  {/* <!-- less btn --> */}
                  <button
                    type="button"
                    className="quantity-btn paragraph-text bg-light-grey border-0"
                  >
                    <i className="flaticon-worldwide"></i>
                  </button>

                  {/* <!-- paragraph text --> */}
                  <div className="px-2 d-flex justify-content-center align-items-center border-0 bg-light-grey-2">
                    <p className="paragraph-text mb-0">Quantity</p>
                  </div>

                  {/* <!-- add button --> */}
                  <button
                    type="button"
                    className="quantity-btn paragraph-text bg-light-grey border-0"
                  >
                    <i className="flaticon-worldwide"></i>
                  </button>
                </div>
              </div>
              {/* <!--==================== Quantity end =====================-->
  
              <!--==================== Color =====================--> */}
              <div className="px-md-4 px-1 mt-3 color-main-box">
                <div className="color-box py-1 shadow-sm bg-secondary d-inline-block">
                  {/* <!-- d-inline-block border d-flex justify-content-start align-items-center --> */}
                  <button className="color-btn border rounded-circle shadow-sm border-0 d-inline-block">
                    <i className="flaticon-email text-dark paragrph-text p-0"></i>
                  </button>

                  {/* <!-- colors --> */}
                  <div className="color-border-box color d-flex justify-content-start align-items-center ml-3">
                    <div className="color-border p-1 rounded-circle mr-2 d-inline-block">
                      <div className="color-fill w-100 h-100 rounded-circle"></div>
                    </div>
                  </div>
                </div>
                {/* <!--==================== Color end =====================-->
  
              <!--==================== Button  =====================--> */}
                <div className="px-md-4 px-1 text-center text-md-left">
                  <a href="#" className="btn btn-big btn-primary mt-5">
                    Add To Cart
                  </a>
                </div>
                {/* <!--==================== Button end =====================--> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
