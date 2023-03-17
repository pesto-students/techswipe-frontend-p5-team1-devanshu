import React, { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { imageUpload } from "../utils/api";
import Loading from "../assets/loading.svg";

export const ImageUpload = ({
  setProfileImage,
  profileImage,
  user,
  stepTwo,
}) => {
  const imageMutation = useMutation({
    mutationFn: imageUpload,
    onSuccess: (data) => {
      setProfileImage(data.profileUrl);
      setFileInputState("");
      setSuccessMsg("Image uploaded successfully");
    },
  });

  const [fileInputState, setFileInputState] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const fileInputRef = useRef(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileInputState(e.target.value);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      setErrMsg("something went wrong!");
    };
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      imageMutation.mutate({ data: base64EncodedImage });
    } catch (err) {
      console.error(err);
      setErrMsg("Something went wrong!");
    }
  };

  const imageUrl = profileImage;

  return (
    <>
      <div className="flex flex-col justify-center items-center mb-4">
        <img
          src={imageMutation.isLoading ? Loading : imageUrl}
          alt="chosen"
          className="h-32 w-32 rounded-full"
        />
        {!stepTwo && (
          <button
            className="bg-slate-400 rounded-md px-4 py-2 self-end text-white"
            onClick={() => fileInputRef.current.click()}
          >
            Upload
          </button>
        )}
        <input
          hidden
          type="file"
          ref={fileInputRef}
          multiple={false}
          accept="image/*"
          onChange={handleFileInputChange}
        />
      </div>
      {/* <input type="file" id="fileInput" name="image" value={fileInputState} /> */}
      {errMsg && <div>Image upload failed can you try again</div>}
    </>
  );
};
