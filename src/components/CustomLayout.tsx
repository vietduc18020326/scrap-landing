import { memo, PropsWithChildren } from "react";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";

interface Props {}

export const CustomLayout = memo(function CustomLayout({
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className="root-container">
      <Navbar />
      <main className={`flex min-h-screen flex-col`}>{children}</main>
      <FooterSection />
    </div>
  );
});
