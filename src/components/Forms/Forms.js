import React, { useState } from "react";
import "./styles.css";
import axios from 'axios';
import FileUploadButton from "./FileUploadButton";

function Forms() {
  const [selectedSoftware, setSelectedSoftware] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFilesSelect = (selectedFiles) => {
    console.log("Selected files:", selectedFiles);
  };

  const handleSoftwareChange = (event) => {
    setSelectedSoftware(event.target.value);
  };

  const handleFormSubmit = () => {
    const formData = new FormData();
    formData.append('software', selectedSoftware);
    formData.append('password', document.getElementById('password').value);
    formData.append('title', document.getElementById('text').value);
    formData.append('description', document.getElementById('description').value);
    formData.append('tags', document.getElementById('text').value);
    formData.append('date', document.getElementById('date').value);
    
    const thumbnailInput = document.getElementById('thumbnail-input');
    if (thumbnailInput.files.length > 0) {
      formData.append('thumbnail', thumbnailInput.files[0]);
    }
  
    const sourceFileInput = document.getElementById('sourcefile-input');
    if (sourceFileInput.files.length > 0) {
      formData.append('sourceFile', sourceFileInput.files[0]);
    }
  
    // Replace 'https://api.mockaroo.com/your-endpoint' with your actual API endpoint
    const apiUrl = 'https://api.mockaroo.com/your-endpoint';
  
    axios.post(apiUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        console.log('Form submitted successfully:', response.data);
        // Handle any additional logic or UI updates after successful submission
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        // Handle errors or show user feedback on failure
      });
  };
  
  return (
    <div>
      <div className="centered-container">
        <div className="transparent-card">
          <p className="heading">UiDesignDaily</p>
          <p className="subheading">Upload Files</p>
          <div className="form_box">
            <div className="Left_box">
              <label for="password">Authorization Key</label>
              <input
                className="password"
                type="password"
                id="password"
                name="password"
                placeholder="   Enter your key..."
              />
              <label for="title">Title</label>
              <input
                className="title_css"
                type="text"
                id="text"
                name="username"
              />
              <label for="description">Description</label>
              <input
                className="description_css"
                type="description"
                id="description"
                name="description"
                placeholder="   Description"
              />
            </div>
            <div className="Right_box">
              <label for="tag ">Tags (comma separated)</label>
              <input
                className="tag_css"
                type="text"
                id="text"
                name="text"
                placeholder="Tags (comma separated)"
              />
              <label for="date">Date</label>
              <input
                className="date_css"
                id="date"
                name="date"
                placeholder="DD/MM/YYYY"
              />

              <label htmlFor="software">Software:</label>
              <select
                className="software_css"
                id="software"
                value={selectedSoftware}
                onChange={handleSoftwareChange}
              >
                <option value="">Select Software</option>
                <option value="engineering">Engineering</option>
                <option value="c">C</option>
                <option value="cpp">C++</option>
              </select>
              {selectedSoftware && <p>You selected: {selectedSoftware}</p>}
              <div className="right_bottom_box">
                <div className="file-upload">
                  <label className="thumbnail-value" htmlFor="file-input">
                    Thumbnail Image
                  </label>
                  <div className="Thumbnail-upload-file-btn">
                    <FileUploadButton onFilesSelect={handleFilesSelect} />
                  </div>
                </div>
                <div class="file_uploadsource">
                  <label className="sourcefile-value" for="file-input">
                    Source File
                  </label>
                  <div className="Thumbnail-upload-file-btn">
                    {" "}
                    <FileUploadButton onFilesSelect={handleFilesSelect} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="button" onClick={handleFormSubmit}>
            <span className="submit-btn-color">Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Forms;
