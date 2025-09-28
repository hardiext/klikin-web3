import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { images } from "@/data/image";
import { image } from "motion/react-client";
import Image from "next/image";

const LoginForm = () => {
  return (
    <div className="w-full lg:px-8 lg:py-6 p-0  ">
      <Card className="shadow-none border-0 ">
        <CardHeader className="flex items-center space-x-1">
          <Image src={images.logoDark} alt="logo-dark" width={40} height={40} />
          <h2 className="font-semibold text-lg">Klikinly</h2>
        </CardHeader>
        <CardContent>
          <h1 className="text-2xl font-semibold">Create An account</h1>
          <p className="text-sm text-gray-400 mt-2">
            Let's get started acces e-commerce now
          </p>
          <form action="submit" className="mt-6 flex flex-col gap-6">
            <Input
              name="name"
              type="text"
              placeholder="Name"
              className="rounded-none border-0 border-b pl-0 shadow-none  focus-visible:ring-[0px]  bg-transparent autofill:bg-transparent autofill:text-current"
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              className="rounded-none border-0 border-b pl-0 shadow-none  focus-visible:ring-[0px]  bg-transparent autofill:bg-transparent autofill:text-current"
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              className="rounded-none border-0 border-b pl-0 shadow-none  focus-visible:ring-[0px]  bg-transparent autofill:bg-transparent autofill:text-current"
            />
          </form>
        </CardContent>
        <CardFooter className="mt-4 flex flex-col">
          <div className="flex flex-col space-y-2 w-full">
            <Button className=" h-10  rounded-full bg-slate-900 dark:bg-white  hover:bg-slate-800 cursor-pointer">
              Create account
            </Button>
            <Button className=" h-10 relative rounded-full bg-white shadow-none border border-slate-300 text-slate-900 flex items-center space-x-1.5 hover:bg-slate-100 cursor-pointer">
              <Image
                src={images.googleLogo}
                className=""
                width={24}
                alt="logo-google"
              />
              Sign up with Google
            </Button>
            <Button className=" h-10 relative rounded-full bg-white shadow-none border border-slate-300 text-slate-900 flex items-center gap-2.5 hover:bg-slate-100 cursor-pointer">
              <Image
                src={images.facebookLogo}
                className=""
                width={16}
                alt="logo-facebook"
              />
              Sign in with Twitter
            </Button>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <span className="text-slate-900 font-semibold cursor-pointer border-b-1 pb-0.5order-gray-500">
                Log in
              </span>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
export default LoginForm;
