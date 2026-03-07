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
      <section className="relative overflow-hidden pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2674&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[100px]" />
        <div className="absolute top-40 -right-40 h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-[120px]" />
        
        <div className="container relative mx-auto px-4 text-center">
          <div className="mx-auto flex max-w-max items-center justify-center space-x-2 space-x-reverse rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-200 shadow-inner backdrop-blur-md mb-8">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span>{t("hero.badge")}</span>
          </div>
          
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            {t("hero.title.part1")} <br className="hidden sm:block" />
            {t("hero.title.part2")} <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Generative AI</span>
          </h1>
          
          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
            {t("hero.subtitle")}
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-14 text-lg font-bold" asChild>
              <a href="#contact">
                <span className="relative z-10 flex items-center gap-2">
                  {t("hero.cta.primary")}
                  <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1" />
                </span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Learn to Build Alone */}
      <section id="approach" className="py-24 bg-muted/30 border-y border-border/50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("features.title")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card hover:border-purple-500/50 transition-colors group">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <ShieldCheck className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle className="text-xl">{t("features.card1.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">{t("features.card1.desc")}</CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card hover:border-indigo-500/50 transition-colors group">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                  <Code2 className="h-6 w-6 text-indigo-400" />
                </div>
                <CardTitle className="text-xl">{t("features.card2.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">{t("features.card2.desc")}</CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card hover:border-pink-500/50 transition-colors group">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4 group-hover:bg-pink-500/20 transition-colors">
                  <Paintbrush className="h-6 w-6 text-pink-400" />
                </div>
                <CardTitle className="text-xl">{t("features.card3.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">{t("features.card3.desc")}</CardDescription>
              </CardContent>
            </Card>
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
