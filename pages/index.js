import React from "react";
import Link from "next/link";
import Typist from "react-text-typist";

export default function Home() {
  return (
    <div className="w-full bg-slate-600 h-screen py-8">
      <div className="links flex">
        <Link href="/">
          <img
            className="w-24 ml-5"
            src="https://qmeter.net/assets/images/statics/qmeter_logo.png"
          />
        </Link>
        <Link className="text-white ml-6  hover:text-black" href="/campaignMenu">
          Go to Champaign Menu
        </Link>
        <Link className="text-white ml-6 hover:text-black" href="/mailThread">
          Go to Mail Thread
        </Link>
        <Link className="text-white ml-6 hover:text-black" href="/smsThread">
          Go To SMS Thread
        </Link>
      </div>
      <div className="flex items-center h-[80vh] justify-center">
        <Typist
          style={{ fontSize: 35, color: "white" }}
          sentences={[
            "Main Task From QMeter!",
            "The project was prepared by Elshad Khalilov.",
          ]}
          loop={false}
        />
      </div>
    </div>
  );
}
