import React from "react";
import Link from "next/link";
import FormsSms from "@/components/FormsSms";

const smsThread = () => {
  return (
    <div>
      <Link href="/">
        <img
          className="w-24 absolute left-8 top-6"
          src="https://qmeter.net/assets/images/statics/qmeter_logo.png"
        />
      </Link>
      <header className="flex justify-center items-start mt-4">
        <h1 className="text-3xl">SMS Thread</h1>
      </header>
      <div className="w-5/6 bg-white rounded mt-5 mx-auto py-3 ">
        <div className="header pl-5 pb-4">
          <h4 className="text-2xl">SMS thread</h4>
        </div>
        <div className="bg-gray-300 w-[100%] mb-5 h-[1px]"></div>
        <FormsSms />
      </div>
    </div>
  );
};

export default smsThread;
