# Eğlence Merkezi

Ücretsiz ve yasal kaynaklardan oluşan kişisel eğlence ve öğrenme paneli. Abonelik yok, sunucu yok; GitHub Pages'te yayınlanır.

🌐 **Canlı site:** https://ercansahin16.github.io/eglence-merkezi/

## Neler var?

- **Keşfet** – Film, müzik, podcast, oyun ve belgesel kaynakları; arama, kategori filtresi ve kopyalanabilir arama kelimeleri.
- **Promptlar** – 9 hazır prompt. Boşlukları doldur, kopyala ya da tek tıkla Claude'da aç.
- **Listem** – İzleme/dinleme listesi (tarayıcıda saklanır).
- **Odak** – Seans sayacı, "burada bırak" uyarısı, kaydırma isteğine karşı alternatif aktiviteler.

## Siteyi besleme

Tüm içerik `data.js` içinde. Sadece bu dosyayı düzenlemen yeterli (GitHub'da dosyayı açıp kalem simgesine tıkla, değiştir, Commit de; site birkaç dakikada güncellenir).

**Yeni kaynak eklemek:**
```js
{ kat: "muzik", ad: "Site Adı", url: "https://...", aciklama: "Kısa açıklama", etiket: ["Türkçe"], not: "İsteğe bağlı uyarı" },
```
`kat` şu değerlerden biri olmalı: `film`, `muzik`, `podcast`, `oyun`, `belgesel`.

**Yeni prompt eklemek:**
```js
{
  id: "benzersiz-id", no: 10, baslik: "Başlık", ikon: "✨",
  alanlar: [
    { id: "konu", etiket: "Konu", tip: "text", ornek: "örnek değer" },
    { id: "ton", etiket: "Ton", tip: "select", secenekler: ["ciddi", "eğlenceli"] }
  ],
  sablon: `... {{konu}} ... {{ton}} ...`
}
```
Alan tipleri: `text`, `textarea`, `select`.

**Kategori, alternatif aktivite ve kurallar:** `KATEGORILER`, `ALTERNATIFLER`, `KURALLAR` dizilerini düzenle.

## Notlar

- Liste, prompt cevapları ve tema yalnızca kullandığın tarayıcıda saklanır; başka cihazla paylaşılmaz.
- Bazı platformlar ülkeye göre erişilemeyebilir; bunları `not` alanıyla işaretle.
