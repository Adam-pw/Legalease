import Image from "next/image";
interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="flex flex-col w-full gap-4">
        <header className="container sticky top-0 z-40 w-full mx-auto">
          <div className="border-b border-b-slate-200 py-4 w-full">
            <nav className="mx-4 px-6 flex items-center">
              <div className="text-xl font-semibold">Home</div>
            </nav>
          </div>
        </header>
        <div>
          <main className="flex w-full flex-1 flex-col overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
