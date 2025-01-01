import React from 'react';

const ShareMenu = ({ player, onShare, onClose }) => {
  const shareText = `Saya mencapai skor ${player.skor} di permainan ini! Coba dan lihat jika Anda bisa mengalahkan saya! #PapanPeringkat ${player.nama}`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full">
        <h2 className="text-xl font-semibold text-center mb-4">Bagikan ke Platform</h2>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => onShare('whatsapp', player.nama, player.skor)}
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200"
          >
            WhatsApp
          </button>
          <button
            onClick={() => onShare('telegram', player.nama, player.skor)}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Telegram
          </button>
          <button
            onClick={() => onShare('facebook', player.nama, player.skor)}
            className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-200"
          >
            Facebook
          </button>
          <button
            onClick={() => onShare('instagram', player.nama, player.skor)}
            className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-200"
          >
            Instagram
          </button>
        </div>
        <button
          onClick={onClose}
          className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition duration-200 mt-4"
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

export default ShareMenu;
