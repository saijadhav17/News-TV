import React from 'react';

const Category = () => {
  return(
      <div className='bg-white mt-10 rounded-lg px-8 py-5 hidden lg:block'>
          <h1 className="font-bold text-2xl font-sans mb-5">
              Category
          </h1>
          <div className="flex flex-col gap-2" >
              <a href="/home">General</a>
              <a href="/business">Business</a>
              <a href="/entertainment">Entertainment</a>
              <a href="/helth">Helth Care</a>
              <a href="/science">Science</a>
              <a href="/sports">Sports</a>
              <a href="/technology">Technology</a>
              <a href="/general">Jobs</a>
              <a href="/entertainment">Bollywood</a>
              <a href="/science">Kids</a>
              <a href="/entertainment">Media</a>
          </div>
      </div>
  )
};

export default Category;
