import React, { useState } from "react";
import ImageModal from "./ImageModal";

const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imageFile =
    "https://adarbepari.com/wp-content/uploads/2016/08/mustard-oil-flower-manikganj-01.jpg"; // Example image

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Show Image
      </button>
      <ImageModal
        isOpen={isModalOpen}
        imageFile={imageFile}
        onClose={toggleModal}
      />
    </div>
  );
};

export default ParentComponent;
