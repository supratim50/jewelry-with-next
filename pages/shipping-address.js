import Heading from "../components/heading/heading";
import ShippingDetails from "../components/cards/shippingDetailsCard";
import ButtonRound from "../components/buttons/roundButton";
import { FaPlus } from "react-icons/fa";

const ShippingAddress = () => {
  return (
    <section id="order-header">
      <div className="container">
        <div className="main-box mx-auto">
          <Heading classList="heading-primary-lg" title="Shipping Address" />
          {/* shipping data details card */}
          <ShippingDetails />
          <ShippingDetails />
          <ShippingDetails />

          {/* add button  */}

          <div class="d-flex justify-content-center py-5">
            {/* <!-- edit btn --> */}
            <ButtonRound classList="mr-3 mr-md-0 primary">
              <FaPlus />
            </ButtonRound>
          </div>
        </div>
      </div>
      <style jsx>{`
        #order-header {
          margin-top: 50px;
        }

        .main-box {
          width: 85%;
        }

        @media screen and (max-width: 991px) {
          .main-box {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default ShippingAddress;
