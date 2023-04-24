import { useState } from 'react';
import { Modal, Button } from '@mui/material';

const DeleteThreadModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    onConfirm(thread);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <button onClick={showModal} className="text-lg">
        <DeleteOutlined className="pb-2" />
      </button>
      <Modal
        title={`Delete "${thread.name}"?`}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Delete"
        cancelText="Cancel"
      >
        <p>Are you sure you want to delete this thread?</p>
      </Modal>
    </>
  );
};
