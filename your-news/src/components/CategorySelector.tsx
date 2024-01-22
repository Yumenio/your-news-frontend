import React, { useState } from 'react'
import Selector, { Category } from './Selector';
const categories = [
    { id: 0, name: 'arts' },
    { id: 1, name: 'automobiles' },
    { id: 2, name: 'books' },
    { id: 3, name: 'business' },
    { id: 4, name: 'fashion' },
    { id: 5, name: 'food' },
    { id: 6, name: 'health' },
    { id: 7, name: 'home' },
    { id: 8, name: 'insider' },
    { id: 9, name: 'magazine' },
    { id: 10, name: 'movies' },
    { id: 11, name: 'nyregion' },
    { id: 12, name: 'obituaries' },
    { id: 13, name: 'opinion' },
    { id: 14, name: 'politics' },
    { id: 15, name: 'realestate' },
    { id: 16, name: 'science' },
    { id: 17, name: 'sports' },
    { id: 18, name: 'sundayreview' },
    { id: 19, name: 'technology' },
    { id: 20, name: 'theater' },
    { id: 21, name: 'tmagazine' },
    { id: 22, name: 'travel' },
    { id: 23, name: 'upshot' },
    { id: 24, name: 'us' },
    { id: 25, name: 'world' },
  ];
const CategorySelector = ({onSelectCategory}:{onSelectCategory: Function}) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  
    const handleCategoryChange = (category: Category|null) => {
      if(!category){
        return;
      }
      const selectedValue = category.name;
      setSelectedCategory(selectedValue);
      onSelectCategory(categories.find(category => category.name===selectedValue)?.id);
      console.log("Selector", selectedCategory)

    };
  
    return (
      <div className=" mt-2 mb-4 w-2/5 m-auto">
        <Selector categories={categories} onSelect={handleCategoryChange} />
      </div>
    );
  };

export default CategorySelector