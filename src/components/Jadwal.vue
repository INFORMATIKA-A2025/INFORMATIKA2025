<template>
  <div class="p-3 md:p-6 bg-white min-h-screen">
    <h2 id="subjudul" class="animate-bounce animate-infinite flex justify-center text-2xl font-semibold text-gray-900 sm:text-3xl mb-10">SCHEDULE IF-II-A</h2>

    <div class="overflow-x-auto bg-white shadow-md rounded-lg">
      <table class="min-w-full border border-gray-300 text-xs sm:text-sm md:text-base">
        <thead>
          <tr class="bg-blue-500 text-white text-center">
            <th class="py-2 px-3 border border-gray-300">#</th>
            <th class="py-2 px-3 border border-gray-300">No</th>
            <th class="py-2 px-3 border border-gray-300">Hari</th>
            <th class="py-2 px-3 border border-gray-300">Waktu</th>
            <th class="py-2 px-3 border border-gray-300">Mata Kuliah</th>
            <th class="py-2 px-3 border border-gray-300">SKS</th>
            <th class="py-2 px-3 border border-gray-300">Dosen Pengampu</th>
            <th class="py-2 px-3 border border-gray-300">Ruang</th>
            <th class="py-2 px-3 border border-gray-300">Pelaksanaan</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, index) in jadwal" :key="index" class="even:bg-gray-50 hover:bg-blue-50 transition">
            <td class="border px-2 py-2 text-center font-semibold">{{ index + 1 }}</td>
            <td class="border px-2 py-2 text-center font-semibold">{{ item.kode }}</td>

            <td class="border px-2 py-2 text-center">
              <span class="text-white font-semibold rounded-full inline-block" :class="[warnaHari(item.hari), 'px-2 py-1 text-[10px] sm:text-xs md:text-sm']">
                {{ item.hari }}
              </span>
            </td>

            <td class="border px-2 py-2 text-center">{{ item.waktu }}</td>
            <td class="border px-2 py-2">{{ item.matkul }}</td>
            <td class="border px-2 py-2 text-center">{{ item.sks }}</td>
            <td class="border px-2 py-2">{{ item.dosen }}</td>
            <td class="border px-2 py-2 text-center">{{ item.ruang }}</td>

            <td class="border px-2 py-2 text-center">
              <span class="font-semibold rounded-full inline-block" :class="[warnaStatus(item.status), 'px-2 py-1 text-[10px] sm:text-xs md:text-sm']">
                {{ item.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const jadwal = [
  { kode: "PIM-", hari: "1 - Senin", waktu: "08.00 - 10.30", matkul: "Arsitektur & Organisasi Komputer", sks: 3, dosen: "Puji Imam Muttaqien., M.Si.", ruang: "B201", status: "Blended" },
  { kode: "AFH-", hari: "1 - Senin", waktu: "10.30 - 13.00", matkul: "Logika Informatika", sks: 3, dosen: "Adittia Fattah, S.T., M.Kom.", ruang: "B202", status: "Blended" },
  { kode: "SSC-", hari: "2 - Selasa", waktu: "10.50 - 12.30", matkul: "Kalkulus II", sks: 3, dosen: "Sahara S Choeriyah, S.Kom., M.M.", ruang: "B203", status: "Offline" },
  { kode: "HMN-", hari: "3 - Rabu", waktu: "08.00 - 10.30", matkul: "Basis Data", sks: 3, dosen: "Hilman Mutaqin, S.T., M.Kom.", ruang: "Labkom 2", status: "Offline" },
  { kode: "ISI-", hari: "4 - Kamis", waktu: "10.00 - 10.50", matkul: "Fiqih", sks: 1, dosen: "Hj. Indri Silpiani, M.Pd.", ruang: "B201", status: "Offline" },
  { kode: "NAA-", hari: "4 - Kamis", waktu: "14.00 - 16.30", matkul: "Sistem Digital", sks: 3, dosen: "Nisa Agni Afifah, S.Kom.", ruang: "B302", status: "Offline" },
  { kode: "IHS-", hari: "6 - Sabtu", waktu: "10.10 - 11.50", matkul: "Pendidikan Kewarganegaraan", sks: 2, dosen: "Ita Hidayatusa'adah, M.Pd.", ruang: "B102", status: "Offline" },
  { kode: "ZAH-", hari: "6 - Sabtu", waktu: "13.00 - 15.30", matkul: "Matematika Disktrit", sks: 3, dosen: "Zihan Aulia Hendarsyah, S.Kom", ruang: "B302", status: "Offline" },
];

const warnaHari = (hari) => {
  if (hari.includes("Senin")) return "bg-yellow-500";
  if (hari.includes("Selasa")) return "bg-fuchsia-600";
  if (hari.includes("Rabu")) return "bg-green-600";
  if (hari.includes("Kamis")) return "bg-blue-500";
  if (hari.includes("Jum")) return "bg-red-500";
  if (hari.includes("Sabtu")) return "bg-teal-600";
  return "bg-gray-400";
};

const warnaStatus = (status) => {
  if (status === "Offline") return "bg-gray-200 text-gray-800";
  if (status === "Online") return "bg-emerald-300 text-gray-800";
  if (status === "Blended") return "bg-yellow-200 text-gray-800";
  return "bg-gray-300 text-gray-700";
};
</script>

<style scoped>
@media (max-width: 640px) {
  th,
  td {
    padding: 4px 6px !important;
  }
}
</style>
