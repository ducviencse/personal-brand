import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-col items-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">What I built:</h1>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <Link className="text-blue-600" href="https://don-vi-hanh-chinh-moi.viennguyen.com?utm_source=tonyshome" target="_blank">New province lookup in VietNam(Tra cứu đơn vị hành chính mới)</Link>
        </li>
        <li>
          <Link className="text-blue-600" href="https://score-tracker.viennguyen.com?utm_source=tonyshome" target="_blank">Score tracker when for playing game in a group</Link>
        </li>
      </ul>
      <p>More coming soon...</p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Technical blog about HTML, CSS, JavaScript, React, Next.js,...</li>
        <li>My journey as a part-time indie hacker</li>
        <li>My experience as a software engineer</li>
        <li>And more...</li>
      </ul>
    </div >
  );
}
