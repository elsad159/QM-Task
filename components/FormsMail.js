"use client";
import React, { useState } from "react";
import { MessageOutlined } from "@ant-design/icons";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const FormsMail = () => {
  const [threadName, setThreadName] = useState("");
  const [error, setError] = useState("");
  const [text, setText] = useState("");

  const handleTextChange = (value) => {
    setText(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!threadName) {
      setError("Please fill out all required fields.");
      return;
    }
  };

  return (
    <div className="flex flex-row w-full flex-wrap">
      <div className="forms pl-5 w-4/6 flex flex-col">
        <div className="flex flex-row">
          <form className="w-full mr-4" onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <label className="flex flex-col">
              <span className="flex flex-row">
                Thread Name <p className="text-red-600 ml-2">*</p>
              </span>
              <input
                className="border border-gray-300 rounded my-2 py-1 pl-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter thread name"
                type="text"
                value={threadName}
                onChange={(event) => setThreadName(event.target.value)}
                required
              />
            </label>
          </form>
          <form className="w-full" onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <label className="flex flex-col">
              <span>Template</span>
              <select
                className="border border-gray-300 rounded my-2 py-1 pl-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                name="feedback-template"
                id="feedback-template"
              >
                <option value="" disabled selected>
                  Select feedback template
                </option>
                <option value="1">QNP-102 Template</option>
              </select>
            </label>
          </form>
        </div>
        <div className="flex flex-row">
          <form className="w-full mr-4" onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <label className="flex flex-col">
              <span className="flex flex-row">From</span>
              <input
                className="border border-gray-300 rounded my-2 py-1 pl-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                placeholder="QMeter or 2355"
                type="text"
                value={threadName}
                onChange={(event) => setThreadName(event.target.value)}
                required
                disabled
              />
            </label>
          </form>
          <form className="w-full" onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <label className="flex flex-col">
              <span className="flex">
                To <p className="text-red-500 ml-2">*</p>
              </span>
              <select
                className="border border-gray-300 rounded my-2 py-1 pl-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                name="options"
                id="options"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
            </label>
          </form>
        </div>
        <div className="flex flex-row">
          <form className="w-full mr-4" onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <label className="flex flex-col">
              <span className="flex flex-row">
                Thread Name <p className="text-red-600 ml-2">*</p>
              </span>
              <input
                className="border border-gray-300 rounded my-2 py-1 pl-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your name"
                type="text"
                defaultValue="Сustomer"
                onChange={(event) => setName(event.target.value)}
                required
              />
            </label>
          </form>
          <form className="w-full">
            {error && <p>{error}</p>}
            <label className="flex w-full flex-col">
              <span className="flex">
                Start sending <p className="text-red-500 ml-2">*</p>
              </span>
              <input
                className="border border-gray-300 rounded my-2 py-1 pl-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                type="date"
                placeholder="Select a date"
              />
            </label>
          </form>
        </div>
        <div className="flex flex-row">
          <form className="w-[49%] mr-4" onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <label className="flex flex-col">
              <span className="flex flex-row">Subject</span>
              <input
                className="border border-gray-300 rounded my-2 py-1 pl-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter subject here"
                type="text"
                onChange={(event) => setName(event.target.value)}
                required
              />
            </label>
          </form>
        </div>
        <div>
          <h4 style={{ fontWeight: 600 }}>Content</h4>
          <div className="inserts my-5 flex flex-row items-center">
            <a href="*" className="text-blue-400">
              InsertName
            </a>
            <select
              className="select-option w-[175px] py-[2px] mx-5 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
              placeholder="Insert feedback links"
            >
              <option value="" disabled selected hidden>
                Insert feedback links
              </option>
              <option value="option1">Option 1</option>
            </select>
            <select
              className="select-option w-[175px] py-[2px] border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
              placeholder="Insert Template"
            >
              <option value="" disabled selected hidden>
                Insert Template
              </option>
              <option value="option1">Option 1</option>
            </select>
          </div>
          <ReactQuill
            value={text}
            onChange={handleTextChange}
            modules={{
              toolbar: {
                container: [
                  [{ header: [1, 2, 3, 4, 5, 6, false] }],
                  ["bold", "italic", "underline", "strike"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  [{ align: [] }],
                  [{ color: [] }, { background: [] }],
                  ["image", "link", "video"],
                  ["clean"],
                ],
              },
            }}
            formats={[
              "header",
              "bold",
              "italic",
              "underline",
              "strike",
              "list",
              "bullet",
              "align",
              "color",
              "background",
              "image",
              "link",
              "video",
            ]}
          />
          <div className="bg-gray-300 h-[1px] mx-auto w-[100%] mt-5"></div>
          <div className="bottom flex flex-row justify-between mt-5">
            <span className="text-gray-500">
              * Don't insert link if teamplate not selected
            </span>
            <button className="bg-green-400 px-3 py-1 text-white">Send</button>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: 15, width: 350 }} className="border rounded ">
        <h5 className="p-4">Sending Info</h5>
        <div className="bg-gray-300 h-[1px] mx-auto w-[95%]"></div>
        <div className="center">
          <div className="up flex justify-center flex-col my-5 items-center">
            <MessageOutlined className="text-2xl" />
            <span className="my-2">0</span>
            <h3>Total email count</h3>
          </div>
          <div className="moreInfo">
            <div className="customerCount flex justify-between w-[93%] pl-3 items-center">
              <p className="text-sm">Customer count</p>
              <p className="text-sm">0</p>
            </div>
            <div className="bg-gray-300 h-[1px] mx-auto my-2 w-[95%]"></div>
            <div className="customerCount flex justify-between w-[93%] pl-3 items-center">
              <p className="text-sm">Feedback Balance</p>
              <p className="text-sm">9985</p>
            </div>
            <div className="bg-gray-300 h-[1px] mx-auto my-2 w-[95%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormsMail;
