import { memo, PropsWithChildren } from "react";
import { Navbar } from "@/components/Navbar";

interface Props {}

export const CustomLayout = memo(function CustomLayout({
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className="root-container">
      <Navbar />
      <main>{children}</main>
    </div>
  );
});
