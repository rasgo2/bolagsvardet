import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import SEOContentBlock from '@/components/SEOContentBlock';

export const metadata: Metadata = {
  title: 'Värdering av SaaS-bolag – multiplar och värdemodeller',
  description: 'Förstå hur SaaS-bolag värderas, vilka nyckeltal som används och vad som avgör om ett SaaS-bolag når hög eller låg multipel.',
};

const faqs = [
  {
    question: 'Hur värderas SaaS-bolag – med intäkter eller EBITDA?',
    answer: 'Större, snabbväxande SaaS-bolag värderas ofta med ARR-multiplar (Annual Recurring Revenue), särskilt om de är olönsamma eller i en tidig tillväxtfas. Lönsamma, mogna SaaS-bolag värderas typiskt med EBITDA-multiplar, ofta 4–8×. Vid försäljning av mindre SaaS-bolag (under 50 MSEK ARR) används ofta en kombination av båda metoderna.',
  },
  {
    question: 'Vad är en normal ARR-multipel för ett SaaS-bolag?',
    answer: 'Det beror på tillväxttakt, churn, marginal och marknadsstorlek. Ett SaaS-bolag med 30 %+ ARR-tillväxt och låg churn kan motivera 3–6× ARR. Ett mer moget bolag med lägre tillväxt hamnar snarare på 1,5–3× ARR. Olönsamma bolag med hög churn värderas lägre, oavsett tillväxt.',
  },
  {
    question: 'Vad är net revenue retention (NRR) och varför är det viktigt?',
    answer: 'NRR mäter hur mycket av fjolårets intäktsbas man behåller och expanderar, exklusive nya kunder. En NRR på 110 % betyder att befintliga kunder ger 10 % mer i år utan ny kundanskaffning. En NRR över 100 % är ett starkt signal på en produkt med stark fastkilning ("stickiness") och möjlighet till uppgradering, vilket är ett av de mest värdeskapande karaktärsdragen i ett SaaS-bolag.',
  },
  {
    question: 'Hur påverkar churn värderingen av ett SaaS-bolag?',
    answer: 'Gross revenue churn på under 5 % per år är ett bra riktmärke för B2B SaaS. Churn på 10 %+ indikerar att produkten inte löser ett tillräckligt viktigt problem, eller att kunderna hittar bättre alternativ. Hög churn sänker ARR-multipeln kraftigt och gör att köpare ifrågasätter hela affärsmodellens hållbarhet.',
  },
];

const metrics = [
  { label: 'ARR-multipel', value: '1,5–6×', desc: 'Beroende på tillväxt och churn' },
  { label: 'EBITDA-multipel', value: '4–8×', desc: 'För lönsamma, mogna SaaS-bolag' },
  { label: 'Gross Margin', value: '70–80 %+', desc: 'Förväntat av köpare' },
  { label: 'Net Churn target', value: '<5 % / år', desc: 'Gross revenue churn' },
];

const valueDrivers = [
  { title: 'Hög andel återkommande intäkter (ARR)', desc: 'Prenumerationsbaserade intäkter med låg churn är det mest grundläggande värdedrivaren. En köpare betalar för förutsägbara framtida kassaflöden.', positive: true },
  { title: 'Net Revenue Retention >100 %', desc: 'Om befintliga kunder expanderar sin användning – och du inte behöver förlita dig på ny kundanskaffning för att växa – är det ett exceptionellt signal.', positive: true },
  { title: 'Skalbar teknikplattform', desc: 'En arkitektur som kan hantera 10× mer volym utan proportionell kostnadstillväxt är en direkt värdepremie. Det öppnar möjligheten till marginalexpansion post-förvärv.', positive: true },
  { title: 'Dokumenterade kundframgångar', desc: 'Case studies, NPS-data och långa kundrelationer (hög LTV) är konkreta bevis på produktvärde som en köpare kan visa sina investerare.', positive: true },
  { title: 'Hög kundchurn', desc: 'Om bolaget tappar 15–20 % av sin kundstock varje år måste det ständigt ersätta dem med ny kundanskaffning. Det skapar ett "läckande hink"-problem som köpare diskonterar kraftigt.', positive: false },
  { title: 'Teknisk skuld och spaghettikod', desc: 'En plattform som är svår att underhålla, skala eller dokumentera skapar integration- och produktionsproblem som köparen måste ta höjd för.', positive: false },
];

