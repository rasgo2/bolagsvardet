import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import SEOContentBlock from '@/components/SEOContentBlock';

export const metadata: Metadata = {
  title: 'Värdering av konsultbolag – vad är ditt konsultföretag värt?',
  description: 'Lär dig hur konsultbolag värderas, vilka multiplar som är normala och vad som höjer eller sänker värdet vid en försäljning av ett konsultföretag.',
};

const faqs = [
  {
    question: 'Vilken EBITDA-multipel används för konsultbolag?',
    answer: 'Konsultbolag värderas typiskt till 2,5–5,0× EBITDA. Bolag med hög andel återkommande intäkter, låg ägarberoende och stark tillväxt kan nå det övre spannet eller till och med överskrida det vid konkurrensutsatta processer.',
  },
  {
    question: 'Hur påverkar ägarberoende värdet på ett konsultbolag?',
    answer: 'Ägarberoende är den enskilt viktigaste risksignalen för en köpare av ett konsultbolag. Om nyckelpersoner – framförallt grundaren – är direkt ansvariga för kundrelationer eller specialistkompetens, kommer köpare att prisa in den risken med en lägre multipel och ofta kräva earn-out-strukturer.',
  },
  {
    question: 'Räknas anställda med spetskompetens som en tillgång vid värdering?',
    answer: 'Ja, men det är en tveeggad fråga. En välutbildad och stabil personalstyrka höjer värdet. Men om ett fåtal nyckelpersoner är avgörande för lönsamheten utan dokumenterade processer eller successionsplaner, är det en risk snarare än en tillgång i köparens ögon.',
  },
  {
    question: 'Kan ett konsultbolag med låg marginal vara attraktivt för köpare?',
    answer: 'Absolut. En köpare kan se marginalförbättringspotential som ett argument. Men en låg EBITDA-marginal (under 10 %) i kombination med hög ägarberoende och koncentrerade kundrelationer gör det svårt att motivera en hög absolut köpeskilling, oavsett omsättning.',
  },
];

const valueDrivers = [
  {
    title: 'Återkommande intäkter',
    description: 'Ramavtal, retainer-strukturer och abonnemang ger förutsägbara kassaflöden som köpare värderar högt. Redan 40 % återkommande intäkter ger en tydlig multipelpremie.',
    positive: true,
  },
  {
    title: 'Låg kundkoncentration',
    description: 'Om din 10 största kund inte överstiger 10–15 % av omsättningen är det ett starkt argument. En enda kund på 30–40 % skapar en koncentrationsrisk som köparen pris-sätter negativt.',
    positive: true,
  },
  {
    title: 'Dokumenterade processer',
    description: 'Konsultbolag som har strukturerat sin leveransmodell i metodiker, mallar och processdokumentation är enklare att integrera, skala och överta – och ser mer professionella ut i due diligence.',
    positive: true,
  },
  {
    title: 'Stark tillväxttakt',
    description: 'Organisk tillväxt på 15–20 %+ per år signalerar marknadsdragkraft och säljarförmåga. Det ökar köparens vilja att betala för framtida potential snarare än enbart historisk vinst.',
    positive: true,
  },
  {
    title: 'Hög ägarberoende',
    description: 'Om ägaren driver majoriteten av kundkontakter, hanterar nyckelrelationer eller innehar spetskompetens som inte är överförbar, är det det enskilt mest prissänkande elementet vid konsultbolagsvärdering.',
    positive: false,
  },
  {
    title: 'Personalberoende utan dokumentation',
    description: 'En eller två nyckelpersoner med unik kompetens och utan inarbetade rutiner eller back-up skapar operational risk. Köpare hanterar detta med lägre multiplar och villkorade betalningar.',
    positive: false,
  },
];

