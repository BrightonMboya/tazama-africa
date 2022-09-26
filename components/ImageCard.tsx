import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  imageUrl: string;
}

export default function ImageCard(props: Props) {
  return (
    <React.Fragment>
      <div className="relative h-[500px] w-[300px] rounded-md bg-[rgba(0,0,0,0.7)]">
        <Image
          src={props.imageUrl}
          alt=""
          layout="fill"
          className="rounded-md opacity-70"
          objectFit="cover"
        />

        <div className="absolute text-white text-3xl top-[50%] left-[20%]">
          <h3>{props.title}</h3>
        </div>
      </div>
    </React.Fragment>
  );
}
