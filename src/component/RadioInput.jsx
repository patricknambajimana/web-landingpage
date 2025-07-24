import React from 'react';

const RadioInput = () => {
  return (
    <div className="text-center m-10">
      <div className="flex justify-center gap-10">

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="options"
            value="option1"
            className="appearance-none w-6 h-6 border-2 border-gray-400 rounded-full checked:bg-primary-400 checked:border-primary-500 transition"
          />
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="options"
            value="option2"
            className="appearance-none w-6 h-6 border-2 border-gray-400 rounded-full checked:bg-primary-400 checked:border-primary-500 transition"
          />
        </label>
      </div>
    </div>
  );
};

export default RadioInput;
