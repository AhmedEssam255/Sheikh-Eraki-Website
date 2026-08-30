'use client';

import Image from 'next/image';

const MenuButton = () => {
  const buttonClick = () => {
    const buttonDom = document.getElementById('menu');
    buttonDom.style.display = 'flex';
    buttonDom.style.position = 'fixed';
  };

  return (
    <button
      onClick={buttonClick}
      className='rounded-full hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-md border-2 border-emerald-500/40 dark:border-emerald-400/40'
    >
      <Image
        src='/burger-button.png'
        width={60}
        height={60}
        alt='Burger Menu Icon'
        className='rounded-full'
      />
    </button>
  );
};

export default MenuButton;