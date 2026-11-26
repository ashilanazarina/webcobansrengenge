
// ================================
// 1. GALERI FOTO
// ================================

const fotoGaleri = [
  {
    judul: "Air Terjun Coban Srengenge",
    url: "galeri-01.jpg"
  },
  {
    judul: "Keindahan Air Terjun",
    url: "galeri-02.webp"
  },
  {
    judul: "Suasana Air Terjun",
    url: "galeri-03.jpg"
  },
  {
    judul: "Air Terjun Coban Srengenge",
    url: "galeri-04.jpg"
  },
  {
    judul: "Air Terjun Coban Srengenge",
    url: "galeri-05.jpg"
  },
  {
    judul: "Air Terjun Coban Srengenge",
    url: "galeri-06.jpg"
  },
  {
    judul: "Air Terjun Coban Srengenge",
    url: "galeri-07.jpg"
  },
  {
    judul: "Air Terjun Coban Srengenge",
    url: "galeri-08.jpg"
  },
  {
    judul: "Air Terjun Coban Srengenge",
    url: "galeri-09.jpg"
  },
  {
    judul: "Air Terjun Coban Srengenge",
    url: "galeri-10.jpg"
  },
  {
    judul: "Air Terjun Coban Srengenge",
    url: "galeri-11.png"
  },
  {
    judul: "Air Terjun Coban Srengenge",
    url: "galeri-12.png"
  }
];


// MENAMPILKAN FOTO GALERI

const daftarGaleri = document.getElementById("daftarGaleri");

fotoGaleri.forEach(function(foto) {
  const card = document.createElement("article");

  card.className = "card";

  card.innerHTML = `
    <img src="${foto.url}" alt="${foto.judul}">
    <div class="card-content">
      <h3>${foto.judul}</h3>
    </div>
  `;

  daftarGaleri.appendChild(card);
});


const daftarGaleri = document.getElementById("daftarGaleri");

fotoGaleri.forEach((foto) => {
  const card = document.createElement("article");

  card.className = "card";

  card.innerHTML = `
    <img src="${foto.url}" alt="${foto.judul}">
    <div class="card-content">
      <h3>${foto.judul}</h3>
    </div>
  `;

  daftarGaleri.appendChild(card);
});


// ================================
// 2. KALKULATOR TIKET
// ================================

function hitungTiket() {
  const jumlah = Number(
    document.getElementById("jumlah").value
  );

  const harga = Number(
    document.getElementById("harga").value
  );

  const total = document.getElementById("total");

  if (
    !Number.isInteger(jumlah) ||
    jumlah < 1 ||
    jumlah > 100 ||
    !Number.isFinite(harga) ||
    harga < 0
  ) {
    alert("Masukkan jumlah pengunjung dan harga tiket dengan benar!");
    return;
  }

  const hasil = jumlah * harga;

  total.textContent = "Rp" +
    hasil.toLocaleString("id-ID");
}


// ================================
// 3. BUKU TAMU
// ================================

const formTamu = document.getElementById("formTamu");
const hasil = document.getElementById("hasil");

formTamu.addEventListener("submit", function(event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const gender = document.querySelector(
    'input[name="gender"]:checked'
  ).value;

  const asal = document.getElementById("asal").value;
  const kunjungan = document.getElementById("kunjungan").value;
  const penilaian = document.getElementById("penilaian").value;
  const pesan = document.getElementById("pesan").value;

  const dayaTarik = document.querySelectorAll(
    'input[name="daya"]:checked'
  );

  const pilihanDaya = Array.from(dayaTarik)
    .map(item => item.value)
    .join(", ");

  hasil.style.display = "block";

  hasil.innerHTML = `
    <h3>Terima Kasih Sudah Berkunjung!</h3>

    <p><strong>Nama:</strong> ${escapeHTML(nama)}</p>
    <p><strong>Email:</strong> ${escapeHTML(email)}</p>
    <p><strong>Jenis Kelamin:</strong> ${escapeHTML(gender)}</p>
    <p><strong>Daya Tarik:</strong> ${escapeHTML(pilihanDaya || "Belum memilih")}</p>
    <p><strong>Asal:</strong> ${escapeHTML(asal)}</p>
    <p><strong>Frekuensi Kunjungan:</strong> ${escapeHTML(kunjungan)}</p>
    <p><strong>Penilaian:</strong> ${escapeHTML(penilaian)}</p>
    <p><strong>Kesan dan Saran:</strong> ${escapeHTML(pesan)}</p>

    <p>Data buku tamu berhasil ditampilkan!</p>
  `;

  hasil.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});


// ================================
// 4. RESET BUKU TAMU
// ================================

formTamu.addEventListener("reset", function() {
  hasil.style.display = "none";
  hasil.innerHTML = "";
});


// ================================
// 5. KEAMANAN TEKS BUKU TAMU
// ================================

function escapeHTML(teks) {
  return String(teks).replace(/[&<>"']/g, function(karakter) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[karakter];
  });
}


// ================================
// 6. TAHUN OTOMATIS
// ================================

document.getElementById("tahun").textContent =
  new Date().getFullYear();
