import Image from "next/image";
import Header from "@/components/Header";
import {Aside} from "@/components/Aside";

export default function Home() {
  return (
      <div className="min-h-screen flex flex-col items-center bg-zinc-100 font-sans dark:bg-black">
          <Header/>
          <main className={"flex flex-1 w-screen h-screen items-center justify-center"}>
             <Aside/>
              <section className={` min-h-screen bg-amber-300 w-full max-w-4xl flex-col  items-center 
              justify-between py-32 px-16 sm:items-start`}>
                <div className={`w-full flex items-center justify-center`}>

                </div>
              </section>
          </main>

    </div>
  );
}
