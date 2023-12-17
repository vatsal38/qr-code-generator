import { Fragment } from "react";
import MetaHead from "@/components/MetaHead";
import QRCodeGenerator from "@/components/QRCodeGenerator";

export default function Home() {
  return (
    <Fragment>
      <MetaHead />
      <main className="relative">
        <QRCodeGenerator />
        <div className="absolute top-0 -z-10 h-screen lg:min-h-screen lg:max-h-full w-full overflow-hidden blur-sm">
          <img src="/images/bg.jpg" className="h-full w-full" />
        </div>
      </main>
    </Fragment>
  );
}
