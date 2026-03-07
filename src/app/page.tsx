"use client";

import { useLanguage } from "@/components/language-provider";
import { Header } from "@/components/Header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Code2, Paintbrush, ShieldCheck, Sparkles } from "lucide-react";

export default function LandingPage() {
  const { t } = useLanguage();

  return (
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
            <div className="text-right flex flex-col items-start max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground mb-6">
                {t("hero.title.part1")} <br className="hidden sm:block" />
                {t("hero.title.part2")} <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Generative AI</span>.
              </h1>
              
              <p className="text-lg text-muted-foreground sm:text-xl leading-relaxed mb-10 max-w-xl">
                {t("hero.subtitle")}
              </p>
              
              <Button size="lg" className="group rounded-xl bg-[#25D366] text-white hover:bg-[#20b858] px-8 h-14 text-lg font-bold shadow-lg shadow-green-500/20 w-full sm:w-auto" asChild>
                <a href="#contact" className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
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
                      <div>  prompt=<span className="text-[#ce9178]">"A surreal, vibrant landscape<br/>          of floating islands under a twilight sky<br/>          with luminous energy, complex<br/>          structures, and intricate flora"</span></div>
                      <div>)</div>
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="flex-1 bg-black relative border-l border-border/10">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2674&auto=format&fit=crop')] bg-cover bg-center" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Learn to Build Alone */}
      <section id="approach" className="py-24 bg-background relative border-y border-border/10">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">{t("features.title")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group relative rounded-2xl border border-white/5 bg-[#121215] p-8 overflow-hidden transition-all hover:border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex justify-end mb-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300"><path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" /><path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" /><line x1="14" x2="10" y1="11" y2="15" className="text-red-400" /></svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-foreground">{t("features.card1.title")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                {t("features.card1.desc")}
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-2xl border border-white/5 bg-[#121215] p-8 overflow-hidden transition-all hover:border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex justify-end mb-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center shadow-lg">
                  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-blue-400" xmlns="http://www.w3.org/2000/svg"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21V15.36l.01.26.04.33.08.32.11.27.15.23.18.17.22.12.24.06.27.02h2.83l.25-.03.22-.05.18-.09.15-.12.1-.14.07-.15.03-.15.01-.13V12.2l.02-.32.05-.33.09-.3.12-.27.16-.21.19-.17.21-.11.24-.07.25-.02H18.23l.63-.03.56-.11.49-.17.43-.22.38-.26.34-.29.31-.33.28-.35.25-.37.22-.38.19-.38.16-.39.14-.38.11-.38.09-.37.07-.35.05-.32.03-.28.02-.23V5.54l-.02-.85-.09-.76-.14-.68-.18-.6-.24-.51-.27-.45-.31-.38-.34-.33-.37-.26-.38-.22-.4-.17-.4-.13-.42-.08-.42-.05-.41-.01H14.25v.01zm-5.46 1.48v1.36h1.36V1.66H8.79zM5.54 8.79l-.85.02-.76.09-.68.14-.6.18-.51.24-.45.27-.38.31-.33.34-.26.37-.22.38-.17.4-.13.4-.08.42-.05.42-.01.41v10.45l.02.85.09.76.14.68.18.6.24.51.27.45.31.38.34.33.37.26.38.22.4.17.4.13.42.08.42.05.41.01h10.45l.85-.02.76-.09.68-.14.6-.18.51-.24.45-.27.38-.31.33-.34.26-.37.22-.38.17-.4.13-.4.08-.42.05-.42.01-.41v-3.76l-.01-.26-.04-.33-.08-.32-.11-.27-.15-.23-.18-.17-.22-.12-.24-.06-.27-.02H15.23l-.25.03-.22.05-.18.09-.15.12-.1.14-.07.15-.03.15-.01.13v3.16l-.02.32-.05.33-.09.3-.12.27-.16.21-.19.17-.21.11-.24.07-.25.02H5.23l-.63.03-.56.11-.49.17-.43.22-.38.26-.34.29-.31.33-.28.35-.25.37-.22.38-.19.38-.16.39-.14.38-.11.38-.09.37-.07.35-.05.32-.03.28-.02.23V18.46l.02-.85.09-.76.14-.68.18-.6.24-.51.27-.45.31-.38.34-.33.37-.26.38-.22.4-.17.4-.13.42-.08.42-.05.41-.01H9.75v-.01l-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2.01-.13V15.5l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02H15.23l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21V8.64l-.01-.26-.04-.33-.08-.32-.11-.27-.15-.23-.18-.17-.22-.12-.24-.06-.27-.02H12.67l-.25.03-.22.05-.18.09-.15.12-.1.14-.07.15-.03.15-.01.13v2.8h-1.36V8.79H5.54zm8.33 12.16v1.36h1.36v-1.36h-1.36z"/></svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-foreground">{t("features.card2.title")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                {t("features.card2.desc")}
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-2xl border border-white/5 bg-[#121215] p-8 overflow-hidden transition-all hover:border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex justify-end mb-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 3v18" /><path d="M3 7.5h4" /><path d="M3 12h18" /><path d="M3 16.5h4" /><path d="M17 3v18" /><path d="M17 7.5h4" /><path d="M17 16.5h4" /></svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-foreground">{t("features.card3.title")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                {t("features.card3.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section id="syllabus" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 h-[600px] w-[500px] rounded-full bg-indigo-900/10 blur-[150px] -z-10" />
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("syllabus.title")}</h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border bg-card/50 rounded-xl px-6 py-2 overflow-hidden data-[state=open]:bg-muted/80 transition-colors">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex flex-col sm:flex-row sm:items-center text-start w-full gap-2 sm:gap-6">
                    <span className="text-purple-400 font-mono text-sm md:text-base whitespace-nowrap bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                      {t(`syllabus.part${i}.tag`)}
                    </span>
                    <span className="text-lg font-semibold">{t(`syllabus.part${i}.title`)}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  <div className="pt-2 border-t border-border/50 mt-2 text-start">
                    {t(`syllabus.part${i}.desc`)}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Prerequisites */}
      <section id="prerequisites" className="py-24 bg-muted/30 border-y border-border/50 relative">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("prerequisites.title")}</h2>
          </div>

          <Card className="bg-card shadow-lg">
            <CardContent className="p-8 sm:p-12">
              <ul className="space-y-6">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-lg text-muted-foreground text-start">{t(`prerequisites.item${i}`)}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer / Contact CTA */}
      <section id="contact" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-screen grayscale" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="container relative mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold mb-8">{t("footer.title")}</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            {t("footer.desc")}
          </p>
          
          <div className="flex flex-col items-center justify-center gap-6">
             <a href="tel:05X-XXXXXXX" className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 hover:opacity-80 transition-opacity" dir="ltr">
              05X-XXXXXXX
             </a>
             <Button size="lg" className="h-16 px-10 text-xl font-bold bg-[#25D366] text-white hover:bg-[#20b858] shadow-lg shadow-green-500/20" asChild>
              <a href="https://wa.me/9725XXXXXXXX?text=היי אייל, הגעתי מדף הנחיתה ואשמח לשמוע פרטים על קורס ה-GenAI..." target="_blank" rel="noopener noreferrer">
                {t("footer.cta.whatsapp")}
              </a>
             </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center border-t border-border/50 bg-muted/20">
        <p className="text-muted-foreground text-sm flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>{t("footer.copyright")}</span>
          <span className="hidden sm:inline">•</span>
          <a href="https://github.com/eyalRR/genai-course" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline underline-offset-4">
            GitHub Repository
          </a>
        </p>
      </footer>
    </div>
  );
}
