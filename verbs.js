// ============================================
// VERB-KONJUGATION - Andreeas Ferienjob (A2.1 · Lecția 8)
// 6 verbe cu Dativ: geben · bringen · zeigen · schenken (Dat+Akk) + helfen · gehören (doar Dativ)
// ============================================

const verbsData = [
    {
        inf: 'geben', ro: 'a da (Dat + Akk)', typ: 'tare (neregulat)', aux: 'haben', part: 'gegeben',
        praes: [
            ['ich','gebe','dau'],['du','gibst','dai'],['er/sie/es','gibt','dă'],
            ['wir','geben','dăm'],['ihr','gebt','dați'],['sie/Sie','geben','dau / dați']
        ],
        praet: [
            ['ich','gab','dădeam'],['du','gabst','dădeai'],['er/sie/es','gab','dădea'],
            ['wir','gaben','dădeam'],['ihr','gabt','dădeați'],['sie/Sie','gaben','dădeau']
        ],
        perf: [
            ['ich','habe gegeben','am dat'],['du','hast gegeben','ai dat'],['er/sie/es','hat gegeben','a dat'],
            ['wir','haben gegeben','am dat'],['ihr','habt gegeben','ați dat'],['sie/Sie','haben gegeben','au dat']
        ],
        note: '🚨 TARE (e→i: du gibst, er gibt). Dat + Akk: Ich gebe <strong>dem Gast</strong> (cui) <strong>das Bier</strong> (ce). Persoana (Dativ) ÎNAINTEA lucrului!'
    },
    {
        inf: 'bringen', ro: 'a aduce (Dat + Akk)', typ: 'mixt (neregulat)', aux: 'haben', part: 'gebracht',
        praes: [
            ['ich','bringe','aduc'],['du','bringst','aduci'],['er/sie/es','bringt','aduce'],
            ['wir','bringen','aducem'],['ihr','bringt','aduceți'],['sie/Sie','bringen','aduc / aduceți']
        ],
        praet: [
            ['ich','brachte','aduceam'],['du','brachtest','aduceai'],['er/sie/es','brachte','aducea'],
            ['wir','brachten','aduceam'],['ihr','brachtet','aduceați'],['sie/Sie','brachten','aduceau']
        ],
        perf: [
            ['ich','habe gebracht','am adus'],['du','hast gebracht','ai adus'],['er/sie/es','hat gebracht','a adus'],
            ['wir','haben gebracht','am adus'],['ihr','habt gebracht','ați adus'],['sie/Sie','haben gebracht','au adus']
        ],
        note: '🚨 Verb MIXT: schimbă radicalul (brachte) dar are terminație slabă. Dat + Akk: Sie bringt <strong>den Kindern</strong> das Eis.'
    },
    {
        inf: 'zeigen', ro: 'a arăta (Dat + Akk)', typ: 'regulat', aux: 'haben', part: 'gezeigt',
        praes: [
            ['ich','zeige','arăt'],['du','zeigst','arăți'],['er/sie/es','zeigt','arată'],
            ['wir','zeigen','arătăm'],['ihr','zeigt','arătați'],['sie/Sie','zeigen','arată / arătați']
        ],
        praet: [
            ['ich','zeigte','arătam'],['du','zeigtest','arătai'],['er/sie/es','zeigte','arăta'],
            ['wir','zeigten','arătam'],['ihr','zeigtet','arătați'],['sie/Sie','zeigten','arătau']
        ],
        perf: [
            ['ich','habe gezeigt','am arătat'],['du','hast gezeigt','ai arătat'],['er/sie/es','hat gezeigt','a arătat'],
            ['wir','haben gezeigt','am arătat'],['ihr','habt gezeigt','ați arătat'],['sie/Sie','haben gezeigt','au arătat']
        ],
        note: '🧩 Regulat. Dat + Akk: Er zeigt <strong>der Frau</strong> die Speisekarte. Întreabă-te: WEM? (cui) + WAS? (ce).'
    },
    {
        inf: 'schenken', ro: 'a dărui (Dat + Akk)', typ: 'regulat', aux: 'haben', part: 'geschenkt',
        praes: [
            ['ich','schenke','dăruiesc'],['du','schenkst','dăruiești'],['er/sie/es','schenkt','dăruiește'],
            ['wir','schenken','dăruim'],['ihr','schenkt','dăruiți'],['sie/Sie','schenken','dăruiesc / dăruiți']
        ],
        praet: [
            ['ich','schenkte','dăruiam'],['du','schenktest','dăruiai'],['er/sie/es','schenkte','dăruia'],
            ['wir','schenkten','dăruiam'],['ihr','schenktet','dăruiați'],['sie/Sie','schenkten','dăruiau']
        ],
        perf: [
            ['ich','habe geschenkt','am dăruit'],['du','hast geschenkt','ai dăruit'],['er/sie/es','hat geschenkt','a dăruit'],
            ['wir','haben geschenkt','am dăruit'],['ihr','habt geschenkt','ați dăruit'],['sie/Sie','haben geschenkt','au dăruit']
        ],
        note: '🧩 Regulat. Dat + Akk: Wir schenken <strong>dem Chef</strong> einen Kuchen. Tipic la cadouri (Geschenk).'
    },
    {
        inf: 'helfen', ro: 'a ajuta (DOAR Dativ!)', typ: 'tare (neregulat)', aux: 'haben', part: 'geholfen',
        praes: [
            ['ich','helfe','ajut'],['du','hilfst','ajuți'],['er/sie/es','hilft','ajută'],
            ['wir','helfen','ajutăm'],['ihr','helft','ajutați'],['sie/Sie','helfen','ajută / ajutați']
        ],
        praet: [
            ['ich','half','ajutam'],['du','halfst','ajutai'],['er/sie/es','half','ajuta'],
            ['wir','halfen','ajutam'],['ihr','halft','ajutați'],['sie/Sie','halfen','ajutau']
        ],
        perf: [
            ['ich','habe geholfen','am ajutat'],['du','hast geholfen','ai ajutat'],['er/sie/es','hat geholfen','a ajutat'],
            ['wir','haben geholfen','am ajutat'],['ihr','habt geholfen','ați ajutat'],['sie/Sie','haben geholfen','au ajutat']
        ],
        note: '🚨 DOAR Dativ + TARE (e→i: du hilfst, er hilft). Ich helfe <strong>dem Koch</strong> (NU „den Koch"!). În română pare acuzativ, dar germana cere Dativ.'
    },
    {
        inf: 'gehören', ro: 'a aparține (DOAR Dativ!)', typ: 'regulat', aux: 'haben', part: 'gehört',
        praes: [
            ['ich','gehöre','aparțin'],['du','gehörst','aparții'],['er/sie/es','gehört','aparține'],
            ['wir','gehören','aparținem'],['ihr','gehört','aparțineți'],['sie/Sie','gehören','aparțin / aparțineți']
        ],
        praet: [
            ['ich','gehörte','aparțineam'],['du','gehörtest','aparțineai'],['er/sie/es','gehörte','aparținea'],
            ['wir','gehörten','aparțineam'],['ihr','gehörtet','aparțineați'],['sie/Sie','gehörten','aparțineau']
        ],
        perf: [
            ['ich','habe gehört','am aparținut'],['du','hast gehört','ai aparținut'],['er/sie/es','hat gehört','a aparținut'],
            ['wir','haben gehört','am aparținut'],['ihr','habt gehört','ați aparținut'],['sie/Sie','haben gehört','au aparținut']
        ],
        note: '🚨 DOAR Dativ. Folosit mai ales la persoana a 3-a: Das Auto gehört <strong>mir</strong>. Întrebare: <strong>Wem</strong> gehört...? (cui aparține...?).'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    const exampleRow = v.perf[2] || v.perf[0];
    const exSubj = exampleRow[0] || 'er';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + exSubj + ' <strong>' + exampleRow[1] + '</strong> · <em style="color:#6b7280;">' + exampleRow[2] + '</em></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe cu Dativ</strong> — Präsens + Präteritum (complet) · Perfekt (pe scurt).<br>' +
        'Click pe un verb ca să-i vezi conjugarea. 4 au Dativ + Akkusativ (geben/bringen/zeigen/schenken), 2 cer DOAR Dativ (helfen/gehören).' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Verbele care „dau ceva cuiva" (geben, bringen, zeigen, schenken) au DOUĂ obiecte: persoana (Dativ) ÎNAINTEA lucrului (Akkusativ). Iar helfen, danken, gratulieren, gehören cer DOAR Dativ — chiar dacă în română par cu acuzativ! 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="andreea-note" style="margin-top:6px;"><img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar"><div class="andreea-note-content"><div class="speaker">Notă Dativ:</div><div class="text">' + v.note + '</div></div></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

function toggleVerb(i) {
    const content = document.getElementById('verb-' + i);
    if (!content) return;
    content.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
