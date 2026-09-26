/* =========================================================
   EĞLENCE MERKEZİ — VERİ DOSYASI
   Siteyi beslemek için sadece bu dosyayı düzenle.
   - Yeni kaynak: KAYNAKLAR içindeki ilgili kategoriye bir satır ekle.
   - Yeni prompt: PROMPTLAR dizisine bir nesne ekle.
     Şablonda {{alan_id}} yazdığın yere formdaki değer gelir.
   - Kurallar/alternatifler: ALTERNATIFLER dizisini düzenle.
   ========================================================= */

window.KATEGORILER = [
  { id: "film",    ad: "Film & Dizi",          ikon: "🎬" },
  { id: "muzik",   ad: "Müzik & Radyo",         ikon: "🎧" },
  { id: "podcast", ad: "Podcast & Sesli Kitap", ikon: "🎙️" },
  { id: "oyun",    ad: "Oyun & İnteraktif",     ikon: "🎮" },
  { id: "belgesel",ad: "Belgesel & Eğitim",     ikon: "📚" }
];

/* not: bölge kısıtı olabilecek platformlarda "not" alanını doldur */
window.KAYNAKLAR = [
  // ---------- FİLM & DİZİ ----------
  { kat: "film", ad: "tabii (TRT)", url: "https://www.tabii.com", aciklama: "TRT'nin ücretsiz platformu: yerli dizi, film, belgesel ve çocuk içerikleri.", etiket: ["Türkçe", "dizi"] },
  { kat: "film", ad: "Internet Archive – Filmler", url: "https://archive.org/details/feature_films", aciklama: "Telif süresi dolmuş klasik filmler; kara film ve sessiz sinema için ideal.", etiket: ["klasik", "kamu malı"] },
  { kat: "film", ad: "Plex (ücretsiz filmler)", url: "https://watch.plex.tv", aciklama: "Reklamlı, ücretsiz film ve canlı kanallar.", etiket: ["reklamlı"], not: "İçerik ülkeye göre değişir." },
  { kat: "film", ad: "Pluto TV", url: "https://pluto.tv", aciklama: "Reklamlı ücretsiz canlı kanallar ve isteğe bağlı içerik.", etiket: ["reklamlı", "canlı"], not: "Türkiye'den erişilemeyebilir." },
  { kat: "film", ad: "Kanopy", url: "https://www.kanopy.com", aciklama: "Kütüphane/üniversite üyeliğiyle bağımsız ve festival filmleri.", etiket: ["festival"], not: "Anlaşmalı kütüphane üyeliği gerekir." },
  { kat: "film", ad: "ARTE", url: "https://www.arte.tv/en/", aciklama: "Avrupa sineması, kısa filmler ve kaliteli belgeseller.", etiket: ["Avrupa", "sanat"], not: "Bazı içerikler bölge kısıtlı." },
  { kat: "film", ad: "YouTube – resmi ücretsiz filmler", url: "https://www.youtube.com/results?search_query=full+movie+free+official", aciklama: "Yapımcı ve dağıtımcıların resmi kanallarında yayımladığı filmler.", etiket: ["arama"] },

  // ---------- MÜZİK & RADYO ----------
  { kat: "muzik", ad: "Radio Garden", url: "https://radio.garden", aciklama: "Dünya haritasında dönerek binlerce canlı radyo dinle.", etiket: ["radyo", "keşif"] },
  { kat: "muzik", ad: "TRT Dinle", url: "https://www.trtdinle.com", aciklama: "TRT radyoları, arşiv programları ve Türk müziği.", etiket: ["Türkçe", "radyo"] },
  { kat: "muzik", ad: "YouTube Music", url: "https://music.youtube.com", aciklama: "Reklamlı ücretsiz sürümüyle geniş katalog ve otomatik listeler.", etiket: ["reklamlı"] },
  { kat: "muzik", ad: "Bandcamp", url: "https://bandcamp.com", aciklama: "Bağımsız sanatçılar; albümlerin çoğu ücretsiz dinlenebilir.", etiket: ["bağımsız"] },
  { kat: "muzik", ad: "SoundCloud", url: "https://soundcloud.com", aciklama: "Yeni çıkan sanatçılar, remix ve DJ setleri.", etiket: ["elektronik", "keşif"] },
  { kat: "muzik", ad: "Free Music Archive", url: "https://freemusicarchive.org", aciklama: "Özgür lisanslı müzik; video ve projelerde de kullanılabilir.", etiket: ["lisanslı"] },
  { kat: "muzik", ad: "SomaFM", url: "https://somafm.com", aciklama: "Reklamsız, dinleyici destekli tür odaklı internet radyoları.", etiket: ["reklamsız", "ambient"] },
  { kat: "muzik", ad: "NTS Radio", url: "https://www.nts.live", aciklama: "Londra merkezli, sıra dışı ve eklektik yayınlar.", etiket: ["eklektik"] },

  // ---------- PODCAST & SESLİ KİTAP ----------
  { kat: "podcast", ad: "LibriVox", url: "https://librivox.org", aciklama: "Gönüllülerin seslendirdiği kamu malı klasik sesli kitaplar.", etiket: ["sesli kitap", "klasik"] },
  { kat: "podcast", ad: "Loyal Books", url: "https://www.loyalbooks.com", aciklama: "Ücretsiz sesli kitap ve e-kitaplar, türe göre gezilebilir.", etiket: ["sesli kitap"] },
  { kat: "podcast", ad: "Pocket Casts", url: "https://pocketcasts.com", aciklama: "Ücretsiz podcast uygulaması; bölüm takibi ve hız ayarı.", etiket: ["uygulama"] },
  { kat: "podcast", ad: "Podcast Index", url: "https://podcastindex.org", aciklama: "Açık podcast dizini; niş programları bulmak için.", etiket: ["arama"] },
  { kat: "podcast", ad: "Açık Radyo", url: "https://acikradyo.com.tr", aciklama: "Dinleyici destekli İstanbul radyosu ve program arşivi.", etiket: ["Türkçe"] },
  { kat: "podcast", ad: "YouTube – Türkçe sesli kitap", url: "https://www.youtube.com/results?search_query=t%C3%BCrk%C3%A7e+sesli+kitap", aciklama: "Yayıncıların resmi kanallarındaki sesli kitaplar.", etiket: ["Türkçe", "arama"] },

  // ---------- OYUN & İNTERAKTİF ----------
  { kat: "oyun", ad: "Lichess", url: "https://lichess.org", aciklama: "Tamamen ücretsiz, reklamsız satranç; bulmacalar ve dersler.", etiket: ["satranç", "reklamsız"] },
  { kat: "oyun", ad: "itch.io – ücretsiz oyunlar", url: "https://itch.io/games/free", aciklama: "Bağımsız geliştiricilerden binlerce ücretsiz oyun.", etiket: ["indie"] },
  { kat: "oyun", ad: "Epic Games – haftalık ücretsiz", url: "https://store.epicgames.com/free-games", aciklama: "Her hafta ücretsiz alınabilen oyunlar.", etiket: ["PC"] },
  { kat: "oyun", ad: "Steam – Free to Play", url: "https://store.steampowered.com/genre/Free%20to%20Play/", aciklama: "Ücretsiz oynanabilen oyunlar (içi satın alma olabilir).", etiket: ["PC"] },
  { kat: "oyun", ad: "neal.fun", url: "https://neal.fun", aciklama: "Kısa, zekice hazırlanmış interaktif deneyimler.", etiket: ["kısa", "merak"] },
  { kat: "oyun", ad: "Sporcle", url: "https://www.sporcle.com", aciklama: "Her konuda binlerce bilgi yarışması.", etiket: ["quiz"] },

  // ---------- BELGESEL & EĞİTİM ----------
  { kat: "belgesel", ad: "TRT Belgesel", url: "https://www.trtbelgesel.com.tr", aciklama: "Doğa, tarih ve kültür belgeselleri, Türkçe.", etiket: ["Türkçe", "belgesel"] },
  { kat: "belgesel", ad: "DW Documentary", url: "https://www.youtube.com/@DWDocumentary", aciklama: "Güncel konular, bilim ve toplum üzerine uzun belgeseller.", etiket: ["belgesel", "İngilizce"] },
  { kat: "belgesel", ad: "NASA+", url: "https://plus.nasa.gov", aciklama: "Uzay belgeselleri ve canlı yayınlar, reklamsız.", etiket: ["uzay"] },
  { kat: "belgesel", ad: "BTK Akademi", url: "https://www.btkakademi.gov.tr", aciklama: "Yazılım, siber güvenlik ve dijital beceri kursları, sertifikalı.", etiket: ["Türkçe", "kurs"] },
  { kat: "belgesel", ad: "Khan Academy Türkçe", url: "https://tr.khanacademy.org", aciklama: "Matematikten bilime kendi hızında dersler.", etiket: ["Türkçe", "kurs"] },
  { kat: "belgesel", ad: "MIT OpenCourseWare", url: "https://ocw.mit.edu", aciklama: "MIT derslerinin notları ve video kayıtları.", etiket: ["üniversite"] },
  { kat: "belgesel", ad: "Coursera (ücretsiz izleme)", url: "https://www.coursera.org", aciklama: "Çoğu kursun içeriği sertifikasız ücretsiz izlenebilir.", etiket: ["kurs"] },
  { kat: "belgesel", ad: "Project Gutenberg", url: "https://www.gutenberg.org", aciklama: "70.000'den fazla kamu malı e-kitap.", etiket: ["kitap", "klasik"] },
  { kat: "belgesel", ad: "Vikikaynak", url: "https://tr.wikisource.org", aciklama: "Türkçe kamu malı metinler ve klasikler.", etiket: ["Türkçe", "kitap"] },
  { kat: "belgesel", ad: "TED", url: "https://www.ted.com/talks", aciklama: "Kısa, ilham verici konuşmalar; Türkçe altyazılı.", etiket: ["kısa"] }
];

