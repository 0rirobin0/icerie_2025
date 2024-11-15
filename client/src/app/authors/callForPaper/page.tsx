"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import OrganizedBy from "@/components/OrganizedBy";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Carousel from "@/js";
import Image from "next/image";

export default function Authors() {
  return (
    <main className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <div className="bg-white min-h-screen mt-20">
        <div className="container mx-auto py-10 px-4 md:px-72 ">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-10 mb-10 mt-4">
            <div>
              <Image
                src="/paper.png"
                alt="Call for Paper"
                className="w-16 h-16"
                width={100}
                height={100}
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-center">
                Call For Paper
              </h1>
            </div>
          </div>

          <div className="bg-gray-100 shadow-md rounded-lg p-6 mb-14 py-20">
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
              Important Deadlines:
            </h2>
            <ul className="list-disc list-outside text-xl md:text-2xl px-5">
              <li>
                Conference Date: <strong>April 24-26, 2025</strong>
              </li>
              <li>
                Extended Abstract Submission: <strong>November 30, 2024</strong>
              </li>
              <li>
                Notification of Acceptance of Abstract:{" "}
                <strong>February 15, 2024</strong>
              </li>
              <li>
                Full Paper Submission: <strong>January 30, 2025</strong>
              </li>
              <li>
                Notification of Full Paper: <strong>February 15, 2025</strong>
              </li>
              <li>
                Camera-ready Paper Submission: <strong>March 30, 2025</strong>
              </li>
            </ul>
          </div>

          <div className="bg-gray-100 shadow-md rounded-lg p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
              Extended Abstract Submission:
            </h2>
            <p className="mb-4 text-xl md:text-2xl">
              The extended abstract (not over 600 words) must include research
              objectives, methodology, results and conclusion of the study. The
              submitting file should contain the following:
            </p>
            <ul className="list-disc list-outside font-semibold text-xl md:text-2xl px-5 mb-4">
              <li>Full title of the paper</li>
              <li>Name(s) of the author(s), affiliation with email address</li>
              <li>Extended abstract</li>
              <li>Five to seven keywords</li>
            </ul>
            <p className="mb-4 text-xl md:text-2xl">
              Upon provisional acceptance of the extended abstract, the full
              paper will undergo a review before final acceptance. Detailed
              guidelines for preparing the full-length and camera-ready paper
              will be available on the conference website:{" "}
              <a href="https://icerie2025.sust.edu" className="text-blue-500">
                icerie2025.sust.edu
              </a>
              .
            </p>
            <p className="mb-4 text-xl md:text-2xl">
              Download the conference brochure of{" "}
              <a
                href="/doc/Flyer_ICERIE 2025_SUST.pdf"
                className="text-blue-500 underline font-semibold"
                download
              >
                ICERIE2025
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div>
        <OrganizedBy />
      </div>
      <ScrollToTopButton />
      {/* Carousel Section */}
      <div className="container mx-auto px-4 py-8 hidden">
        <Carousel />
      </div>
      <Footer />
    </main>
  );
}
