import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Siswa TK",
        price: 5000,
        period: "Pertemuan",
        features: [
            "Pengenalan Huruf & Angka Dasar",
            "Video belajar animasi seru",
            "Pengembangan motorik & kreativitas",
            "Laporan perkembangan bulanan",
            "Guru ramah & sabar"
        ],
        mostPopular: false
    },
    {
        name: "Siswa SD",
        price: 7000,
        period: "bulan",
        features: [
            "Akses materi Kelas 1-6",
            "Bimbingan Pekerjaan Rumah (PR)",
            "Latihan Soal & Ulangan Harian",
            "Persiapan Ujian Sekolah",
            "Sertifikat & Reward Belajar",
            "Matematika, Bahasa Inggris & IPA"
        ],
        mostPopular: true
    },
    {
        name: "Siswa SMP",
        price: 7000,
        period: "bulan",
        features: [
            "Akses materi Kelas 7-9",
            "Latihan Soal Asesmen Nasional",
            "Simulasi Ujian Masuk SMA Favorit",
            "Mentoring Akademik Intensif",
            "Analisis Kemampuan Siswa",
            "Konsultasi Minat Bakat"
        ],
        mostPopular: false
    }
];