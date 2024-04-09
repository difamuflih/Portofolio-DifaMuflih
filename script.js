const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

$(document).ready(function () {
  $("#message-form").validate({
    rules: {
      name: {
        required: true,
        maxlength: 30,
      },
      email: {
        required: true,
        email: true,
        maxlength: 30,
      },
      phone: {
        required: true,
        number: true,
        maxlength: 12,
      },
      subject: {
        required: true,
        maxlength: 15,
      },
      tell: {
        required: true,
        maxlength: 150,
      },
    },
    messages: {
      name: {
        required: "Nama lengkap harus diisi",
        maxlength: "Nama lengkap tidak boleh lebih dari 30 karakter",
      },
      email: {
        required: "Email harus diisi",
        email: "Format email tidak valid",
        maxlength: "Email tidak boleh lebih dari 30 karakter",
      },
      phone: {
        required: "Nomor handphone harus diisi",
        number: "Nomor handphone harus berupa angka",
        maxlength: "Nomor handphone tidak boleh lebih dari 12 digit",
      },
      subject: {
        required: "Pesan harus diisi",
        maxlength: "Pesan tidak boleh lebih dari 15 karakter",
      },
      tell: {
        required: "Pesan harus diisi",
        maxlength: "Pesan tidak boleh lebih dari 150 karakter",
      },
    },
  });
});
