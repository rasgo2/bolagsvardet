import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import SEOContentBlock from '@/components/SEOContentBlock';

export const metadata: Metadata = {
  title: 'Värdering av städföretag – vad är ditt städbolag värt?',
  description: 'Hur värderas städföretag? Lär dig om EBITDA-multiplar, kontrakt, personalstruktur och vad som höjer eller sänker värdet på ett städbolag.',
};

const faqs = [
  {
    question: 'Vilken multipel används för städföretag?',
    answer: 'Städföretag värderas typiskt till 2,0–4,0× EBITDA. Bolag med starka avtal, låg personalomsättning och välstrukturerade processer kan nå det övre spannet. Bolag med hög personalomsättning, oregelbundna kontrakt och tungt ägarberoende hamnar i det lägre.',
  },
  {
    question: 'Hur viktiga är långa kundkontrakt för värderingen?',
    answer: 'Mycket viktiga. En köpare av ett städföretag vill se en kontrakterad intäktsbas. Kontrakt med 12–24 månaders löptid med automatisk förlängning är det starkaste bevis du kan ge på att intäkterna håller i sig efter ett ägarbyte. Muntliga eller handslags-avtal, oavsett hur gamla relationerna är, skapar osäkerhet.',
  },
  {
    question: 'Hur hanteras personalrisk i en städföretagsvärdering?',
    answer: 'Personalen är affären i ett städföretag. En köpare bedömer personalstrukturens stabilitet, kompetensnivå och om nyckelpersoner är beroende av ägarens närvaro. Hög personalomsättning ökar rekryteringskostnader och påverkar servicekvalitet – det diskonteras direkt i värderingen.',
  },
  {
    question: 'Spelar maskinpark och utrustning roll?',
    answer: 'Ja, men indirekt. Modern, välunderhållen utrustning sänker den direkta investeringsbehovet för en köpare och signalerar ett professionellt bolag. Gammal eller nedsliten maskinpark kan kräva kapitalinvestering post-förvärv, vilket köparen räknar av mot köpeskillingen.',
  },
];

const valueDrivers = [
  { title: 'Långa avtal med offentliga kunder', desc: 'Kommuner, regioner och statliga myndigheter betalar stabilt och försenar sällan. Ramavtal med offentlig sektor är det starkaste enskilda värdebeviset för ett städföretag.', positive: true },
  { title: 'Låg personalomsättning', desc: 'Stabil personal med lång erfarenhet av kunderna ger kontinuitet i servicekvalitet. Det minskar rekryteringskostnader och signalerar en välskött arbetsgivare.', positive: true },
  { title: 'Tydliga processer och rutiner', desc: 'Checklistor, kvalitetssäkringssystem och dokumenterade rutiner gör det enklare att överta driften och onboarda ny personal. Det är en direkt signifikant för köparens risk.', positive: true },
  { title: 'Diversifierad kundportfölj', desc: 'Många mindre kunder är mer stabilt än ett fåtal stora. Om din enskilt största kund är mer än 20 % av omsättningen är det en riskfaktor.', positive: true },
  { title: 'Hög personalomsättning', desc: 'En omsättning på 30–40 % av personalen per år skapar rekryteringskostnader, kvalitetsproblem och signalerar potentiella arbetsgivaraproblem. Det diskonteras kraftigt av köpare.', positive: false },
  { title: 'Inga formella kundavtal', desc: 'Muntliga överenskommelser med långvariga kunder verkar trygga, men en köpare kan inte värdera relationer han eller hon inte har. Utan kontrakt finns det ingen intäktsbas att värdera.', positive: false },
];

