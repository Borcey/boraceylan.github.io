document.addEventListener('DOMContentLoaded', () => {
    
    // 1. TEMA DEĞİŞTİRME İŞLEMİ
    const temaButonu = document.getElementById('temaButonu');
    const htmlElemani = document.documentElement;

    temaButonu.addEventListener('click', () => {
        const mevcutTema = htmlElemani.getAttribute('data-bs-theme');
        
        if (mevcutTema === 'light') {
            htmlElemani.setAttribute('data-bs-theme', 'dark');
            temaButonu.textContent = 'Açık Temaya Geç';
            temaButonu.classList.replace('btn-outline-dark', 'btn-outline-light');
        } else {
            htmlElemani.setAttribute('data-bs-theme', 'light');
            temaButonu.textContent = 'Koyu Temaya Geç';
            temaButonu.classList.replace('btn-outline-light', 'btn-outline-dark');
        }
    });

    // 2. FORM İŞLEMLERİ VE ÖZET OLUŞTURMA
    const kayitFormu = document.getElementById('kayitFormu');
    const sonucAlani = document.getElementById('sonucAlani');
    const temizleBtn = document.getElementById('temizleBtn');

    kayitFormu.addEventListener('submit', (event) => {
        // Sayfanın yenilenmesini engelle (Zorunlu kural)
        event.preventDefault();

        // Form değerlerini al
        const adSoyad = document.getElementById('adSoyad').value.trim();
        const email = document.getElementById('email').value.trim();
        const bolum = document.getElementById('bolum').value.trim();
        const sinif = document.getElementById('sinif').value;
        const oturum = document.getElementById('oturum').value;
        const katilimTuru = document.getElementById('katilimTuru').value;
        const kisaMesaj = document.getElementById('kisaMesaj').value.trim();
        const onay = document.getElementById('onay').checked;

        // Eksik alan kontrolü (Zorunlu kural)
        if (!adSoyad || !email || !bolum || !sinif || !oturum || !katilimTuru || !onay) {
            sonucAlani.innerHTML = `
                <div class="alert alert-danger rounded-3 alert-dismissible fade show" role="alert">
                    <strong>Hata!</strong> Lütfen mesaj alanı dışındaki tüm zorunlu alanları doldurun ve onay kutusunu işaretleyin.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
            return; // Kodun devam etmesini engeller
        }

        // Başarılı durumda başvuru özeti oluşturma (Zorunlu kural)
        sonucAlani.innerHTML = `
            <div class="alert alert-success rounded-3 shadow-sm" role="alert">
                <h4 class="alert-heading fw-bold mb-3">Başvuru Özeti</h4>
                <hr>
                <div class="row">
                    <div class="col-sm-3 fw-bold text-secondary">Ad Soyad:</div>
                    <div class="col-sm-9">${adSoyad}</div>
                    
                    <div class="col-sm-3 fw-bold text-secondary mt-2">E-posta:</div>
                    <div class="col-sm-9 mt-2">${email}</div>
                    
                    <div class="col-sm-3 fw-bold text-secondary mt-2">Bölüm/Sınıf:</div>
                    <div class="col-sm-9 mt-2">${bolum} - ${sinif}</div>
                    
                    <div class="col-sm-3 fw-bold text-secondary mt-2">Oturum:</div>
                    <div class="col-sm-9 mt-2"><span class="badge bg-primary">${oturum}</span> (${katilimTuru})</div>
                    
                    <div class="col-sm-3 fw-bold text-secondary mt-2">Mesaj:</div>
                    <div class="col-sm-9 mt-2 fst-italic">${kisaMesaj ? kisaMesaj : '- Mesaj bırakılmadı -'}</div>
                </div>
            </div>`;
    });

    // Formu temizle butonuna basılınca sonuç alanını da sıfırla
    temizleBtn.addEventListener('click', () => {
        sonucAlani.innerHTML = `
            <div class="alert alert-info rounded-3">
                Henüz başvuru özeti oluşturulmadı. Formu doldurduktan sonra sonuç burada görünecek.
            </div>`;
    });
});