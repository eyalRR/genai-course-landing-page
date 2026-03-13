"use client";

import { useLanguage } from "@/components/language-provider";
import { Header } from "@/components/Header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Github, Quote } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CourseJsonLd } from "@/components/CourseJsonLd";

export default function LandingPage() {
  const { t } = useLanguage();

  return (
    <>
      <CourseJsonLd />
      <div className="min-h-screen bg-background font-sans text-foreground selection:bg-purple-500/30">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 sm:pt-32 sm:pb-32 lg:pb-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background -z-10" />
        <div className="absolute -top-40 -left-60 h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[120px] -z-10" />
        <div className="absolute top-40 -right-60 h-[500px] w-[500px] rounded-full bg-pink-600/10 blur-[120px] -z-10" />

        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Text Content (Right side in RTL) */}
            <div className="text-start flex flex-col items-start max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground mb-6">
                {t("hero.title.part1")} <br className="hidden sm:block" />
                {t("hero.title.part2")} <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Generative AI</span>.
              </h1>

              <p className="text-lg text-muted-foreground sm:text-xl leading-relaxed mb-10 max-w-xl">
                {t("hero.subtitle")}
              </p>

              <Button size="lg" className="group rounded-xl bg-[#25D366] text-white hover:bg-[#20b858] px-5 sm:px-8 h-11 sm:h-14 text-sm sm:text-base md:text-lg font-bold shadow-lg shadow-green-500/20 w-full sm:w-auto" asChild>
                <a href="https://wa.me/972506688678?text=%D7%94%D7%99%D7%99%20%D7%90%D7%99%D7%99%D7%9C,%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%93%D7%A3%20%D7%94%D7%A0%D7%97%D7%99%D7%AA%D7%94%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A2%D7%9C%20%D7%A7%D7%95%D7%A8%D7%A1%20%D7%94-GenAI..." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <span>{t("hero.cta.primary")}</span>
                </a>
              </Button>
            </div>

            {/* Window Mockup (Left side in RTL) */}
            <div className="relative w-full aspect-[4/3] max-w-[600px] mx-auto lg:mr-auto rounded-xl border border-border/20 bg-[#1e1e1e] shadow-2xl shadow-purple-900/20 overflow-hidden flex flex-col rtl:text-left">
              {/* Fake Window Header */}
              <div className="h-8 w-full bg-[#2d2d2d] flex items-center px-4 gap-2 flex-none border-b border-border/10">
                <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
              </div>

              {/* Window Content (Code + Image Split) */}
              <div className="flex flex-1 flex-col sm:flex-row overflow-hidden" dir="ltr">
                {/* Code Side */}
                <div className="flex-1 p-4 font-mono text-xs sm:text-sm bg-[#1e1e1e] text-[#d4d4d4] overflow-x-auto">
                  <div className="flex items-start">
                    {/* Line Numbers */}
                    <div className="flex flex-col text-[#858585] text-right select-none pr-4 border-r border-[#333333] mr-4">
                      <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span>
                    </div>
                    {/* Code */}
                    <div className="flex flex-col whitespace-pre">
                      <div><span className="text-[#c586c0]">import</span> requests</div>
                      <div><span className="text-[#c586c0]">from</span> openai <span className="text-[#c586c0]">import</span> OpenAI</div>
                      <div className="h-5"></div>
                      <div>client = OpenAI()</div>
                      <div className="h-5"></div>
                      <div>response = client.images.generate(</div>
                      <div>  model=<span className="text-[#ce9178]">"dall-e-3"</span>,</div>
                      <div>  prompt=<span className="text-[#ce9178]">"A surreal, vibrant landscape<br />          of floating islands under a twilight sky<br />          with luminous energy, complex<br />          structures, and intricate flora"</span></div>
                      <div>)</div>
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="flex-1 bg-black relative border-l border-border/10 overflow-hidden">
                  <Image
                    src="/surreal_islands.png"
                    alt="AI-generated surreal landscape"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Learn to Build Alone */}
      <section id="approach" className="py-16 bg-background relative border-y border-border/10">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <Reveal className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-foreground">{t("features.title")}</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Reveal delay={0}>
              <div className="group relative rounded-2xl border border-border/50 dark:border-white/5 bg-card dark:bg-[#121215] p-8 overflow-hidden transition-all hover:border-border dark:hover:border-white/10 shadow-sm dark:shadow-none h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex justify-start mb-6">
                  <div className="h-12 w-12 rounded-xl bg-muted/50 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 border border-border/50 dark:border-white/10 flex items-center justify-center shadow-sm dark:shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600 dark:text-slate-300"><path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" /><path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" /><line x1="14" x2="10" y1="11" y2="15" className="text-red-500 dark:text-red-400" /></svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-foreground">{t("features.card1.title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-center">
                  {t("features.card1.desc")}
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="group relative rounded-2xl border border-border/50 dark:border-white/5 bg-card dark:bg-[#121215] p-8 overflow-hidden transition-all hover:border-border dark:hover:border-white/10 shadow-sm dark:shadow-none h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex justify-start mb-6">
                  <div className="h-12 w-12 rounded-xl bg-muted/50 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 border border-border/50 dark:border-white/10 flex items-center justify-center shadow-sm dark:shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500 dark:text-pink-400"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 3v18" /><path d="M3 7.5h4" /><path d="M3 12h18" /><path d="M3 16.5h4" /><path d="M17 3v18" /><path d="M17 7.5h4" /><path d="M17 16.5h4" /></svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-foreground">{t("features.card3.title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-center">
                  {t("features.card3.desc")}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section id="syllabus" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 h-[600px] w-[500px] rounded-full bg-indigo-900/10 blur-[150px] -z-10" />
        <div className="container mx-auto px-4 max-w-4xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground font-sans">{t("syllabus.title")}</h2>
          </Reveal>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Reveal key={i} delay={(i - 1) * 60} variant="fade">
                <AccordionItem value={`item-${i}`} className="border border-border dark:border-white/10 bg-card/50 dark:bg-white/5 rounded-xl px-4 sm:px-6 py-2 overflow-hidden hover:bg-muted/80 dark:hover:bg-white/10 dark:hover:border-white/20 transition-all duration-300 ease-in-out data-[state=open]:bg-muted/80 dark:data-[state=open]:bg-white/10">
                  <AccordionTrigger className="hover:no-underline py-4 [&[data-state=open]>svg]:rotate-180">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 pr-4">
                      <span className="text-lg font-semibold text-foreground dark:text-white text-start">{t(`syllabus.part${i}.title`)}</span>
                      <span className="text-[0.85rem] font-semibold text-white whitespace-nowrap bg-gradient-to-r from-blue-500/80 to-purple-500/80 px-4 py-1.5 rounded-full shrink-0">
                        {t(`syllabus.part${i}.tag`)}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground dark:text-gray-300 text-base pb-6 leading-relaxed transition-all duration-300 ease-in-out">
                    <div className="pt-4 border-t border-border/50 dark:border-white/10 mt-2 text-start">
                      {t(`syllabus.part${i}.desc`)}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>
      </section>



      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-[150px] -z-10" />
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              {t("testimonials.title")}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Reveal key={i} delay={(i - 1) * 120}>
                <div className="relative rounded-2xl border border-border/50 dark:border-white/5 bg-card dark:bg-[#121215] p-8 flex flex-col gap-5 shadow-sm dark:shadow-none hover:border-border dark:hover:border-white/10 transition-all h-full">
                  <Quote className="h-6 w-6 text-purple-400/60 absolute top-6 left-6" />
                  <p className="text-muted-foreground dark:text-gray-300 text-base leading-relaxed pt-4">
                    &ldquo;{t(`testimonials.item${i}.quote`)}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/30 dark:border-white/10">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                      {t(`testimonials.item${i}.initials`)}
                    </div>
                    <div className="text-start flex-1">
                      <p className="font-semibold text-foreground text-sm">{t(`testimonials.item${i}.name`)}</p>
                      <p className="text-muted-foreground text-xs">{t(`testimonials.item${i}.role`)}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-muted/30 dark:bg-background relative border-y border-border/50 dark:border-white/10">
        <div className="container mx-auto px-4 max-w-3xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground dark:text-white">
              {t("faq.title")}
            </h2>
          </Reveal>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Reveal key={i} delay={(i - 1) * 50} variant="fade">
                <AccordionItem
                  value={`faq-${i}`}
                  className="border border-border dark:border-white/10 bg-card/50 dark:bg-white/5 rounded-xl px-4 sm:px-6 py-2 overflow-hidden hover:bg-muted/80 dark:hover:bg-white/10 dark:hover:border-white/20 transition-all duration-300 ease-in-out data-[state=open]:bg-muted/80 dark:data-[state=open]:bg-white/10"
                >
                  <AccordionTrigger className="hover:no-underline py-4 [&[data-state=open]>svg]:rotate-180">
                    <span className="text-base font-semibold text-foreground dark:text-white text-start">
                      {t(`faq.q${i}`)}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground dark:text-gray-300 text-base pb-6 leading-relaxed">
                    <div className="pt-4 border-t border-border/50 dark:border-white/10 mt-2 text-start">
                      {t(`faq.a${i}`)}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer / Contact CTA */}
      <section id="contact" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/15 via-background to-background -z-10" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-indigo-600/10 blur-[120px] -z-10" />
        <Reveal variant="scale-up" className="container relative mx-auto px-4 max-w-4xl text-center z-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 text-foreground dark:text-white">{t("footer.title")}</h2>
          <p className="text-muted-foreground dark:text-gray-300 text-lg mb-12 max-w-[600px] mx-auto leading-relaxed">
            {t("footer.desc")}
          </p>

          <div className="flex items-center justify-center">
            <Button size="lg" className="h-16 px-10 text-xl font-bold bg-[#25D366] text-white hover:bg-[#20b858] shadow-lg shadow-green-500/20 rounded-xl transition-all" asChild>
              <a href="https://wa.me/972506688678?text=%D7%94%D7%99%D7%99%20%D7%90%D7%99%D7%99%D7%9C,%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%93%D7%A3%20%D7%94%D7%A0%D7%97%D7%99%D7%AA%D7%94%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A2%D7%9C%20%D7%A7%D7%95%D7%A8%D7%A1%20%D7%94-GenAI..." target="_blank" rel="noopener noreferrer">
                {t("footer.cta.whatsapp")}
              </a>
            </Button>
          </div>
        </Reveal>
      </section>

      <footer className="py-8 text-center border-t border-border/50 dark:border-white/10 bg-muted/20 dark:bg-[#121215]">
        <p className="text-muted-foreground dark:text-gray-400 text-[0.875rem] flex flex-col sm:flex-row items-center justify-center gap-4">
          <span>{t("footer.copyright")}</span>
          <span className="hidden sm:inline text-muted-foreground/50 dark:text-gray-600">•</span>
          <a href="https://github.com/eyalRR/genai-course" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 hover:text-foreground dark:hover:text-white transition-colors">
            <Github className="w-4 h-4 text-muted-foreground dark:text-gray-400 group-hover:text-foreground dark:group-hover:text-white transition-colors" />
            <span>GitHub Repository</span>
          </a>
        </p>
      </footer>
    </div>
    </>
  );
}
