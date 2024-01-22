import React from 'react';
import Select from 'react-select';

export interface Category {
  id: number;
  name: string;
}

interface SelectorProps {
  categories: Category[];
  onSelect: (selectedCategory: Category | null) => void;
}

const Selector: React.FC<SelectorProps> = ({ categories, onSelect }) => {
  const options = categories.map(category => ({
    value: category.id,
    label: category.name,
  }));

  const customStyles = {
    container: (provided: any) => ({
      ...provided,
    }),
    control: (provided: any) => ({
      ...provided,
      border: '1px solid #ccc',
      borderRadius: '4px',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#f0f0f0' : state.isSelected? "#d4d4d4": 'white',
      color: '#333',
    }),
  };

  const handleChange = (selectedOption: any) => {
    const selectedCategory = categories.find(category => category.id === selectedOption.value) || null;
    onSelect(selectedCategory);
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      placeholder="Select a category"
      styles={customStyles}
    />
  );
};

export default Selector;
