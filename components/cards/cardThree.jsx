const CardThree = ({ title, price, discountPrice, catagories, imageUrl }) => {
  return (
    <>
      <a href="./product-page.html" className="text-decoration-none">
        <div className="card border-0 item-card">
          <div className="card-image-box overflow-hidden position-relative">
            <img
              className="card-img-top card-image"
              src={imageUrl}
              alt="Card image cap"
            />
          </div>
          <div className="card-body bg-background px-0">
            <p className="paragraph-text text-muted mb-2">{catagories}</p>
            <h5 className="paragraph-text text-dark font-weight-bold text-truncate">
              {title}
            </h5>
            <h2 className="heading heading-primary text-primary font-weight-bold">
              $&nbsp;{price}
              <del className="paragraph-text-lg text-muted">
                &nbsp;&nbsp;$&nbsp;{discountPrice}
              </del>
            </h2>
          </div>
        </div>
        <style jsx>{`
          .card .card-image-box {
            border-radius: 20px;
          }

          .card .card-img-top {
            /* should I use height instead of max or min */
            height: 260px;
            -o-object-fit: cover;
            object-fit: cover;
            -webkit-transition: 0.8s;
            transition: 0.8s;
          }

          .card:hover > .card-image-box > .card-img-top {
            -webkit-transform: scale(1.1) !important;
            transform: scale(1.1) !important;
          }

          @media screen and (max-width: 767px) {
            .card .card-img-top {
              height: 187px;
            }
          }
        `}</style>
      </a>
    </>
  );
};

export default CardThree;
