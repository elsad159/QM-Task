import React, { useState } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { EditOutlined } from "@ant-design/icons";
import { DeleteOutlined } from "@ant-design/icons";
import ThreadAdd from "@/components/ThreadAdd";

function CampaignMenuPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
                className="px-2 py-1 text-white rounded bg-green-600  hover:bg-green-500"
              >
                NEW THREAD
              </button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Add a a new Thread!
                  </Typography>
                  <div>
                    <ThreadAdd />
                  </div>
                </Box>
              </Modal>
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
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Elshad</td>
              <td className="px-6 py-4">Email</td>
              <td className="px-6 py-4">Nov 12, 2022</td>
              <td className="px-6 py-4">
                <button className="bg-orange-500  hover:bg-orange-400 rounded px-2 py-1 text-white">
                  EDIT
                </button>
              </td>
              <td className="px-6 py-4">
                <button className="text-lg">
                  <DeleteOutlined className="pb-2" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "white",
  boxShadow: 24,
  p: 3,
  borderRadius: 1,
};

export default CampaignMenuPage;
