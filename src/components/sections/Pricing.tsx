import React from 'react';
import { Check, Heart, Star, Gift } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8 border-2 border-primary-100 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
            Penawaran Terbaik!
          </div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Penawaran Spesial Hari Ini!</h2>
            <p className="text-gray-600">Investasi terbaik untuk masa depan buah hati tercinta</p>
          </div>
          <div className="space-y-6 mb-8">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Gift className="w-6 h-6 text-primary-500" />
              <span>Dapatkan Birru Play "48 Keinginan Pertamaku" dengan Bonus Eksklusif:</span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center bg-primary-50 p-4 rounded-lg">
                <Check className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Video Tutorial Lengkap</span>
                  <span className="text-gray-500 ml-2">(Senilai Rp 150.000)</span>
                </div>
              </li>
              <li className="flex items-center bg-secondary-50 p-4 rounded-lg">
                <Check className="w-5 h-5 text-secondary-500 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Panduan Orang Tua Digital</span>
                  <span className="text-gray-500 ml-2">(Senilai Rp 99.000)</span>
                </div>
              </li>
              <li className="flex items-center bg-accent-50 p-4 rounded-lg">
                <Check className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Konsultasi Online 30 Menit</span>
                  <span className="text-gray-500 ml-2">(Senilai Rp 200.000)</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <p className="text-gray-500 line-through mb-2">Total Nilai Rp 449.000</p>
            <p className="text-3xl font-bold text-primary-600 mb-6">Harga Spesial: Rp 299.000</p>
            <button className="bg-primary-500 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-primary-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Ya, Saya Mau Pesan Sekarang!
            </button>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-primary-500 mr-1" />
                <span>Garansi 30 Hari</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 text-accent-500 mr-1" />
                <span>Pembayaran Aman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}