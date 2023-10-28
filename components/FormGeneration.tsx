import { Button } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReactToPrint } from "react-to-print";

const FormGeneration = ({ data }: any) => {
  const ref = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });

  const [timeNow, setTimeNow] = useState<any>();
  useEffect(() => {
    const date = Date().slice(0, -21);
    setTimeNow(date);
  }, []);

  return (
    <>
      <div className="">
        <h1 className="text-2xl font-bold flex flex-col md:flex-row items-center justify-center w-full gap-2 md:gap-0 leading-[1.1] tracking-wide mt-6">
          <span className="text-[#280036]">Case File Generation </span>
          <span className="text-[#ff0041]">{`with LegalEase`}</span>
        </h1>
        <div className="mx-auto w-[70%] mb-10">
          <div className="border border-gray-400 md:p-4 mt-8 rounded-lg shadow-lg">
            <div className="p-8" ref={ref}>
              <div className="text-2xl text-center font-bold underline flex justify-center md:justify-between">
                <Image
                  src="/logo.png"
                  alt=""
                  width={80}
                  height={100}
                  className="hidden md:block"
                />
                <div className="">Case File</div>
                <img
                  src="https://htm-4-images.s3.amazonaws.com/img/HTMLOGHO_%20NEW.png"
                  alt=""
                  width={80}
                  height={100}
                  className="hidden md:block"
                />
              </div>
              <hr className="mt-4 border-t border-gray-400"></hr>
              <div className="mt-2 text-sm text-center">
                The below File is generated by an AI Assistant by the company
                LegalEase, Always check and double verify it by a senior lawyer
                only for reference use.
              </div>
              <hr className="mt-4 border-t border-gray-400"></hr>
              <div className="flex flex-wrap justify-between">
                <div className="">
                  <div className="text-lg font-bold mt-2">
                    Name :{" "}
                    <span className="text-gray-600">{data && data?.name}</span>
                  </div>
                  <div className="text-lg font-bold mt-2">
                    Age :{" "}
                    <span className="text-gray-600">{data && data?.age}</span>
                  </div>
                  <div className="text-lg font-bold mt-2">
                    Email :{" "}
                    <span className="text-gray-600">{data && data?.email}</span>
                  </div>
                </div>
                <div className="">
                  <div className="text-lg font-bold mt-2">
                    Date : <span className="text-gray-600">{timeNow}</span>
                  </div>
                  <div className="text-lg font-bold mt-2">
                    Category : <span className="text-gray-600">Labour Law</span>
                  </div>
                </div>
              </div>
              <hr className="mt-4 border-t border-gray-400"></hr>
              <div className="text-lg font-bold mt-4">
                Articles & Sections Applicable :
              </div>
              <div className="mt-4">
                1. The section this this is available and this is how is done
              </div>
              <div className="mt-4">
                1. The section this this is available and this is how is done
              </div>
              <div className="mt-4">
                1. The section this this is available and this is how is done
              </div>
              <div className="mt-4">
                1. The section this this is available and this is how is done
              </div>
              <div className="mt-4">
                1. The section this this is available and this is how is done
              </div>
            </div>
          </div>
          <Button
            colorScheme="blue"
            className="w-full mt-4"
            onClick={handlePrint}
          >
            Generate your file here
          </Button>
        </div>
      </div>
    </>
  );
};

export default FormGeneration;