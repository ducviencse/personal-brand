import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Hello!</h1>
        <p>My name is Tony Nguyen</p>
        <Image src="/me.jpeg" width={512} height={512} alt="avatar"/>
        <p>I am a part time indie hacker and a full-time software engineer, building products and sharing my journey here</p>
        <p>Find me on:</p>
        <li>
          <Link href="/">My website</Link>
        </li>
        <li>
          <Link href="https://x.com/viennguyen_me">My X(Twitter) account</Link>
        </li>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
