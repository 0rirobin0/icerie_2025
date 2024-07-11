"use client";
import ConferenceDateView from "@/components/ConferenceDateView";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import ImportantUpdates from "@/components/ImportantUpdateFrontendView";
import Navbar from "@/components/NavBar";
import OrganizedBy from "@/components/OrganizedBy";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <main className="h-screen bg-white">
      <Navbar />
      <Herosection />
      <div className="pb-100">
      <ImportantUpdates />
      <ConferenceDateView />
      <OrganizedBy />
      <Sponsors />
      </div>
      <ScrollToTopButton />
      <Footer />
    </main>
  );
}
