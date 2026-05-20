import { Hero } from "@/components/main/hero"

export default function Home() {
  return (
    <main>
      <Hero
        eyebrow="AI-Powered Thumbnail Generator"
        title="AI로 만드는 유튜브 썸네일"
        subtitle="Snail.AI generates eye-catching thumbnails that boost your video views. Powered by advanced AI, designed for creators."
        ctaLabel="Start Creating Now"
        ctaHref="/auth"
      />
    </main>
  )
}
