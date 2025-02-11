//import Image from "next/image";

import { CommandButton } from "@/app/components/commandBlock/page";


export default function Home() {
  return (
    <section className="mainAppSection">
       <main className="mainApp">
        <div>
          <p>cgOS-inicial-configuration</p>
          <p>concept</p>
        </div>

        <CommandButton/>
        
      </main>
    </section>
   
  );
}
