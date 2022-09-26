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
          <div className="text-white flex flex-col items-center justify-center">
            <h3 className="text-2xl font-medium">Destinations</h3>
            <p className="text-justify mx-4 mt-4">
              {" "}
              It&apos;s hard enough deciding to move, you don&apos;t have to
              worry about where to move to. These are some of the most popular
              and best locations to move to based on a number of factors.{" "}
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-4 items-center justify-center">
            {destinations.map((destination) => (
              <ImageCard
                key={destination.id}
                imageUrl={destination.imageUrl}
                title={destination.title}
              />
            ))}
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
