import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Smerch = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the product details using the productId
    // Update the product state with the fetched data
    fetch(`http://localhost:3009/products/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
      {/* Display the product details */}
      <img src={product.ImgURL} alt={product.Alt} />
      <div className="des">
        <span>
          {product.Brand}
        </span>
        <h5>{product.Description}</h5>
        {/* Rest of the product details */}
      </div>
    </div>
  );
};

export default Smerch;