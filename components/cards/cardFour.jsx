import Heading from "../heading/heading";
import Quantity from "../productComponent/quantity";
import RoundButton from "../buttons/roundButton";
import { FiTrash2 } from "react-icons/fi";

import PropType from "prop-types";

const CardFour = ({ title, imageUrl, price, quantity }) => {
  return (
    <div className="d-flex justify-content-start align-items-center p-1 p-md-3">
      <div className="img-box overflow-hidden">
        <img src={imageUrl} alt="Product Image" className="w-100 image" />
      </div>

      <div className="details-box py-2 ml-3 ml-md-4 d-flex flex-fill flex-column align-self-stretch">
        <Heading
          title={title}
          classList="paragraph-text-lg mb-3 text-truncate"
        />
        <Quantity quantityNum={quantity} />
        <div className="d-flex justify-content-between align-items-end mt-auto w-100">
          <h2 className="heading flex-fill heading-primary text-primary font-weight-bold mb-0">
            $&nbsp;{price}
          </h2>
          <RoundButton classList="text-muted heading-primary">
            <FiTrash2 />
          </RoundButton>
        </div>
      </div>

      <style jsx>{`
        .img-box {
          max-width: 157px;
          height: 195px;
          border-radius: 20px;
        }

        .image {
          height: 100%;
          object-fit: cover;
        }
        @media screen and (max-width: 576px) {
          .img-box {
            max-width: 117px !important;
            height: 146px !important;
          }
        }
      `}</style>
    </div>
  );
};

CardFour.propTypes = {
  imageUrl: PropType.string.isRequired,
  title: PropType.string.isRequired,
  price: PropType.number.isRequired,
  quantity: PropType.number.isRequired,
};
export default CardFour;
