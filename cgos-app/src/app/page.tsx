//import Image from "next/image";
import { commandblock } from '../components/commandBlock/page'

export default function Home() {
  return (
    <section className="mainAppSection">
       <main className="mainApp">
        <div>
          <p>cgOS-inicial-configuration</p>
          <p>concept</p>
        </div>

        <commandblock/>
    
      </main>
    </section>
   
  );
}
