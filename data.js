/* ==========================================================
   KARABAKH COMPANY - CONTENT FILE (the only file you edit)
   Texts are written as ["English", "Azərbaycanca"].
   To add/remove an item: copy one {...} block (with its comma) or delete it.
   ========================================================== */
window.SITE = {
  vtcId: 81836,
  email: "karabakhcompanyoffical@gmail.com",
  discord: "https://discord.gg/5YJqGrwhkr",
  ticket: "https://discord.com/channels/1399041637363089520/1465328363341221948/1540080888673468530",
  tmp: "https://truckersmp.com/vtc/81836",
  tiktok: "https://www.tiktok.com/@karabakhvtc?_t=ZS-8yjTulmiDpv&_r=1",
  youtube: "https://www.youtube.com/@karabakhvtc",
  apply: "https://truckersmp.com/vtc/81836/recruitment-form/5249-karabakh-company-ə-qoşulun",
  logo: "https://i.imgur.com/suK0Znv.png",
  banner: "https://i.imgur.com/APz4V2Q.jpeg",
  updated: ["November 2026", "Noyabr 2026"],

  /* STAFF: add a member = add {n:"Name (nick)", id:"TruckersMP user ID"} to "m". Empty m:[] = shows "Hiring". */
  staff: [
    { icon: "crown", role: ["Founder & Owner", "Qurucu və Sahib"], m: [{ n: "Telman (50telman)", id: "5341001" }] },
    { icon: "user-tie", role: ["Chief Operating Officer (COO)", "Baş Əməliyyat Direktoru (COO)"], m: [{ n: "Fərid (aztol44)", id: "5707927" }] },
    { icon: "calendar-days", role: ["Event Manager", "Tədbir Meneceri"], m: [] },
    { icon: "calendar-check", role: ["Event Team", "Tədbir Komandası"], m: [{ n: "İlqar (relaks_mood)", id: "5389668" }] },
    { icon: "briefcase", role: ["HR Manager", "HR Meneceri"], m: [] },
    { icon: "briefcase", role: ["HR Team", "HR Komandası"], m: [] },
    { icon: "user-plus", role: ["Recruitment Manager", "Qəbul Meneceri"], m: [{ n: "Vüsal (npneptun)", id: "5683996" }] },
    { icon: "users-gear", role: ["Recruitment Team", "Qəbul Komandası"], m: [{ n: "Rəbbin (rangerrsol)", id: "5325090" }, { n: "Fəxri (ea7exe)", id: "5946613" }] }
  ],

  /* PARTNERS: copy/delete a line to add/remove a partner */
  partners: [
    { n: "Hort Trans UA", url: "https://truckersmp.com/vtc/82292", img: "https://i.imgur.com/yDv214c.png" },
    { n: "Veldoria Convoy Control", url: "https://truckersmp.com/vtc/73816", img: "https://i.imgur.com/S6YJxHw.png" },
    { n: "Noxen Group", url: "https://truckersmp.com/vtc/87113", img: "https://i.imgur.com/1fmNAiu.jpeg" },
    { n: "Purple Dragons Logistics", url: "https://truckersmp.com/vtc/74387", img: "https://i.imgur.com/udr1o1C.png" }
  ],

  /* EVENTS: date = YYYY-MM-DD. Past events hide automatically. */
  events: [
    { date: "2026-11-30", t: "Karabakh Company | Farid’s Birthday Convoy", d: ["Join us and enjoy our event.", "Bizə qoşulun və tədbirdən həzz alın."], url: "https://truckersmp.com/events/37175-karabakh-company|-farid%E2%80%99s-birthday-convoy" },
    { date: "2026-12-14", t: "Karabakh Company | December Convoy", d: ["Join us and enjoy our event.", "Bizə qoşulun və tədbirdən həzz alın."], url: "https://truckersmp.com/events/37709-karabakh-company%7C-december-convoy" }
  ],

  gallery: ["2IQeBjP", "1R5KK9b", "cQaUy7G", "x2829F7", "VMfv36L", "b5uupUl", "ot32Foj", "9jfArgS"].map(i => "https://i.imgur.com/" + i + ".jpeg"),

  ranks: [
    { tag: "Founder", n: ["Founder", "Qurucu"], d: ["Owns and leads the company and makes final decisions.", "Şirkətin sahibi və rəhbəri, son qərarları verir."] },
    { tag: "COO", n: ["Chief Operating Officer", "Baş Əməliyyat Direktoru"], d: ["Oversees daily operations and coordinates all departments.", "Gündəlik fəaliyyətə nəzarət edir, bütün şöbələri əlaqələndirir."] },
    { tag: "EM", n: ["Event Manager", "Tədbir Meneceri"], d: ["Plans and leads convoys and events.", "Konvoy və tədbirləri planlaşdırır və idarə edir."] },
    { tag: "ET", n: ["Event Team", "Tədbir Komandası"], d: ["Helps organise and run convoys and events.", "Konvoy və tədbirlərin təşkilində və keçirilməsində kömək edir."] },
    { tag: "HRM", n: ["Human Resources Manager", "HR Meneceri"], d: ["Leads the HR team and handles member welfare and discipline.", "HR komandasına rəhbərlik edir, üzvlərin rifahı və intizamına baxır."] },
    { tag: "HRT", n: ["Human Resources Team", "HR Komandası"], d: ["Evaluates new members joining the company and supports existing ones.", "Şirkətə yeni qatılanları dəyərləndirir, mövcud üzvlərə dəstək olur."] },
    { tag: "RM", n: ["Recruitment Manager", "Qəbul Meneceri"], d: ["Leads recruitment and the application process.", "Qəbul prosesinə və müraciətlərə rəhbərlik edir."] },
    { tag: "RT", n: ["Recruitment Team", "Qəbul Komandası"], d: ["Reviews applications and interviews candidates.", "Müraciətləri nəzərdən keçirir, namizədlərlə görüşür."] },
    { tag: "SE", n: ["Save Editor", "Save Editor"], d: ["Prepares trucks, profiles and saves for our convoys.", "Konvoylarımız üçün tır, profil və save-lər hazırlayır."] },
    { tag: "M.Driver", n: ["Master Driver", "Master Sürücü"], d: ["Highly experienced and trusted driver of the company.", "Şirkətin yüksək təcrübəli və etibarlı sürücüsü."] },
    { tag: "Driver", n: ["Driver", "Sürücü"], d: ["Full member who has passed the trial period.", "Sınaq müddətini keçmiş tam hüquqlu üzv."] },
    { tag: "Trainee", n: ["Trainee", "Təcrübəçi"], d: ["New member in the trial period (usually 14 days).", "Sınaq müddətindəki yeni üzv (adətən 14 gün)."] }
  ],

  reqs: [
    ["Maximum of 4 active bans on your TruckersMP profile.", "TruckersMP profilinizdə maksimum 4 aktiv ban ola bilər."],
    ["You must use our company in-game tag.", "Oyun daxilində şirkətimizin adını daşıyan taqdan istifadə məcburidir."],
    ["Our official logo must be set on your TruckersMP profile.", "TruckersMP profilinizdə şirkətimizin rəsmi loqosu olmalıdır."],
    ["Follow all company rules and ethical standards.", "Şirkətin bütün qaydalarına və etik normalarına tam əməl olunmalıdır."],
    ["Be present on our official Discord server for communication and convoys.", "Ünsiyyət və konvoylar üçün rəsmi Discord serverimizdə iştirak məcburidir."],
    ["Own Euro Truck Simulator 2 and have a microphone.", "ETS2 oyununa və mikrofona sahib olun."]
  ],

  rules: [
    { h: ["1. General Respect and Conduct", "1. Ümumi hörmət və davranış qaydaları"], p: [
      "Be respectful to everyone. Swearing, insults, racism, sexism or discrimination are prohibited.\nToxic behavior, arguments and creating a hostile environment are forbidden.\nAvoid trolling behavior within the server.",
      "Hər kəsə hörmətlə yanaşın. Söyüş, təhqir, irqçilik, cinsiyyətçilik və ayrı-seçkilik qadağandır.\nToksik davranış, mübahisələr və düşmənçilik mühiti yaratmaq qadağandır.\nServerdə trolluq etməkdən çəkinin."] },
    { h: ["2. Follow the TruckersMP Rules (our drivers)", "2. TruckersMP qaydalarına əməl edin (sürücülərimiz)"], p: [
      "TruckersMP rules: https://truckersmp.com/rules. Compliance is mandatory.\nCheating, illegal mods, and inappropriate license plates, names or liveries are prohibited.\nIn-game complaints or ban discussions are not allowed on the server. Use the TruckersMP website for such matters.",
      "TruckersMP qaydaları: https://truckersmp.com/rules. Əməl etmək məcburidir.\nQeyri-qanuni modlar, oyunda fırıldaq, uyğunsuz nömrə nişanı, ad və ya boyalar qadağandır.\nOyun daxili şikayət və ban müzakirələri serverdə qadağandır. Bunun üçün TruckersMP saytından istifadə edin."] },
    { h: ["3. No Advertising or Spam", "3. Reklam və spam qadağandır"], p: [
      "Advertising other servers, websites or social media accounts is forbidden.",
      "Digər serverlərin, saytların və sosial şəbəkə hesablarının reklamı qadağandır."] },
    { h: ["4. Follow Channel Rules", "4. Kanal qaydalarına əməl edin"], p: [
      "Read each channel's description and do not post outside the stated topic.\nIn voice channels, unnecessary noises, shouting or playing music is prohibited (except in the Music channel).\nIn special channels such as registration, AFK or applications, follow the administrators' instructions only.",
      "Hər kanalın təsvirini oxuyun və mövzudan kənar yazmayın.\nSəsli kanallarda lazımsız səslər, qışqırıq və musiqi qadağandır (Musiqi kanalı istisna).\nQeydiyyat, AFK və müraciət kimi xüsusi kanallarda yalnız adminlərin göstərişlərinə əməl edin."] },
    { h: ["5. Follow Administrator Instructions", "5. Administrasiyanın göstərişlərinə əməl edin"], p: [
      "You must comply with warnings from the admin team. Actions against the rules will be punished.\nFirst offense: a warning.\nRepeated violations: messages deleted and a short-term mute may be applied.\nPersistent failure to follow the rules may result in removal from the server.",
      "Admin komandasının xəbərdarlıqlarına əməl etməlisiniz. Qaydalara zidd hərəkətlər cəzalandırılır.\nİlk pozuntu: xəbərdarlıq.\nTəkrar pozuntu: mesajlar silinir, qısamüddətli mute verilə bilər.\nQaydalara davamlı əməl etməmək serverdən çıxarılmaqla nəticələnə bilər."] },
    { h: ["6. Convoy and Event Rules", "6. Konvoy və tədbir qaydaları"], p: [
      "During events, follow the administrators' instructions.\nIn convoys, reckless driving, collisions, causing accidents and breaking formation are prohibited.\nBe ready before the convoy start time; latecomers may only participate individually.",
      "Tədbirlər zamanı administratorların göstərişlərinə əməl edin.\nKonvoylarda ehtiyatsız sürücülük, toqquşma, qəza törətmək və düzülüşü pozmaq qadağandır.\nKonvoy başlamazdan əvvəl hazır olun; gecikənlər yalnız fərdi qoşula bilər."] }
  ],

  faq: [
    [["What are the requirements to join? Is there an age limit?", "VTC-yə qoşulmaq üçün hansı tələblər var? Yaş həddi varmı?"], ["There is no minimum age; people of all ages can join.\nA clean TruckersMP ban history (not above our active-ban limit).\nDiscord and a microphone for team communication.\nOwning ETS2.", "Minimum yaş həddi yoxdur, hər yaşdan insanlar qoşula bilər.\nTruckersMP-də təmiz ban tarixçəsi (limitdən çox ban olmaması).\nKomanda ünsiyyəti üçün Discord və mikrofon.\nETS2 oyununa sahib olmaq."]],
    [["How can I apply?", "Necə müraciət edə bilərəm?"], ["Open a ticket on our Discord server (see the Join Us page). Your application will be reviewed shortly.", "Discord serverimizdə ticket açın (Qoşul səhifəsinə baxın). Müraciətiniz qısa müddətə nəzərdən keçiriləcək."]],
    [["Is there a trial period?", "Sınaq müddəti varmı?"], ["Yes. New drivers usually have a 14-day trial to check rule compliance and team fit.", "Bəli, yeni sürücülər üçün adətən 14 günlük sınaq müddəti olur: qaydalara uyğunluğunuz yoxlanılır və komandaya uyğunlaşırsınız."]],
    [["Is attending convoys mandatory?", "Konvoylarda iştirak məcburidirmi?"], ["Not every convoy, but we recommend joining a certain number each month to stay active. If you can't, you may file a Leave of Absence (LoA).", "Hər konvoyda məcburi deyil, lakin aktivliyi qorumaq üçün ay ərzində müəyyən sayda konvoyda iştirak tövsiyə olunur. Qatıla bilməsəniz, “İcazəli yoxluq” (LoA) qeyd edə bilərsiniz."]],
    [["What happens if I break TruckersMP rules?", "TruckersMP qaydalarını pozsam nə baş verər?"], ["We value clean, professional driving. Repeated unjustified bans harm the company's image and may lead to internal measures; members exceeding the active-ban limit may be removed.", "Təmiz və peşəkar sürüşə üstünlük veririk. Təkrarlanan əsassız banlar şirkətin imicinə zərər verir və daxili tədbirlərə səbəb ola bilər; aktiv ban limitini keçənlər VTC-dən çıxarıla bilər."]],
    [["Can foreign players who don't speak Azerbaijani join?", "Azərbaycan dilini bilməyən xarici oyunçular qoşula bilərmi?"], ["Yes! We are open to the international simulator community. English is our common language, and our convoys include friends from many countries.", "Bəli! Beynəlxalq simulyator icmasına açığıq. Ümumi dil İngilis dilidir və konvoylarımızda müxtəlif ölkələrdən dostlarımız iştirak edir."]],
    [["Are there special requirements for foreign drivers?", "Xarici sürücülər üçün xüsusi tələblər varmı?"], ["The main requirements are the same: follow TruckersMP rules, be respectful, and communicate in English on Discord.", "Əsas tələblər eynidir: TruckersMP qaydalarına riayət, hörmət və Discord-da ingilis dilində ünsiyyət."]],
    [["Which platform do you use to communicate?", "Ünsiyyət üçün hansı platformadan istifadə edirsiniz?"], ["Our Discord server is our main hub. All announcements, convoy schedules and chat are there.", "Əsas mərkəzimiz Discord serverimizdir. Bütün elanlar, konvoy cədvəlləri və söhbətlər orada aparılır."]],
    [["Who do I contact with questions or problems?", "Sualım və ya problemim olsa kimə müraciət edim?"], ["Message our “Support” or “Staff” members on Discord, or email us (see the Contact page).", "Discord-da “Support” və ya “Staff” üzvlərinə yazın və ya e-poçt göndərin (Əlaqə səhifəsinə baxın)."]]
  ],

  terms: [
    [["1. Acceptance", "1. Qəbul"], ["By using this website or joining Karabakh Company, you agree to these Terms. If you disagree, please do not use the site or join.", "Bu saytdan istifadə etməklə və ya Karabakh Company-yə qoşulmaqla bu Şərtlərlə razılaşırsınız. Razı deyilsinizsə, saytdan istifadə etməyin."]],
    [["2. Membership", "2. Üzvlük"], ["Members must follow the TruckersMP rules, use the company in-game tag, display the official logo on their TruckersMP profile, stay within the active-ban limit and take part in our Discord server.", "Üzvlər TruckersMP qaydalarına əməl etməli, şirkət taqından və rəsmi loqodan istifadə etməli, aktiv ban limitini aşmamalı və Discord serverimizdə iştirak etməlidir."]],
    [["3. Conduct", "3. Davranış"], ["All members must follow our Rules page, including respectful behavior, no spam or advertising, and following staff instructions.", "Bütün üzvlər Qaydalar səhifəsinə, o cümlədən hörmətli davranışa, spam və reklamın olmamasına, heyətin göstərişlərinə əməl etməlidir."]],
    [["4. Convoys and events", "4. Konvoy və tədbirlər"], ["Reckless driving, collisions and breaking formation are prohibited in convoys. Staff may remove participants who disrupt an event.", "Konvoylarda ehtiyatsız sürücülük, toqquşma və düzülüşü pozmaq qadağandır. Heyət tədbiri pozan iştirakçıları çıxara bilər."]],
    [["5. Warnings and removal", "5. Xəbərdarlıq və çıxarılma"], ["Violations may result in a warning, mute, or removal from the company and Discord server, depending on severity.", "Pozuntular ağırlığından asılı olaraq xəbərdarlıq, mute və ya şirkətdən və Discord serverindən çıxarılma ilə nəticələnə bilər."]],
    [["6. Affiliation and trademarks", "6. Əlaqə və ticarət nişanları"], ["Karabakh Company is an independent virtual company. It is not owned by or officially affiliated with SCS Software or TruckersMP. Game names and trademarks belong to their owners.", "Karabakh Company müstəqil virtual şirkətdir. SCS Software və ya TruckersMP-yə məxsus deyil və onlarla rəsmi əlaqəsi yoxdur. Oyun adları və ticarət nişanları sahiblərinə məxsusdur."]],
    [["7. Liability", "7. Məsuliyyət"], ["The website is provided “as is”. We are not liable for external sites we link to or for losses arising from use of the site.", "Sayt “olduğu kimi” təqdim olunur. Keçid verdiyimiz xarici saytlara və saytdan istifadədən yaranan itkilərə görə məsuliyyət daşımırıq."]],
    [["8. Changes and contact", "8. Dəyişikliklər və əlaqə"], ["We may update these Terms at any time. Questions: karabakhcompanyoffical@gmail.com.", "Bu Şərtləri istənilən vaxt yeniləyə bilərik. Suallar üçün: karabakhcompanyoffical@gmail.com."]]
  ],

  privacy: [
    [["1. Who we are", "1. Biz kimik"], ["Karabakh Company is a virtual trucking company on TruckersMP and the controller of the data described here. Contact: karabakhcompanyoffical@gmail.com.", "Karabakh Company TruckersMP-də fəaliyyət göstərən virtual daşıma şirkətidir və burada təsvir olunan məlumatların operatorudur. Əlaqə: karabakhcompanyoffical@gmail.com."]],
    [["2. Data we process", "2. Emal etdiyimiz məlumatlar"], ["This website has no accounts or forms and does not collect personal data itself. When you apply or take part via Discord or TruckersMP, we may process your TruckersMP ID and username, Discord ID and username, the ban history visible on your public TruckersMP profile, and messages you send to our staff.", "Bu saytda hesab və ya forma yoxdur və özü şəxsi məlumat toplamır. Discord və ya TruckersMP vasitəsilə müraciət etdikdə və ya iştirak etdikdə TruckersMP ID və adınız, Discord ID və adınız, ictimai TruckersMP profilinizdəki ban tarixçəsi və heyətə yazdığınız mesajlar emal oluna bilər."]],
    [["3. Purpose and legal basis", "3. Məqsəd və hüquqi əsas"], ["We use this data to review applications, manage membership and organise events. Legal basis (GDPR Art. 6): your consent and our legitimate interest in running the company safely.", "Bu məlumatlar müraciətlərin baxılması, üzvlüyün idarəsi və tədbirlərin təşkili üçün istifadə olunur. Hüquqi əsas (GDPR md. 6): sizin razılığınız və şirkəti təhlükəsiz idarə etməkdə qanuni marağımız."]],
    [["4. Retention", "4. Saxlanma müddəti"], ["Data is kept only as long as needed for these purposes. You can ask us to delete your data at any time.", "Məlumatlar yalnız bu məqsədlər üçün lazım olan müddət saxlanılır. İstənilən vaxt məlumatlarınızın silinməsini tələb edə bilərsiniz."]],
    [["5. Third parties", "5. Üçüncü tərəflər"], ["The site is hosted on GitHub Pages and loads fonts and icons from Google Fonts and cdnjs, so these providers may receive your IP address. We link to Discord, TruckersMP and TikTok, which have their own policies. We never sell your data.", "Sayt GitHub Pages-də yerləşir, şriftlər və ikonlar Google Fonts və cdnjs-dən yüklənir; bu provayderlər IP ünvanınızı ala bilər. Öz siyasətləri olan Discord, TruckersMP və TikTok-a keçidlər veririk. Məlumatlarınızı heç vaxt satmırıq."]],
    [["6. Cookies and local storage", "6. Kukilər və yerli yaddaş"], ["We only store your language choice and cookie-notice choice in your browser. We use no analytics, tracking or advertising cookies.", "Brauzerinizdə yalnız dil seçiminiz və kuki bildirişi seçiminiz saxlanılır. Analitika, izləmə və reklam kukilərindən istifadə etmirik."]],
    [["7. Your rights", "7. Hüquqlarınız"], ["You may request access, correction, deletion, restriction, objection and portability of your data, and lodge a complaint with your data protection authority. Email us to use these rights.", "Məlumatlarınıza çıxış, düzəliş, silmə, məhdudlaşdırma, etiraz və daşınma hüququnuz var, həmçinin məlumatların mühafizəsi orqanına şikayət edə bilərsiniz. Bunun üçün bizə yazın."]],
    [["8. Minors", "8. Yetkinlik yaşına çatmayanlar"], ["We have no minimum age to join. Parents or guardians may contact us at any time to review or delete a minor's data.", "Qoşulmaq üçün minimum yaş həddi yoxdur. Valideynlər və ya qəyyumlar yetkinlik yaşına çatmayanın məlumatlarına baxmaq və ya silmək üçün istənilən vaxt bizimlə əlaqə saxlaya bilər."]],
    [["9. Changes", "9. Dəyişikliklər"], ["We may update this policy; the date at the top shows the latest version.", "Bu siyasəti yeniləyə bilərik; ən son versiya yuxarıdakı tarixlə göstərilir."]]
  ]
};
