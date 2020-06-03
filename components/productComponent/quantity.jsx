import { FiPlus, FiMinus } from "react-icons/fi";
import { useState } from "react";

const Quantity = () => {
  const [quantity, setQuantity] = useState(0);

  const addQuantity = () => setQuantity(quantity + 1);

  const lessQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <div
        className="btn-group quantity-box overflow-hidden"
        role="group"
        aria-label="Basic example"
      >
        {/* <!-- less btn --> */}
        <button
          type="button"
          className="quantity-btn paragraph-text bg-light-grey border-0"
          onClick={lessQuantity}
        >
          <i>
            <FiMinus />
          </i>
        </button>

        {/* <!-- paragraph text --> */}
        <div className="px-2 quantity font-weight-bold d-flex justify-content-center align-items-center border-0 bg-light-grey-2">
          <p className="paragraph-text mb-0">{quantity}</p>
        </div>

        {/* <!-- add button --> */}
        <button
          type="button"
          className="quantity-btn paragraph-text bg-light-grey border-0"
          onClick={addQuantity}
        >
          <i>
            <FiPlus />
          </i>
        </button>
      </div>
      <style jsx>{`
        .quantity {
          min-width: 90px;
        }
        .quantity-box {
          border-radius: 20px;
        }

        .quantity-btn {
          padding: 5px 7px;
        }
        .quantity-btn:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Quantity;
