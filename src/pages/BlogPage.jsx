import React from "react";
import Container from "../componets/Container";
import Header from "../componets/Header";
import Footer from "../componets/Footer";
import { Typography } from "@material-tailwind/react";

function BlogPage() {
  return (
    <div className="bg-[#121316]">
      <Header />
      <div className=" pt-32 flex justify-center text-center leading-8">
        <Container>
          <div>
            <span className="p-3 border rounded-lg text-amber-500 text-xs">
              Travelling
            </span>
            <Typography variant="h2" color="white" className="mt-12 mb-4">
              personalized services for every client.
            </Typography>
            <span className=" text-gray-600 mr-5 font-semibold">
              June 12 2024
            </span>
            <span className=" text-gray-600 font-semibold">5min read</span>
          </div>

          {/* img */}
          <div className="mt-4 flex items-center justify-center ">
            <img
              src="https://images.unsplash.com/photo-1623837922074-8d29ce30c40f?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Preview"
              className="w-[100%] max-w-full max-h-96 rounded mb-4 object-cover rounded-2xl"
            />
          </div>
          {/* main content */}

          <div className="text-white pt-3 pb-14 text-start">
            <Typography variant="h6" color="amber" className="mt-12 mb-4">
              Read the article
            </Typography>
            <p>
              <img
                src="https://images.unsplash.com/photo-1623837922074-8d29ce30c40f?q=80&amp;w=2865&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image"
                width="90"
                height="111"
              />{" "}
              &nbsp;
            </p>
            <h1>Exploring the Enchanting City of Kyoto</h1>

            <p>
              Kyoto, Japan, is a city that seamlessly blends the old with the
              new, offering a journey through time with its historic temples,
              traditional tea houses, and vibrant cultural festivals. If you're
              planning a trip to this enchanting city, here are some highlights
              and tips to make the most of your visit.
            </p>
            <h3 className="">Day 1: Arrival and First Impressions</h3>
            <p>
              As soon as you step off the Shinkansen (bullet train) and into
              Kyoto Station, you&rsquo;ll be struck by the city's unique blend
              of modernity and tradition. The station itself is a marvel, with
              its futuristic architecture and a shopping mall that houses
              everything from high-end boutiques to local eateries.
            </p>
            <p>
              <strong>Tip:</strong> Head straight to your accommodation to drop
              off your bags. Kyoto has a range of lodging options, from
              luxurious ryokan (traditional inns) to budget-friendly hostels.
            </p>
            <h4>Must-See Temples and Shrines</h4>
            <p>
              <strong>Kinkaku-ji (The Golden Pavilion):</strong> Start your
              sightseeing with a visit to Kinkaku-ji, one of Kyoto's most iconic
              landmarks. The golden temple, reflected in the surrounding pond,
              is a sight to behold, especially in the early morning light.
            </p>
            <p>
              <strong>Fushimi Inari-taisha:</strong> Famous for its thousands of
              red torii gates, Fushimi Inari Shrine is a must-visit. The hike up
              the mountain through the torii gates is both serene and
              invigorating, offering stunning views of Kyoto from the top.
            </p>
            <p>
              <strong>Kiyomizu-dera:</strong> This historic temple offers
              breathtaking views of the city. The wooden stage, which juts out
              from the main hall, provides an excellent spot for photos,
              especially during cherry blossom season.
            </p>
            <h4>Cultural Experiences</h4>
            <p>
              <strong>Tea Ceremony:</strong> Kyoto is renowned for its tea
              culture. Book a traditional tea ceremony to experience the art of
              tea making and understand its significance in Japanese culture.
            </p>
            <p>
              <strong>Gion District:</strong> In the evening, take a stroll
              through the Gion District, known for its well-preserved wooden
              machiya houses and geisha sightings. If you&rsquo;re lucky, you
              might see a geisha or maiko (apprentice geisha) walking to an
              appointment.
            </p>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default BlogPage;
