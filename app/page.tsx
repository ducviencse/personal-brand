import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <p>I am Tony, a software developer pursing the indie-hacker dream.</p>
        <p>I can do UI design, do frontend, backend stuffs, a bit of Devops stuffs</p>
        <p>I had experiences most on web development</p>
        <p>This is a place where I share my thoughts, my knowledge, my experiences, also products I build </p>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
