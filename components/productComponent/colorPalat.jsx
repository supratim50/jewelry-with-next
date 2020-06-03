import ButtonRoud from "../buttons/roundButton";
import { FiFeather } from "react-icons/fi";

const ColorPalat = () => {
  return (
    <div className="color-palat p-2 my-3 shadow-sm d-inline-block">
      <div className="color-btn rounded-circle text-dark no-shadow bg-light-grey d-inline-block p-2 border text-center mr-2 mr-md-3">
        <FiFeather />
      </div>

      <div className="d-inline-block">
        <div className=" color-btn rounded-circle no-shadow bg-light-grey d-inline-block p-2 border text-center mr-2 mr-md-3 border">
          j
        </div>
      </div>
      <style jsx>{`
        .color-palat {
          border-radius: 35px !important;
          min-width: 100px;
        }
        .color-btn {
          min-width: 40px;
          min-height: 40px;
        }
      `}</style>
    </div>
  );
};

export default ColorPalat;

// {/* <div class="px-md-4 px-1 mt-3 color-main-box">
//       <div class="color-box py-1 shadow-sm bg-secondary d-inline-block">
//         {/* <!-- d-inline-block border d-flex justify-content-start align-items-center --> */}
//         <button class="color-btn border rounded-circle shadow-sm border-0 d-inline-block">
//           <i class="flaticon-email text-dark paragrph-text p-0"></i>
//         </button>

//         {/* <!-- colors --> */}
//         <div class="color-border-box color d-flex justify-content-start align-items-center ml-3">
//           <div class="color-border p-1 rounded-circle mr-2 d-inline-block">
//             <div class="color-fill w-100 h-100 rounded-circle"></div>
//           </div>
//         </div>
//       </div>
//       <style jsx>{`
//         .color-main-box {
//           z-index: 10000 !important;
//         }

//         @media screen and (max-width: 767px) {
//           .color-main-box {
//             position: absolute;
//             top: -45%;
//           }
//         }
//         .color-box {
//           border-radius: 25px;
//           -webkit-transition: 0.8s;
//           transition: 0.8s;
//         }

//          {
//           /* .color-btn {
//           width: 38px !important;
//           height: 38px !important;
//           background-color: #fff;
//         }

//         .color-btn:hover ~ .color-border-box {
//           display: inline-block !important;
//         }

//         .color-border {
//           width: 38px;
//           height: 38px;
//           border: 1px solid #ee2d4f;
//         }

//         .color-border-box {
//           display: none !important;
//           -webkit-transition: 0.8s;
//           transition: 0.8s;
//         }
//         .color-fill {
//           background-color: rgb(0, 68, 255);
//         } */
//         }
//       `}</style>
//     </div> */}
