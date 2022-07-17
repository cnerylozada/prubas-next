/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

const Wrapper = () => {
  return (
    <div
      className="wrapper absolute w-full h-full top-0 left-0
      p-4 bg-black bg-opacity-40 "
    >
      <div className="dropdown relative inline-block">
        <div className="w-[40px] h-[40px] bg-green-300 cursor-pointer"></div>
        <div
          className={`dropdown-content absolute w-[120px] text-left bg-blue-300`}
        >
          <div onClick={() => console.log("option 1")}>Link1</div>
          <div onClick={() => console.log("option 2")}>Link2</div>
          <div onClick={() => console.log("option 3")}>Link3</div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-10">
        <div className="text-lg font-bold text-blue-500">Home page</div>

        <div className="mainContainer relative max-w-fit bg-purple-300">
          <div className="w-[400px] h-[250px] bg-yellow-300"></div>
          <Wrapper />
        </div>

        <div>
          <p>Notes</p>
          <ul className="list-inside list-disc">
            <li>
              En el header hay <span className="font-bold">Links</span> para
              About and Random, Next.js{" "}
              <span className="font-bold">auto prefetches su codigo</span>{" "}
              (comprobar en el inspector) en{" "}
              <span className="font-bold">build</span>
            </li>
            <li>
              Politics es enrutado por useRouter, por eso{" "}
              <span className="font-bold">no es prefetched</span> en build y
              tmpoco se accede por{" "}
              <span className="font-bold">abrir pestania nueva</span>
            </li>
            <li>By default, Next.js pre-renders every page.</li>
          </ul>
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_) => (
          <div key={_} className="grid grid-cols-2 gap-4 h-[500px]">
            <div className="bg-gray-200"></div>
            <div className="bg-gray-200"></div>
          </div>
        ))}
        <div className="text-lg font-bold text-blue-500">Art Gallery</div>
        <div className="space-y-5">
          <img
            src="/images/art-background.png"
            loading="lazy"
            alt="art"
            className="h-64 w-64 object-cover"
          />
          <img
            src="/images/lifestyle-background.png"
            loading="lazy"
            alt="lifestyle"
            className="h-64 w-64 object-cover"
          />
          <img
            src="/images/photography-background.png"
            loading="lazy"
            alt="photography"
            className="h-64 w-64 object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
