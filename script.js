document.addEventListener("DOMContentLoaded", function () {
    const tombolBuka = document.getElementById("open-invitation");
    const layarPembuka = document.getElementById("opening-screen");
    const form = document.getElementById("formKehadiran");

    if (tombolBuka && layarPembuka) {
        tombolBuka.addEventListener("click", function () {
            layarPembuka.style.display = "none";
        });
    }

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const nama = document.getElementById("nama").value;

            alert("Terima kasih, " + nama + "! Konfirmasi berhasil.");

            form.reset();
        });
    }
});
