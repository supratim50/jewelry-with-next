import TopLayout from "../components/appBar/topLayout";
import ProductDatails from "../components/cards/productDeatilsCard";
import Heading from "../components/heading/heading";

const MyOrder = () => {
  return (
    <>
      {/* <!-- ==================================== Order-header ===================================== --> */}
      <section id="order-header">
        <div className="container">
          <div className="main-box mx-auto">
            <Heading
              title="My Orders"
              classList="heading-primary-lg text-capitalize"
            />
            <TopLayout />
          </div>
        </div>
        <style jsx>{`
          .main-box {
            width: 85%;
          }

          @media screen and (max-width: 991px) {
            .main-box {
              width: 100%;
            }
          }
           {
            /* oredr header starting from here */
          }
          #order-header {
            margin-top: 50px;
          }

          @media screen and (max-width: 767px) {
            #order-header {
              margin-top: 20px;
            }
          }
        `}</style>
      </section>
      {/* <!-- ==================================== Order-header end ===================================== --> */}
      {/* <!-- ==================================== Orders ===================================== --> */}
      <section className="" id="orders">
        <div className="container">
          <div className="main-box mx-auto mt-4 mb-5 pb-5">
            <ProductDatails />
          </div>
        </div>
        <style jsx>{`
          .main-box {
            width: 85%;
            transition: 0.5s !important;
          }

          @media screen and (max-width: 991px) {
            .main-box {
              width: 100%;
            }
          }
        `}</style>
      </section>
      {/* <!-- ==================================== Orders End ===================================== --> */}
    </>
  );
};

export default MyOrder;
