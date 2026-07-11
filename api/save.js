// File: api/save.js
import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  // Hanya izinkan metode POST (pengiriman data)
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { idClient, idDrive, kuota } = req.body;

  try {
    // Simpan data ke Vercel KV
    // Format: kv.set(kunci, nilai)
    await kv.set(idClient, { idDrive, kuota });
    
    return res.status(200).json({ message: 'Data berhasil disimpan!' });
  } catch (error) {
    return res.status(500).json({ error: 'Gagal menyimpan data' });
  }
}