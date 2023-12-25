import { Lock, Unlock } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-10">
      <div className="text-center">
        <h1 className=" text-2xl font-bold">Keep it secret!</h1>
        <p className="mt-5 text-4xl">🤫</p>
        <p className="mt-5 text-gray-400">
          Developed with ❤️ by{" "}
          <span className="text-white font-bold cursor-pointer">Omkar!</span>
        </p>
      </div>

      <div className="tabs text-center mt-10">
        <div className="enc">
          <Link href="/encrypt">
            <button className="bg-[#1c1c1c] px-8 py-4 rounded-lg hover:px-10 hover:py-5 transition-all duration-200">
              <span className="flex items-center gap-2 hover:text-red-500 transition-all duration-300">
                <Lock />
                Encrypt
              </span>
            </button>
          </Link>
        </div>
        <div className="dcp mt-3">
          <Link href="/decrypt">
            <button className="bg-[#1c1c1c] px-8 py-4 rounded-lg hover:px-10 hover:py-5 transition-all duration-200">
              <span className="flex items-center gap-2 hover:text-red-500 transition-all duration-300">
                <Unlock />
                Decrypt
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="disc text-center mt-20">
        <p className="text-red-700 font-bold">Disclaimer!</p>
        <p className="text-gray-400 text-sm w-[4  00px] mx-auto mt-3">
          This project is created for recreational purposes, offering end-to-end
          encrypted messaging. Please be aware that the security of your
          messages depends on the strength of your chosen password. This project
          is intended for fun and should not be used for transmitting sensitive
          information. The encryption process ensures that only users with the
          correct password can decrypt and view the original content. By using
          this platform, you acknowledge that the creators are not liable for
          any loss of data or unauthorized access to messages. Users are
          encouraged to use this service responsibly and enjoy the unique and
          entertaining experience it provides.
        </p>
      </div>
    </main>
  );
}
