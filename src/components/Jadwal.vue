<template>
  <div class="p-3 md:p-6 bg-white min-h-screen">
    <h2 id="subjudul" class="animate-bounce animate-infinite flex justify-center text-2xl font-semibold text-gray-900 sm:text-3xl mb-10">STRUCTURE</h2>

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
  { kode: "PIM-", hari: "1 - Senin", waktu: "08.00 - 09.40", matkul: "Pengantar Teknologi Informasi", sks: 2, dosen: "Puji Imam Muttaqien, S.Kom., M.Si.", ruang: "B203", status: "Blended" },
  { kode: "SSC-", hari: "2 - Selasa", waktu: "09.00 - 10.40", matkul: "Kalkulus I", sks: 2, dosen: "Sahara S Choeriyah, S.Kom., M.M.", ruang: "B203", status: "Offline" },
  { kode: "AFH-", hari: "2 - Selasa", waktu: "14.00 - 16.30", matkul: "Dasar-Dasar Pemrograman", sks: 3, dosen: "Adittia Fattah, S.T., M.Kom.", ruang: "Labkom 2", status: "Offline" },
  { kode: "MSJ-", hari: "3 - Rabu", waktu: "14.00 - 14.20", matkul: "Pengantar Rekayasa Desain", sks: 2, dosen: "Mohammad Sabar Jamil, M.T.", ruang: "B202", status: "Offline" },
  { kode: "ISI-", hari: "3 - Rabu", waktu: "14.00 - 15.40", matkul: "Akidah", sks: 1, dosen: "Hj. Indri Silpiani, M.Pd.", ruang: "B201", status: "Offline" },
  { kode: "SSN-", hari: "4 - Kamis", waktu: "10.50 - 12.30", matkul: "Pengantar Kewirausahaan", sks: 2, dosen: "Sinta Siti Nuriah, S.Kom.", ruang: "B203", status: "Offline" },
  { kode: "ACH-", hari: "4 - Kamis", waktu: "13.30 - 15.10", matkul: "Bahasa Indonesia", sks: 2, dosen: "Ajeng Sabarini Muslimah, M.T.", ruang: "B102", status: "Blended" },
  { kode: "ACH-", hari: "5 - Jum’at", waktu: "08.10 - 09.50", matkul: "Pengajian Rutin", sks: 0, dosen: "Drs. K.H. Abdul Chobir, M.T.", ruang: "Masjid", status: "Offline" },
  { kode: "HSN-", hari: "5 - Jum’at", waktu: "09.30 - 11.10", matkul: "Fisika Dasar", sks: 2, dosen: "Hamka Surya Nugraha, S.T.P., M.Kom.", ruang: "B301", status: "Offline" },
  { kode: "IHS-", hari: "6 - Sabtu", waktu: "10.20 - 12.00", matkul: "Pancasila", sks: 2, dosen: "Ita Hidayatusa’adah, M.Pd.", ruang: "B201", status: "Offline" },
  { kode: "WTA-", hari: "6 - Sabtu", waktu: "13.00 - 14.40", matkul: "Bahasa Inggris", sks: 2, dosen: "Wahyu Teri Aripin, M.T.", ruang: "Google Classroom", status: "Online" },
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
