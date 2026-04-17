function notHesapla() {
    const adSoyad = document.getElementById("adSoyadInput").value;
    const vizeNotu = parseFloat(document.getElementById("vizeInput").value);
    const finalNotu = parseFloat(document.getElementById("finalInput").value);

    if (isNaN(vizeNotu) || isNaN(finalNotu)) {
        alert("Lütfen geçerli notlar giriniz.");
        return;
    }

    const ortalama = (vizeNotu * 0.4) + (finalNotu * 0.6);
    const durum = ortalama >= 50 ? "Geçti" : "Kaldı";

    let harfNotu = "";
    if (ortalama >= 90) harfNotu = "AA";
    else if (ortalama >= 80) harfNotu = "BA";
    else if (ortalama >= 70) harfNotu = "BB";
    else if (ortalama >= 60) harfNotu = "CB";
    else if (ortalama >= 50) harfNotu = "CC";
    else harfNotu = "FF";

    document.getElementById("sonucIsim").innerText = adSoyad;
    document.getElementById("sonucOrtalama").innerText = `Ortalama: ${ortalama.toFixed(2)}`;
    document.getElementById("sonucHarf").innerText = `Harf Notu: ${harfNotu}`;
    document.getElementById("sonucDurum").innerText = `Durum: ${durum}`;
}