export default function KonsultbolagPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 24px 64px' }}>
          <div style={{ marginBottom: '12px' }}>
            <Link href="/branscher" style={{ color: 'var(--color-accent)', fontSize: '14px', textDecoration: 'none' }}>
              ← Branscher
            </Link>
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
          }}>
            BRANSCHGUIDE
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: '700',
            color: 'var(--color-ink)',
            lineHeight: '1.15',
            marginBottom: '20px',
          }}>
            Värdering av konsultbolag
          </h1>
          <p style={{
            fontSize: '20px',
            color: 'var(--color-slate)',
            lineHeight: '1.6',
            maxWidth: '680px',
            marginBottom: '32px',
          }}>
            Hur värderas ett konsultföretag, vad är normala EBITDA-multiplar och vilka faktorer avgör om din värdering hamnar i det övre eller undre spannet?
          </p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {[
              { label: 'Typisk multipel', value: '2,5–5,0× EBITDA' },
              { label: 'Viktigt värdedriver', value: 'Återkommande intäkter' },
              { label: 'Största risken', value: 'Ägarberoende' },
            ].map((stat) => (
              <div key={stat.label} style={{
                background: 'white',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                padding: '16px 20px',
              }}>
                <div style={{ fontSize: '13px', color: 'var(--color-muted)', marginBottom: '4px' }}>{stat.label}</div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--color-ink)' }}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 24px' }}>
        <SEOContentBlock>
          <h2>Hur värderas konsultbolag?</h2>
          <p>
            Konsultbolag – oavsett om det handlar om management-, IT-, teknik- eller rekryteringskonsulter – värderas primärt utifrån rörelseresultat (EBITDA) och en branschspecifik multipel. Multipeln reflekterar hur köparen bedömer bolagets kvalitet, stabilitet och framtidspotential.
          </p>
          <p>
            Till skillnad från produktbolag och SaaS-bolag saknar konsultbolag ofta ett starkt inbyggt intellektuellt kapital i form av patent eller mjukvara. Värdet sitter istället i relationerna, medarbetarna och processerna. Det gör att köpare är mer känsliga för ägandetransition och nyckelpersonsberoende.
          </p>
          <p>
            En normal värdering för ett välskött konsultbolag hamnar på <strong>3–4× EBITDA</strong>. Bolag med starka återkommande intäkter, låg ägarberoende och bevisad tillväxt kan nå 4,5–5,5×. Bolag med hög koncentration, svaga processer eller sjunkande marginaler tenderar att hamna under 3×.
          </p>

          <h2>Vad driver upp värdet på ett konsultbolag?</h2>
          <p>
            De faktorer som tydligast höjer värderingen är de som minskar köparens upplevda risk och ökar deras förtroende för att bolaget fortsätter prestera efter ägarbytet:
          </p>
          <ul>
            <li><strong>Återkommande intäkter och ramavtal.</strong> Ramavtal med offentlig sektor, retainer-uppdrag eller abonnemangsbaserade tjänster skapar förutsägbarhet som köpare premierar kraftigt.</li>
            <li><strong>Spridd kundportfölj.</strong> Ingen kund bör överstiga 15–20 % av omsättningen. Är du balanserad över 20+ kunder ser köpare det som en frisk affärsmodell.</li>
            <li><strong>Stark ledningsgrupp och tydlig organisation.</strong> Om bolaget kan drivas utan grundarens dagliga närvaro är det värt avsevärt mer. Dokumenterade roller och ansvarsområden är ett starkt signal.</li>
            <li><strong>Bevisad tillväxt.</strong> Organisk tillväxt på 10–20 %+ under minst tre år ger stöd för att betala för framtida earnings, inte bara historiska.</li>
          </ul>

          <h2>Vad sänker värdet?</h2>
          <p>
            De vanligaste prissänkarna i konsultbolagsvärderingar är:
          </p>
          <ul>
            <li><strong>Grundarberoende.</strong> Om ägaren är den som håller i alla kundkontakter och är ansiktet utåt är risken vid ägarbyte enorm. Köparen vet att delar av relationskapitalet kan försvinna.</li>
            <li><strong>Hög kundkoncentration.</strong> En eller två kunder som driver 40–60 % av omsättningen är en deal-breaker för många köpare – eller leder till kraftigt sänkt pris plus earn-out.</li>
            <li><strong>Låg marginal.</strong> En EBITDA-marginal under 10 % ger lite utrymme för integrationsarbete, felmarginaler och löneökningar efter förvärvet.</li>
            <li><strong>Oregelbundna intäkter.</strong> Projektbaserade intäkter utan ramavtal skapar osäkerhet kring framtida kassaflöde.</li>
          </ul>

          <h2>Earn-out och tilläggsköpeskilling</h2>
          <p>
            För konsultbolag är earn-out-strukturer vanligare än i de flesta andra branscher. En köpare som ser hög ägarberoende eller kundkoncentration som en risk kan erbjuda en lägre initial köpeskilling med tilläggsbelopp kopplade till att bolaget presterar enligt plan under 1–3 år efter förvärvet.
          </p>
          <p>
            Det är inte nödvändigtvis dåligt för säljaren – ett välstrukturerat earn-out-avtal kan ge totalt sett en högre ersättning än ett lägre fast pris. Men det kräver noggrann juridisk rådgivning och tydligt definierade mätetal.
          </p>
        </SEOContentBlock>
      </section>

      {/* Value drivers grid */}
      <section style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 24px' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '28px',
            fontWeight: '700',
            color: 'var(--color-ink)',
            marginBottom: '8px',
          }}>
            Värdedrivare och riskfaktorer
          </h2>
          <p style={{ color: 'var(--color-slate)', marginBottom: '40px' }}>
            Dessa faktorer har störst påverkan på multipeln i ett konsultbolag.
          </p>
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
                <p style={{ fontSize: '14px', color: 'var(--color-slate)', lineHeight: '1.6', margin: 0 }}>{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '64px 24px' }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '28px',
          fontWeight: '700',
          color: 'var(--color-ink)',
          marginBottom: '32px',
        }}>
          Vanliga frågor om konsultbolagsvärdering
        </h2>
        <FAQ items={faqs} />
      </section>

      {/* Related */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 64px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--color-ink)', marginBottom: '20px' }}>
          Relaterade guider
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
          {[
            { href: '/guider/ebitda-multipel', title: 'EBITDA-multipeln förklarad', tag: 'Värderingsmetod' },
            { href: '/guider/earn-out', title: 'Earn-out – risker och möjligheter', tag: 'Transaktionsstruktur' },
            { href: '/guider/due-diligence', title: 'Due diligence – vad granskas?', tag: 'Försäljningsprocess' },
          ].map((g) => (
            <Link key={g.href} href={g.href} style={{
              display: 'block',
              padding: '20px',
              background: 'white',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'border-color 0.15s',
            }}>
              <div style={{ fontSize: '12px', color: 'var(--color-accent)', fontWeight: '600', marginBottom: '8px', letterSpacing: '0.04em' }}>{g.tag}</div>
              <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--color-ink)', lineHeight: '1.4' }}>{g.title}</div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection
        variant="dark"
        headline="Vad är ditt konsultbolag värt?"
        subtext="Gör en indikativ värdering på 3 minuter och se vilket värdeintervall ditt bolag hamnar i."
        primaryCTA={{ label: 'Värdera mitt bolag', href: '/vardera-bolag' }}
        secondaryCTA={{ label: 'Kontakta oss', href: '/kontakt' }}
      />
    </main>
  );
}
