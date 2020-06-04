import Heading from "../components/heading/heading";
import ButtonPrimary from "../components/buttons/primaryButton";
import CardBody from "../components/cards/cardBody";
import CardFour from "../components/cards/CardFour";
import Link from "next/link";

const MyCart = () => {
  return (
    <>
      <section id="my-cart">
        <div className="container">
          <div className="main-box mx-auto">
            <div className="d-flex justify-content-between align-items-center">
              <Heading
                title="My Cart"
                classList="heading-primary-lg text-capitalize"
              />
              <Link href="/checkout-page">
                <a>
                  <ButtonPrimary
                    btnSize="btn-big btn-big-md"
                    classList="paragraph-text-lg"
                  >
                    Check Out
                  </ButtonPrimary>
                </a>
              </Link>
            </div>

            {/* <!-- price --> */}
            <div className="d-flex justify-content-between align-items-center mt-4 mt-md-5 pt-3">
              <h1 className="heading heading-primary text-dark font-weight-bold mb-0">
                Summery :
              </h1>
              <h1 className="heading text-right heading-primary text-primary font-weight-bold mb-0">
                $&nbsp;800.65
              </h1>
            </div>
            {/* <!-- price end --> */}

            <div className="cart-item-box mx-auto mt-5 pt-4">
              <CardBody>
                <CardFour />
                <CardFour />
                <CardFour />
              </CardBody>
            </div>
          </div>
        </div>

        <style jsx>{`
          #my-cart {
            margin-top: 50px;
          }

          @media screen and (max-width: 767px) {
            #my-cart {
              margin-top: 20px;
            }
          }
          .main-box,
          .cart-item-box {
            width: 85%;
          }

          @media screen and (max-width: 991px) {
            .main-box,
            .cart-item-box {
              width: 100%;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default MyCart;
