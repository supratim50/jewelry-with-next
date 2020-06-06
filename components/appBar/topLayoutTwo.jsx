import Tag from "../tags/tag";

const HeaderTwo = ({ heading, headingPre }) => {
  return (
    <section id="fav-product-tag">
      <div className="container">
        <h1 className="heading heading-primary mb-4 mb-md-2 text-capitalize">
          {heading}
          <span className="text-uppercase text-primary">
            &nbsp;{headingPre}
          </span>
        </h1>
        {/* <!-- tag-box --> */}
        <div className="tag-box d-flex justify-content-start align-items-center p-md-3">
          {/* <!-- tags --> */}
          <Tag active />
          <Tag active />
          <Tag active />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
        </div>
        {/* <!-- tag box End --> */}
      </div>
      <style jsx>{`
        #fav-product-tag {
          margin-top: 50px;
        }

        #fav-product-tag .tag-box {
          overflow-x: scroll;
        }

        #fav-product-tag .tag-box::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default HeaderTwo;
