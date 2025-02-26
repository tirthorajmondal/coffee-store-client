import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-center items-center text-white py-2 bg-[url(/src/assets/images/more/top-bar.jpg)] bg-cover bg-center w-full' >
            <img className='w-14 h-auto' src="/src/assets/images/more/logo1.png" alt="" />
            <h2 className='text-5xl'>Espresso Emporium</h2>
        </div>
    );
};

export default Navbar;