import ProductListContainer from "../components/cotainers/productLishContainer";
import TopLayout from "../components/appBar/topLayoutTwo";
import { FiFilter, FiAlignCenter } from "react-icons/fi";

const ProductList = () => {
  return (
    <>
      {/* <!--================================== Product tag ======================================--> */}
      <TopLayout heading="Showing for" headingPre="Bangles" />
      {/* <!--================================== Product tag end ======================================-->

    <!--================================== filter-sort ======================================--> */}
      <section id="filter-sort" className="mt-5">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="filter">
            <p className="paragraph-text-lg text-dark">
              <i className="nav-icon mr-3">
                <FiFilter />
              </i>
              Filter
            </p>
          </div>
          <div className="sort paragraph-text-lg text-dark position-relative">
            <p className="paragraph-text-lg text-dark">
              <i className="nav-icon mr-3">
                <FiAlignCenter />
              </i>
              Sort
            </p>
            {/* <!-- sort drop down --> */}
            <div className="sort-drop-down p-4 bg-secondary rounded-lg shadow-sm">
              <a
                href="#"
                className="drop-down-item py-3 px-2 text-decoration-none paragraph-text font-weight-bold text-dark d-block"
              >
                Relevance
              </a>
              <a
                href="#"
                className="drop-down-item py-3 px-2 text-decoration-none paragraph-text font-weight-bold text-dark d-block"
              >
                Popular
              </a>
              <a
                href="#"
                className="drop-down-item py-3 px-2 text-decoration-none paragraph-text font-weight-bold text-dark d-block"
              >
                Price : Low to High
              </a>
              <a
                href="#"
                className="drop-down-item py-3 px-2 text-decoration-none paragraph-text font-weight-bold text-dark d-block"
              >
                Price : High to Low
              </a>
            </div>
          </div>
        </div>
        <style jsx>{`
          .nav-icon {
            font-size: 22px;
            -webkit-transition: 0.5s;
            transition: 0.5s;
          }
          @media screen and (max-width: 767px) {
            .nav-icon {
              font-size: 16px;
            }
          }
          #filter-sort .sort:hover > .sort-drop-down {
            opacity: 1;
            visibility: visible;
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
          }

          #filter-sort .sort-drop-down {
            position: absolute;
            top: 100%;
            right: 0;
            min-width: 200px;
            opacity: 0;
            visibility: hidden;
            -webkit-transform: translateY(10px);
            transform: translateY(10px);
            -webkit-transition: all 0.5s;
            transition: all 0.5s;
            z-index: 99 !important;
          }

          #filter-sort .drop-down-item:hover {
            color: #ee2d4f !important;
          }
        `}</style>
      </section>
      {/* <!--====================================== filter-sort end =======================================--> */}

      {/* <!-- ========================== Product List ============================== --> */}
      <ProductListContainer />
      {/* <!-- ========================== Product List End ============================== --> */}
    </>
  );
};

export default ProductList;
