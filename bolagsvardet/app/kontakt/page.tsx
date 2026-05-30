import type { Metadata } from 'next';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export const metadata: Metadata = {
  title: 'Kontakta Bolagsvärdet – boka en genomgång',
  description: 'Kontakta oss för en fördjupad genomgång av ditt bolags värde, exit-readiness och nästa steg inför en framtida försäljning.',
};

const reasons = [
  {
    icon: '📊',
    title: 'Fördjupad värderingsanalys',
    description: 'En mer detaljerad genomgång av ditt bolags värde baserad på era faktiska siffror, marknadssituation och jämförbara transaktioner.',
  },
  {
    icon: '🎯',
    title: 'Exit readiness-genomgång',
    description: 'Vi tittar igenom er nuvarande position och identifierar konkreta åtgärder som höjer värdet inför en försäljning.',
  },
  {
    icon: '🗺️',
    title: 'Strategisk rådgivning',
    description: 'Diskutera tidshorisonter, köpartyper, strukturalternativ och hur ni förbereder er organisation för en framtida transaktion.',
  },
  {
    icon: '📋',
    title: 'Due diligence-förberedelse',
    description: 'Gå igenom vilka frågor en köpare kommer att ställa och säkerställa att ni har svaren och dokumentationen på plats.',
  },
];

export default function KontaktPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 24px 64px' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: '700',
            color: 'var(--color-ink)',
            lineHeight: '1.15',
            marginBottom: '20px',
          }}>
            Boka en fördjupad genomgång
          </h1>
          <p style={{
            fontSize: '20px',
            color: 'var(--color-slate)',
            lineHeight: '1.6',
            maxWidth: '640px',
          }}>
            Du har använt kalkylatorn och fått en indikation. Nu kan du prata med oss för att gå djupare – på era faktiska siffror och era specifika förutsättningar.
          </p>
        </div>
      </section>

      {/* Content + Form */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: '64px',
          alignItems: 'start',
        }}>
          {/* Left: What to expect */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '24px',
              fontWeight: '700',
              color: 'var(--color-ink)',
              marginBottom: '8px',
            }}>
              Vad kan vi hjälpa dig med?
            </h2>
            <p style={{ color: 'var(--color-slate)', lineHeight: '1.6', marginBottom: '40px' }}>
              Oavsett om du funderar på försäljning nu eller om 3 år är det aldrig fel att förstå din nulägesposition.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {reasons.map((r) => (
                <div key={r.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    background: 'var(--color-accent-subtle)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    flexShrink: 0,
                  }}>
                    {r.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-ink)', marginBottom: '4px' }}>
                      {r.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--color-slate)', lineHeight: '1.6', margin: 0 }}>
                      {r.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust note */}
            <div style={{
              marginTop: '48px',
              padding: '24px',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '10px',
            }}>
              <h3 style={{ fontSize: '15px', fontWeight: '600', color: 'var(--color-ink)', marginBottom: '8px' }}>
                Konfidentialitet och diskretion
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-slate)', lineHeight: '1.6', margin: 0 }}>
                All information du delar med oss behandlas konfidentiellt. Vi säljer inte vidare dina uppgifter och tar aldrig kontakt utan att du initierat det. En initial genomgång är utan kostnad och förpliktelse.
              </p>
            </div>

            {/* Disclaimer */}
            <p style={{
              fontSize: '12px',
              color: 'var(--color-muted)',
              lineHeight: '1.6',
              marginTop: '24px',
            }}>
              Bolagsvärdet erbjuder utbildning, analysstöd och förberedelsearbete inför en eventuell försäljning. Vi erbjuder inte auktoriserad finansiell rådgivning, juridisk rådgivning eller mäklartjänster. Kontakta alltid en auktoriserad rådgivare innan du fattar beslut om en transaktion.
            </p>
          </div>

          {/* Right: Form */}
          <div>
            <div style={{
              background: 'white',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              padding: '40px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22px',
                fontWeight: '700',
                color: 'var(--color-ink)',
                marginBottom: '8px',
              }}>
                Skicka en förfrågan
              </h2>
              <p style={{ color: 'var(--color-muted)', fontSize: '14px', marginBottom: '28px' }}>
                Vi återkommer inom en arbetsdag.
              </p>
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ-style trust section */}
      <section style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 24px' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '28px',
            fontWeight: '700',
            color: 'var(--color-ink)',
            marginBottom: '40px',
          }}>
            Vanliga frågor om kontakt och process
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '32px' }}>
            {[
              {
                q: 'Behöver jag ha bestämt mig för att sälja för att kontakta er?',
                a: 'Nej, absolut inte. Många av de mest värdefulla samtalen sker 2–3 år före en eventuell försäljning, när det finns tid att faktiskt förbereda bolaget och höja värdet. Tidig förberedelse lönar sig alltid.',
              },
              {
                q: 'Kostar det något att boka en genomgång?',
                a: 'Den initiala genomgången är kostnadsfri och utan förpliktelse. Det är ett förutsättningslöst samtal om er situation och vad som är rimligt att förvänta sig.',
              },
              {
                q: 'Hur lång tid tar ett inledande samtal?',
                a: 'Räkna med 45–60 minuter. Vi går igenom bolaget, era siffror i grova drag, marknadsläget och vad som är era starkaste argument och riskfaktorer.',
              },
              {
                q: 'Vad händer med informationen vi delar?',
                a: 'All information hanteras konfidentiellt. Vi delar inte uppgifter med tredje part utan ert samtycke. Inget av era bolags specifika data används utanför vår rådgivningsrelation.',
              },
            ].map((item) => (
              <div key={item.q}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-ink)', marginBottom: '8px', lineHeight: '1.4' }}>
                  {item.q}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-slate)', lineHeight: '1.7', margin: 0 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
