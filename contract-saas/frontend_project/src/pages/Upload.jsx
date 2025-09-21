import React, { useState } from 'react';

function Upload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    alert('File uploaded (mock).');
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Upload Contract</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} className="bg-green-500 text-white px-4 py-2 ml-2">Upload</button>
    </div>
  );
}

export default Upload;