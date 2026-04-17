function birimDonustur() {
    const girilenDeger = parseFloat(document.getElementById("degerInput").value);
    const donusumTipi = document.getElementById("donusumSelect").value;
    let sonuc = 0;

    if (isNaN(girilenDeger)) {
        alert("Geçerli bir sayı giriniz.");
        return;
    }

    // Seçime göre ilgili matematiksel formülü uyguluyoruz
    switch (donusumTipi) {
        case "c2f": 
            // Celsius'u Fahrenheit'a çevirme formülü
            sonuc = (girilenDeger * 9/5) + 32;
            break;
        case "m2km": 
            // Metreyi Kilometreye çevirme formülü
            sonuc = girilenDeger / 1000;
            break;
        case "kg2g": 
            // Kilogramı Grama çevirme formülü
            sonuc = girilenDeger * 1000;
            break;
        default:
            sonuc = "Hatalı işlem!";
    }

    // Sonucu virgülden sonra çok uzamasın diye formatlayarak (gerekirse) basıyoruz
    // Tam sayıysa direkt basar, küsuratlıysa kısaltır
    document.getElementById("donusumSonucText").innerText = `Sonuç: ${sonuc.toLocaleString('tr-TR')}`;
}