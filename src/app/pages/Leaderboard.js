'use client';

import { useState } from 'react';
import { mockData } from '../../utils/mockData';
import PopupEdit from '../../components/PopupEdit';
import ShareMenu from '../../components/ShareMenu'; // Import ShareMenu

export default function Leaderboard() {
  const [data, setData] = useState(mockData);
  const [editingPlayer, setEditingPlayer] = useState(null);
  const [sharingPlayer, setSharingPlayer] = useState(null);

  const handleShare = (platform, nama, skor) => {
    const shareText = `Saya mencapai skor ${skor} di permainan ini! Coba dan lihat jika Anda bisa mengalahkan saya! #PapanPeringkat ${nama}`;
    let shareUrl = '';

    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(shareText)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareText)}`;
        break;
      case 'instagram':
        shareUrl = `https://www.instagram.com/?url=${encodeURIComponent(shareText)}`;
        break;
      default:
        break;
    }
    window.open(shareUrl, '_blank');
    setSharingPlayer(null); // Close share menu after sharing
  };

  const handleEdit = (player) => {
    setEditingPlayer(player);
  };

  const handleSaveEdit = (updatedPlayer) => {
    const updatedData = data.map((player) =>
      player.id === updatedPlayer.id ? updatedPlayer : player
    );
    setData(updatedData);
    console.log('Update Payload:', updatedPlayer);
    setEditingPlayer(null);
  };

  const handleCancelEdit = () => {
    setEditingPlayer(null);
  };

  const handleShareMenu = (player) => {
    setSharingPlayer(player); // Open share menu for the selected player
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Papan Peringkat</h1>

      <div className="space-y-4 mb-8">
        {data
          .sort((a, b) => b.skor - a.skor)
          .map((player, index) => (
            <div
              key={player.id}
              className="flex items-center justify-between p-4 border rounded-md shadow-lg bg-white"
            >
              <div className="flex items-center space-x-4">
                <p className="font-semibold text-xl text-gray-800">{index + 1}</p>
                <img
                  src={player.url_foto}
                  alt={player.nama}
                  className="w-14 h-14 rounded-full border-2 border-gray-300"
                />
                <div>
                  <p className="font-semibold text-lg text-gray-800">{player.nama}</p>
                  <p className="text-gray-500">Skor: {player.skor}</p>
                </div>
              </div>

              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(player)}
                  className="bg-yellow-500 text-white py-1 px-4 rounded-md hover:bg-yellow-600 transition duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleShareMenu(player)}
                  className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Bagikan
                </button>
              </div>
            </div>
          ))}
      </div>

      {editingPlayer && (
        <PopupEdit
          player={editingPlayer}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      )}

      {/* Share Menu */}
      {sharingPlayer && (
        <ShareMenu
          player={sharingPlayer}
          onShare={handleShare}
          onClose={() => setSharingPlayer(null)}
        />
      )}
    </div>
  );
}
