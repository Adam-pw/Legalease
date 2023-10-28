import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState<any>({
    name: "",
    email: "",
    age: null,
  });

  return (
    <>
      <div className="max-w-screen-xl mx-auto m-4">
        <div className="text-4xl py-8 text-center">
          Enter your case details below :
        </div>
        <div className="w-[30vw] mx-auto border border-gray-200 shadow-lg m-4 rounded-lg p-8">
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
              <Select placeholder="Select option">
                <option value="option1">Related to Income Tax</option>
                <option value="option2">Related to Business Law</option>
                <option value="option3">Related to Labour Law</option>
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
                    age: event.target.value,
                  }));
                }}
              />
              <FormHelperText>{"Explain your problem in brief"}</FormHelperText>
            </div>
            <div className="">
              <FormLabel>Criminal History (Optional)</FormLabel>
              <Textarea
                onChange={(event) => {
                  setInput((prev: any) => ({
                    ...prev,
                    age: event.target.value,
                  }));
                }}
              />
              <FormHelperText>{"Enter your full email"}</FormHelperText>
            </div>
            <div className="">
              <FormLabel>How it started ?</FormLabel>
              <Textarea
                onChange={(event) => {
                  setInput((prev: any) => ({
                    ...prev,
                    age: event.target.value,
                  }));
                }}
              />
              <FormHelperText>{"Enter your full email"}</FormHelperText>
            </div>
          </FormControl>
        </div>
      </div>
    </>
  );
}
