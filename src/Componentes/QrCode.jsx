import { useEffect } from 'react';

import QRCode from 'qrcode';

export function QrCodeComponents() {
  async function fetchQRCode() {
    try {
      const response = await fetch('https://whatsapp-bot-production-b594.up.railway.app/qr');
      const qrCodeData = await response.text();
      const qrcodeElement = document.getElementById('qrcode');
      QRCode.toCanvas(qrcodeElement, qrCodeData, {
        width: 350,
        color: {
          dark: '#043d36',
          light: '#dcf8c6'
        }
      }, (error) => {
        if (error) console.error('Erro ao gerar o QR code:', error);
      });
    } catch (error) {
      console.error('Erro ao buscar o QR code:', error);
    }
  }

  useEffect(() => {
    fetchQRCode();
  }, []);

  return (
    <>
      <canvas id="qrcode"></canvas>
    </>
  );
}