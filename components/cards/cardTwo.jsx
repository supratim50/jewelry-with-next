export default function CardTwo({ imageURL, heading, subHeading }) {
  return (
    <>
      <a href="#" className="text-decoration-none">
        <div className="card border-0 item-card">
          <div className="card-image-box overflow-hidden position-relative">
            <img
              className="card-img-top card-image"
              src={`${imageURL && imageURL}`}
              alt="Card image cap"
            />
            <div className="image-overflow d-flex flex-column justify-content-center align-items-center">
              <h1 className="heading heading-primary text-secondary text-center">
                {heading && heading}
              </h1>
              <p className="paragraph-text text-secondary text-center mb-0">
                {subHeading && subHeading}
              </p>
            </div>
          </div>
        </div>

        <style jsx>
          {`
            .card .card-image-box {
              border-radius: 20px;
            }

            .card .card-img-top {
              max-height: 260px;
              -o-object-fit: cover;
              object-fit: cover;
              -webkit-transition: 0.8s;
              transition: 0.8s;
            }

            @media screen and (max-width: 767px) {
              .card .card-img-top {
                max-height: 187px;
              }
            }

            .card:hover > .card-image-box > .card-img-top {
              -webkit-transform: scale(1.1) !important;
              transform: scale(1.1) !important;
            }

            .card .card-img-top {
              max-height: 228px;
            }

            @media screen and (max-width: 767px) {
              .card .card-img-top {
                max-height: 200px;
              }
            }

            .image-overflow {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.6);
            }
          `}
        </style>
      </a>
    </>
  );
}
