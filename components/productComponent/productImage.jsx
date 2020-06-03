const ProductImage = () => {
  return (
    <>
      <div className="product-image-box w-100 py-3">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {/* <!-- slide 1 --> */}
            <div className="swiper-slide">
              <img
                src="./imgs/product.png"
                alt="Product Image"
                className="product-image w-100"
              />
            </div>
            {/* <!-- slide 2 --> */}
            <div className="swiper-slide">
              <img
                src="./imgs/product.png"
                alt="Product Image"
                className="product-image w-100"
              />
            </div>
          </div>
          {/* <!-- Add Pagination --> */}
          <div className="swiper-pagination"></div>
        </div>
        <style jsx>{`
          .swiper-container {
            width: 100%;
            height: 100%;
          }
          .swiper-slide {
            text-align: center;
            font-size: 18px;

            /* Center slide text vertically */
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
            background-color: $color-primary !important;
          }

          .swiper-pagination {
            bottom: 0% !important;
          }
        `}</style>
      </div>
    </>
  );
};

// For version <=2.3.2
// import { Swiper, Navigation, Pagination } from 'swiper/dist/js/swiper.esm';
// For version >=2.4.0
// import { Swiper, Navigation, Pagination } from 'swiper/js/swiper.esm';
// import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom';

// const ProductImage = () => {
//   const params = {
//     // Provide Swiper class as props
//     Swiper,
//     // Add modules you need
//     modules: [Navigation, Pagination],
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//       clickable: true
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev'
//     },
//     spaceBetween: 30
//   }
//   return(
//     <ReactIdSwiperCustom {...params}>
//       <div>Slide 1</div>
//       <div>Slide 2</div>
//       <div>Slide 3</div>
//       <div>Slide 4</div>
//       <div>Slide 5</div>
//     </ReactIdSwiperCustom>
//   )
// }
export default ProductImage;
