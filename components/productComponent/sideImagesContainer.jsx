const SideImagesContainer = () => {
  const prodArr = [
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
    {
      id: 5,
      imageUrl: "/imgs/product.png",
    },
  ];
  return (
    <div className="side-image d-flex flex-column justify-content-start align-items-start">
      {prodArr.map((prodImg) => (
        <div key={prodImg.id} className="side-image-box p-2">
          <img
            src={prodImg.imageUrl}
            alt="Product Image"
            className="img-fluid"
          />
        </div>
      ))}
      <style jsx>{`
        .side-image {
          max-height: 400px;
          overflow-y: scroll;
        }

        .side-image-box {
          max-width: 110px;
        }
      `}</style>
    </div>
  );
};

export default SideImagesContainer;