/* Her kategori için kaydedilecek arama kelimeleri */
window.ARAMA_KELIMELERI = {
  film: ["full movie official channel", "public domain film noir", "tabii yerli dizi", "kısa film ödüllü"],
  muzik: ["[tür] radio garden", "bandcamp daily [tür]", "[sanatçı] live session", "lofi study mix"],
  podcast: ["[konu] podcast türkçe", "librivox [yazar]", "sesli kitap [kitap adı]"],
  oyun: ["itch.io free [tür]", "browser game no download", "lichess puzzle"],
  belgesel: ["[konu] documentary full", "trt belgesel [konu]", "btk akademi [beceri]", "gutenberg [yazar]"]
};

/* {{alan}} yer tutucuları formdan doldurulur.
   alan tipi: "text" | "textarea" | "select" (secenekler gerekir) */
window.PROMPTLAR = [
  {
    id: "merkez", no: 1, baslik: "Kendi eğlence merkezini oluştur", ikon: "🏠",
    alanlar: [
      { id: "ulke", etiket: "Bulunduğun ülke", tip: "text", varsayilan: "Türkiye" },
      { id: "dil", etiket: "Tercih ettiğin diller", tip: "text", varsayilan: "Türkçe ve İngilizce" }
    ],
    sablon: `Kişisel eğlence sistemimin mimarı gibi davran. Yalnızca ücretsiz ve yasal kaynakları kullanarak bana bir eğlence paneli oluştur. {{ulke}}'den erişilebilen ve {{dil}} içerik sunan kaynaklara öncelik ver.

Şu kategorilere ayır:
- Film & diziler
- Müzik & radyo
- Podcast & sesli kitap
- Oyunlar & interaktif içerikler
- Belgeseller & eğitici içerikler

Her kategori için 5-10 tane kaliteli site, platform veya kanal öner. Her birinin hangi tür içerikte daha iyi olduğunu belirt ve daha sonra kolayca bulabilmem için kaydetmem gereken arama kelimelerini de yaz.`
  },
  {
    id: "muzik", no: 2, baslik: "Spotify yerine yapay zekâ", ikon: "🎵",
    alanlar: [
      { id: "zevk", etiket: "Sevdiğin sanatçılar / türler / tarzlar", tip: "textarea", ornek: "Barış Manço, Portishead, caz, 90'lar Türkçe rock" }
    ],
    sablon: `Müzik danışmanım gibi davran. Sevdiğim sanatçılar/türler/tarzlar: {{zevk}}.

Kullanabileceğin platformlar: YouTube, SoundCloud, Bandcamp ve internet radyoları.

Bana 4 haftalık bir dinleme programı hazırla. Her hafta 3 yeni sanatçı keşfetmemi sağla, mevcut zevklerime yakın 2 rahat dinleme listesi oluştur, her öneri için bağlantı veya arama kelimesi ver ve neden hoşuma gidebileceğini kısaca açıkla.

Her haftanın sonunda bana neyi sevip sevmediğimi sor ve sonraki haftanın önerilerini buna göre geliştir.`
  },
  {
    id: "film", no: 3, baslik: "Netflix yerine yapay zekâ", ikon: "🍿",
    alanlar: [
      { id: "mod", etiket: "Şu anki modun", tip: "select", secenekler: ["komik", "korkutucu", "heyecanlı", "duygusal", "sakin"] },
      { id: "tercih", etiket: "Tercihlerin (dil / dönem / tür)", tip: "text", ornek: "Türkçe veya altyazılı, 70-90'lar, gerilim" }
    ],
    sablon: `Benim kişisel film ve dizi danışmanım gibi davran.

Şu anki modum: {{mod}}.
Tercihlerim: {{tercih}}.

Bana ücretsiz ve yasal olarak izleyebileceğim 10 film ve 5 dizi veya mini dizi öner.

Her öneride nereden ücretsiz ve yasal izleyebileceğimi, izleme isteği uyandıracak 2 cümlelik kısa bir açıklama ve beğenmezsem izleyebileceğim alternatif bir yapım ver.

Son olarak önerileri "Bu akşam", "Bu hafta" ve "Yağmurlu hafta sonu" şeklinde gruplandır.`
  },
  {
    id: "youtube", no: 4, baslik: "YouTube'dan kendi Netflix'ini oluştur", ikon: "📺",
    alanlar: [
      { id: "ilgi", etiket: "İlgi alanların", tip: "text", ornek: "mizah, teknoloji, kişisel gelişim, belgesel, anime" }
    ],
    sablon: `Bir dijital yayın platformunun içerik planlayıcısı gibi davran. Yalnızca YouTube kullanarak bana Netflix tarzı 7 günlük bir izleme programı hazırla.

İlgi alanlarım: {{ilgi}}

Her gün için sabah, öğleden sonra, akşam ve gece olmak üzere 3-4 zaman dilimi oluştur. Her zaman diliminde 1-2 kanal veya oynatma listesi öner, bunları bulabileceğim tam arama kelimelerini yaz ve içeriğin havasını "hafif, derin, arka planda, yoğun" gibi belirt.

Haftayı eğlence, öğrenme ve dinlenme açısından dengeli oluştur.`
  },
  {
    id: "plan", no: 5, baslik: "Zamanına ve enerjine göre plan", ikon: "⏱️",
    alanlar: [
      { id: "saat", etiket: "Bugün ayırabileceğin zaman", tip: "text", ornek: "3 saat" },
      { id: "enerji", etiket: "Enerji seviyen", tip: "select", secenekler: ["düşük", "orta", "yüksek"] },
      { id: "amac", etiket: "Amacın", tip: "select", secenekler: ["dinlenmek", "öğrenmek", "ilham almak", "gülmek"] }
    ],
    sablon: `Akıllı bir içerik planlayıcısı gibi davran.

Bugün ayırabileceğim zaman: {{saat}}
Enerji seviyem: {{enerji}}
Amacım: {{amac}}

Sabah, öğleden sonra ve akşam için bir program hazırla. Film, YouTube videosu, podcast ve interaktif içerikleri (oyun, quiz, challenge vb.) karıştır.

Her zaman dilimi için iki seçenek sun: biri hafif, diğeri daha yoğun olsun. Yalnızca ücretsiz ve yasal içerikler öner.

Programı tek ekran görüntüsüne sığabilecek kadar sade bir takvim şeklinde hazırla.`
  },
  {
    id: "radyo", no: 6, baslik: "Kendi kişisel radyonu oluştur", ikon: "📻",
    alanlar: [
      { id: "konu", etiket: "Haftanın konusu", tip: "text", ornek: "iş dünyası, tarih, sağlık, yaratıcılık" },
      { id: "zaman", etiket: "Ne zaman dinleyeceksin?", tip: "text", ornek: "yolculuk, spor, günlük işler" }
    ],
    sablon: `Kişisel radyo programımın yapımcısı gibi davran.

Haftanın konusu: {{konu}}
Dinleyeceğim zamanlar: {{zaman}}

Bana 5 günlük bir sesli içerik programı oluştur. Her gün 1 ana podcast bölümü ve 1-2 kısa bonus içerik öner.

Programların ve bölümlerin tam isimlerini, bulmam için gerekli arama kelimelerini, neden dinlemeye değer olduklarını ve her içerikten çıkarmam gereken temel fikri belirt.

Sonuç, bana özel hazırlanmış 5 günlük bir radyo programı gibi olsun.`
  },
  {
    id: "kutuphane", no: 7, baslik: "Ücretsiz öğrenme kütüphanesi", ikon: "📖",
    alanlar: [
      { id: "konular", etiket: "30 günde öğrenmek istediğin 3-5 konu", tip: "textarea", ornek: "Osmanlı tarihi, temel Python, fotoğrafçılık" }
    ],
    sablon: `Kişisel kütüphanecim ve öğretmenim gibi davran.

Önümüzdeki 30 gün boyunca öğrenmek istediğim konular: {{konular}}

Bana tamamen ücretsiz bir öğrenme kütüphanesi oluştur:
- 10-15 önemli makale
- 5-10 ücretsiz kitap, PDF veya kamuya açık klasik eser
- 3-5 ücretsiz online kurs veya konferans serisi

Her kaynak için nereden ulaşabileceğimi, tamamlamanın yaklaşık ne kadar süreceğini ve bana hangi bilgi veya beceriyi kazandıracağını belirt.

Hepsini 1. haftadan 4. haftaya kadar haftalık okuma/öğrenme listelerine böl.`
  },
  {
    id: "oneri", no: 8, baslik: "Seni tanıyan öneri sistemi", ikon: "🧭",
    alanlar: [],
    sablon: `Beni zamanla tanıyan akıllı bir öneri sistemi gibi davran.

Önce bana şu 4 soruyu tek tek sor:
1. Şu anki ruh hâlim nasıl?
2. Kaç dakikam var?
3. Dikkat seviyem nasıl? (scroll modu / orta odak / tam odak)
4. Kiminleyim? (yalnız / partner / arkadaşlar / aile)

Cevaplarıma göre bana:
- 1 film veya dizi bölümü
- 1 YouTube videosu
- 1 podcast bölümü
- 1 oyun veya basit aktivite
- 1 kısa eğitici içerik
öner.

Her seansın sonunda neyi sevdiğimi sor ve sonraki önerilerini cevaplarıma göre geliştir.`
  },
  {
    id: "doomscroll", no: 9, baslik: "Doomscroll'u azaltan sistem", ikon: "🛑",
    alanlar: [
      { id: "aliskanlik", etiket: "Kontrol etmek istediğin alışkanlıklar", tip: "textarea", ornek: "sürekli sosyal medya kaydırmak, gece geç saatlere kadar YouTube" },
      { id: "hedef", etiket: "Hedeflerin", tip: "textarea", ornek: "daha erken uyumak, daha fazla okumak, stresi azaltmak" }
    ],
    sablon: `Dijital alışkanlıklarımı düzenleyen kişisel asistanım gibi davran.

Kontrol etmek istediğim alışkanlıklar: {{aliskanlik}}
Hedeflerim: {{hedef}}

Bana; amaçsız ve pasif içerik tüketimini sınırlayan, bilinçli eğlence ve öğrenmeyi artıran, günlük ve haftalık net sınırlar koyan ve her içerik seansına "burada bırak" noktaları ekleyen bir sistem oluştur.

Somut kurallar, hazır içerik listeleri ve boş boş kaydırma isteği geldiğinde yapabileceğim alternatif aktiviteler de ekle.`
  }
];

/* Odak sekmesi: kaydırma isteği gelince önerilecekler */
window.ALTERNATIFLER = [
  "10 dakika yürüyüşe çık, telefonu cebinde bırak.",
  "Lichess'te 3 bulmaca çöz.",
  "Bir bardak su iç ve pencereyi aç.",
  "Radio Garden'da rastgele bir şehrin radyosunu dinle.",
  "Okuduğun kitaptan 10 sayfa oku.",
  "Birine kısa bir mesaj at: sadece hâlini sor.",
  "5 dakika esneme hareketleri yap.",
  "Yarın için 3 maddelik yapılacaklar listesi yaz.",
  "Bir TED konuşması izle ve tek cümlelik not al.",
  "Masanı 5 dakikada topla."
];

window.KURALLAR = [
  "Açmadan önce ne izleyeceğine karar ver: 'bir şeye bakayım' yok.",
  "Otomatik oynatmayı kapat; her bölümden sonra bilinçli karar ver.",
  "Yatmadan 45 dakika önce ekran bitsin; sesli içeriğe geç.",
  "Günde en fazla 2 'serbest kaydırma' seansı, her biri sayaçla.",
  "Haftada bir gün: sadece öğrenme listesinden içerik."
];
