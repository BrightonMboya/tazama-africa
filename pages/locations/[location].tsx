import React, { SyntheticEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import locations from "../../Data/locations.json";

interface destinationInterface {
  id: string;
  imageUrl: string;
  title: string;
  fixedPrice: number;
}

export default function Destination(props: {
  specificDestination: destinationInterface;
  hasError: boolean;
}) {
  const [touristNo, setTouristNo] = useState(0);
  const [daysNo, setDaysNo] = useState(0);
  const [mealsNo, setMealsNo] = useState(0);

  const router = useRouter();
  if (props.hasError) {
    return <h1>Error - please try another parameter</h1>;
  }
  if (router.isFallback) {
    return <h1>Loading ...</h1>;
  }

  //   const fixedPrice = props.destinationData.fixedPrice

  return (
    <React.Fragment>
      <main className="font-montserrat">
        <section>
          <div className="relative h-[500px] w-full flex items-center justify-center bg-black">
            <Image
              src={props.specificDestination.imageUrl}
              alt=""
              layout="fill"
              objectFit="cover"
              className="opacity-70"
            />

            <Link href="/">
              <Image
                src="/logo.svg"
                width={200}
                height={100}
                layout="intrinsic"
                alt=""
              />
            </Link>
          </div>
        </section>
        <section className="flex items-center justify-center">
          <form className="flex flex-col items-center">
            <h3 className="text-center mt-[2rem]">
              Please Enter the number of the expected visitors
            </h3>
            <h3 className="max-w-[300px] text-center flex items-center justify-center">
              You&apos;re now generating a budget for{" "}
              {props.specificDestination.title} destination
            </h3>
            <div className="mt-[3rem] flex flex-col">
              <label htmlFor="people">
                Enter the expected number of people
              </label>
              <input
                type="number"
                min="1"
                max="100"
                onChange={(e: any) => setTouristNo(e.target.value)}
                className="border-[1px] border-slate-300 rounded-md w-[302px]"
              />
            </div>

            <div className="mt-[1rem] flex flex-col">
              <label htmlFor="people">Enter the number of Meals a day</label>
              <input
                type="number"
                min="1"
                max="100"
                onChange={(e: any) => setMealsNo(e.target.value)}
                className="border-[1px] border-slate-300 rounded-md w-[302px]"
              />
            </div>

            <div className="mt-[1rem] flex flex-col">
              <label htmlFor="people">Enter the number of days</label>
              <input
                type="number"
                min="1"
                max="100"
                onChange={(e: any) => setDaysNo(e.target.value)}
                className="border-[1px] border-slate-300 rounded-md w-[302px]"
              />
            </div>

            <p className="mt-3">
              The estimated budget is $
              {touristNo * 100 + daysNo * 100 + mealsNo * 10}
            </p>

            <button className="bg-amber-400 rounded-md px-2 py-2 cursor-pointer mt-3">
              Generate a new Quotation
            </button>
          </form>
        </section>
      </main>
    </React.Fragment>
  );
}

// these are fns to call the data;
export const getStaticProps: GetStaticProps = (context) => {
  const itemId = context.params?.location;
  const data = locations;
  const foundItem = data.destinations.find(
    (item: destinationInterface) => itemId === item.title
  );

  if (!foundItem) {
    return {
      props: { hasError: true },
    };
  }

  return {
    props: {
      specificDestination: foundItem,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const data = locations;

  const pathsWithParams = data.destinations.map(
    (location: destinationInterface) => ({
      params: { location: location.title },
    })
  );
  return {
    paths: pathsWithParams,
    fallback: true,
  };
};
