import { useState } from "react";
import Buku from "./components/Buku";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Crud from "./components/Crud";
import Lifecycle from "./components/Lifecycle";
import Mapping from "./components/Mapping";
import Navbar from "./components/Navbar";
import Peminjam from "./components/Peminjam";
import Welcome from "./components/Welcome";

function App() {
  const [isPinjam, setIsPinjam] = useState(false);
  return (
    <main>
      <Navbar />
      <section className="w-3/4 mx-auto">
        {/* <Carousel />
        <Welcome />
        <Mapping />
        <section className="flex gap-4 mt-2">
          <Card />
          <Card />
        </section>
        <Lifecycle /> */}
        {/* <Crud /> */}
        <section className="mt-20">
          <button
            onClick={() => setIsPinjam(!isPinjam)}
            className={`btn mr-2 ${
              !isPinjam ? "btn-primary" : "text-black"
            } text-white`}
          >
            Daftar Buku
          </button>
          <button
            onClick={() => setIsPinjam(!isPinjam)}
            className={`btn text-white ${
              !isPinjam ? "text-black" : "btn-primary"
            }`}
          >
            Daftar Peminjam
          </button>
        </section>
        {isPinjam ? <Peminjam /> : <Buku />}
      </section>
    </main>
  );
}

export default App;
