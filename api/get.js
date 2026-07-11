// File: api/get.js
import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  // Ambil nama klien dari URL (contoh: /api/get?client=Deni12072026)
  const idClient = req.query.client;

  if (!idClient) {
    return res.status(400).json({ error: 'ID Client tidak ada' });
  }

  try {
    // Cari data di Vercel KV berdasarkan ID
    const data = await kv.get(idClient);
    
    if (data) {
      return res.status(200).json(data);
    } else {
      return res.status(404).json({ error: 'Data tidak ditemukan' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Gagal membaca data' });
  }
}