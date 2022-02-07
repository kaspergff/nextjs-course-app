import Link from "next/link";
import Layout from "components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center mb-8">
        <div className="flex flex-col self-stretch">
          <p className="text-center text-4xl mt-24 font-bold">
            Learn how to build modern{" "}
            <strong className="text-emerald-600 font-bold">Web3</strong>
            <br className="hidden sm:inline" /> applications{" "}
            <strong className="text-emerald-600 font-bold">for free!</strong>
          </p>
        </div>
        <div className="text-center mt-14">
          <Link href="/courses">
            <a className="btn btn-primary btn-big">Check the courses!</a>
          </Link>
        </div>

        <div data-aos="fade" className="flex flex-col self-stretch">
          <p className="text-center text-4xl mt-20 font-bold">
            It‘s totaly free!
          </p>

          <p className="text-center text-2xl mt-6 text-gray-500 leading-8">
            Learn how to build{" "}
            <strong className="text-emerald-600 font-bold">Web3</strong>{" "}
            applications by{" "}
            <strong className="text-emerald-600 font-bold">building</strong>{" "}
            real projects!
            <br className="hidden sm:inline" />
            Getting stuck? Having questions? Don‘t hesitate. Join the discord and{" "}
            <strong className="text-emerald-600 font-bold">ask!</strong>
          </p>

          <div className="text-center mt-12">
            <a href="" className="btn btn-primary btn-big">
              Join the Discord
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
