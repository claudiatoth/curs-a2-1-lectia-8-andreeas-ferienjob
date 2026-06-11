// ============================================
// FLASHCARDS - Andreeas Ferienjob (A2.1 · Lecția 8)
// Claudia Toth · 32 carduri: Wer/Wen/Wem/Was + Dativ + verbe + propoziții
// REGULĂ: NICIODATĂ ghilimele interne — CAPS pentru emfază; EXACT 6 ghilimele ASCII per linie
// ============================================

const flashcardsData = [
    // === Cele 4 cuvinte de întrebare (4) ===
    { de: "Wer? (Nominativ)", ro: "cine — subiectul (Wer bekommt die Cola?)", audio: "audio/letters/wort-wer.wav" },
    { de: "Wen? (Akkusativ)", ro: "pe cine — obiect direct, persoană (Wen lädst du ein?)", audio: "audio/letters/wort-wen.wav" },
    { de: "Wem? (Dativ)", ro: "cui — obiect indirect (Wem gibst du das Bier?)", audio: "audio/letters/wort-wem.wav" },
    { de: "Was? (Nom / Akk)", ro: "ce — pentru lucruri (Was hast du bestellt?)", audio: "audio/letters/wort-was.wav" },

    // === Articolele la Dativ (3) ===
    { de: "der → dem", ro: "masculin la Dativ: dem Gast", audio: "audio/letters/dativ-dem.wav" },
    { de: "die → der", ro: "feminin la Dativ: der Frau", audio: "audio/letters/dativ-der.wav" },
    { de: "die (Pl) → den (+ -n)", ro: "plural la Dativ: den Gästen, den Kindern", audio: "audio/letters/dativ-den.wav" },

    // === Verbe care cer DOAR Dativ (6) ===
    { de: "gehören (+ Dativ)", ro: "a aparține: Das Auto gehört mir.", audio: "audio/letters/verb-gehoeren.wav" },
    { de: "helfen (+ Dativ)", ro: "a ajuta: Ich helfe dem Koch.", audio: "audio/letters/verb-helfen.wav" },
    { de: "danken (+ Dativ)", ro: "a mulțumi: Ich danke dir.", audio: "audio/letters/verb-danken.wav" },
    { de: "gratulieren (+ Dativ)", ro: "a felicita: Wir gratulieren dem Chef.", audio: "audio/letters/verb-gratulieren.wav" },
    { de: "gefallen (+ Dativ)", ro: "a plăcea: Das Restaurant gefällt mir.", audio: "audio/letters/verb-gefallen.wav" },
    { de: "schmecken (+ Dativ)", ro: "a plăcea la gust: Die Suppe schmeckt den Gästen.", audio: "audio/letters/verb-schmecken.wav" },

    // === Verbe cu DOUĂ obiecte (Dativ + Akkusativ) (6) ===
    { de: "geben (Dat + Akk)", ro: "a da: Ich gebe dem Gast das Bier.", audio: "audio/letters/verb-geben.wav" },
    { de: "bringen (Dat + Akk)", ro: "a aduce: Sie bringt den Kindern das Eis.", audio: "audio/letters/verb-bringen.wav" },
    { de: "zeigen (Dat + Akk)", ro: "a arăta: Er zeigt der Frau die Karte.", audio: "audio/letters/verb-zeigen.wav" },
    { de: "schenken (Dat + Akk)", ro: "a dărui: Wir schenken dem Chef einen Kuchen.", audio: "audio/letters/verb-schenken.wav" },
    { de: "schicken (Dat + Akk)", ro: "a trimite: Ich schicke dir eine Nachricht.", audio: "audio/letters/verb-schicken.wav" },
    { de: "empfehlen (Dat + Akk)", ro: "a recomanda: Was empfehlen Sie mir?", audio: "audio/letters/verb-empfehlen.wav" },

    // === Vocabular Restaurant & Job (4) ===
    { de: "der Gast / die Gäste", ro: "clientul / clienții (Umlaut la plural)", audio: "audio/letters/der-gast.wav" },
    { de: "der Kellner / die Kellnerin", ro: "chelnerul / chelnerița", audio: "audio/letters/der-kellner.wav" },
    { de: "die Bestellung", ro: "comanda", audio: "audio/letters/die-bestellung.wav" },
    { de: "das Trinkgeld", ro: "bacșișul", audio: "audio/letters/das-trinkgeld.wav" },

    // === Propoziții (9) ===
    { de: "Wem darf ich das Bier geben?", ro: "Cui îi pot da berea?", audio: "audio/letters/satz-bier-geben.wav" },
    { de: "Der Kellner bringt dem Gast die Suppe.", ro: "Chelnerul îi aduce clientului supa.", audio: "audio/letters/satz-suppe-bringen.wav" },
    { de: "Wem gehört die Schürze?", ro: "Cui îi aparține șorțul?", audio: "audio/letters/satz-schuerze.wav" },
    { de: "Ich helfe der Kollegin.", ro: "O ajut pe colegă.", audio: "audio/letters/satz-helfen.wav" },
    { de: "Für wen ist die Apfelschorle?", ro: "Pentru cine e șprițul de mere?", audio: "audio/letters/satz-apfelschorle.wav" },
    { de: "Ich zeige dem Kind die Speisekarte.", ro: "Îi arăt copilului meniul.", audio: "audio/letters/satz-kind-karte.wav" },
    { de: "Wer bekommt den Weißwein?", ro: "Cine primește vinul alb?", audio: "audio/letters/satz-weisswein.wav" },
    { de: "Die Suppe schmeckt den Gästen.", ro: "Supa le place clienților.", audio: "audio/letters/satz-schmecken.wav" },
    { de: "Ich schicke dir eine Nachricht.", ro: "Îți trimit un mesaj.", audio: "audio/letters/satz-nachricht.wav" }
];

let currentCard = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} flashcards cu pronunție.</strong><br>
            Apasă pe card pentru a vedea traducerea · butonul 🔊 pentru pronunție · navigare cu săgețile.
        </div>
        <div class="flashcard-counter">
            Card <span id="card-num">1</span> / ${flashcardsData.length}
        </div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playCardAudio(event)" title="Ascultă">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="card-de"></div>
                <div class="ro" id="card-ro"></div>
            </div>
            <div class="flashcard-hint" id="card-hint">Click pentru traducere</div>
        </div>
        <div class="flashcard-nav">
            <button class="btn btn-prev" onclick="prevCard()">← Anterior</button>
            <button class="btn btn-next" onclick="nextCard()">Următor →</button>
        </div>
    `;
    updateCard();
}

function updateCard() {
    const card = flashcardsData[currentCard];
    const fc = document.getElementById('flashcard');
    document.getElementById('card-de').textContent = card.de;
    document.getElementById('card-ro').textContent = card.ro;
    if (fc) fc.classList.toggle('flipped', isFlipped);
    document.getElementById('card-hint').textContent = isFlipped ? 'Click pentru DE' : 'Click pentru RO';
    document.getElementById('card-num').textContent = currentCard + 1;
}

function flipCard() {
    isFlipped = !isFlipped;
    updateCard();
}

function nextCard() {
    if (currentCard < flashcardsData.length - 1) {
        currentCard++;
        isFlipped = false;
        updateCard();
    }
}

function prevCard() {
    if (currentCard > 0) {
        currentCard--;
        isFlipped = false;
        updateCard();
    }
}

function playCardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCard];
    if (card.audio) {
        const audio = new Audio(card.audio);
        audio.play().catch(err => console.log('Audio nu poate fi redat:', err));
    }
}

document.addEventListener('DOMContentLoaded', buildFlashcards);
