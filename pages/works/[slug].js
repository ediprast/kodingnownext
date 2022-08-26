import Footer from "../../components/Footer";
import Button from "../../components/parts/Button";
import workDatas from "../../assets/works.json";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import datas from "../../assets/data.json";

function WorkDetail(currentWork) {
  const { locale } = useRouter();
  return (
    <>
      {datas.data
        .filter((p) => p.locale === locale)
        .map((data, i) => {
          return (
            <div key={i}>
              <header className="header container">
                <div className="navbar w-full py-10">
                  <div className="relative flex flex-row justify-between items-center">
                    <div className="w-6/12">
                      <Link href="/">
                        <a>
                          <img
                            className="h-8"
                            src="/images/logo-color40x40.png"
                            alt="KodingNow Logo"
                          />
                        </a>
                      </Link>
                    </div>

                    <div className="w-6/12 block text-right">
                      <Link href="/works">
                        <a className="bg-purple-light rounded-full py-2 px-5 text-white-light transition-all duration-300 border border-purple-light hover:bg-white hover:text-purple-light">
                          {data.all_work}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </header>

              <section className="py-20">
                <div className="container">
                  <h2 className="font-semibold text-center text-xl md:text-3xl">
                    {currentWork.title}
                  </h2>
                  <p className="text-center text-gray-700 mb-10">
                    {data.section_title_work}
                  </p>

                  <div className="w-full lg:w-1/2 mx-auto mb-10">
                    <div className="rounded-lg overflow-hidden">
                      <img
                        className="object-cover"
                        src={currentWork.image_url}
                        alt="Our Works Image"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-8">
                    <h5 className="text-xl font-semibold">
                      {data.description}:
                    </h5>
                    <p className="text-gray-700">{currentWork.description}</p>
                    <h5 className="">
                      {data.year}: {currentWork.year}
                    </h5>
                    <div>
                      <Button href={currentWork.result_link}>
                        {data.view_result}
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
              <Footer />
            </div>
          );
        })}
    </>
  );
}

WorkDetail.getInitialProps = async (props) => {
  const { slug } = props.query;
  try {
    console.log("slug: " + slug);
    const currentWork = workDatas.data.find((work) => {
      return work.slug == slug;
    });

    return currentWork;
  } catch (error) {
    console.log(error);
  }
};

export default WorkDetail;
