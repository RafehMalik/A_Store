import { ShieldCheck, Leaf, Handshake } from 'lucide-react'

const values = [
  { icon: Leaf, title: 'Thoughtfully sourced', desc: 'We work with small workshops and favour natural materials over mass production.' },
  { icon: ShieldCheck, title: 'Built to last', desc: 'Every product is checked for quality before it goes into the catalog.' },
  { icon: Handshake, title: 'Real conversations', desc: 'No bots, no forms — you talk to an actual person before you order.' },
]

export default function About() {
  return (
    <div>
      <section className="border-b border-border bg-surface">
        <div className="container py-14">
          <h1 className="max-w-xl font-display text-3xl font-semibold sm:text-4xl">
            A small catalog, chosen carefully.
          </h1>
          <p className="mt-4 max-w-lg text-muted-fg">
            Aurelia House started as a way to bring considered, well-made home goods to people who are tired of scrolling through endless marketplace listings. We keep the catalog small on purpose — everything in it is something we'd use ourselves.
          </p>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid gap-6 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-lg border border-border bg-surface p-6">
              <v.icon className="mb-3 h-6 w-6 text-primary" aria-hidden="true" />
              <h2 className="font-display font-semibold">{v.title}</h2>
              <p className="mt-1 text-sm text-muted-fg">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface py-14">
        <div className="container grid items-center gap-8 lg:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
            alt="A small workshop table with craft tools and materials"
            className="aspect-[4/3] w-full rounded-lg object-cover"
          />
          <div>
            <h2 className="font-display text-2xl font-semibold">How ordering works</h2>
            <ol className="mt-4 space-y-3 text-muted-fg">
              <li><strong className="text-ink">1. Browse the catalog</strong> — filter by category or search for something specific.</li>
              <li><strong className="text-ink">2. Tap "Order on WhatsApp"</strong> — we pre-fill the product, price and ID for you.</li>
              <li><strong className="text-ink">3. Confirm details with us</strong> — colour, size and delivery, all in one chat.</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  )
}
