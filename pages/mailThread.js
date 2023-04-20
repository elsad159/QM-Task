"useclient";
import Link from "next/link";
import React from "react";
import FormsMail from "@/components/FormsMail";

function MailThreadPage() {
  return (
    <div className="bg-gray-100 h-fit">
      <Link href="/">
        <img
          className="w-24 absolute left-8 top-6"
          src="https://qmeter.net/assets/images/statics/qmeter_logo.png"
        />
      </Link>
      <header className="flex justify-center items-start py-4">
        <h1 className="text-3xl">Mail Thread</h1>
      </header>
      <div className="w-5/6 bg-white rounded mt-5 mx-auto py-3 ">
        <div className="header pl-5 pb-4">
          <h4 className="text-2xl">Email thread</h4>
        </div>
        <div className="bg-gray-300 w-[100%] mb-5 h-[1px]"></div>
        <FormsMail />
      </div>
    </div>
  );
}

export default MailThreadPage;
