import ButtonRoud from "../buttons/roundButton";
import { FiFeather } from "react-icons/fi";

const ColorPalat = () => {
  const colors = [
    {
      key: 1,
      color: "red",
    },
    {
      key: 2,
      color: "blue",
    },
    {
      key: 3,
      color: "yellow",
    },
    {
      key: 4,
      color: "pink",
    },
    {
      key: 5,
      color: "grey",
    },
  ];

  return (
    <div className="color-palat p-2 my-3 shadow-sm d-inline-block bg-secondary">
      <div className="color-btn rounded-circle text-dark no-shadow bg-light-grey d-inline-block p-2 border text-center">
        <FiFeather />
      </div>

      <div className="d-inline-block">
        {colors.map(({ id, color }) => (
          <div
            key={id}
            className="color-btn p-1 rounded-circle d-inline-block border text-center ml-2 ml-md-3 border"
          >
            <div
              className={`color rounded-circle p-1 d-inline-block border text-center border ${color}`}
            >
              <span className="invisible">j</span>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .color-palat {
          border-radius: 35px !important;
          z-index: 800;
        }
        @media screen and (max-width: 767px) {
          .color-palat {
            position: absolute;
            top: -63%;
            left: 15px;
          }
        }
        .color-btn {
          width: 43px !important;
          height: 43px !important;
        }

        @media screen and (max-width: 567px) {
          .color-btn {
            width: 33px !important;
            height: 33px !important;
          }
        }

        .color {
          width: 100%;
          height: 100%;
        }

         {
          /* colors */
        }
        .red {
          background-color: #ff4242 !important;
        }

        .blue {
          background-color: #2377f4 !important;
        }

        .yellow {
          background-color: #f4ba23 !important;
        }

        .pink {
          background-color: #f42387 !important;
        }

        .grey {
          background-color: #d8d8d8 !important;
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
