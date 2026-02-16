import { ReactNode } from "react";
import Header from "./Header";
import WhatsAppButton from "./WhatsAppButton";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Layout;
