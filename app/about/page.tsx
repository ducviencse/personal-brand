import Image from "next/image";
import Link from "next/link";

export default async function About(props: PageProps<'/about'>) {
    const search = await props.params;
    console.log("About render", search);
    return (
        <div className="flex-col items-center">
            <main className="flex flex-col gap-[32px] row-start-2 items-start">
                <h1>Hello!</h1>
                <p>My name is Tony Nguyen</p>
                <Image src="/me.jpeg" width={512} height={512} alt="avatar" />
                <p>I am a part time indie hacker and a full-time software engineer, building products and sharing my journey here</p>
                <p>Find me on:</p>
                <li>
                    <Link href="/" className="text-blue-600">My website</Link>
                </li>
                <li>
                    <Link href="https://x.com/viennguyen_me" className="text-blue-600">My X(Twitter) account</Link>
                </li>
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

            </footer>
        </div>
    );
}
