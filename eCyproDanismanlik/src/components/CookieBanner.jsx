import { useEffect, useState } from 'react';

const STORAGE_KEY = 'cookie_consent';

const CookieBanner = ({ onAccept, onReject }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'granted');
    setVisible(false);
    onAccept?.();
  };

  const handleReject = () => {
    localStorage.setItem(STORAGE_KEY, 'denied');
    setVisible(false);
    onReject?.();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:pb-6">
      <div className="max-w-5xl p-4 mx-auto bg-white border border-gray-200 shadow-lg sm:rounded-lg">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-900">Çerez ve Analitik İzni</p>
            <p className="text-sm text-gray-600">
              Deneyiminizi iyileştirmek için analitik çerezleri kullanabiliriz. Kabul ederseniz ölçüm yapılır;
              reddederseniz yalnızca zorunlu çerezler kullanılır.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleReject}
              className="px-3 py-2 text-sm font-semibold text-gray-700 bg-gray-100 border border-gray-200 rounded hover:bg-gray-200"
            >
              Reddet
            </button>
            <button
              onClick={handleAccept}
              className="px-3 py-2 text-sm font-semibold text-white rounded bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
            >
              Kabul Et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
