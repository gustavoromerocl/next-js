import { Navbar } from "@/components";

export default function GeneralLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div>
        <h1>Hello Root General About</h1>
        {children}
      </div>
    </>

  );
}