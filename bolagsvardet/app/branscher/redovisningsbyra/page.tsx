import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import SEOContentBlock from '@/components/SEOContentBlock';

export const metadata: Metadata = {
  title: 'Värdering av redovisningsbyrå – multiplar och faktorer',
  description: 'Förstå hur redovisningsbyråer värderas, vad som är normala EBITDA-multiplar och hur kundstock, byråstruktur och partnerskap påverkar värdet.',
};

const faqs = [
  {
    question: 'Vilken multipel används för redovisningsbyråer?',
    answer: 'Redovisningsbyråer värderas typiskt till 3,0–6,0× EBITDA. En faktor som är specifik för branschen är att köpare också ofta tittar på en omsättningsmultipel (vanligtvis 0,5–1,2× omsättning), eftersom intäktsbasen för redovisning är mer förutsägbar och lättare att värdera direkt.',
  },
  {
    question: 'Hur värderas kundstocken i en redovisningsbyrå?',
    answer: 'Kundstocken är det viktigaste tillgångsvärdet. En välstrukturerad kundstock med månadsdebitering (abonnemang), tydliga avtal och låg churn är värd avsevärt mer än en portfölj av löpande uppdrag utan formella avtal. Köpare tittar specifikt på genomsnittlig kundstorlek, kundernas bransch och hur länge de har been kunder.',
  },
  {
    question: 'Påverkar digitaliseringsgrad och systemval värderingen?',
    answer: 'Ja, i hög grad. Byråer som arbetar med moderna plattformar som Fortnox, Visma Spcs, Bokio eller liknande molnbaserade system är mer attraktiva för köpare – framförallt branschaktörer som vill undvika migrationskostnad. En byrå som fortfarande arbetar med lokalt installerade system kräver en teknologiinvestering post-förvärv.',
  },
  {
    question: 'Vad händer om partnerna i en redovisningsbyrå lämnar vid förvärvet?',
    answer: 'Det är den enskilt största risken i redovisningsbyråförvärv. Kunder är ofta lojala mot den person som hanterar deras bokslut, inte mot byrån som varumärke. En välstrukturerad överlåtelse med tydliga övergångsplaner och earn-out-villkor för kvarvarande partners är vanligt. Köpare kräver ofta att nyckelpersoner binder sig i 1–3 år post-förvärv.',
  },
];

const valueDrivers = [
  { title: 'Månadsbaserade abonnemang', desc: 'En kundstock där majoriteten av kunderna betalar en fast månadsavgift för redovisnings- och lönetjänster ger förutsägbara kassaflöden – direkt jämförbara med SaaS-intäkter.', positive: true },
  { title: 'Certifierade medarbetare och auktorisation', desc: 'En byrå med auktoriserade redovisningskonsulter och revisorer är mer regulatoriskt robust och har en högre tröskel mot konkurrenter och substitut.', positive: true },
  { title: 'Moderna molnbaserade system', desc: 'Fortnox, Visma Spcs, ­E-conomic eller liknande moderna plattformar gör integrationen enklare och signalerar en framåtblickande byrå som investerat i sin verksamhet.', positive: true },
  { title: 'Diversifierad och lojal kundstock', desc: 'Kunder med lång historik (5+ år), spridda branschvis och utan en dominerande kund är en stabil intäktsbas. Hög genomsnittlig kundlivslängd är ett kvantitativt bevis på kundvärde.', positive: true },
  { title: 'Partner-/ägarberoende kundrelationer', desc: 'Om kunder väljer byrån baserat på personliga relationer med ägaren finns en reell risk att en del av kundstocken inte kvarstår efter ägarbytet – vilket direkt slår mot köpeskillingen.', positive: false },
  { title: 'Inga formella kundavtal', desc: 'Utan skriftliga avtal har köparen ingen juridisk trygghet för att intäktsbasen håller. Det gör det näst intill omöjligt att motivera en hög köpeskilling oavsett hur lojal kundstocken faktiskt är.', positive: false },
];

