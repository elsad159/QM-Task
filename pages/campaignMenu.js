import React, { useState, useEffect } from "react";
import Link from "next/link";
import { EditOutlined } from "@ant-design/icons";
import { DeleteOutlined } from "@ant-design/icons";
import ThreadAdd from "@/components/ThreadAdd";
import ModalComponent from "@/components/Modal";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

function CampaignMenuPage() {
  const [open, setOpen] = useState(false);
  const [deleteThreadIndex, setDeleteThreadIndex] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editMode, setEditMode] = useState(null);
  const [editValue, setEditValue] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [threads, setThreads] = useState(() => {
    if (typeof localStorage !== "undefined") {
      const storedThreads = JSON.parse(localStorage.getItem("threads"));
      return storedThreads ? storedThreads : [];
    } else {
      return [];
    }
  });
  const [filteredThreads, setFilteredThreads] = useState(threads);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      searchThreads();
    }, 500);
    return () => clearTimeout(delaySearch);
  }, [searchTerm]);

  useEffect(() => {
    const storedThreads = localStorage.getItem("threads");
    if (storedThreads) {
      setThreads(JSON.parse(storedThreads));
    }
  }, []);
  const handleEditThread = (index) => {
    setEditMode(index);
    setEditValue(threads[index].name);
  };

  const handleSaveThread = (index, newName) => {
    const newThreads = [...threads];
    newThreads[index].name = newName;
    setThreads(newThreads);
    setEditMode(null);
    setEditValue(null);
  };

  const handleAddThread = (name, type) => {
    const newThread = { name, type, date: new Date().toLocaleString() };
    setThreads([newThread, ...threads]);
    setThreads([newThread, ...filteredThreads]);
    handleClose();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleDeleteThread = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      const newThreads = [
        ...threads.slice(0, index),
        ...threads.slice(index + 1),
      ];
      setThreads(newThreads);
      setFilteredThreads([
        ...filteredThreads.slice(0, index),
        ...filteredThreads.slice(index + 1),
      ]);
      localStorage.setItem("threads", JSON.stringify(newThreads));
    }
  };

  const handleConfirmDelete = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        setThreads((prevThreads) => {
          const newThreads = [...prevThreads];
          newThreads.splice(deleteThreadIndex, 1);
          localStorage.setItem("threads", JSON.stringify(newThreads));
          return newThreads;
        });
        setShowDeleteModal(false);
        resolve();
      }, 5000);
    });
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  const handleCancelEdit = () => {
    setEditMode(null);
    setEditValue(null);
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setTimeout(() => {
      const results = threads.filter((thread) =>
        thread.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredThreads(results);
    }, 500);
  };

  const searchThreads = () => {
    const filteredThreads = threads.filter(
      (thread) =>
        typeof thread.name === "string" &&
        thread.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredThreads);
  };

  // const threadsToDisplay = searchTerm ? searchResults : threads;

  return (
    <div>
      <Link href="/">
        <img
          className="w-24 absolute left-8 top-6"
          src="https://qmeter.net/assets/images/statics/qmeter_logo.png"
        />
      </Link>
      <header className="flex justify-center items-start mt-4">
        <h1 className="text-3xl">Campaign Menu</h1>
      </header>
      <div className="w-5/6 mx-auto">
        <div className="my-8 flex justify-between items-center ">
          <div className="left">
            <h4 className="text-2xl">Champaign</h4>
            <p className="text-gray-400">
              You can communicate with your customers directly from this section
            </p>
          </div>
          <div className="right">
            <div>
              <button
                onClick={handleOpen}
                className="px-2 py-1 text-white rounded bg-green-600 hover:bg-green-500"
              >
                NEW THREAD
              </button>
              <input
                type="text"
                className="border border-gray-300 rounded ml-5 my-2 py-1 pl-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleSearch}
              />

              <ModalComponent open={open} onClose={handleClose}>
                <ThreadAdd onAddThread={handleAddThread} />
              </ModalComponent>
            </div>
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-8">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                <EditOutlined style={{ fontSize: 18 }} />
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredThreads.map((th, index) => (
              <tr
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                key={index}
              >
                <td className="pl-6">{filteredThreads.length - index}</td>
                <td>
                  {editMode === index ? (
                    <input
                      type="text"
                      defaultValue={th.name}
                      onBlur={(event) =>
                        handleSaveThread(index, event.target.value)
                      }
                    />
                  ) : (
                    th.name
                  )}
                </td>
                <td className="px-6 py-4">{th.type}</td>
                <td className="px-6 py-4">{th.date}</td>
                <td>
                  {editMode === index ? (
                    <div className="ml-2">
                      <button
                        className="mx-4"
                        onClick={() => handleSaveThread(index, editValue)}
                      >
                        <CheckOutlined />
                      </button>
                      <button onClick={handleCancelEdit}>
                        <CloseOutlined />
                      </button>
                    </div>
                  ) : (
                    <button
                      className="bg-orange-500 hover:bg-orange-400 rounded px-2 py-1 ml-6 text-white"
                      onClick={() => handleEditThread(index)}
                    >
                      EDIT
                    </button>
                  )}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDeleteThread(index)}
                    className="text-lg"
                  >
                    <DeleteOutlined className="pb-2" />
                  </button>
                  {showDeleteModal && (
                    <div className="modal fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
                      <div className="modal-content bg-white rounded-lg p-6">
                        <h2 className="text-xl font-bold mb-4">
                          Confirm Delete
                        </h2>
                        <p className="mb-4">
                          Are you sure you want to delete this thread?
                        </p>
                        <div className="modal-buttons flex justify-end">
                          <button
                            className="text-red-400 mr-4"
                            onClick={handleConfirmDelete}
                          >
                            Delete
                          </button>
                          <button
                            className="text-blue-400"
                            onClick={handleCancelDelete}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CampaignMenuPage;
