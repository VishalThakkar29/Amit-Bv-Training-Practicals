// import { upload } from "@testing-library/user-event/dist/upload";
import React, { useRef } from "react";
import { useState } from "react";
import "./Uploader.css";
import { AiFillDelete } from "react-icons/ai";
// import Models from "./Models/Models";

const Uploader: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isWrongFile, setIsWrongFile] = useState(false);
  // const [isPreview, setIsPreview] = useState<boolean>(false);
  let inputRef = useRef(null);
  const onSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles: FileList | null = event.target.files;

    // const onSelectFile = (event: React.ChangeEvent<HTMLInputElement>): void => {
    //   const selectedFiles: FileList | null = event.target.files;
    //   let file_size: number = event.target.files[0].size;
    //   if (file_size / 1024 > 400) {
    //     alert("file Size should be less than 400kb");
    //     return;
    //   }

    if (selectedFiles) {
      const selectedFilesArray: File[] = Array.from(selectedFiles);

      // console.log(selectedFilesArray[0]);
      const imagesArray: any = selectedFilesArray.map((file: any) => {
        console.log(file);
        const allowedTypes = ["image/png", "image/jpeg", "image/gif"];
        if (file && allowedTypes.includes(file.type)) {
          // do something with the selected file
          URL.createObjectURL(file);
        } else {
          alert("Please select a valid file (PNG, JPEG, or GIF)");
          setIsWrongFile(true);
        }
      });

      setSelectedImages((previousImages) => previousImages.concat(imagesArray));

      event.target.value = "";
    }
  };

  function deleteHandler(image: any) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
    console.log(image);
  }
  if (isSuccess) {
    alert("Files Uploaded Successfully");
    setIsSuccess(false);
  }

  // const imagePreviewHandler = () => {
  //   // console.log("image preview");
  //   setIsPreview(true);
  // };
  const uploadImageHandler = () => {
    setIsSuccess(true);
  };
  return (
    <>
      <section>
        <label>
          + Add Images
          <br />
          <input
            type="file"
            name="images"
            ref={inputRef}
            onChange={onSelectFile}
            multiple
            accept="image/png , image/jpeg,image/jpg"
          />
        </label>
        <br />

        <button className="upload-btn" onClick={uploadImageHandler}>
          UPLOAD {selectedImages.length} IMAGE
          {selectedImages.length === 1 ? "" : "S"}
        </button>
        {isWrongFile && <p>please select only jpg,jpeg,png file type</p>}
        {!isWrongFile && (
          <div className="images">
            {selectedImages &&
              selectedImages.map((image, index) => {
                return (
                  <div key={image} className="image">
                    <img src={image} height="200" alt="upload" />

                    <button
                      className="deleteimage"
                      onClick={() => deleteHandler(image)}
                    >
                      <AiFillDelete />
                    </button>
                    <p>{index + 1}</p>
                  </div>
                );
              })}
          </div>
        )}
      </section>
    </>
  );
};

export default Uploader;
