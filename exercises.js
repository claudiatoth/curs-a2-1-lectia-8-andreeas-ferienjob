// ============================================
// EXERCIȚII - Andreeas Ferienjob (A2.1 · Lecția 8)
// Claudia Toth · 5 exerciții cu rezolvări complete
// Wer/Wen/Wem/Was + Verben mit Dativ- und Akkusativobjekt
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        // ü→u, ö→o, ä→a (vocală simplă, NU ue/oe/ae): accept-urile sunt scrise fără umlaut
        // și astfel acceptăm și tastarea pe mobil fără umlaut. NU schimba în ue/oe/ae fără a rescrie accept-urile!
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
        .replace(/ae/g, 'a').replace(/oe/g, 'o').replace(/ue/g, 'u')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/[.!?;:]/g, '').replace(/\s+/g, ' ').trim();
}

function answerMatches(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(target => {
        const t = normalizeAnswer(target);
        return user === t || user.includes(t) || t.includes(user);
    });
}

function answerExact(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(a => normalizeAnswer(a) === user);
}

// ============================================
// EX 1: Wer / Wen / Wem / Was? (10 itemi)
// ============================================
const ex1Data = [
    { id: 'a', prompt: '____ bekommt die Cola?', hint: 'cine (subiect)', correct: 'Wer', accept: ['wer'] },
    { id: 'b', prompt: '____ darf ich das Bier geben?', hint: 'cui (Dativ)', correct: 'Wem', accept: ['wem'] },
    { id: 'c', prompt: '____ hast du bestellt?', hint: 'ce (lucru)', correct: 'Was', accept: ['was'] },
    { id: 'd', prompt: '____ lädst du zur Party ein?', hint: 'pe cine (Akkusativ)', correct: 'Wen', accept: ['wen'] },
    { id: 'e', prompt: '____ gehört die Schürze?', hint: 'cui aparține (gehören + Dativ)', correct: 'Wem', accept: ['wem'] },
    { id: 'f', prompt: 'Für ____ ist die Apfelschorle?', hint: 'pentru cine (für + Akkusativ)', correct: 'wen', accept: ['wen'] },
    { id: 'g', prompt: '____ steht auf dem Zettel?', hint: 'ce (lucru, subiect)', correct: 'Was', accept: ['was'] },
    { id: 'h', prompt: '____ hilft dir in der Küche?', hint: 'cine (subiect)', correct: 'Wer', accept: ['wer'] },
    { id: 'i', prompt: '____ zeigst du die Speisekarte?', hint: 'cui (zeigen + Dativ)', correct: 'Wem', accept: ['wem'] },
    { id: 'j', prompt: '____ hat die Mutter angerufen?', hint: 'pe cine (anrufen + Akkusativ)', correct: 'Wen', accept: ['wen'] }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Completează cu Wer / Wen / Wem / Was.</strong><br>
        <em>Wer</em> = cine (subiect) · <em>Wen</em> = pe cine (Akk) · <em>Wem</em> = cui (Dativ) · <em>Was</em> = ce (lucru).
    </div>`;
    ex1Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex1-${it.id}" placeholder="Wer / Wen / Wem / Was">
            </div>
            <div class="feedback" id="ex1-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex1Data.length };
}

function resetEx1() {
    buildEx1();
    const s = document.getElementById('score-1');
    if (s) s.textContent = '';
}

// ============================================
// EX 2: Wen oder Wem? (Akkusativ vs Dativ) (10 itemi)
// ============================================
const ex2Data = [
    { id: 'a', text: '____ siehst du dort?', a: 'Wen', b: 'Wem', correct: 'Wen', expl: 'sehen cere Akkusativ → Wen.' },
    { id: 'b', text: '____ gehört das Auto?', a: 'Wen', b: 'Wem', correct: 'Wem', expl: 'gehören cere Dativ → Wem.' },
    { id: 'c', text: '____ hilfst du?', a: 'Wen', b: 'Wem', correct: 'Wem', expl: 'helfen cere Dativ → Wem.' },
    { id: 'd', text: '____ besuchst du am Wochenende?', a: 'Wen', b: 'Wem', correct: 'Wen', expl: 'besuchen cere Akkusativ → Wen.' },
    { id: 'e', text: '____ gibst du das Trinkgeld?', a: 'Wen', b: 'Wem', correct: 'Wem', expl: 'geben + persoană (cui) → Dativ → Wem.' },
    { id: 'f', text: '____ triffst du heute?', a: 'Wen', b: 'Wem', correct: 'Wen', expl: 'treffen cere Akkusativ → Wen.' },
    { id: 'g', text: '____ dankst du?', a: 'Wen', b: 'Wem', correct: 'Wem', expl: 'danken cere Dativ → Wem.' },
    { id: 'h', text: '____ fragst du?', a: 'Wen', b: 'Wem', correct: 'Wen', expl: 'fragen cere Akkusativ (jemanden fragen) → Wen.' },
    { id: 'i', text: '____ bringst du die Suppe?', a: 'Wen', b: 'Wem', correct: 'Wem', expl: 'bringen + persoană (cui) → Dativ → Wem.' },
    { id: 'j', text: '____ rufst du an?', a: 'Wen', b: 'Wem', correct: 'Wen', expl: 'anrufen cere Akkusativ → Wen.' }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🅰️🅳 Wen sau Wem?</strong><br>
        <em>Capcană:</em> unele verbe cer Akkusativ (sehen, besuchen, treffen, fragen, anrufen → Wen), altele Dativ (gehören, helfen, danken, geben/bringen persoanei → Wem).
    </div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:8px;"><strong>${it.text}</strong></p>
                <label style="margin-right:14px;"><input type="radio" name="ex2-${it.id}" value="${it.a}"> ${it.a}</label>
                <label><input type="radio" name="ex2-${it.id}" value="${it.b}"> ${it.b}</label>
            </div>
            <div class="feedback" id="ex2-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex2-${it.id}"]:checked`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        if (sel && sel.value === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct} — ${it.expl}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.expl}`;
        }
    });
    return { correct, total: ex2Data.length };
}

function resetEx2() {
    buildEx2();
    const s = document.getElementById('score-2');
    if (s) s.textContent = '';
}

// ============================================
// EX 3: Articolul/pronumele la Dativ (10 itemi)
// ============================================
const ex3Data = [
    { id: 'a', prompt: 'Ich gebe ____ Gast das Bier.', hint: 'der Gast → Dativ masculin', correct: 'dem', accept: ['dem'] },
    { id: 'b', prompt: 'Ich helfe ____ Kollegin.', hint: 'die Kollegin → Dativ feminin', correct: 'der', accept: ['der'] },
    { id: 'c', prompt: 'Sie bringt ____ Kindern das Eis.', hint: 'die Kinder (plural) → Dativ', correct: 'den', accept: ['den'] },
    { id: 'd', prompt: 'Ich zeige ____ Kind die Karte.', hint: 'das Kind → Dativ neutru', correct: 'dem', accept: ['dem'] },
    { id: 'e', prompt: 'Wir gratulieren ____ Chef.', hint: 'der Chef → Dativ masculin', correct: 'dem', accept: ['dem'] },
    { id: 'f', prompt: 'Die Suppe schmeckt ____ Gästen.', hint: 'die Gäste (plural) → Dativ', correct: 'den', accept: ['den'] },
    { id: 'g', prompt: 'Ich danke ____ . (ție)', hint: 'du → Dativ', correct: 'dir', accept: ['dir'] },
    { id: 'h', prompt: 'Das Auto gehört ____ . (mie)', hint: 'ich → Dativ', correct: 'mir', accept: ['mir'] },
    { id: 'i', prompt: 'Ich schenke ____ Mutter Blumen.', hint: 'die Mutter → Dativ feminin', correct: 'der', accept: ['der'] },
    { id: 'j', prompt: 'Er empfiehlt ____ Gast die Pizza.', hint: 'der Gast → Dativ masculin', correct: 'dem', accept: ['dem'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🧩 Completează articolul/pronumele la Dativ.</strong><br>
        <em>der→dem · die→der · das→dem · plural die→den (+ -n la substantiv: den Kindern, den Gästen).</em>
    </div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex3-${it.id}" placeholder="forma de Dativ...">
            </div>
            <div class="feedback" id="ex3-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex3Data.length };
}

function resetEx3() {
    buildEx3();
    const s = document.getElementById('score-3');
    if (s) s.textContent = '';
}

// ============================================
// EX 4: Ordinea obiectelor (Dativ + Akkusativ) (8 itemi)
// ============================================
const ex4Data = [
    { id: 'a', prompt: 'Ich gebe ____ . (das Bier · dem Gast)', hint: 'persoana (Dativ) ÎNAINTEA lucrului (Akkusativ)', correct: 'dem Gast das Bier', accept: ['dem gast das bier'] },
    { id: 'b', prompt: 'Sie bringt ____ . (das Eis · den Kindern)', hint: 'persoana întâi', correct: 'den Kindern das Eis', accept: ['den kindern das eis'] },
    { id: 'c', prompt: 'Er zeigt ____ . (die Speisekarte · der Frau)', hint: 'persoana întâi', correct: 'der Frau die Speisekarte', accept: ['der frau die speisekarte'] },
    { id: 'd', prompt: 'Wir schenken ____ . (einen Kuchen · dem Chef)', hint: 'persoana întâi', correct: 'dem Chef einen Kuchen', accept: ['dem chef einen kuchen'] },
    { id: 'e', prompt: 'Ich schicke ____ . (eine Nachricht · dir)', hint: 'persoana (pronume Dativ) întâi', correct: 'dir eine Nachricht', accept: ['dir eine nachricht'] },
    { id: 'f', prompt: 'Der Kellner gibt ____ . (die Rechnung · dem Gast)', hint: 'persoana întâi', correct: 'dem Gast die Rechnung', accept: ['dem gast die rechnung'] },
    { id: 'g', prompt: 'Ich zeige ____ . (die Fotos · meiner Freundin)', hint: 'persoana întâi', correct: 'meiner Freundin die Fotos', accept: ['meiner freundin die fotos'] },
    { id: 'h', prompt: 'Andreea bringt ____ . (den Wein · dem Herrn)', hint: 'persoana întâi', correct: 'dem Herrn den Wein', accept: ['dem herrn den wein'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🔀 Pune cele două obiecte în ordinea corectă: Dativ (CUI) + Akkusativ (CE).</strong><br>
        <em>Exemplu:</em> Ich gebe (das Bier · dem Gast) → <strong>dem Gast das Bier</strong>.
    </div>`;
    ex4Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex4-${it.id}" placeholder="Dativ + Akkusativ...">
            </div>
            <div class="feedback" id="ex4-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex4Data.length };
}

