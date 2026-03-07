"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "./language-provider";
import { Button } from "./ui/button";
import { Moon, Sun, Languages } from "lucide-react";
import Link from "next/link";

export function Header() {
  const { setTheme, theme } = useTheme();
  const { language, setLanguage, t, dir } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2 space-x-reverse">
            <span className="font-bold text-xl inline-block bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              GenAI
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#approach" className="transition-colors hover:text-foreground/80 text-foreground/60">
              {t("nav.our_approach")}
            </Link>
            <Link href="#syllabus" className="transition-colors hover:text-foreground/80 text-foreground/60">
              {t("nav.what_you_will_learn")}
            </Link>
            <Link href="#prerequisites" className="transition-colors hover:text-foreground/80 text-foreground/60">
              {t("nav.prerequisites")}
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60 font-semibold text-purple-400">
              {t("nav.contact")}
            </Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2 space-x-reverse gap-2">
          <Button
            intent="ghost"
            size="icon"
            onClick={() => setLanguage(language === "en" ? "he" : "en")}
            title="Toggle Language"
            aria-label="Toggle Language"
          >
            <Languages className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle Language</span>
            <span className="absolute -bottom-1 -right-1 text-[10px] font-bold">{language.toUpperCase()}</span>
          </Button>

          <Button
            intent="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle Theme"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle Theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
