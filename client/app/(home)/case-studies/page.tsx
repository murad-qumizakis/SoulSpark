import { AchievementsSection } from "@/app/(home)/_components/achievements-section"
import { EstablishedYearSection } from "@/app/(home)/_components/establishedyear-section"
import { HeroSection } from "@/app/(home)/_components/hero-section"
import { OurWorksSection } from "@/app/(home)/_components/our-works-section"
import { PartnersSection } from "@/app/(home)/_components/partners-section"
import { ServicesSection } from "@/app/(home)/_components/services-section"
import { TestimonialsSection } from "@/app/(home)/_components/testimonials-section"
import { TrustSection } from "@/app/(home)/_components/trust-section"
import { WhatWeDoSection } from "@/app/(home)/_components/what-we-do-section"
import { ParallaxImage } from "@/components/parallax-image"
import { ScrollMarqeue } from "@/components/scroll-marqeue"
import { getTestimonials } from "@/lib/actions"
import { getProjects } from "@/lib/actions"

export const dynamic = "force-dynamic"

const Page = async () => {
  const [projectsRes, testimonialsRes] = await Promise.all([getProjects(), getTestimonials()])

  if (!projectsRes.success) {
    console.error(projectsRes.error)
    throw new Error(projectsRes.error)
  }
  if (!testimonialsRes.success) {
    console.error(testimonialsRes.error)
    throw new Error(testimonialsRes.error)
  }
  return (
    <>
      <OurWorksSection projects={projectsRes.data} />
    </>
  )
}

export default Page