function resetEx4() {
    buildEx4();
    const s = document.getElementById('score-4');
    if (s) s.textContent = '';
}

// ============================================
// EX 5: Traduce în germană (10 itemi)
// ============================================
const ex5Data = [
    { id: 'a', ro: 'Cui îi dai berea?', correct: 'Wem gibst du das Bier?', accept: ['wem gibst du das bier'] },
    { id: 'b', ro: 'Îi aduc clientului supa.', correct: 'Ich bringe dem Gast die Suppe.', accept: ['ich bringe dem gast die suppe'] },
    { id: 'c', ro: 'Pe cine inviți?', correct: 'Wen lädst du ein?', accept: ['wen lädst du ein', 'wen ladst du ein'] },
    { id: 'd', ro: 'Cui aparține mașina?', correct: 'Wem gehört das Auto?', accept: ['wem gehört das auto'] },
    { id: 'e', ro: 'O ajut pe colegă.', correct: 'Ich helfe der Kollegin.', accept: ['ich helfe der kollegin'] },
    { id: 'f', ro: 'Le aduc clienților băuturile.', correct: 'Ich bringe den Gästen die Getränke.', accept: ['ich bringe den gästen die getränke'] },
    { id: 'g', ro: 'Ce ai comandat?', correct: 'Was hast du bestellt?', accept: ['was hast du bestellt'] },
    { id: 'h', ro: 'Îi arăt copilului meniul.', correct: 'Ich zeige dem Kind die Speisekarte.', accept: ['ich zeige dem kind die speisekarte'] },
    { id: 'i', ro: 'Îți trimit un mesaj.', correct: 'Ich schicke dir eine Nachricht.', accept: ['ich schicke dir eine nachricht'] },
    { id: 'j', ro: 'Cine primește vinul alb?', correct: 'Wer bekommt den Weißwein?', accept: ['wer bekommt den weißwein', 'wer bekommt den weisswein'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🗣️ Traduce în germană. Atenție la Wer/Wen/Wem/Was și la ordinea Dativ + Akkusativ.</strong>
    </div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>🇷🇴 ${it.ro}</strong></p>
                <input type="text" id="ex5-${it.id}" placeholder="Scrie traducerea în germană...">
            </div>
            <div class="feedback" id="ex5-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        if (answerMatches(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex5Data.length };
}

function resetEx5() {
    buildEx5();
    const s = document.getElementById('score-5');
    if (s) s.textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
    buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5();
});
