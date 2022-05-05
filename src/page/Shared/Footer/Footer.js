import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-black text-white mt-16 p-16 text-center'>
            <p>Copyright &copy; {year}</p>
        </div>
    );
};

export default Footer;