import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Scene from "components/3d/scene";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>R3F Template</title>
        <meta name="description" content="Generated by create-t3-app" />
      </Head>
      <main className="">
        <div className="relative z-10 mx-4 flex flex-col justify-start overflow-hidden bg-transparent text-left tracking-tight text-white max-md:translate-y-4 lg:h-screen lg:w-[40vw] lg:justify-center">
          <div className="text-9xl text-pink-600 font-black tracking-tight">
            <div>Dazzling Donuts.</div>
          </div>
        </div>
        <div className="fixed left-0 top-0 h-screen w-screen bg-black">
          <Canvas className="bg-gradient-to-b from-pink-950/40 from-5% to-black to-100%">
            <Scene />
            <OrbitControls />
          </Canvas>
        </div>
      </main>
    </>
  );
}
