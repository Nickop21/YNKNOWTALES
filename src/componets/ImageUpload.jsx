import React, { forwardRef, useState } from 'react';

const ImageUpload =  forwardRef(({ register }, ref) => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
            if (register.onChange) {
                register.onChange(e);
              }
        }
    };


    return (
        <div className="flex flex-col items-center border p-6 rounded-lg w-80 mx-auto">
            <label htmlFor="fileInput" className="inline-block px-4 py-2 bg-amber-500 text-white rounded cursor-pointer mb-4">
                Choose an Image
            </label>
            <input
                type="file"
                id="fileInput"
                onChange={handleImageChange}
                className="hidden"
                ref={ref}
            />
            {preview && <img src={preview} alt="Preview" className="max-w-full max-h-52 rounded mb-4" />}
            {/* <button onClick={handleImageUpload} className="px-4 py-2 bg-green-500 text-white rounded">
                Upload Image
            </button> */}
        </div>
    );
});

export default ImageUpload;
