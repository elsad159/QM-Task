"use client";
import React, { useState, useEffect } from "react";
import { MessageOutlined } from "@ant-design/icons";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/router";

const FormsMail = () => {
  const [threadName, setThreadName] = useState("");
  const [error, setError] = useState("");
  const [text, setText] = useState("");
  const [customers, setCustomers] = useState([]);
  const [receivers, setReceivers] = useState([]);
  const [newCustomerEmail, setNewCustomerEmail] = useState("");
  const [newRecieverEmail, setNewRecieverEmail] = useState("");
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleSendClick() {
    setIsModalOpen(true);
  }

  function handleConfirm() {
    router.push("/campaignMenu");
  }

  useEffect(() => {
    const storedData = localStorage.getItem("users");
    if (storedData) {
      const { customers, receivers } = JSON.parse(storedData);
      setCustomers(customers);
      setReceivers(receivers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify({ customers, receivers }));
  }, [customers, receivers]);

  const handleNewCustomerEmailChange = (event) => {
    setNewCustomerEmail(event.target.value);
  };

  const handleNewCustomerEmailKeyPress = (event) => {
    if (event.key === "Enter") {
      addNewCustomer(newRecieverEmail);
    }
  };

  const addNewCustomer = (email) => {
    if (!isValidEmail(email)) {
      alert("Invalid email address");
      return;
    }

    // Check if the email already exists among Customers
    if (customers.find((customer) => customer.email === email)) {
      alert("Email already exists");
      return;
    }

    // Create a new Customer and add them to the Customers and Receivers lists
    const newCustomer = { email };
    const updatedCustomers = [...customers, newCustomer];
    setCustomers(updatedCustomers);
    setReceivers([...receivers, newCustomer]);
    setNewCustomerEmail("");

    localStorage.setItem(
      "users",
      JSON.stringify({
        customers: updatedCustomers,
        receivers: [...receivers, newCustomer],
      })
    );
  };

  const handleSelectAll = () => {
    setReceivers(customers);
    localStorage.setItem(
      "users",
      JSON.stringify({ customers, receivers: receivers })
    );
  };

  const handleDeselectAll = () => {
    setReceivers([]);
    localStorage.setItem("users", JSON.stringify({ customers, receivers: [] }));
  };

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
          <form className="w-full " onSubmit={handleSubmit}>
            {error && <p>{error}</p>}

            <div className="mt-8">
              <div className="border rounded">
                <h2 className="pl-2 pt-1 text-lg">Customers</h2>
                <button
                  className="mr-5 ml-2 my-2 border rounded bg-blue-500 px-2 py-1 text-white"
                  onClick={handleSelectAll}
                >
                  Choose All
                </button>
                <button
                  className="border rounded bg-green-400 px-2 py-1 text-white"
                  onClick={handleDeselectAll}
                >
                  Deselect All
                </button>
                <input
                  type="text"
                  className="border w-[58%] ml-2 border-gray-300 rounded my-2 py-1 pl-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter new customer email"
                  value={newCustomerEmail}
                  onChange={handleNewCustomerEmailChange}
                  onKeyPress={handleNewCustomerEmailKeyPress}
                />

                <button
                  className="ml-2 border rounded bg-yellow-500 text-white px-2 py-1"
                  onClick={() => addNewCustomer(newCustomerEmail)}
                >
                  Add Customer
                </button>
                <select multiple style={{ width: "355px" }}>
                  <option>test@test</option>
                </select>

                <br />
              </div>
              <div className="border">
                <h2>Receivers</h2>
                <select
                  multiple
                  style={{ width: "355px" }}
                  value={receivers.map((receiver) => receiver.email)}
                >
                  {receivers.map((reciever) => (
                    <option>{reciever.email}</option>
                  ))}
                </select>
              </div>
            </div>
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
          <div>
            <h1>Campaign Send</h1>
            <div className="bottom flex flex-row justify-between mt-5">
              <span className="text-gray-500">
                * Don't insert link if template not selected
              </span>
              <button
                className="bg-green-400 px-3 py-1 text-white"
                onClick={handleSendClick}
              >
                Send
              </button>
            </div>
            {isModalOpen && (
              <div
                className="modal"
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 999,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                }}
              >
                <div
                  className="modal-content"
                  style={{
                    backgroundColor: "white",
                    padding: 20,
                    borderRadius: 5,
                    maxWidth: 500,
                  }}
                >
                  <p className="mb-6">
                    Are you sure you want to send this campaign?
                  </p>
                  <div>
                    <button
                      className="bg-green-500 text-white px-5 py-1 rounded mr-6"
                      onClick={handleConfirm}
                    >
                      Yes
                    </button>
                    <button
                      className="bg-red-500 text-white px-5 py-1 rounded mr-6"
                      onClick={() => setIsModalOpen(false)}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            )}
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

function isValidEmail(email) {
  // Check if the email is valid using a regular expression
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default FormsMail;
