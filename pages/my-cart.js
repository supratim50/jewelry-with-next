import Heading from "../components/heading/heading";
import ButtonPrimary from "../components/buttons/primaryButton";
import CardBody from "../components/cards/cardBody";
import CardFour from "../components/cards/CardFour";
import Link from "next/link";

const MyCart = () => {
  const productArr = [
    {
      id: 1,
      imageUrl: "/imgs/cardImg-2.jpg",
      title: "Metal Rhodium Bracelet",
      quantity: 2,
      price: 11.23,
    },
    {
      id: 2,
      imageUrl: "/imgs/cardImg-2.jpg",
      title: "Metal Rhodium Bracelet",
      quantity: 3,
      price: 11.23,
    },
    {
      id: 3,
      imageUrl: "/imgs/cardImg-2.jpg",
      title: "Metal Rhodium Bracelet",
      quantity: 4,
      price: 11.23,
    },
  ];

  return (
    <>
      <section id="my-cart">
        <div className="container">
          <div className="main-box mx-auto">
            <div className="d-flex justify-content-between align-items-center">
              <Heading
                title="My Cart"
                classList="heading-primary-lg text-capitalize mb-0"
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
              <CardBody bgSmHidden>
                {/* products */}
                {productArr.map((product) => (
                  <div className="pb-4" key={product.id}>
                    <CardFour
                      title={product.title}
                      imageUrl={product.imageUrl}
                      quantity={product.quantity}
                      price={product.price}
                    />
                  </div>
                ))}
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
