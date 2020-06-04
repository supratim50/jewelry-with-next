import Swiper from "react-id-swiper";

const ProductImage = () => {
  const imgArr = [
    {
      id: 1,
      imageUrl: "/imgs/product.png",
    },
    {
      id: 2,
      imageUrl: "/imgs/product.png",
    },
    {
      id: 3,
      imageUrl: "/imgs/product.png",
    },
    {
      id: 4,
      imageUrl: "/imgs/product.png",
    },
  ];

  // swiper params
  const params = {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  };

  return (
    <>
      <div className="product-image-box w-100 pt-0 pt-md-3 pb-3">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <Swiper {...params} activeDotColor="#ee2d4f">
              {/* <!-- slide 1 --> */}
              {imgArr.map(({ imageUrl, id }) => (
                <div className="swiper-slide" key={id}>
                  <img
                    src={imageUrl}
                    alt="Product Image"
                    className="product-image w-100"
                  />
                </div>
              ))}
            </Swiper>
          </div>
          {/* <!-- Add Pagination --> */}
          {/* <div className="swiper-pagination"></div> */}
        </div>
        {/* <style jsx>{`
          .swiper-container {
            width: 100%;
            height: 100%;
          }
          .swiper-slide {
            text-align: center;
            font-size: 18px;

            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
          }

          .swiper-pagination-bullet-active {
            background-color: #ee2d4f !important;
          }
        `}</style> */}
      </div>
    </>
  );
};

export default ProductImage;
