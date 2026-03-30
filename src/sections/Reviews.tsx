import { Sparkles } from 'lucide-react';
import { siteData } from '../content/siteData';

const Reviews = () => {
  return (
    <section id="reviews" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="surface-panel rounded-[36px] p-6 lg:p-8">
            <p className="section-kicker text-white/58">Why This Version Works Better</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
              Designed for <span className="gradient-text">higher interaction</span> and stronger trust.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Instead of placeholder testimonials, this section now explains the practical upgrades behind
              the redesign: better contact flow, better local identity, and a clearer reason for patients
              to stay engaged as they move down the page.
            </p>

            <div className="mt-8 grid gap-3">
              {siteData.trustSignals.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[24px] border border-white/10 bg-white/5 px-4 py-4"
                >
                  <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/8 text-[#65f7c3]">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-7 text-white/66">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {siteData.insightCards.map((item) => (
              <article key={item.title} className="surface-panel depth-card rounded-[32px] p-6">
                <div className="depth-content">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/42">
                    Insight
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
