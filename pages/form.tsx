import Layout from "@/components/layout";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";

export default function Form() {
  const [input, setInput] = useState<any>({
    name: "",
    email: "",
    age: null,
    category: null,
    summary: "",
    description: "",
    criminalHistory: "No Pervious History",
  });

  const setLocalStorageItem = (key: any, value: any) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  };

  const linkMap: any = {
    "Related to Income Tax": "/incomeTax",
    "Related to Labour Law": "/labourLaw",
    "Related to Business Law": "/businessLaw",
  };

  return (
    <>
      <Layout>
        <div className="max-w-screen-xl mx-auto m-4">
          <div className="text-xl md:text-4xl py-8 text-center">
            👨‍💻 Enter your case details below :
          </div>
          <div className="md:w-[30vw] mx-auto border border-gray-200 shadow-lg m-4 rounded-lg p-8">
            <FormControl className="flex flex-col gap-6">
              <div className="">
                <FormLabel>Name</FormLabel>
                <Input
                  type="email"
                  value={input.name}
                  placeholder="Enter your name"
                  onChange={(event) => {
                    setInput((prev: any) => ({
                      ...prev,
                      name: event.target.value,
                    }));
                  }}
                />
              </div>
              <div className="">
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={input.email}
                  onChange={(event) => {
                    setInput((prev: any) => ({
                      ...prev,
                      email: event.target.value,
                    }));
                  }}
                />
              </div>
              <div className="">
                <FormLabel>Age</FormLabel>
                <Input
                  type="number"
                  placeholder="Enter your age"
                  value={input.age}
                  onChange={(event) => {
                    setInput((prev: any) => ({
                      ...prev,
                      age: event.target.value,
                    }));
                  }}
                />
              </div>
              <div className="">
                <FormLabel>Select Your Case Category:</FormLabel>
                <Select
                  placeholder="Select option"
                  onChange={(event) => {
                    setInput((prev: any) => ({
                      ...prev,
                      category: event.target.value,
                    }));
                  }}
                >
                  <option value="Related to Income Tax">
                    Related to Income Tax
                  </option>
                  <option value="Related to Business Law">
                    Related to Business Law
                  </option>
                  <option value="Related to Labour Law">
                    Related to Labour Law
                  </option>
                </Select>
              </div>
              <hr></hr>
              <div className="text-lg">Describe your case to us :</div>
              <div className="">
                <FormLabel>Summary of your problem :</FormLabel>
                <Textarea
                  onChange={(event) => {
                    setInput((prev: any) => ({
                      ...prev,
                      summary: event.target.value,
                    }));
                  }}
                />
                <FormHelperText>
                  {"Explain your problem in brief"}
                </FormHelperText>
              </div>
              <div className="">
                <FormLabel>Description :</FormLabel>
                <Textarea
                  onChange={(event) => {
                    setInput((prev: any) => ({
                      ...prev,
                      description: event.target.value,
                    }));
                  }}
                  placeholder={`How it started ? \nHow it is affecting you ? \nWhat steps you have taken till now ?`}
                />
                <FormHelperText>
                  {"Provide the description of how your case started"}
                </FormHelperText>
              </div>
              <div className="">
                <FormLabel>Criminal History (Optional) :</FormLabel>
                <Textarea
                  onChange={(event) => {
                    setInput((prev: any) => ({
                      ...prev,
                      criminalHistory: event.target.value,
                    }));
                  }}
                />
                <FormHelperText>
                  {"Criminal History if you have any (Optional)"}
                </FormHelperText>
              </div>
              <Link href={linkMap[input.category] ?? ""}>
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    console.log(input);
                    setLocalStorageItem("input", input);
                  }}
                >
                  Submit your Details
                </Button>
              </Link>
            </FormControl>
          </div>
        </div>
      </Layout>
    </>
  );
}
