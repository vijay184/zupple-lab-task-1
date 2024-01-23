import React, { useRef,useState } from 'react';
import './styles.css';


const FileUploadButton = ({ onFilesSelect }) => {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState('No file uploaded');

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    onFilesSelect(selectedFiles);

    if (selectedFiles.length > 0) {
      setSelectedFileName(selectedFiles[0].name);
    } else {
      setSelectedFileName('No file uploaded');
    }
  };
  return (
    <div>
      <input
        type="file"
        multiple
        style={{ display: 'none' }}
        onChange={handleFileChange}
        ref={fileInputRef}
      />
      <div className='upload-file-span-button-value'>
      <button className="Thumbnail-upload-file-btn-color" onClick={handleButtonClick}>Upload File</button>
      <span className='nofile-choosen-span'>{selectedFileName}</span>
      </div>
    </div>
  );
};

export default FileUploadButton;
