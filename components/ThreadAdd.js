import React, { useRef } from "react";

const ThreadAdd = () => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value;
    console.log("Input value:", inputValue);
    // Use input value as needed
  };
  return (
    <div>
      <form className="w-full mr-4">
        <label className="flex flex-col">
          <span className="flex flex-row">
            Thread Name <p className="text-red-600 ml-2">*</p>
          </span>
          <input
            ref={inputRef}
            className="border border-gray-300 rounded my-2 py-1 pl-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your name"
            type="text"
            required
          />
        </label>
      </form>
      <form className="w-full mr-4">
        <label className="flex flex-col">
          <span className="flex flex-row">
            Type <p className="text-red-600 ml-2">*</p>
          </span>
          <input
            className="border border-gray-300 rounded my-2 py-1 pl-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter the type"
            type="text"
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
      </form>
      <form className="w-full">
        <label className="flex w-full flex-col">
          <span>Register Date</span>
          <input
            className="border border-gray-300 rounded my-2 py-1 pl-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
            type="date"
            placeholder="Select a date"
          />
        </label>
      </form>
      <button className="bg-green-500 px-3 py-1 rounded mt-5 text-white hover:bg-green-400">
        Add Thread
      </button>
    </div>
  );
};

export default ThreadAdd;
