import Header from "@/components/header";
import Navigation from "@/components/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <div className="w-11/12 mx-auto py-10 mb-10 md:max-w-xl">
            <Header />
            {children}
            <Navigation />
        </div>
    </div>
  );
}