export default function SaasBolagPage() {
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
            Värdering av SaaS-bolag
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--color-slate)', lineHeight: '1.6', maxWidth: '680px', marginBottom: '32px' }}>
            SaaS-bolag värderas annorlunda än traditionella bolag. Här går vi igenom de nyckeltal som köpare tittar på och vad som avgör om ditt SaaS-bolag når en hög eller låg multipel.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {metrics.map((m) => (
              <div key={m.label} style={{
                background: 'white',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                padding: '16px 20px',
                minWidth: '160px',
              }}>
                <div style={{ fontSize: '13px', color: 'var(--color-muted)', marginBottom: '4px' }}>{m.label}</div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--color-ink)', marginBottom: '2px' }}>{m.value}</div>
                <div style={{ fontSize: '12px', color: 'var(--color-muted)' }}>{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 24px' }}>
        <SEOContentBlock>
          <h2>Hur värderas SaaS-bolag?</h2>
          <p>
            SaaS-bolag värderas på ett sätt som skiljer sig fundamentalt från traditionella tjänste- eller handelsbolag. Det beror på att en SaaS-affärsmodell, när den fungerar väl, genererar förutsägbara och skalabara intäkter med relativt låga marginalkostnader för varje ny kund.
          </p>
          <p>
            Två primära värderingsmetoder används:
          </p>
          <ul>
            <li><strong>ARR-multipelmetoden</strong> – används primärt för snabbväxande bolag, framförallt om de ännu inte är lönsamma. Multipeln sätts baserat på tillväxttakt, churn, marknadsstorlek och konkurrensposition.</li>
            <li><strong>EBITDA-multipelmetoden</strong> – används för mogna, lönsamma SaaS-bolag med stabil tillväxt. Multipeln är typiskt 4–8× EBITDA för välskötta bolag.</li>
          </ul>
          <p>
            I praktiken tittar köpare på båda metoderna och avgör vilken som ger det mest rättvisande värdet baserat på bolagets fas och situation.
          </p>

          <h2>Nyckeltal som köpare fokuserar på</h2>
          <p>
            Förutom traditionell ekonomisk analys är det ett antal SaaS-specifika nyckeltal som är kritiska i varje köparanalys:
          </p>
          <ul>
            <li><strong>ARR (Annual Recurring Revenue)</strong> – den totala prenumerationsintäkten på 12-månadersbasis. Det är referenspunkten som allt annat mäts mot.</li>
            <li><strong>MRR Growth Rate</strong> – hur snabbt ARR växer månad för månad. Tillväxt under 15 % år signalerar mognad eller stagnation.</li>
            <li><strong>Gross Revenue Churn</strong> – hur stor andel av kundbasen som avslutar sina abonnemang. Under 5 % per år är bra; över 10 % är ett allvarligt problem.</li>
            <li><strong>Net Revenue Retention (NRR)</strong> – inkluderar expansion och churn. NRR {">"} 100 % är ett exceptionellt starkt signal.</li>
            <li><strong>CAC Payback Period</strong> – hur lång tid det tar att återfå kostnaden för att skaffa en ny kund. Under 18 månader är hälsosamt.</li>
            <li><strong>Gross Margin</strong> – SaaS-bolag bör ha 70–80 %+ bruttomarginal. Lägre indikerar att infrastructure-kostnader är för höga relativt intäkter.</li>
          </ul>

          <h2>Vad gör ett SaaS-bolag attraktivt för en köpare?</h2>
          <p>
            Utöver de finansiella nyckeltalen finns ett antal kvalitativa faktorer som påverkar köparens intresse och betalningsvilja kraftigt:
          </p>
          <ul>
            <li><strong>Produkten löser ett kritiskt problem.</strong> Om kunderna inte kan driva sin verksamhet utan er produkt är churn låg och switching cost hög. Det är det starkaste argument en SaaS-ägare kan ha.</li>
            <li><strong>Dokumenterad kundframgång.</strong> Konkreta case studies, NPS-undersökningar och långa kundlivscykler bevisar att produktvärdet är verkligt.</li>
            <li><strong>Skalbar teknik.</strong> En modern, välstrukturerad teknikplattform utan tung teknisk skuld ökar förtroende och minskar integrationsrisken för köparen.</li>
            <li><strong>Tydlig ICP (Ideal Customer Profile).</strong> Bolag som vet exakt vilka kunder de vinner och varför är enklare att förstå och enklare att skala.</li>
          </ul>
        </SEOContentBlock>
      </section>

      <section style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: '700', color: 'var(--color-ink)', marginBottom: '8px' }}>
            Värdedrivare och riskfaktorer
          </h2>
          <p style={{ color: 'var(--color-slate)', marginBottom: '40px' }}>De faktorer som påverkar multipeln mest i ett SaaS-bolag.</p>
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
          Vanliga frågor om SaaS-värdering
        </h2>
        <FAQ items={faqs} />
      </section>

      <CTASection
        variant="dark"
        headline="Vill du veta vad ditt SaaS-bolag är värt?"
        subtext="Gör en indikativ värdering baserad på era nyckeltal och se var ni hamnar i jämförelse med marknaden."
        primaryCTA={{ label: 'Värdera mitt bolag', href: '/vardera-bolag' }}
        secondaryCTA={{ label: 'Kontakta oss', href: '/kontakt' }}
      />
    </main>
  );
}
