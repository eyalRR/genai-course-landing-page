"use client";

/**
 * JSON-LD structured data for Google rich snippets.
 * Uses Schema.org Course type.
 * Add <CourseJsonLd /> anywhere inside the page <body>.
 */
export function CourseJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Creative Generative AI Coding Course",
    description:
      "A practical 12-week boutique course (up to 5 participants) covering Python, OpenAI API, Prompt Engineering, Flux image generation, LoRA fine-tuning, video generation, and building AI interfaces with Gradio.",
    url: "https://creativegenai.co.il",
    inLanguage: ["he", "en"],
    educationalLevel: "Beginner",
    courseMode: ["blended", "onsite"],
    timeRequired: "P12W",
    numberOfCredits: 12,
    provider: {
      "@type": "Person",
      name: "Eyal Rabinovich",
      url: "https://github.com/eyalRR",
    },
    teaches: [
      "Python programming for AI",
      "OpenAI API – text, images, speech",
      "Prompt Engineering with Claude & Perplexity",
      "Image generation with Flux and LoRA",
      "AI video generation",
      "Building interactive UIs with Gradio",
      "AI coding tools: GitHub Copilot, Cline",
    ],
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "blended",
      courseSchedule: {
        "@type": "Schedule",
        repeatFrequency: "P1W",
        repeatCount: 12,
      },
    },
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: "Beginners, Designers, Marketers, Entrepreneurs",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
