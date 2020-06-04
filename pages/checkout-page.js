import TopLayoutThree from "../components/appBar/topLayoutThree";
import UserDetails from "../components/userDetails/userDetails";
import { FiEdit } from "react-icons/fi";

const CheckoutPage = () => {
  return (
    <>
      {/* <!-- ==================================== checkout-header ===================================== --> */}
      <section id="cart-checkout">
        <div className="container">
          <div className="main-box mx-auto">
            <TopLayoutThree />
          </div>
        </div>
        {/* <!-- ==================================== checkout-header end ===================================== -->

    <!-- ==================================== user-details ===================================== --> */}
        <div className="mt-5 pt-2 pt-md-5" id="user-details">
          <div className="container">
            <div className="main-box mx-auto mb-5 pb-5 mb-md-2 pb-md-2">
              <div className="row w-100 mx-0">
                {/* <!-- user datails --> */}
                <div className="col-12 col-md-5 px-0">
                  <UserDetails catagory="User Details">
                    <p className="paragraph-text-lg font-weight-bold text-dark">
                      Jane Doe
                    </p>
                    <div className="mt-3">
                      <p className="paragraph-text text-dark mb-0">
                        3 Newbridge Court
                      </p>
                      <p className="paragraph-text text-dark mb-0">
                        Chino Hills, CA 91709, United States
                      </p>
                    </div>
                  </UserDetails>
                </div>
                {/* <!-- user datails end -->

                <!-- user payment details --> */}
                <div className="col-12 col-md-5 offset-md-2 mt-4 mt-md-0 px-0">
                  <UserDetails catagory="Payment">
                    <div className="d-flex align-items-center">
                      <p className="mb-0 mr-3 payment-icon">
                        <i>
                          <FiEdit />
                        </i>
                      </p>
                      <div className="p-1">
                        <p className="paragraph-text-lg text-dark font-weight-bold mb-0">
                          Jane Doe
                        </p>
                        <p className="paragraph-text-lg text-dark font-weight-bold mb-0">
                          ****&nbsp;****&nbsp;****&nbsp;1234
                        </p>
                      </div>
                    </div>
                  </UserDetails>
                </div>
                {/* <!-- user payment details end --> */}
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          #cart-checkout {
            margin-top: 50px;
          }

          @media screen and (max-width: 767px) {
            #cart-checkout {
              margin-top: 20px;
            }
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
    </>
  );
};

export default CheckoutPage;
