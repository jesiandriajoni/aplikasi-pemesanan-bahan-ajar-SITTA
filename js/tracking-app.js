const { createApp } = Vue;

createApp({
  data() {
    return {
      nomorResi: "",
      errorPesan: "",
      hasilTracking: null, // Objek kosong awal
      // data dummy
      dataPengiriman: [
        {
          noDO: "DO-12345",
          penerima: "Budi Santoso",
          status: "Sedang Dikemas",
        },
        {
          noDO: "DO-67890",
          penerima: "Siti Aminah",
          status: "Dalam Perjalanan",
        },
        { noDO: "DO-54321", penerima: "Andi Wijaya", status: "Terkirim" },
      ],
    };
  },
  computed: {
    // Validasi sederhana untuk tombol
    isInputValid() {
      return this.nomorResi.length >= 5;
    },
  },
  methods: {
    lacakPesanan() {
      // Cari data di array dummy
      const found = this.dataPengiriman.find(
        (item) => item.noDO === this.nomorResi
      );

      if (found) {
        this.hasilTracking = found;
        this.errorPesan = "";
      } else {
        this.hasilTracking = null;
        alert("Nomor DO tidak ditemukan!");
      }
    },
  },
  watch: {
    // Watcher Kedua
    nomorResi(newVal) {
      this.hasilTracking = null; // Reset
      this.nomorResi = newVal.toUpperCase();

      // Validasi panjang karakter realtime
      if (newVal.length > 0 && newVal.length < 5) {
        this.errorPesan = "Nomor DO minimal 5 karakter";
      } else {
        this.errorPesan = "";
      }
    },
  },
}).mount("#app-tracking");
