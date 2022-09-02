import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-emerald-800 bg-opacity-90 text-pink-200 md:p-12 sm:p-8 p-4 leading-7">
      <p className="text-2xl mb-4">
        <Link href="/">
          <a className="text-white">Markdown based course website</a>
        </Link>
      </p>
      <p>
        Built by{" "}
        <a
          className="text-white"
          href="https://kasperdegraaff.com"
          target="_blank"
          rel="noopener noreferrer">
          Kasper de Graaff
        </a>{" "}
        (
        <a
          className="text-white"
          href="https://github.com/kaspergff"
          target="_blank"
          rel="noopener noreferrer">
          @kaspergff
        </a>
        )
      </p>
    </footer>
  );
};

export default Footer;
