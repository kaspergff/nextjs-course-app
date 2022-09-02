import Link from "next/link";
import Layout from "components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center mb-8">
        <div className="flex flex-col self-stretch">
          <p className="text-center text-4xl mt-24 font-bold">
            Easy to use{" "}
            <strong className="text-emerald-600 font-bold">courses </strong>
            website
            <strong className="text-emerald-600 font-bold"> template</strong>
          </p>
        </div>
        <div className="text-center mt-14">
          <Link href="/courses">
            <a className="btn btn-primary btn-big">Check courses!</a>
          </Link>
        </div>

        <div data-aos="fade" className="flex flex-col self-stretch">
          <p className="text-center text-4xl mt-20 font-bold">
            It‘s totaly free!
          </p>

          <p className="text-center text-2xl mt-6 text-gray-500 leading-8">
            Simple website to create online courses.
            <br className="hidden sm:inline" />
            Build with:{" "}
            <strong className="text-emerald-600 font-bold">
              Next js, tailwind and firebase{" "}
            </strong>
          </p>

          <div className="text-center mt-12">
            <a
              href="https://github.com/kaspergff/nextjs-course-app"
              className="btn btn-primary btn-big">
              check the source code
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
