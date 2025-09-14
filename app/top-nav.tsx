import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link";
import { headers } from "next/headers";


const mapPathToTab = {
  "/": "home",
  "/about": "about"
}

const getCurrentTab = (path: string | null) => {
  if (!path) return "home";
  return mapPathToTab[path as keyof typeof mapPathToTab] || "home"
}
export default async function TopNav() {
  const headersList = await headers();
  const path = headersList.get("x-pathname"); // fallback if needed
  const currentTab = getCurrentTab(path);

  return (
    <>
      <Tabs className="flex-row justify-center pt-4" defaultValue={currentTab}>
        <TabsList>
          <TabsTrigger value="home"><Link href="/">Home</Link></TabsTrigger>
          <TabsTrigger value="about"><Link href="/about">About</Link></TabsTrigger>
        </TabsList>
      </Tabs >
    </>
  )
}