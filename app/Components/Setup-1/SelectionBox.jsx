import React from 'react';
import { Card, Box } from '@mui/material';

const SelectionBox = ({ item, selected, onClick }) => {
  return (
    <Card
      sx={{ 
        display: 'flex', 
        margin: 1, 
        backgroundColor: selected ? '#e0e0e0' : '#fff',
        cursor: 'pointer',
        width: '30%',
        padding: 2,
        boxShadow: selected ? '0px 0px 10px rgba(0, 0, 0, 0.2)' : 'none'
      }}
      onClick={onClick}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', padding: 1 }}>
        <img src={item.img} alt={item.title} style={{ width: 150, height: 50 }} />
      </Box>
    </Card>
  );
};

const SelectionBoxes = ({ items, selectedIndexes, setSelectedIndexes }) => {
  const handleClick = (index) => {
    setSelectedIndexes((prev) => {
      if (prev?.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: 2 }}>
      {items.map((item, index) => (
        <SelectionBox 
          key={index} 
          item={item} 
          selected={selectedIndexes?.includes(index)} 
          onClick={() => handleClick(index)} 
        />
      ))}
    </Box>
  );
};

export default SelectionBoxes;
