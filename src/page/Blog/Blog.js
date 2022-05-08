import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 m-4 p-8'>
            <div>
                <h2 className='text-3xl font-bold text-center mb-4'>Difference between javascript and nodejs</h2>
                <p><span className='text-lg text-red-600 font-bold'>Javascript</span>:
                    Javascript হচ্ছে একটি programming language। এটি browser এ run করা যায়। এটি মূলত use হয় client side তৈরিতে এবং এর কিছু library and framworks ও আছে যেমন reactjs and angularjs। এটি যেকোনো browser engine এ run হয়।
                </p>
                <span className='text-lg text-red-600 font-bold'>Nodejs</span>:
                Nodejs হচ্ছে javascript এর একটি runtime environment। এর মাধ্যমে আমরা javascript কে browser এর বাহিরে run করতে পারি। এটা মূলত use হয় server side এ। এটি javascript এর v8 engine ব্যবহার করে।

            </div>
            <div>
                <h2 className='text-3xl font-bold text-center mb-4'>When should you use nodejs and when should you use mongodb
                    Nodejs:
                </h2>
                <p>আমরা জানি nodejs হচ্ছে javascript এর runtime অর্থাৎ আমরা যদি javascript কে backend server এ use করতে চাই তাহলে আমরা nodejs use করবো। এটি সাধারনত web এ বেশি use হয়। small project বা যেসব site এ তেমন বেশি data analysis করার প্রয়োজন হয় না সেসব ক্ষেত্রে nodejs use করা হয়। এই কারনে আমি nodejs use করি।</p>
                <p>আমরা জানি mongodb হচ্ছে একটি database। এই database টি হচ্ছে non-relational database management system। এটি ব্যবহার করাও সহজ। এটি use করে খুব সহজে data add and update করা যায়। এটি beginner friendly database। এই কারনে আমি mongodb use করি। </p>
            </div>
            <div>
                <h2 className='text-3xl font-bold text-center mb-4'>Difference between SQL and NoSQL</h2>
                <p><span className='text-lg text-red-600 font-bold'>SQL</span>:
                    SQL হচ্ছে একটি relational database management system যেটা hierarchical data storage এর জন্য উপযুক্ত নয়। এটি জটিল query এর জন্য উপযুক্ত।  এটির আছে fixed schema। এটি vertically scalable।
                </p>
                <p><span className='text-lg text-red-600 font-bold'>NoSQL</span>:
                    NoSQL হচ্ছে non-relational database management system। এটি hierarchical data storage এর জন্য উপযুক্ত। এটি জটিল query এর জন্য উপযুক্ত নয়। এটির আছে dynamic schema। এটি Horizontally scalable।
                </p>
            </div>
        </div>
    );
};

export default Blog;