export default function RedovisningsbyraPage() {
  return (
    <main>
      <section style={{ background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 24px 64px' }}>
          <div style={{ marginBottom: '12px' }}>
            <Link href="/branscher" style={{ color: 'var(--color-accent)', fontSize: '14px', textDecoration: 'none' }}>← Branscher</Link>
          </div>
          <div style={{
            display: 'inline-block',
            background: 'var(--color-accent-subtle)',
            color: 'var(--color-accent)',
            fontSize: '13px',
            fontWeight: '600',
            padding: '4px 12px',
            borderRadius: '4px',
            marginBottom: '20px',
            letterSpacing: '0.04em',
          }}>BRANSCHGUIDE</div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: '700',
            color: 'var(--color-ink)',
            lineHeight: '1.15',
            marginBottom: '20px',
          }}>
            Värdering av redovisningsbyrå
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--color-slate)', lineHeight: '1.6', maxWidth: '680px', marginBottom: '32px' }}>
            Redovisningsbyråer värderas utifrån kundstockens kvalitet, intäktsstruktur och personalens stabilitet. Här är vad köpare faktiskt tittar på.
          </p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {[
              { label: 'EBITDA-multipel', value: '3,0–6,0×' },
              { label: 'Omsättningsmultipel', value: '0,5–1,2×' },
              { label: 'Viktigaste faktorn', value: 'Kundstockens stabilitet' },
            ].map((s) => (
              <div key={s.label} style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px 20px' }}>
                <div style={{ fontSize: '13px', color: 'var(--color-muted)', marginBottom: '4px' }}>{s.label}</div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--color-ink)' }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 24px' }}>
        <SEOContentBlock>
          <h2>Hur värderas en redovisningsbyrå?</h2>
          <p>
            Redovisningsbyråer är en unik bransch i M&A-sammanhang. Intäktsbasen är förutsägbar och ofta återkommande, kundlojaliteten är generellt hög och branschen genomgår en aktiv konsolideringsvåg där stora aktörer som Azets, Grant Thornton och mindre regionala grupper aktivt förvärvar. Det skapar god efterfrågan på välskötta byråer.
          </p>
          <p>
            Värderingen sker typiskt med <strong>EBITDA-multipeln 3,0–6,0×</strong>, men kompletteras ofta av en omsättningsmultipel eftersom den löpande intäktsbasen är det primära värdet. En byrå med 5 MSEK i omsättning och 20 % EBITDA-marginal värderas ofta till 0,7–1,0× omsättning, beroende på kundstockens kvalitet.
          </p>
          <p>
            Nyckeln till en hög multipel är att separera byråns värde från ägarens personliga kundrelationer – och att bevisa det med data.
          </p>

          <h2>Kundstocken – kärnan i värderingen</h2>
          <p>
            I en redovisningsbyrå är kundstocken den primära tillgången. En köpare kommer att genomföra en grundlig analys av:
          </p>
          <ul>
            <li><strong>Kundchurn.</strong> Hur stor andel av kunderna slutade använda byrån de senaste 3–5 åren? En churn under 5 % per år är utmärkt.</li>
            <li><strong>Genomsnittlig kundlivslängd.</strong> Kunder med 5–10+ åriga relationer är ett starkt bevis på byråns värde och svårighetsgraden att byta.</li>
            <li><strong>Intäkt per kund.</strong> En byrå med många kunder på höga abonnemangsbelopp (10 000+ kr/mån) är mer attraktiv än en med många mikrokunder.</li>
            <li><strong>Avtalsstruktur.</strong> Skriftliga avtal med tydliga leveransåtaganden, priser och uppsägningstider är grundläggande. Utan avtal finns det ingen intäktsbas att värdera.</li>
          </ul>

          <h2>Partnerstruktur och personalberoende</h2>
          <p>
            En av de mest komplexa frågorna i redovisningsbyråförvärv är hur kundrelationerna förvaltas. Om kunderna primärt väljer byrån på grund av en specifik konsult eller ägare är risken vid ägarbyte reell.
          </p>
          <p>
            Köpare hanterar detta på tre sätt: en lägre initial köpeskilling, krav på earn-out kopplat till kundbehållning, eller krav på att ägaren/partnern kvarstår i bolaget i 2–3 år efter förvärvet. Den bästa förberedelsen är att aktivt flytta kundrelationer till fler medarbetare och dokumentera att de kan fungera utan ägarens personliga närvaro.
          </p>

          <h2>Konsolideringsvågen skapar möjligheter</h2>
          <p>
            Redovisningsbranschen genomgår en aktiv konsolideringsvåg. Större aktörer förvärvar för att nå geografisk täckning, kompetensbredd och skalfördelar. Det innebär att välskötta redovisningsbyråer i dag har flera potentiella köpare, vilket driver konkurrens och pressar upp värderingen.
          </p>
          <p>
            En strukturerad försäljningsprocess med flera köpare i dialog är därför extra värdefullt för en redovisningsbyrå. Det gäller att maximera antalet kvalificerade intressenter – inte att sälja till den som frågar först.
          </p>
        </SEOContentBlock>
      </section>

      <section style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: '700', color: 'var(--color-ink)', marginBottom: '8px' }}>Värdedrivare och riskfaktorer</h2>
          <p style={{ color: 'var(--color-slate)', marginBottom: '40px' }}>Vad som avgör multipeln för en redovisningsbyrå.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
            {valueDrivers.map((d) => (
              <div key={d.title} style={{
                background: 'white',
                border: `1px solid ${d.positive ? 'var(--color-green-bg)' : 'var(--color-amber-bg)'}`,
                borderLeft: `4px solid ${d.positive ? 'var(--color-green)' : 'var(--color-amber)'}`,
                borderRadius: '8px',
                padding: '20px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <span style={{ fontSize: '18px' }}>{d.positive ? '↑' : '↓'}</span>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-ink)', margin: 0 }}>{d.title}</h3>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--color-slate)', lineHeight: '1.6', margin: 0 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '64px 24px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: '700', color: 'var(--color-ink)', marginBottom: '32px' }}>
          Vanliga frågor
        </h2>
        <FAQ items={faqs} />
      </section>

      <CTASection
        variant="dark"
        headline="Vad är din redovisningsbyrå värd?"
        subtext="Gör en indikativ värdering och förstå var din byrå hamnar i jämförelse med marknaden."
        primaryCTA={{ label: 'Värdera min byrå', href: '/vardera-bolag' }}
        secondaryCTA={{ label: 'Kontakta oss', href: '/kontakt' }}
      />
    </main>
  );
}
