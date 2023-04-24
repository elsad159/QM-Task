import React, { useRef } from "react";

const ThreadAdd = ({ onAddThread }) => {
  const nameRef = useRef(null);
  const typeRef = useRef(null);
  const dateRef = useRef(null);

  const handleAddThread = (e) => {
    e.preventDefault();
    const threadName = nameRef.current.value;
    const threadType = typeRef.current.value;
    const threadDate = dateRef.current.value;
    const newThread = { name: threadName, type: threadType, date: threadDate };
    onAddThread(newThread);
    nameRef.current.value = "";
    typeRef.current.value = "";
    dateRef.current.value = "";
    const threads = JSON.parse(localStorage.getItem("threads") || "[]");
    threads.push(newThread);
    localStorage.setItem("threads", JSON.stringify(threads));
  };

  return (
    <div>
      <form className="w-full mr-4">
        <label className="flex flex-col">
          <span className="flex flex-row">
            Thread Name <p className="text-red-600 ml-2">*</p>
          </span>
          <input
            ref={nameRef}
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
          <select
            className="border border-gray-300 rounded my-2 py-1 pl-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
            placeholder="Choose one of this"
            ref={typeRef}
          >
            <option value="" disabled selected hidden>
              Choose one of this
            </option>
            <option value="SMS">SMS</option>
            <option value="Email">Email</option>
          </select>
        </label>
      </form>
      <form className="w-full">
        <label className="flex w-full flex-col">
          <span>Register Date</span>
          <input
            ref={dateRef}
            className="border border-gray-300 rounded my-2 py-1 pl-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
            type="date"
            placeholder="Select a date"
          />
        </label>
      </form>
      <button
        className="bg-green-500 px-3 py-1 rounded mt-5 text-white hover:bg-green-400"
        onClick={handleAddThread}
      >
        Add Thread
      </button>
    </div>
  );
};

export default ThreadAdd;
