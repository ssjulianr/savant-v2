import React, { useState, useEffect } from 'react';
import { FaCartShopping, FaStar, FaShirt, FaGift, FaRecordVinyl, FaHeadphonesSimple } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Product = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortingOption, setSortingOption] = useState('');

  useEffect(() => {
    fetch('http://localhost:3009/products')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} />);
    }
    return stars;
  };

  const renderCategoryIcon = (category) => {
    switch (category) {
      case 'Clothing':
        return <FaShirt />;
      case 'Music':
        return <FaRecordVinyl />;
      case 'Gift':
        return <FaGift />;
      case 'Etc':
        return <FaHeadphonesSimple />;
      // Add more cases for other categories and corresponding icons
      default:
        return null;
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortingChange = (event) => {
    setSortingOption(event.target.value);
  };

  const filteredProducts = data.filter((product) => {
    if (selectedCategory && product.Category !== selectedCategory) {
      return false;
    }
    return true;
  }).sort((productA, productB) => {
    if (sortingOption === 'priceHighToLow') {
      return productB.Price - productA.Price;
    } else if (sortingOption === 'priceLowToHigh') {
      return productA.Price - productB.Price;
    }
    return 0;
  });

  return (
    <>
      <div>
        <label>
          Category:
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All</option>
            <option value="Clothing">Clothing</option>
            <option value="Music">Music</option>
            <option value="Gift">Gift</option>
            <option value="Etc">Etc</option>
          </select>
        </label>
        <label>
          Sort by Price:
          <select value={sortingOption} onChange={handleSortingChange}>
            <option value="">None</option>
            <option value="priceHighToLow">Price High to Low</option>
            <option value="priceLowToHigh">Price Low to High</option>
          </select>
        </label>
      </div>

      <div className="pro-container">
        {filteredProducts.map((product, i) => (
          <Link to={`/smerch/${product.id}`} className="pro" key={i}>
            <img src={product.ImgURL} alt={product.Alt} />
            <div className="des">
              <span>
                {product.Brand} {renderCategoryIcon(product.Category)}
              </span>
              <h5>{product.Description}</h5>
              <div className="star">{renderStars(product.Rating)}</div>
              <h4>${product.Price}</h4>
              <a href="#">
                <FaCartShopping id="cart" />
              </a>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Product;
