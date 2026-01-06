import { Doctor, PromoCategory, Review, ServiceItem } from './types';

export const WHATSAPP_NUMBER = "6285219213132";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Wisata%20Dental%20Care,%20saya%20ingin%20reservasi/konsultasi.`;

export const NAV_LINKS = [
  { name: 'Tentang Kami', href: '#features' },
  { name: 'Jadwal Dokter', href: '#schedule' },
  { name: 'Layanan & Promo', href: '#services' },
  { name: 'Lokasi', href: '#location' },
];

export const DOCTORS: Doctor[] = [
  {
    id: 'drg-meilinda',
    name: 'Drg. Meilinda',
    schedules: [
      { day: 'Senin', time: '09.00 – 20.00' },
      { day: 'Rabu', time: '09.00 – 15.00' },
      { day: 'Kamis', time: '09.00 – 13.00' },
      { day: 'Jumat', time: '09.00 – 13.00' },
      { day: 'Sabtu', time: '16.00 – 20.00' },
      { day: 'Minggu', time: '09.00 – 17.00' },
    ],
  },
  {
    id: 'drg-diorrisa',
    name: 'Drg. Diorrisa',
    schedules: [
      { day: 'Selasa', time: '09.00 – 20.00' },
      { day: 'Rabu', time: '16.00 – 20.00' },
      { day: 'Kamis', time: '16.00 – 20.00' },
    ],
  },
  {
    id: 'drg-irene',
    name: 'Drg. Irene',
    schedules: [
      { day: 'Jumat', time: '16.00 – 20.00' },
      { day: 'Sabtu', time: '09.00 – 14.00' },
    ],
  },
];

export const PROMO_BEHEL: PromoCategory = {
  title: "Promo Spesial Behel",
  description: "Harga sudah termasuk konsultasi, scaling, pencetakan & pemasangan rahang atas & bawah.",
  items: [
    { name: 'Behel Metal Standar', price: 'Rp 1.700.000', isPromo: true },
    { name: 'Behel Metal Premium', price: 'Rp 1.900.000', isPromo: true },
    { name: 'Behel Metal USA', price: 'Rp 2.600.000', isPromo: true },
    { name: 'Behel Ceramic', price: 'Rp 2.400.000', isPromo: true },
    { name: 'Behel Metal AO', price: 'Rp 3.800.000', isPromo: true },
    { name: 'Behel Sapphire', price: 'Rp 4.000.000', isPromo: true },
  ]
};

export const GENERAL_SERVICES: ServiceItem[] = [
  { name: 'Scaling Gigi', price: 'Mulai Rp 250.000' },
  { name: 'Bleaching Gigi', price: 'Promo Rp 1.000.000' },
  { name: 'Konsultasi Gigi', price: 'Gratis via WA' },
  { name: 'Tambal Gigi Estetik' },
  { name: 'Pencabutan Gigi' },
  { name: 'Perawatan Saluran Akar' },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Siti Rahmawati",
    rating: 5,
    comment: "Dokternya sangat ramah dan sabar menjelaskan. Tempatnya juga nyaman banget, bersih dan wangi. Ga takut lagi ke dokter gigi.",
    date: "2 minggu lalu"
  },
  {
    id: 2,
    name: "Budi Santoso",
    rating: 5,
    comment: "Pasang behel disini harganya sangat terjangkau dibanding klinik lain di Cikampek. Bisa dicicil juga, sangat membantu!",
    date: "1 bulan lalu"
  },
  {
    id: 3,
    name: "Dinda Pertiwi",
    rating: 5,
    comment: "Scaling gigi disini bersih banget, ga sakit. Pelayanan resepsionis juga ramah. Recommended buat warga Cikampek.",
    date: "3 minggu lalu"
  },
];