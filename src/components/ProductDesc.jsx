import React, { useState, useEffect } from 'react';
import { FaStar, FaShirt, FaGift, FaRecordVinyl, FaHeadphonesSimple } from 'react-icons/fa6';

const ProductDesc = () => {
  
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

    // Filter and sort the products based on the selected category and sorting option
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


};

export default ProductDesc;