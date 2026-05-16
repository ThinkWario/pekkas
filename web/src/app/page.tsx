import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import BookingBot from "@/components/BookingBot";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-brand-champagne">
      <Hero />
      <Philosophy />
      <Services />
      <Portfolio />

      {/* Footer / Contact CTA */}
      <section className="py-24 px-6 text-center bg-brand-ink text-brand-champagne">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            ¿Lista para revelar tu <br />
            <span className="italic opacity-60">esencia natural?</span>
          </h2>
          <p className="font-sans text-lg opacity-70 max-w-2xl mx-auto">
            Únete a quienes han descubierto el arte de la belleza orgánica y atemporal.
            Reserva tu consulta hoy mismo.
          </p>
          <div className="pt-8">
             <div className="inline-block px-12 py-5 border border-brand-champagne text-brand-champagne uppercase tracking-widest text-sm font-sans cursor-pointer hover:bg-brand-champagne hover:text-brand-ink transition-all duration-500">
               Comenzar Ritual
             </div>
          </div>
        </div>
      </section>

      <BookingBot />
    </main>
  );
}
