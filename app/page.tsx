import Image from "next/image";
import NkwaTest from "./components/NkwaTest";
import HelloWorld from "./components/helloworld";
import PaymentPage from "./components/LiveTest";
export default function Home() {

  
  return (
   <div>
    <div className="container mx-auto p-4 text-center">
      <h1>Welcome to My Next.js App</h1>
      <p>This is a simple example of a Next.js application to test the Nkwa payment gateway</p>
    </div>
    <PaymentPage />
    </div>
  );
}
