import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-center align-middle flex-col">
        <h1 className="text-4xl font-bold text-center pb-8">Video Test</h1>
        <div style={{borderRadius: "5px", overflow: "auto"}}>
          <video
            src="./MissingDataWarning.mp4"
            controls
            autoPlay
            muted
            className="max-w-screen-lg"
          ></video>
        </div>
      </div>
    </main>
  );
}
