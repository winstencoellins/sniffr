import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-yellow-700">
      {/* Welcome Page */}
      <div className="h-screen bg-red-100 flex flex-col justify-between w-10/12 mx-auto">
        <h1 className="my-10">Tracking Your Bill Now is Easier with Sniffr.</h1>

        <Link href="/dashboard" className="my-10 w-full text-center bg-blue-300">Start Now</Link>
      </div>
    </div>
  );
}
