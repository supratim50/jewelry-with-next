import Heading from "../heading/heading";
import Quantity from "../productComponent/quantity";
import RoundButton from "../buttons/roundButton";
import { FiTrash2 } from "react-icons/fi";

const CardFour = () => {
  return (
    <div className="d-flex justify-content-start align-items-center p-1 p-md-3">
      <div className="img-box overflow-hidden">
        <img
          src="/imgs/cardImg-2.jpg"
          alt="Product Image"
          className="w-100 image"
        />
      </div>

      <div className="details-box ml-3 ml-md-4 d-flex flex-column justify-content-start align-items-start">
        <Heading
          title="Metal Rhodium Bracelet"
          classList="paragraph-text-lg mb-3"
        />
        <Quantity />
        <h2 className="heading heading-primary text-primary font-weight-bold mt-auto mb-0">
          $&nbsp;11.22
        </h2>
      </div>

      <RoundButton classList="mt-auto ml-auto text-muted heading-primary">
        <FiTrash2 />
      </RoundButton>

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

        .details-box {
          height: 195px !important;
        }
      `}</style>
    </div>
  );
};

export default CardFour;
