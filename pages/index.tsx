import React from "react";
import Image from "next/image";
import ImageCard from "../components/ImageCard";
import { destinations } from "../Data/dummy";

export default function Index() {
  return (
    <React.Fragment>
      <main className="bg-teal font-montserrat">
        <section>
          <nav>
            <Image
              src="/logo.svg"
              width={200}
              height={100}
              layout="intrinsic"
              alt=""
            />
          </nav>
          <section className="flex items-center justify-center">
            <div className="text-white flex flex-col items-center justify-center md:max-w-[600px]">
              <h3 className="text-2xl font-medium">Destinations</h3>
              <p className="mx-4 mt-4 text-center">
                {" "}
                It&apos;s hard enough deciding to move, you don&apos;t have to
                worry about where to move to. These are some of the most popular
                and best locations to move to based on a number of factors.{" "}
              </p>
            </div>
          </section>

          <section className="flex flex-col items-center justify-center mt-[3rem]">
            <div className="flex flex-col md:grid md:grid-cols-2 md:max-w-[700px] gap-4 mt-4 mb-[3rem] items-center justify-center">
              {destinations.map((destination) => (
                <ImageCard
                  key={destination.id}
                  imageUrl={destination.imageUrl}
                  title={destination.title}
                />
              ))}
            </div>
          </section>
        </section>

        <footer className="text-center text-white">
          <h3>All Rights Reserved - Tazama Africa</h3>
        </footer>
      </main>
    </React.Fragment>
  );
}
