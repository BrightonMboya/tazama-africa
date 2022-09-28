import React, { SyntheticEvent, useState } from "react";
import Image from "next/image";
import { GetStaticProps, GetStaticPaths } from "next";
import path from "path";
import fs from "fs/promises";

interface destinationInterface {
  id: number;
  imageUrl: string;
  title: string;
  fixedPrice: number;
}

export default function Destination() {
  const [touristNo, setTouristNo] = useState(0);
  const [daysNo, setDaysNo] = useState(0);
  const [mealsNo, setMealsNo] = useState(0);

  async function getData() {
    const filePath = path.join(process.cwd(), "Data", "dummy.js");
    const fileData = await fs.readFile(filePath);
    const data = JSON.parse(fileData.toString());
  }

  return (
    <React.Fragment>
      <main className="font-montserrat">
        <section>
          <div className="relative h-[200px] w-full flex items-center justify-center bg-black">
            <Image
              src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VyZW5nZXRpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className="opacity-70"
            />

            <Image
              src="/logo.svg"
              width={200}
              height={100}
              layout="intrinsic"
              alt=""
            />
          </div>
        </section>
        <section className="flex items-center justify-center">
          <form className="flex flex-col items-center">
            <h3 className="text-center mt-[2rem]">
              Please Enter the number of the expected visitors
            </h3>
            <div className="mt-[1rem] flex flex-col">
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

            <button className="bg-amber-400 rounded-md px-2 py-2 cursor-pointer mt-3">
              Ask for Quotation
            </button>

            <p className="mt-3">
              The estimated budget is $
              {touristNo * 2500 + daysNo * 100 + mealsNo * 10}
            </p>
          </form>
        </section>
      </main>
    </React.Fragment>
  );
}

export const GetStaticProps: GetStaticProps = async (context) => {
  const itemId = context.params?.location;
  const data = await getData();
  const foundItem = data.destinations.find(
    (item: destinationInterface) => itemId === item.id
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
