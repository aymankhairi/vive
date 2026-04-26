import React, { useState } from "react";

function ProductImages({ product }) {
  const [mainImg, setMainImg] = useState(product.images[0]);
  return (
    <div className="imgs_item">
      <div className="big_img">
        <img id="big_img" src={mainImg} alt={product.title} />
      </div>
      <div className="sm_img">
        {product.images.map((img, index) => (
          <div key={index} className="img_div_sm">
            <img
              src={img}
              alt={product.title}
              // onClick={() => (document.getElementById("big_img").src = img)}
              onClick={() => setMainImg(img)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
