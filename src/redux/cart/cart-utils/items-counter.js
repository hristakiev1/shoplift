import React from 'react';

const itemsCounter = (items) => {
return (
items.reduce((acc, currentNum) =>  {return acc + currentNum.quantity}, 0)
)

}

export default itemsCounter;