export default function StadforetagPage() {
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
            Värdering av städföretag
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--color-slate)', lineHeight: '1.6', maxWidth: '680px', marginBottom: '32px' }}>
            Städföretag värderas primärt utifrån kontraktsbas, personalstruktur och driftseffektivitet. Här går vi igenom vad som driver upp eller sänker värdet på ditt städbolag.
          </p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {[
              { label: 'Typisk multipel', value: '2,0–4,0× EBITDA' },
              { label: 'Viktigaste faktorn', value: 'Kontraktsbas' },
              { label: 'Primär risksignal', value: 'Personalomsättning' },
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
          <h2>Vad avgör värderingen av ett städföretag?</h2>
          <p>
            Städföretag är en av de branscher där det råder störst variation i värderingen – inte beroende på storlek, utan på hur professionellt bolaget är strukturerat. Två städföretag med identisk omsättning och EBITDA kan värderas mycket olika beroende på kontraktskvalitet, personalstruktur och hur dokumenterade processerna är.
          </p>
          <p>
            Den primära värderingsmetoden är EBITDA-multipeln, typiskt i intervallet <strong>2,0–4,0×</strong>. Välskötta bolag med stabila avtal och låg personalomsättning kan nå 3,5–4,5× i konkurrensutsatta processer. Bolag med otrygg intäktsbas och hög personalomsättning värderas ofta under 2,5×.
          </p>

          <h2>Kontraktsbasen är allt</h2>
          <p>
            En köpare av ett städföretag betalar för en intäktsbas, inte för goodwill eller relationer. Det innebär att alla kundrelationer måste vara kontraktuellt dokumenterade. Skriftliga avtal med tydliga villkor, priser och löptider är fundamentalt för att en köpare ska kunna bedöma värdet.
          </p>
          <p>
            Långa kontrakt – gärna 12–36 månader med automatisk förlängning – är det starkaste argument du kan ha. Kontrakt med offentliga aktörer (kommuner, regioner, statliga myndigheter) är extra attraktiva eftersom betalningsrisken är minimal och relationen är transparent.
          </p>
          <p>
            Saknar du formella kontrakt? Det är inte för sent att åtgärda. Att formalisera muntliga relationer 12–18 månader innan en försäljning är ett av de bästa investeringarna du kan göra för att höja bolagets värde.
          </p>

          <h2>Personalstruktur och stabilitet</h2>
          <p>
            I ett städföretag är personalen det operativa kärnan. En köpare tittar noga på:
          </p>
          <ul>
            <li><strong>Personalomsättning.</strong> Hög turnover (30 %+) skapar rekryteringskostnader, träningsbehov och kvalitetsproblem. Det är ett tydligt signal på ett stressigt och dyrt operativt klimat.</li>
            <li><strong>Personalstruktur.</strong> Är det tydliga ansvarsroller, platschefer och teamledare – eller är ägaren ensam ledare för alla anställda? En välfungerande mellannivå är mycket värdefull.</li>
            <li><strong>Anställningsvillkor.</strong> Korrekt hanterade anställningsavtal, scheman och löneutbetalningar ger trygghet i due diligence. Oregelbundenheter i HR-dokumentation skapar risk.</li>
          </ul>

          <h2>Operationell effektivitet och lönsamhet</h2>
          <p>
            Städbranschen är en marginalintensiv bransch. En EBITDA-marginal på 10–15 % är normalt; 15–20 %+ signalerar ett välskött och effektivt bolag. Lönsamheten beror primärt på schemaoptimering, ruttplanering och prissättning.
          </p>
          <p>
            Bolag som har investerat i digital schemahantering, tidrapportering och kundportaler upplevs som mer professionella och skalbara – vilket köpare premierar med en högre multipel.
          </p>
        </SEOContentBlock>
      </section>

      <section style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: '700', color: 'var(--color-ink)', marginBottom: '8px' }}>Värdedrivare och riskfaktorer</h2>
          <p style={{ color: 'var(--color-slate)', marginBottom: '40px' }}>Vad som påverkar multipeln mest i ett städföretag.</p>
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
          Vanliga frågor om städföretagsvärdering
        </h2>
        <FAQ items={faqs} />
      </section>

      <CTASection
        variant="dark"
        headline="Vad är ditt städföretag värt?"
        subtext="Gör en indikativ värdering och se vilka faktorer som driver upp eller sänker ditt bolags värde."
        primaryCTA={{ label: 'Värdera mitt bolag', href: '/vardera-bolag' }}
        secondaryCTA={{ label: 'Kontakta oss', href: '/kontakt' }}
      />
    </main>
  );
}
