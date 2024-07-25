// pages/form.js
import { useState } from 'react';
//import fs from 'fs-extra';
import fs from 'graceful-fs';
import path from 'path';

export default function Form() {
  const [formData, setFormData] = useState({
    title: '',
    year: '',
    support: '',
    barreCode: '',
    image: '',
    author: '',
    ipfsLink: '',
    pictureAll: '',
    pictureCover: '',
    pictureBack: '',
    pictureSide: '',
    pictureCodeB: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jsonData = {
      title: formData.title,
      year: formData.year,
      support: formData.support,
      barreCode: formData.barreCode,
      image: formData.image,
      author: formData.author,
      ipfsLink: formData.ipfsLink,
      realAssetPictures: {
        pictureAll: formData.pictureAll,
        pictureCover: formData.pictureCover,
        pictureBack: formData.pictureBack,
        pictureSide: formData.pictureSide,
        pictureCodeB: formData.pictureCodeB,
      },
    };

    const response = await fetch('/api/save-json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    });

    if (response.ok) {
      alert('JSON file created successfully!');
    } else {
      alert('Failed to create JSON file.');
    }
  };

  return (
    <div>
      <h1>Enter Movie Details</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Year:
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Support:
          <input
            type="text"
            name="support"
            value={formData.support}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Barre Code:
          <input
            type="text"
            name="barreCode"
            value={formData.barreCode}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Owner:
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          IPFS Link:
          <input
            type="text"
            name="ipfsLink"
            value={formData.ipfsLink}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Picture of All:
          <input
            type="text"
            name="pictureAll"
            value={formData.pictureAll}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Picture of the Cover:
          <input
            type="text"
            name="pictureCover"
            value={formData.pictureCover}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Picture Back of the cover:
          <input
            type="text"
            name="pictureBack"
            value={formData.pictureBack}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Picture Side of the asset:
          <input
            type="text"
            name="pictureSide"
            value={formData.pictureSide}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Picture CodeBarre:
          <input
            type="text"
            name="pictureCodeB"
            value={formData.pictureCodeB}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
