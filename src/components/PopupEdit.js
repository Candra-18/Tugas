import React, { useState } from 'react';

const PopupEdit = ({ player, onSave, onCancel }) => {
  const [playerName, setPlayerName] = useState(player.nama);
  const [playerScore, setPlayerScore] = useState(player.skor);
  const [playerPhoto, setPlayerPhoto] = useState(player.url_foto);
  const [newPhoto, setNewPhoto] = useState(null); 


  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setNewPhoto(fileReader.result); 
      };
      fileReader.readAsDataURL(file); 
    }
  };

  
  const handleSave = () => {
    const updatedPlayer = {
      ...player,
      nama: playerName,
      skor: playerScore,
      url_foto: newPhoto || playerPhoto, 
    };
    onSave(updatedPlayer);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Edit Skor Pemain</h2>
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          className="border p-2 mb-4 w-full rounded-md"
          placeholder="Nama Pemain"
        />
        <input
          type="number"
          value={playerScore}
          onChange={(e) => setPlayerScore(e.target.value)}
          className="border p-2 mb-4 w-full rounded-md"
          placeholder="Skor"
        />
        <div className="mb-4">
          <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Pilih Foto Pemain</label>
          <input
            type="file"
            id="photo"
            onChange={handlePhotoChange}
            className="border p-2 mb-4 w-full rounded-md"
            accept="image/*"
          />
          {newPhoto && (
            <div className="mt-2">
              <img src={newPhoto} alt="Pratinjau Foto" className="w-32 h-32 object-cover rounded-md" />
            </div>
          )}
          {!newPhoto && player.url_foto && (
            <div className="mt-2">
              <img src={player.url_foto} alt="Foto Pemain" className="w-32 h-32 object-cover rounded-md" />
            </div>
          )}
        </div>
        <div className="space-x-4">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Simpan
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-500 text-white py-2 px-4 rounded-md"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupEdit;
