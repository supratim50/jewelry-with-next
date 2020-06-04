import CardThree from "../cards/cardThree";
// import Heading from "../heading/heading";

const ProductContainer = ({ title, activeTitle, content }) => {
  const products = [
    {
      id: 1,
      catagories: "Yellow Chimes",
      title: "Metal Rhodium Bracelet",
      price: "11.12",
      discountPrice: "21.12",
      imageUrl: "/imgs/cardImg-2.jpg",
    },
    {
      id: 2,
      catagories: "Yellow Chimes",
      title: "Metal Rhodium Bracelet",
      price: "11.12",
      discountPrice: "21.12",
      imageUrl: "/imgs/cardImg-3.jpg",
    },
    {
      id: 3,
      catagories: "Yellow Chimes",
      title: "Metal Rhodium Bracelet",
      price: "11.12",
      discountPrice: "21.12",
      imageUrl: "/imgs/cardImg-3.jpg",
    },
    {
      id: 4,
      catagories: "NeackLace",
      title: "Metal Rhodium Bracelet",
      price: "11.12",
      discountPrice: "21.12",
      imageUrl: "/imgs/cardImg-3.jpg",
    },
  ];

  return (
    <section className="mt-5" id="fav-deals-of-the-day">
      <div className="container">
        {/* heading */}
        {/* <Heading /> */}
        <h1 className="heading heading-primary mb-2 text-capitalize">
          {title && title}
          {activeTitle && (
            <span className="text-uppercase text-primary">
              &nbsp;{activeTitle}
            </span>
          )}
        </h1>
        {/* subheading */}
        {content && (
          <p className="paragraph-text text-muted">
            <i className="mr-2 flaticon-twitter"></i> {content}
          </p>
        )}

        {/* <!--========= card box ==========--> */}
        <div className="row mt-4">
          {/* product list */}
          {products.map((product) => (
            <div className="col-md-3 col-6 p-2 p-md-3" key={product.id}>
              <CardThree
                link="/product-page"
                catagories={product.catagories}
                title={product.title}
                price={product.price}
                discountPrice={product.discountPrice}
                imageUrl={product.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductContainer;
