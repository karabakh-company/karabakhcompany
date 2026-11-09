(function () {
  var S = window.SITE, L = "en", P = document.body.dataset.page, AE = null, AN = null;
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  try { L = localStorage.getItem("lang") || "en"; } catch (e) {}
  var t = function (o) { return Array.isArray(o) ? o[L === "az" ? 1 : 0] : o; };
  var i = function (c) { return '<i class="fa-solid fa-' + c + '"></i> '; };

  var U = {
    nav: [["index", ["Home", "Ana səhifə"]], ["about", ["About", "Haqqımızda"]], ["team", ["Team", "Komanda"]], ["events", ["Events", "Tədbirlər"]], ["gallery", ["Gallery", "Qalereya"]], ["partners", ["Partners", "Tərəfdaşlar"]], ["rules", ["Rules", "Qaydalar"]], ["faq", ["FAQ", "FAQ"]], ["contact", ["Contact", "Əlaqə"]]],
    join: ["Join Us", "Qoşul"],
    badge: ["The Only Validated VTC in Azerbaijan", "Azərbaycanın yeganə təsdiqlənmiş VTC-si"],
    welcome: ["Welcome to", "Xoş gəlmisiniz,"],
    tag: ["Representing Azerbaijan with pride, structural integrity, and professionalism on the global TruckersMP stage.", "Azərbaycanı qlobal TruckersMP səhnəsində qürur, nizam-intizam və peşəkarlıqla təmsil edirik."],
    about: ["Karabakh Company was established on July 27, 2025, as a high-standard virtual trucking organization. We focus on operational excellence in ETS2 and ATS, fostering a community built on discipline, structural integrity, and professional synergy.\n\nWe are not just a VTC; we are a family representing Azerbaijan on the global TruckersMP stage.", "Karabakh Company 27 iyul 2025-ci ildə yüksək standartlı virtual daşıma təşkilatı kimi yaradılıb. ETS2 və ATS-də əməliyyat mükəmməlliyinə fokuslanır, intizam, nizam və peşəkar əməkdaşlıq üzərində qurulmuş icma yaradırıq.\n\nBiz sadəcə VTC deyilik; Azərbaycanı qlobal TruckersMP səhnəsində təmsil edən bir ailəyik."],
    sub: { about: ["Who we are", "Biz kimik"], team: ["The people running Karabakh Company", "Karabakh Company-ni idarə edənlər"], events: ["Upcoming convoys and events", "Qarşıdakı konvoy və tədbirlər"], gallery: ["Moments from our convoys", "Konvoylarımızdan anlar"], partners: ["VTCs we work with", "Əməkdaşlıq etdiyimiz VTC-lər"], join: ["Become part of our family", "Ailəmizin bir hissəsi olun"], rules: ["Please read before joining", "Qoşulmazdan əvvəl oxuyun"], faq: ["Frequently asked questions", "Tez-tez verilən suallar"], contact: ["Get in touch", "Bizimlə əlaqə"], terms: ["", ""], privacy: ["", ""] },
    title: { terms: ["Terms of Service", "Xidmət Şərtləri"], privacy: ["Privacy Policy", "Gizlilik Siyasəti"] },
    news: ["Latest news", "Son xəbərlər"], nonews: ["No news yet. Check our TruckersMP page and Discord.", "Hələ xəbər yoxdur. TruckersMP səhifəmizə və Discord-a baxın."],
    read: ["Read on TruckersMP", "TruckersMP-də oxu"], local: ["your local time", "yerli vaxtınızla"],
    next: ["Upcoming events", "Yaxınlaşan tədbirlər"], none: ["No upcoming events right now. Check our Discord for news.", "Hazırda tədbir yoxdur. Yeniliklər üçün Discord-a baxın."],
    page: ["Event page", "Tədbir səhifəsi"], hiring: ["Recruitment open", "İşçi axtarılır"],
    roles: ["Company roles", "Şirkət daxili rollar"], reqs: ["Requirements", "Tələblər"],
    how: ["How to join", "Necə qoşulmaq olar"],
    howt: ["Open a ticket on our Discord server and contact the management team. You can also use our TruckersMP recruitment form.", "Discord serverimizdə ticket açın və idarəetmə heyəti ilə əlaqə saxlayın. TruckersMP qəbul formasından da istifadə edə bilərsiniz."],
    ticket: ["Open a ticket", "Ticket aç"], apply: ["Apply on TruckersMP", "TruckersMP-də müraciət"],
    ready: ["Ready to drive?", "Sürməyə hazırsınız?"], cta: ["We are always looking for passionate, disciplined, and professional drivers.", "Həmişə həvəsli, intizamlı və peşəkar sürücülər axtarırıq."],
    cmail: ["Email", "E-poçt"], more: ["Full rules", "Tam qaydalar"],
    ck: ["This site stores only your language choice. No tracking or ad cookies. Fonts and icons load from Google and cdnjs.", "Bu sayt yalnız dil seçiminizi saxlayır. İzləmə və reklam kukiləri yoxdur. Şriftlər və ikonlar Google və cdnjs-dən yüklənir."],
    ok: ["OK", "Oldu"], pp: ["Privacy Policy", "Gizlilik Siyasəti"], tt: ["Terms of Service", "Xidmət Şərtləri"],
    disc: ["Karabakh Company is an independent VTC, not affiliated with SCS Software or TruckersMP.", "Karabakh Company müstəqil VTC-dir, SCS Software və ya TruckersMP ilə əlaqəsi yoxdur."],
    upd: ["Last updated", "Son yenilənmə"], rights: ["All Rights Reserved.", "Bütün hüquqlar qorunur."]
  };

  function evs(n) {
    var cut = Date.now() - 4 * 36e5;
    var src = AE ? AE.map(function (e) {
      var p = function (x) { return (x && (x.city || x.location)) || ""; };
      return { w: new Date(String(e.start_at).replace(" ", "T") + "Z"), t: e.name, d: [p(e.departure), p(e.arrive)].filter(Boolean).join(" - ") + (e.server ? " | " + e.server : ""), url: e.url, tm: 1 };
    }) : S.events.map(function (e) { return { w: new Date(e.date + "T12:00:00"), t: e.t, d: t(e.d), url: e.url }; });
    var l = src.filter(function (e) { return !isNaN(e.w) && e.w.getTime() > cut; }).sort(function (a, b) { return a.w - b.w; });
    if (n) l = l.slice(0, n);
    if (!l.length) return '<div class="box">' + t(U.none) + "</div>";
    return l.map(function (e) {
      var tm = e.tm ? e.w.toLocaleTimeString(L === "az" ? "az" : "en", { hour: "2-digit", minute: "2-digit" }) + " (" + t(U.local) + ")<br>" : "";
      return '<div class="card ev"><div class="date"><b>' + e.w.getDate() + "</b>" + e.w.toLocaleDateString(L === "az" ? "az" : "en", { month: "short" }) + '</div><div><h3 style="font-size:1.1rem;color:#fff;text-transform:none">' + esc(e.t) + "</h3><small>" + tm + esc(e.d) + '</small></div><a class="btn p" target="_blank" rel="noopener" href="' + esc(e.url) + '">' + t(U.page) + "</a></div>";
    }).join("");
  }
  function nws(n) {
    var l = (AN || []).slice(0, n || 50);
    if (!l.length) return '<div class="box">' + t(U.nonews) + "</div>";
    return '<div class="grid">' + l.map(function (x) {
      var d = x.published_at ? new Date(String(x.published_at).replace(" ", "T") + "Z") : null;
      return '<div class="card nw"><h3>' + esc(x.title) + "</h3>" + (d && !isNaN(d) ? "<small>" + d.toLocaleDateString(L === "az" ? "az" : "en", { day: "numeric", month: "long", year: "numeric" }) + "</small>" : "") + "<p style='color:#d1d1d1;margin:8px 0 14px'>" + esc(x.summary) + '</p><a class="btn p" style="padding:7px 16px;font-size:.78rem" target="_blank" rel="noopener" href="' + esc(x.url) + '">' + t(U.read) + "</a></div>";
    }).join("") + "</div>";
  }
  var head = function (title, sub) { return '<div class="ph"><h1>' + title + "</h1><p>" + sub + "</p></div>"; };
  var sec = function (h) { return "<section>" + h + "</section>"; };
  var doc = function (list) { return sec(list.map(function (x) { return '<div class="box"><h3>' + t(x[0]) + "</h3>" + t(x[1]) + "</div>"; }).join("")); };
  var btn = function (u, ic, txt, p) { return '<a class="btn' + (p ? " p" : "") + '" target="_blank" rel="noopener" href="' + u + '">' + i(ic) + txt + "</a>"; };

  var pages = {
    index: function () {
      return '<section class="hero"><img src="' + S.banner + '" alt="Karabakh Company"><div class="badge">' + i("medal") + t(U.badge) + "</div><h1>" + t(U.welcome) + " <span>Karabakh Company</span></h1><p>" + t(U.tag) + '</p><div class="btns">' + btn(S.tmp, "truck", "TruckersMP", 1) + btn(S.discord, "comments", "Discord") + "</div></section>" +
        sec('<div class="box">' + t(U.about) + "</div>") + sec("<h2>" + t(U.next) + "</h2>" + evs(2)) +
        sec('<div class="center"><h2>' + t(U.ready) + "</h2><p style='color:#d1d1d1'>" + t(U.cta) + '</p><div class="btns"><a class="btn p" href="join.html">' + t(U.join) + "</a></div></div>") +
        sec("<h2>" + t(U.news) + "</h2>" + nws(3));
    },
    about: function () { return head(t(U.nav[1][1]), t(U.sub.about)) + sec('<div class="box">' + t(U.about) + "</div>") + sec("<h2>" + t(U.roles) + '</h2><div class="grid">' + S.ranks.map(function (r) { return '<div class="card"><span class="tag">' + r.tag + "</span><h3 style='color:#fff'>" + t(r.n) + "</h3><small>" + t(r.d) + "</small></div>"; }).join("") + "</div>"); },
    team: function () {
      return head(t(U.nav[2][1]), t(U.sub.team)) + sec('<div class="grid">' + S.staff.map(function (s) {
        var body = s.m.length ? s.m.map(function (m) { return '<a class="mem" target="_blank" rel="noopener" href="https://truckersmp.com/user/' + m.id + '">' + m.n + "</a>"; }).join("") : '<div class="hire">' + t(U.hiring) + "</div>";
        return '<div class="card"><h3>' + i(s.icon) + t(s.role) + "</h3>" + body + "</div>";
      }).join("") + "</div>");
    },
    events: function () { return head(t(U.nav[3][1]), t(U.sub.events)) + sec(evs()); },
    gallery: function () { return head(t(U.nav[4][1]), t(U.sub.gallery)) + sec('<div class="gal">' + S.gallery.map(function (g) { return '<a target="_blank" rel="noopener" href="' + g + '"><img loading="lazy" src="' + g + '" alt="Convoy screenshot"></a>'; }).join("") + "</div>"); },
    partners: function () { return head(t(U.nav[5][1]), t(U.sub.partners)) + sec('<div class="grid">' + S.partners.map(function (p) { return '<a class="card pt" target="_blank" rel="noopener" href="' + p.url + '"><img loading="lazy" src="' + p.img + '" alt="' + p.n + '"><h3 style="color:#fff;text-transform:none;font-size:1.05rem">' + p.n + "</h3></a>"; }).join("") + "</div>"); },
    join: function () { return head(t(U.join), t(U.sub.join)) + sec("<h2>" + t(U.reqs) + '</h2><div class="box"><ul class="l">' + S.reqs.map(function (r) { return "<li>" + t(r) + "</li>"; }).join("") + "</ul></div>") + sec("<h2>" + t(U.how) + '</h2><div class="box">' + t(U.howt) + '</div><div class="btns">' + btn(S.ticket, "ticket", t(U.ticket), 1) + btn(S.apply, "file-signature", t(U.apply)) + "</div>"); },
    rules: function () { return head(t(U.nav[6][1]), t(U.sub.rules)) + sec(S.rules.map(function (r) { return '<div class="box"><h3>' + t(r.h) + "</h3>" + t(r.p) + "</div>"; }).join("")); },
    faq: function () { return head("FAQ", t(U.sub.faq)) + sec(S.faq.map(function (f) { return "<details><summary>" + t(f[0]) + "</summary><p>" + t(f[1]) + "</p></details>"; }).join("")); },
    contact: function () { return head(t(U.nav[8][1]), t(U.sub.contact)) + sec('<div class="grid"><a class="card" href="mailto:' + S.email + '"><h3>' + i("envelope") + t(U.cmail) + "</h3>" + S.email + '</a><a class="card" target="_blank" rel="noopener" href="' + S.discord + '"><h3>' + i("comments") + "Discord</h3>" + S.discord + '</a><a class="card" target="_blank" rel="noopener" href="' + S.tmp + '"><h3>' + i("truck") + "TruckersMP</h3>" + S.tmp + '</a><a class="card" target="_blank" rel="noopener" href="' + S.tiktok + '"><h3><i class="fa-brands fa-tiktok"></i> TikTok</h3>@karabakhvtc</a><a class="card" target="_blank" rel="noopener" href="' + S.youtube + '"><h3><i class="fa-brands fa-youtube"></i> YouTube</h3>@karabakhvtc</a></div>'); },
    terms: function () { return head(t(U.title.terms), t(U.upd) + ": " + t(S.updated)) + doc(S.terms); },
    privacy: function () { return head(t(U.title.privacy), t(U.upd) + ": " + t(S.updated)) + doc(S.privacy); }
  };

  function render() {
    document.documentElement.lang = L;
    var pt = U.title[P] ? t(U.title[P]) : (U.nav.filter(function (n) { return n[0] === P; })[0] || ["", U.join])[1];
    document.title = (P === "index" ? "" : t(pt) + " | ") + "Karabakh Company - Official TruckersMP VTC";
    document.getElementById("hd").innerHTML = '<div class="nav"><a class="logo" href="index.html"><img src="' + S.logo + '" alt="Logo"><span>Karabakh <b>Company</b></span></a><nav><ul id="nm">' +
      U.nav.map(function (n) { return '<li><a href="' + n[0] + '.html"' + (n[0] === P ? ' class="on"' : "") + ">" + t(n[1]) + "</a></li>"; }).join("") +
      '</ul></nav><div class="tools"><a class="btn p" style="padding:7px 14px;font-size:.75rem" href="join.html">' + t(U.join) + '</a><button class="lang" id="lg" aria-label="Language">' + (L === "en" ? "AZ" : "EN") + '</button><button class="burger" id="bg" aria-label="Menu"><i class="fa-solid fa-bars"></i></button></div></div>';
    document.getElementById("app").innerHTML = pages[P]();
    document.getElementById("ft").innerHTML = '<div class="fc"><div><h4>Karabakh <span style="color:#FFBB00">Company</span></h4><p>' + t(U.badge) + '.<br>' + t(U.disc) + '</p></div><div class="fl"><a href="terms.html">' + t(U.tt) + '</a><a href="privacy.html">' + t(U.pp) + '</a><a href="rules.html">' + t(U.nav[6][1]) + '</a></div><div class="soc"><a target="_blank" rel="noopener" href="' + S.tmp + '" title="TruckersMP"><i class="fa-solid fa-truck"></i></a><a target="_blank" rel="noopener" href="' + S.discord + '" title="Discord"><i class="fa-brands fa-discord"></i></a><a target="_blank" rel="noopener" href="' + S.tiktok + '" title="TikTok"><i class="fa-brands fa-tiktok"></i></a><a target="_blank" rel="noopener" href="' + S.youtube + '" title="YouTube"><i class="fa-brands fa-youtube"></i></a><a href="mailto:' + S.email + '" title="Email"><i class="fa-solid fa-envelope"></i></a></div></div><div class="cp">&copy; 2026 Karabakh Company. ' + t(U.rights) + "</div>";
    document.getElementById("lg").onclick = function () { L = L === "en" ? "az" : "en"; try { localStorage.setItem("lang", L); } catch (e) {} render(); };
    document.getElementById("bg").onclick = function () { document.getElementById("nm").classList.toggle("open"); };
    var c = document.getElementById("ck"), seen = false;
    try { seen = localStorage.getItem("ck") === "1"; } catch (e) {}
    if (c) c.remove();
    if (!seen) {
      var d = document.createElement("div"); d.id = "ck";
      d.innerHTML = "<span>" + t(U.ck) + ' <a href="privacy.html" style="color:#FFBB00">' + t(U.pp) + "</a></span><button>" + t(U.ok) + "</button>";
      d.querySelector("button").onclick = function () { try { localStorage.setItem("ck", "1"); } catch (e) {} d.remove(); };
      document.body.appendChild(d);
    }
  }
  render();
  var J = function (u) { return fetch(u, { cache: "no-store" }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }); };
  Promise.all([J("events.json"), J("news.json")]).then(function (r) {
    if (r[0] && Array.isArray(r[0].events)) AE = r[0].events;
    if (r[1] && Array.isArray(r[1].news)) AN = r[1].news;
    if (AE || AN) render();
  });
})();
