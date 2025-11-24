const { createApp } = Vue;

createApp({
  data() {
    return {
      judulHalaman: "Daftar Stok Bahan Ajar UT",
      keyword: "",
      pesanPencarian: "Menunggu input...",
      // data dummy
      bahanAjar: [
        {
          id: 1,
          kode: "MKWU4101",
          nama: "Pendidikan Agama Islam",
          harga: 55000,
          stok: 50,
        },
        {
          id: 2,
          kode: "MKWU4108",
          nama: "Bahasa Indonesia",
          harga: 48000,
          stok: 5,
        },
        { id: 3, kode: "MATA4110", nama: "Kalkulus I", harga: 62000, stok: 0 },
        {
          id: 4,
          kode: "MSIM4202",
          nama: "Struktur Data",
          harga: 58000,
          stok: 20,
        },
        {
          id: 5,
          kode: "EKMA4111",
          nama: "Pengantar Bisnis",
          harga: 51000,
          stok: 12,
        },
      ],
    };
  },
  computed: {
    // Computed Property (Filter Data)
    listBahanAjarTersaring() {
      return this.bahanAjar.filter((item) => {
        return item.nama.toLowerCase().includes(this.keyword.toLowerCase());
      });
    },
    totalItem() {
      return this.listBahanAjarTersaring.length;
    },
  },
  methods: {
    // Methods Property
    formatRupiah(angka) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(angka);
    },
    cekWarnaStok(stok) {
      return stok < 10 ? "stok-kritis" : "stok-aman";
    },
    tambahStok(index) {
      // Menambah stok pada item hasil filter
      this.listBahanAjarTersaring[index].stok++;
    },
  },
  watch: {
    // Watcher Pertama
    keyword(newVal, oldVal) {
      if (newVal.length === 0) {
        this.pesanPencarian = "Menampilkan semua data.";
      } else {
        this.pesanPencarian = `Mencari: "${newVal}"...`;
      }
    },
  },
}).mount("#app-stok");
