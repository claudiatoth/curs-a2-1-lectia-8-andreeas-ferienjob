// ============================================
// TEORIE - Andreeas Ferienjob (A2.1 · Lecția 8)
// Claudia Toth · Annettes Deutschkurs
// Sursă DF: INT256 (Wem darf ich das Bier geben) + INT257 (Wer/Wen/Wem/Was) — nucleu
// Tematica: Wer? Wen? Wem? Was? + Verben mit Dativ- und Akkusativobjekt
// ============================================

const theoryHTML = `
    <!-- 0: Story -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🍽️ 1. Andreeas Ferienjob — povestea</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-ferienjob-story.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="cast-banner">
                <h4>🎭 Personajele lecției</h4>
                <div class="cast-grid">
                    <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><span class="name">Andreea</span><span class="detail">Chelneriță în vacanță</span></div>
                    <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><span class="name">Mihai</span><span class="detail">Șeful · restaurantul</span></div>
                    <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><span class="name">Carolina</span><span class="detail">Fotografă · Berlin</span></div>
                    <div class="cast-card"><img src="images/florian.png" alt="Florian"><span class="name">Florian</span><span class="detail">Doctor · Berlin</span></div>
                    <div class="cast-card"><img src="images/acar.png" alt="Acar"><span class="name">Acar</span><span class="detail">Maistru · Oranienburg</span></div>
                    <div class="cast-card"><img src="images/annette.png" alt="Annette"><span class="name">Annette</span><span class="detail">Profesoara · Berlin</span></div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📖 Prima zi de muncă: „Wem darf ich das Bier geben?"</h4>
                <p>Andreea are un <strong>Ferienjob</strong> (job de vacanță) ca chelneriță la restaurantul lui Mihai. Aleargă de la masă la masă cu tava plină și trebuie să țină minte cine ce a comandat. La fiecare masă își pune aceleași întrebări: <strong>Wer</strong> bekommt den Weißwein? Für <strong>wen</strong> ist die Apfelschorle? <strong>Wem</strong> darf ich das Bier geben? Ca să le răspundă, are nevoie de cele 4 cuvinte de întrebare — fiecare pentru un alt <strong>caz</strong>.</p>
            </div>

            <div class="theory-box">
                <h4>💬 Dialogul: Mihai + Andreea (prima zi)</h4>
                <p><strong style="color:#065f46;">Mihai:</strong> Willkommen, Andreea! Heute ist dein erster Arbeitstag.<br><span class="ro-translation">Bun venit, Andreea! Azi e prima ta zi de muncă.</span></p>
                <p><strong style="color:#065f46;">Andreea:</strong> Danke, Mihai! Ich bin ein bisschen nervös. Was soll ich machen?<br><span class="ro-translation">Mulțumesc, Mihai! Sunt puțin emoționată. Ce să fac?</span></p>
                <p><strong style="color:#065f46;">Mihai:</strong> Kein Problem! Du bringst <strong>den Gästen</strong> die Getränke. Tisch 7 wartet schon.<br><span class="ro-translation">Nicio problemă! Le aduci clienților băuturile. Masa 7 așteaptă deja.</span></p>
                <p><strong style="color:#065f46;">Andreea:</strong> Okay. <strong>Wem</strong> bringe ich den Weißwein?<br><span class="ro-translation">Bine. Cui îi aduc vinul alb?</span></p>
                <p><strong style="color:#065f46;">Mihai:</strong> <strong>Dem Herrn</strong> am Fenster. Und die Apfelschorle ist für die Dame.<br><span class="ro-translation">Domnului de la geam. Iar șprițul de mere e pentru doamnă.</span></p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Toată lecția e despre 4 întrebări mici: <strong>Wer?</strong> (cine), <strong>Wen?</strong> (pe cine), <strong>Was?</strong> (ce) și NOUL <strong>Wem?</strong> (cui). Fiecare arată un alt rol în propoziție: subiect, obiect direct sau obiect indirect. Hai să le punem în ordine! 🦋</em>
                </div>
            </div>

            <!-- ===== SCHREIBWERKSTATT — Trimite textul Claudiei ===== -->
            <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border: 2px solid #10B981; border-radius: 14px; padding: 24px 22px; margin-top: 22px; text-align: center; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.12);">
                <div style="font-size: 2.2rem; margin-bottom: 4px;">✍️</div>
                <h4 style="color: #065f46; font-size: 1.2rem; margin: 0 0 8px; font-weight: bold;">Schreibwerkstatt — vrei să-ți corectez textul?</h4>
                <p style="color: #047857; font-size: 0.95rem; margin: 0 0 16px; max-width: 540px; margin-left: auto; margin-right: auto; line-height: 1.5;">
                    „Andreeas erster Arbeitstag" — descrie o zi de muncă (la un restaurant, magazin, birou). Cui aduci, arăți sau dăruiești ceva? Folosește cel puțin <strong>5 verbe cu Dativ</strong> (Ich bringe dem Gast..., Ich zeige meinem Chef..., Ich helfe meiner Kollegin...). <strong>Min. 60 cuvinte.</strong> Îți răspund personal pe email. 🦋
                </p>
                <a href="https://forms.gle/7xVfxQrncHuMd3Y46" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #10B981; color: white; padding: 13px 30px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1rem; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);">
                    Trimite textul Claudiei →
                </a>
                <p style="color: #5A5147; font-size: 0.78rem; margin-top: 12px; font-style: italic;">
                    ʚଓ Răspuns personal pe email · Nu uita să-ți treci adresa de email în formular
                </p>
            </div>
        </div>
    </div>

    <!-- 1: Wer/Wen/Was -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🔍 2. Wer? Wen? Was? — cine, pe cine, ce</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-wer-wen-was.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 Cuvântul de întrebare îți arată CAZUL</h4>
                <p>Întrebi despre o persoană sau un lucru — dar forma întrebării depinde de rolul în propoziție:</p>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Întrebare</th><th>Caz · rol</th><th>Exemplu + RO</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Wer?</strong> (cine)</td><td>Nominativ · SUBIECT</td><td>Wer bekommt die Cola? <span class="ro-translation">Cine primește cola?</span></td></tr>
                    <tr><td><strong>Wen?</strong> (pe cine)</td><td>Akkusativ · obiect direct (persoană)</td><td>Wen lädst du ein? <span class="ro-translation">Pe cine inviți?</span></td></tr>
                    <tr><td><strong>Was?</strong> (ce)</td><td>Nominativ SAU Akkusativ (lucru)</td><td>Was hast du bestellt? <span class="ro-translation">Ce ai comandat?</span></td></tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Truc: <strong>Wer</strong> = subiectul (cine face acțiunea). <strong>Wen</strong> = pe cine ajunge acțiunea (obiect direct, doar persoane). <strong>Was</strong> = pentru lucruri (și la subiect, și la obiect). Următoarea pagină îți aduce vedeta lecției: <strong>Wem</strong>!</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 2: Wem = Dativ -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🆕 3. Wem? = CUI (Dativ) + verbe cu Dativ</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-wem-dativ.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 Wem? = cui (obiectul indirect, la Dativ)</h4>
                <p><strong>Wem?</strong> întreabă CUI i se dă / aduce / arată ceva. Răspunsul e la <strong>Dativ</strong>. Articolele la Dativ:</p>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Gen</th><th>Nominativ → Dativ</th><th>Exemplu + RO</th></tr>
                </thead>
                <tbody>
                    <tr><td>masculin</td><td>der → <strong>dem</strong></td><td>Ich gebe <strong>dem</strong> Gast das Bier. <span class="ro-translation">Îi dau clientului berea.</span></td></tr>
                    <tr><td>feminin</td><td>die → <strong>der</strong></td><td>Ich helfe <strong>der</strong> Kollegin. <span class="ro-translation">O ajut pe colegă.</span></td></tr>
                    <tr><td>neutru</td><td>das → <strong>dem</strong></td><td>Ich zeige <strong>dem</strong> Kind die Karte. <span class="ro-translation">Îi arăt copilului meniul.</span></td></tr>
                    <tr><td>plural</td><td>die → <strong>den</strong> (+ -n)</td><td>Ich bringe <strong>den</strong> Gäste<strong>n</strong> die Getränke. <span class="ro-translation">Le aduc clienților băuturile.</span></td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="border-left-color:#dc2626;">
                <h4>🚨 Verbe care cer ÎNTOTDEAUNA Dativ (fără Akkusativ)</h4>
                <p>Câteva verbe foarte frecvente au obiectul DOAR la Dativ — atenție, în română par cu acuzativ!</p>
                <ul>
                    <li><strong>gehören</strong> (a aparține): Wem gehört die Schürze? — Sie gehört <strong>mir</strong>.</li>
                    <li><strong>helfen</strong> (a ajuta): Ich helfe <strong>dem</strong> Koch.</li>
                    <li><strong>danken</strong> (a mulțumi): Ich danke <strong>dir</strong>.</li>
                    <li><strong>gratulieren</strong> (a felicita): Wir gratulieren <strong>dem</strong> Chef.</li>
                    <li><strong>gefallen / schmecken</strong> (a plăcea / a avea gust bun): Die Suppe schmeckt <strong>den</strong> Gäste<strong>n</strong>.</li>
                </ul>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>La plural NU uita <strong>-n</strong>-ul: den Gäste<strong>n</strong>, den Kinder<strong>n</strong> (chiar dacă substantivul nu are -n la Nominativ). Iar verbele helfen, danken, gratulieren, gehören sunt mici capcane — par „a ajuta PE cineva" în română, dar în germană merg cu Dativ! 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Două obiecte -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🆕 4. Verbe cu DOUĂ obiecte (Dativ + Akkusativ)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-zwei-objekte.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 Multe verbe au DOUĂ obiecte: CUI (Dativ) + CE (Akkusativ)</h4>
                <p>Verbe ca <strong>geben, bringen, zeigen, schenken</strong> au și o persoană (CUI — Dativ), și un lucru (CE — Akkusativ). Regula de ordine când AMBELE sunt substantive:</p>
                <p style="text-align:center; font-size:1.1rem; color:#065f46;"><strong>Dativ (persoana) ÎNAINTEA Akkusativ (lucrul)</strong></p>
                <p style="text-align:center;">Der Kellner bringt <strong style="color:#dc2626;">dem Gast</strong> (CUI) <strong style="color:#047857;">die Suppe</strong> (CE).<br><span style="color:#5A5147; font-style:italic;">Chelnerul îi aduce clientului supa.</span></p>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Verb</th><th>Traducere RO</th><th>Exemplu (Dativ + Akkusativ)</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>geben</strong></td><td>a da</td><td>Ich gebe dem Gast das Bier.</td></tr>
                    <tr><td><strong>bringen</strong></td><td>a aduce</td><td>Sie bringt den Kindern das Eis.</td></tr>
                    <tr><td><strong>zeigen</strong></td><td>a arăta</td><td>Er zeigt der Frau die Speisekarte.</td></tr>
                    <tr><td><strong>schenken</strong></td><td>a dărui</td><td>Wir schenken dem Chef einen Kuchen.</td></tr>
                    <tr><td><strong>schicken</strong></td><td>a trimite</td><td>Ich schicke dir eine Nachricht.</td></tr>
                    <tr><td><strong>empfehlen</strong></td><td>a recomanda</td><td>Was empfehlen Sie mir?</td></tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Întrebarea-test: pune verbul și întreabă <strong>WEM?</strong> (cui — persoana) și <strong>WAS?</strong> (ce — lucrul). Răspunsul la Wem stă PRIMUL: „Ich gebe (wem?) dem Gast (was?) das Bier." Persoana întâi, lucrul al doilea! 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 4: Recap + vocabular -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>📚 5. Recapitulare + vocabular Restaurant & Job</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-recap-vocab.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <h4 style="color:#065f46; margin-top:14px;">📋 Cele 4 cuvinte de întrebare dintr-o privire</h4>
            <table class="grammar-table">
                <thead>
                    <tr><th>Întrebare</th><th>Caz</th><th>Sens RO</th><th>Răspuns scurt</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Wer?</strong></td><td>Nominativ</td><td>cine</td><td>der Gast (subiect)</td></tr>
                    <tr><td><strong>Wen?</strong></td><td>Akkusativ</td><td>pe cine</td><td>den Gast</td></tr>
                    <tr><td><strong>Wem?</strong></td><td>Dativ</td><td>cui</td><td>dem Gast</td></tr>
                    <tr><td><strong>Was?</strong></td><td>Nom / Akk</td><td>ce</td><td>das Bier (lucru)</td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46; margin-top:14px;">📋 Vocabular Restaurant & Job (cu Sg + Pl)</h4>
            <table class="grammar-table">
                <thead>
                    <tr><th>Singular DE — Singular RO</th><th>Plural DE — Plural RO</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>der Gast</strong> — clientul / oaspetele</td><td><strong>die Gäste</strong> — clienții (Umlaut!)</td></tr>
                    <tr><td><strong>der Kellner / die Kellnerin</strong> — chelnerul / chelnerița</td><td><strong>die Kellner / die Kellnerinnen</strong></td></tr>
                    <tr><td><strong>die Bestellung</strong> — comanda</td><td><strong>die Bestellungen</strong> — comenzile</td></tr>
                    <tr><td><strong>das Trinkgeld</strong> — bacșișul</td><td>— <em>(de obicei fără plural)</em></td></tr>
                    <tr><td><strong>der Ferienjob</strong> — jobul de vacanță</td><td><strong>die Ferienjobs</strong> — joburile de vacanță</td></tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Reține harta: <strong>Wer</strong> = subiect · <strong>Wen</strong> = pe cine · <strong>Wem</strong> = cui · <strong>Was</strong> = ce. Și regula de aur la verbele cu 2 obiecte: persoana (Dativ) ÎNAINTEA lucrului (Akkusativ). Acum servește mesele lui Mihai fără greșeli! 🦋</em>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
