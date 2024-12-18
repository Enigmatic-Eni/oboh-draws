// components/ImageModal.js
import React from 'react';
import Image from 'next/image';
import { MdCancel } from "react-icons/md";

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-95 z-50">
            <div className=" relative max-w-[22rem] max-h-sm md:max-w-md  md:max-h-screen p-4">
            <MdCancel  onClick={onClose} className="absolute top-0 -right-5 text-2xl text-white cursor-pointer" />
                <Image src={imageSrc} alt="" width={300} height={300} layout="responsive" quality={90} />
            </div>
        </div>
    );
};

export default ImageModal;