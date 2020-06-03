import CardOne from "../cards/card";
import CardTwo from "../cards/cardTwo";

const TopOffersContainer = () => {
  return (
    <section id="fav-top-offers">
      <div className="container">
        <h1 className="heading heading-primary mb-0 text-capitalize">
          Top Offers
        </h1>
        {/* <!-- ============= 1st row of top offers ================== --> */}
        <div className="row mt-3 top-offer-1st">
          <div className="col-12 p-2 p-md-3 rounded-lg">
            <CardOne
              imageName="cardImg-2.jpg"
              heading="Ring"
              subHeading="25% OFF"
            />
          </div>
        </div>
        {/* <!-- ============= 2nd row of top offers ================== --> */}
        <div className="row mt-3 top-offer-2nd">
          <div className="col-6 col-md-4 p-2 p-md-3">
            {/* <!-- 1st card --> */}
            <CardTwo
              imageURL="/imgs/cardImg-3.jpg"
              heading="Bangles"
              subHeading="25% OFF"
            />
            {/* <!-- 1st card end --> */}
          </div>
          <div className="col-6 col-md-4 p-2 p-md-3">
            {/* <!-- 2nd card --> */}
            <CardTwo
              imageURL="/imgs/cardImg-3.jpg"
              heading="Necklace"
              subHeading="25% OFF"
            />
            {/* <!-- 2nd card end --> */}
          </div>
          <div className="col-6 col-md-4 p-2 p-md-3">
            {/* <!-- 3rd card --> */}
            <CardTwo
              imageURL="/imgs/cardImg-3.jpg"
              heading="Earrings"
              subHeading="25% OFF"
            />
            {/* <!-- 3rd card end --> */}
          </div>
        </div>
      </div>

      <style jsx>
        {`
          #fav-top-offers {
            margin-top: 50px;
          }
          @media screen and (max-width: 767px) {
            #fav-top-offers {
              margin-top: 20px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default TopOffersContainer;
