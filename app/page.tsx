import Image from "next/image";
import Header from "@/components/UI/header";
import {Aside} from "@/components/UI/aside";
import Landing from "@/components/UI/landing";
import {FiMonitor, FiMoon, FiSun} from "react-icons/fi";

export default function Home() {
  return (
<<<<<<< Updated upstream
      <div className="min-h-screen flex flex-col items-center bg-zinc-100 font-sans dark:bg-black">
          <Header/>
          <main className={"flex flex-row flex-1 w-full min-h-full px-2"}>
             <Aside/>
              <section className={` min-w-[calc(100%-3rem)] min-h-full 
              max-w-3xl flex-col  items-center 
              justify-between py-32 px-16 sm:items-start`}>
                Home
              </section>
          </main>

    </div>
=======
      <div className="w-full h-full">
          <Landing/>
      </div>
>>>>>>> Stashed changes
  );
}
