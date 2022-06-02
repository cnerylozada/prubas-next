import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  return (
    <div className="flex bg-gray-100 border-b-2">
      <Link href="/">
        <a className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Home</a>
      </Link>
      <Link href="/about">
        <a className="py-2 px-4 hover:bg-gray-200 cursor-pointer">About</a>
      </Link>
      <a
        href="/terms-conditions"
        target="_blank"
        className="py-2 px-4 hover:bg-gray-200"
      >
        Terms and Conditions
      </a>
      <div
        onClick={() => router.push("/politics")}
        className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
      >
        Politics
      </div>
    </div>
  );
};
