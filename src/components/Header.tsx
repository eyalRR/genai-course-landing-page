"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "./language-provider";
import { Button } from "./ui/button";
import { Moon, Sun, Languages } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Header() {
  const { setTheme, theme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/10 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/40">
      <div className="container mx-auto flex h-20 md:h-28 items-center justify-between px-6" dir="ltr">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="shrink-0 block relative w-16 h-16 md:w-24 md:h-24">
            <Image 
              src="/logo.png" 
              alt="Creative GenAI Course Logo" 
              fill
              sizes="(min-width: 768px) 96px, 64px"
              className="object-contain"
            />
          </Link>
          <Link href="/" className="flex flex-col select-none">
            <span className="font-bold text-xl leading-none text-foreground tracking-tight">{t("logo.title")}</span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{t("logo.subtitle")}</span>
          </Link>
        </div>

        {/* Centered Navigation */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center text-sm font-medium text-muted-foreground">
          <Link href="#approach" className="px-4 py-2 transition-colors hover:text-foreground">
            {t("nav.our_approach")}
          </Link>
          <span className="text-border/40 select-none">|</span>
          <Link href="#syllabus" className="px-4 py-2 transition-colors hover:text-foreground">
            {t("nav.what_you_will_learn")}
          </Link>
          <span className="text-border/40 select-none">|</span>
          <Link href="#faq" className="px-4 py-2 transition-colors hover:text-foreground">
            {t("nav.faq")}
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4" dir="ltr">
          
          {/* Toggles Group */}
          <div className="flex items-center gap-5 mr-4 ml-4">
            
            {/* Theme Toggle */}
            {mounted ? (
              <button
                onClick={(e) => {
                  const rect = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
                  const x = Math.round(rect.left + rect.width / 2);
                  const y = Math.round(rect.top + rect.height / 2);
                  document.documentElement.style.setProperty('--theme-toggle-x', `${x}px`);
                  document.documentElement.style.setProperty('--theme-toggle-y', `${y}px`);

                  const next = theme === 'dark' ? 'light' : 'dark';
                  if (!('startViewTransition' in document)) {
                    setTheme(next);
                    return;
                  }
                  (document as Document & { startViewTransition: (cb: () => void) => void })
                    .startViewTransition(() => setTheme(next));
                }}
                className="text-foreground hover:opacity-70 transition-opacity flex items-center justify-center p-1"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Moon className="h-[22px] w-[22px]" />
                ) : (
                  <Sun className="h-[22px] w-[22px]" />
                )}
              </button>
            ) : (
              <div className="w-[30px] h-[30px]" />
            )}

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "en" ? "he" : "en")}
              className="text-foreground hover:opacity-70 transition-opacity flex items-center justify-center p-1"
              aria-label="Toggle Language"
            >
              <Languages className="h-[22px] w-[22px]" />
            </button>
            
          </div>

          {/* Contact Button */}
          <Button 
            className="rounded-lg bg-red-500/90 text-white font-bold px-6 min-w-[120px] justify-center border border-red-400/30 hover:bg-red-500 transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_25px_rgba(239,68,68,0.5)]"
            asChild
          >
            <a href="#contact">
              {t("nav.contact")}
            </a>
          </Button>

        </div>
      </div>
    </header>
  );
}
