"use client"
import Image from "next/image";
import Container from "./components/organisms/container";
import HeroCarousel from "./components/molecules/CarouselHerro";

export default function Home() {
  return (
    <Container>
      <div className="px-4">  
      <HeroCarousel/>
      </div>
    </Container>
  );
}
