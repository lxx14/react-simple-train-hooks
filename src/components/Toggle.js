import React, { useState } from 'react';

const Toggle = () => {

  const [num, changeNum] = useState(0);
  const [block, openBlock] = useState(false);

  const handleClick = () => {
    changeNum(num + 1);
  }
  const resetClicks = () => {
    changeNum(num = 0);
  }
  const hanbleOpenBlock = () => {
    openBlock(block = !block);
  }

  return (
    <div>
      <div className={block ? 'container open' : 'container'}>
        <button type='button' onClick={handleClick}>lets do it;)</button>
        <p>amount of clicks: {num}</p>
        <button type='button' onClick={resetClicks}>Reset</button>
        <button type='button' onClick={hanbleOpenBlock}>{block?'close':'open'}</button>
      </div>

    </div>
  );
}

export default Toggle;