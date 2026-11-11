const fotoGaleri = [
  {
    judul: "Air Terjun Coban Srengenge",
    url: "foto-01.jpg"
  },
  {
    judul: "Keindahan Air Terjun",
    url: "foto-02.jpg"
  },
  {
    judul: "Suasana Air Terjun",
    url: "foto-03.jpg"
  },
  {
    judul: "Air Terjun Coban Srengenge",
    url: "foto-04.jpg"
  },
    {
    judul: "Air Terjun Coban Srengenge",
    url: "foto-05.jpg"
  },
      {
    judul: "Air Terjun Coban Srengenge",
    url: "foto-06.jpg"
      },
          {
    judul: "Air Terjun Coban Srengenge",
    url: "foto-07.jpg"
     },
            {
    judul: "Air Terjun Coban Srengenge",
    url: "foto-08.jpg"
            },
   {
    judul: "Air Terjun Coban Srengenge",
    url: "foto-09.jpg"},
     {
    judul: "Air Terjun Coban Srengenge",
    url: "foto-10.jpg"
  },
   {
    judul: "Air Terjun Coban Srengenge",
    url: "foto-11.jpg"
  },
   {
    judul: "Air Terjun Coban Srengenge",
    url: "foto-12.jpg"
  },
      
  
];

const daftarGaleri = document.getElementById("daftarGaleri");

fotoGaleri.forEach(function(foto, index) {
  const kartu = document.createElement("article");
  kartu.className = "card";

  const gambar = document.createElement("img");
  gambar.src = foto.url;
  gambar.alt = foto.judul;
  gambar.loading = "lazy";

  gambar.onerror = function() {
    gambar.alt = foto.judul + " - gambar tidak tersedia";
  };

  const isi = document.createElement("div");
  isi.className = "card-content";

  const judul = document.createElement("h3");
  judul.textContent =
    String(index + 1).padStart(2, "0") + ". " + foto.judul;

  const keterangan = document.createElement("p");
  keterangan.textContent =
    "Dokumentasi keindahan alam Coban Srengenge.";

  isi.append(judul, keterangan);
  kartu.append(gambar, isi);

  daftarGaleri.appendChild(kartu);
});


function hitungTiket() {
  const jumlah = Number(
    document.getElementById("jumlah").value
  );

  const harga = Number(
    document.getElementById("harga").value
  );

  if (
    !Number.isInteger(jumlah) ||
    jumlah < 1 ||
    jumlah > 100 ||
    !Number.isFinite(harga) ||
    harga < 0
  ) {
    alert("Masukkan jumlah 1–100 orang dan harga yang valid.");
    return;
  }

  document.getElementById("total").textContent =
    "Rp" + (jumlah * harga).toLocaleString("id-ID");
}


const formTamu = document.getElementById("formTamu");
const hasil = document.getElementById("hasil");

formTamu.addEventListener("submit", function(event) {
  event.preventDefault();

  if (!formTamu.reportValidity()) return;

  const data = new FormData(formTamu);

  hasil.replaceChildren();

  const judul = document.createElement("h3");
  judul.textContent = "Terima kasih atas kunjunganmu!";

  hasil.appendChild(judul);

  const rincian = [
    ["Nama", data.get("nama")],
    ["Email", data.get("email")],
    ["Jenis kelamin", data.get("gender")],
    [
      "Daya tarik favorit",
      data.getAll("daya").join(", ") || "Belum memilih"
    ],
    ["Asal", data.get("asal")],
    ["Frekuensi kunjungan", data.get("kunjungan")],
    ["Penilaian", data.get("penilaian")],
    ["Kesan dan saran", data.get("pesan")]
  ];

  rincian.forEach(function(item) {
    const baris = document.createElement("p");
    const label = document.createElement("strong");

    label.textContent = item[0] + ": ";

    baris.append(
      label,
      document.createTextNode(item[1] || "-")
    );

    hasil.appendChild(baris);
  });

  hasil.style.display = "block";

  hasil.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});


formTamu.addEventListener("reset", function() {
  hasil.style.display = "none";
  hasil.replaceChildren();
});


document.getElementById("tahun").textContent =
  new Date().getFullYear();
