import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function () {
  return (
    <main>
      <Card className=" flex-none sm :items-center sm:flex justify-around bg-primary-50 ">
        <div>
          <CardHeader>
            <CardTitle className="text-5xl">CREATE UPDATE</CardTitle>
            <CardTitle className="text-5xl">DELETE AND FINISH !</CardTitle>
            <CardDescription>
              Best site to plan your day by creating and priortizing events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="rounded-full bg-violet-600 hover:bg-violet-500 w-full">
              Explore More
            </Button>
          </CardContent>
          <CardFooter></CardFooter>
        </div>
        <div>
          <Image
            src="/assets/images/hero.png"
            width={280}
            height={240}
            alt="main"
            className="h-25 ml-20 mb-4"
          ></Image>
        </div>
      </Card>
      <Separator></Separator>
      <h1 className="text-4xl ml-20 sm:ml-35 mt-3"> Create a new event</h1>
    </main>
  );
}
