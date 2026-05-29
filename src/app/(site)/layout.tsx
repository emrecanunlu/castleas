import { ViewTransition } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ViewTransition enter="page-fade-up" exit="page-fade-up">
          {children}
        </ViewTransition>
      </main>
      <Footer />
    </>
  );
}
