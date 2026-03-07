"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "./language-provider";
import { Button } from "./ui/button";
import { Moon, Sun, Feather, Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
  const { setTheme, theme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/10 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/40">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[1px]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-background/90 backdrop-blur-sm">
              <Feather className="h-5 w-5 text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-pink-400" stroke="url(#logo-gradient)" />
              <svg width="0" height="0">
                <linearGradient id="logo-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop stopColor="#f472b6" offset="0%" />
                  <stop stopColor="#c084fc" offset="50%" />
                  <stop stopColor="#818cf8" offset="100%" />
                </linearGradient>
              </svg>
            </div>
          </div>
          <Link href="/" className="flex flex-col select-none">
            <span className="font-bold text-2xl leading-none text-foreground tracking-tight">GenAI</span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">קורס Generative</span>
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
          <Link href="#prerequisites" className="px-4 py-2 transition-colors hover:text-foreground">
            {t("nav.prerequisites")}
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          
          {/* Toggles Group */}
          <div className="flex items-center gap-3">
            {/* Language Pill */}
            <div className="flex items-center rounded-full border border-border/20 bg-muted/20 p-1 backdrop-blur-md">
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-semibold uppercase transition-all",
                  language === "en" ? "bg-muted/50 text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("he")}
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-semibold uppercase transition-all",
                  language === "he" ? "bg-muted/50 text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                HE
              </button>
            </div>

            {/* Theme Pill */}
            <div className="flex items-center rounded-full border border-border/20 bg-muted/20 p-1 backdrop-blur-md">
              <button
                onClick={() => setTheme("dark")}
                className={cn(
                  "rounded-full p-1.5 transition-all text-muted-foreground hover:text-foreground",
                  theme === "dark" ? "bg-muted/50 text-foreground" : ""
                )}
                aria-label="Dark Mode"
              >
                <Moon className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setTheme("light")}
                className={cn(
                  "rounded-full p-1.5 transition-all text-muted-foreground hover:text-foreground",
                  theme === "light" ? "bg-muted/50 text-foreground" : ""
                )}
                aria-label="Light Mode"
              >
                <Sun className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Contact Button */}
          <Button 
            className="rounded-lg bg-red-500/90 text-white font-bold px-6 border border-red-400/30 hover:bg-red-500 transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_25px_rgba(239,68,68,0.5)]"
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
