import Layout from "@/components/layout";
import Link from "next/link";
import React from "react";

const Index = () => {
  return (
    <Layout>
      <div className="max-w-screen-xl md:mx-auto mx-4">
        <div className="flex md:w-[70vw] flex-col justify-center items-center my-12">
          <div
            className="flex w-full flex-col items-center rounded-md bg-cover h-[50vh]"
            style={{
              backgroundImage:
                "url(https://i0.wp.com/compass.rauias.com/wp-content/uploads/2023/08/indian-parliament-64eeedd4361f4.webp)",
              opacity: "100%",
              objectFit: "cover",
            }}
          >
            <div className="w-full bg-black/60 px-[30px] py-[30px] md:px-[64px] md:py-[56px] h-[50vh] flex flex-col justify-center">
              <h4 className="mb-[14px] max-w-full text-xl font-bold text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
                LegalEase - Simplifying Legal Documentation
              </h4>
              <p className="mb-[40px] max-w-full text-base font-medium text-[#E3DAFF] md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]">
                LegalEase is here to make legal paperwork breeze for individuals
                and small business. No legal jargon, no confusion. Just simple
                step by step process to create the document you need.
              </p>
              <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
                <Link href="/form">
                  <button className="text-black linear rounded-md bg-white px-4 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70">
                    Try it Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16 bg-gray-50 overflow-hidden">
        <div className="container m-auto px-6 text-gray-500 md:px-12">
          <div className="w-full text-center">
            <span className="text-gray-600 text-2xl md:text-4xl text-center font-semibold">
              Main features
            </span>
            <h2 className="mt-4 text-2xl text-gray-900 font-bold md:text-4xl">
              A technology-first approach to laws and justice.{" "}
              <br className="lg:block" hidden />
            </h2>
          </div>
          <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <img
                  src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png"
                  className="w-10"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                    User Friendly Interface
                  </h5>
                  <p className="text-sm text-gray-600">
                    Intuitive and easy to navigate platform and simple input
                    form for relevant details
                  </p>
                </div>
                <a
                  href=""
                  className="flex justify-between items-center group-hover:text-yellow-600"
                >
                  <span className="text-sm">Read more</span>
                  <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    {"LegalEase"}
                  </span>
                </a>
              </div>
            </div>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <img
                  src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png"
                  className="w-10"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                    AI-Powered Document Generation
                  </h5>
                  <p className="text-sm text-gray-600">
                    Automatically creates legal documents and uses plain
                    language for easy understanding
                  </p>
                </div>
                <a
                  href=""
                  className="flex justify-between items-center group-hover:text-yellow-600"
                >
                  <span className="text-sm">Read more</span>
                  <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    {"LegalEase"}
                  </span>
                </a>
              </div>
            </div>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <img
                  src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png"
                  className="w-10"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                    Customization Capabilities
                  </h5>
                  <p className="text-sm text-gray-600">
                    Tailor documents for personal needs and ensures documents
                    are personalized
                  </p>
                </div>
                <a
                  href=""
                  className="flex justify-between items-center group-hover:text-yellow-600"
                >
                  <span className="text-sm">Read more</span>
                  <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    {"LegalEase"}
                  </span>
                </a>
              </div>
            </div>
            <div className="relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
              <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                <img
                  src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png"
                  className="w-10"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                    Integration with Legal Resources
                  </h5>
                  <p className="text-sm text-gray-600">
                    Access to trusted legal databases and ensures accuracy and
                    completeness
                  </p>
                </div>
                <a
                  href=""
                  className="flex justify-between items-center group-hover:text-yellow-600"
                >
                  <span className="text-sm">Read more</span>
                  <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    {"LegalEase"}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-[#c2edf9] font-sans mt-32">
          <div className="container px-6 py-12 mx-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
              <div className="sm:col-span-2">
                <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl">
                  Subscribe our newsletter to get an update.
                </h1>

                <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                  <input
                    id="email"
                    type="text"
                    className="px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                    placeholder="Email Address"
                  />

                  <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                    Subscribe
                  </button>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-800">Quick Link</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                  <p className="text-gray-600 transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Home
                  </p>
                  <p className="text-gray-600 transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Who We Are
                  </p>
                  <p className="text-gray-600 transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Our Philosophy
                  </p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-800">Industries</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                  <p className="text-gray-600 transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Justice and laws
                  </p>
                  <p className="text-gray-600 transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Information Technology
                  </p>
                  <p className="text-gray-600 transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Finance & Insurance
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="flex flex-1 gap-4 hover:cursor-pointer">
                <img
                  src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
                  width="130"
                  height="110"
                  alt=""
                />
                <img
                  src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                  width="130"
                  height="110"
                  alt=""
                />
              </div>

              <div className="flex gap-4 hover:cursor-pointer">
                <img
                  src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                  width="30"
                  height="30"
                  alt="fb"
                />
                <img
                  src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                  width="30"
                  height="30"
                  alt="tw"
                />
                <img
                  src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                  width="30"
                  height="30"
                  alt="inst"
                />
                <img
                  src="https://www.svgrepo.com/show/94698/github.svg"
                  className=""
                  width="30"
                  height="30"
                  alt="gt"
                />
                <img
                  src="https://www.svgrepo.com/show/22037/path.svg"
                  width="30"
                  height="30"
                  alt="pn"
                />
                <img
                  src="https://www.svgrepo.com/show/28145/linkedin.svg"
                  width="30"
                  height="30"
                  alt="in"
                />
                <img
                  src="https://www.svgrepo.com/show/22048/dribbble.svg"
                  className=""
                  width="30"
                  height="30"
                  alt="db"
                />
              </div>
            </div>
            <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4">
              © 2023 You Company Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default Index;
