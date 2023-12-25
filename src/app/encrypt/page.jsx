"use client";
import { Lock } from "lucide-react";
import { useState } from "react";
import CryptoJS from "crypto-js";

const emojiMapping = {
  a: "😀",
  b: "😃",
  c: "😄",
  d: "😁",
  e: "😆",
  f: "😅",
  g: "😂",
  h: "🤣",
  i: "😊",
  j: "😇",
  k: "🥲",
  l: "😍",
  m: "👍",
  n: "🤦‍♂️",
  o: "🤷‍♀️",
  p: "😘",
  q: "🤗",
  r: "😗",
  s: "🙂",
  t: "🤗",
  u: "🤩",
  v: "🤔",
  w: "🫡",
  x: "🤨",
  v: "💕",
  y: "🤐",
  z: "😶",
  A: "😶‍🌫️",
  B: "😏",
  C: "😣",
  D: "🫥",
  E: "😴",
  F: "🥱",
  G: "😫",
  H: "😪",
  I: "😌",
  J: "😛",
  K: "😓",
  L: "😔",
  M: "😕",
  N: "🫤",
  O: "🙃",
  P: "🫠",
  Q: "😞",
  R: "😖",
  S: "🙁",
  T: "☹️",
  U: "😲",
  V: "🤑",
  W: "😟",
  X: "😤",
  Y: "😢",
  Z: "😭",
  0: "😦",
  1: "😧",
  2: "😨",
  3: "😩",
  4: "🤯",
  5: "😬",
  6: "😮‍💨",
  7: "😰",
  8: "😵",
  9: "🤪",
  "+": "😵‍💫",
  "=": "🥴",
  "/": "😠",
  "-": "😡",
  "#": "🤬",
};

// Function to convert string to emoji
const stringToEmoji = (str) => {
  let emojiStr = "";
  for (let i = 0; i < str.length; i++) {
    emojiStr += emojiMapping[str[i]] || str[i];
  }
  return emojiStr;
};

const Encrypt = () => {
  const [encrypt, setEncrypt] = useState(false);
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [encryptedMessage, setEncryptedMessage] = useState("");

  const emojiMaker = () => {
    setEncrypt(true);
    encryptMessage();
  };

  const encryptMessage = () => {
    const ciphertext = CryptoJS.AES.encrypt(message, password).toString();
    // const emojiCiphertext = stringToEmoji(ciphertext);
    setEncryptedMessage(ciphertext);
  };

  return (
    <>
      <div className="header text-center mt-10">
        <h1 className="text-xl">Create your secret message!</h1>
        <p className="text-sm text-red-700 mt-5">Encryption method</p>
      </div>

      <div className="inputs mt-10 text-center">
        <p className=" text-gray-200 text-sm">1. Write your message here.</p>
        <textarea
          name="message"
          cols="30"
          rows="5"
          className="bg-[#111111]  border-white rounded-md px-2 py-2 mt-2 border-2"
          placeholder="Eg: My name is Omkar!"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <p className="mt-5 text-gray-200 text-sm">2. Set password.</p>
        <input
          type="password"
          name="password"
          className="bg-[#111111]  border-white rounded-md px-2 py-2 mt-2 border-2"
          placeholder="Eg: 1234"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="mt-5">
          <p className="mb-3 text-gray-200 text-sm">3. Encrypt message</p>
          <button
            className="bg-[#1c1c1c] px-8 py-4 rounded-lg  transition-all duration-200"
            onClick={() => emojiMaker()}
          >
            <span className="flex items-center gap-2 hover:text-red-500 transition-all duration-300">
              <Lock />
              Encrypt
            </span>
          </button>
        </div>

        <div className={`copy-msg mt-10 ${encrypt ? "" : "hidden"}`}>
          <p className="text-gray-200 text-sm">Copy and send to your buddy!</p>
          <textarea
            name="copy-message"
            cols="30"
            rows="6"
            className="bg-[#111111]  border-white rounded-md px-2 py-2 mt-2 border-2"
            value={encryptedMessage}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Encrypt;
