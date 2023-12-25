"use client";
import { Unlock } from "lucide-react";
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

// const stringToEmoji = (str) => {
//   let emojiStr = "";
//   for (let i = 0; i < str.length; i++) {
//     emojiStr += emojiMapping[str[i]] || str[i];
//   }
//   return emojiStr;
// };

// Function to convert emoji to string
const emojiToString = (emojiStr) => {
  let str = "";
  for (let i = 0; i < emojiStr.length; i++) {
    str += getKeyByValue(emojiMapping, emojiStr[i]) || emojiStr[i];
  }

  return str;
};

// Function to get key by value
const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};

const Decrypt = () => {
  const [decrypt, setDecrypt] = useState(false);
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [decryptedMessage, setDecryptedMessage] = useState("");

  const txtMaker = () => {
    if (message && password) {
      setDecrypt(true);
      decryptMessage();
    }
  };

  const decryptMessage = () => {
    const stringCiphertext = emojiToString(message);
    console.log(stringCiphertext);
    const bytes = CryptoJS.AES.decrypt(stringCiphertext, password);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);

    // console.log({ originalText });
    setDecryptedMessage(originalText);
  };

  return (
    <>
      <div className="header text-center mt-10">
        <h1 className="text-xl">Get your Emoji message!</h1>
        <p className="text-sm text-red-700 mt-5">Decryption method</p>
      </div>

      <div className="inputs mt-10 text-center">
        <p className=" text-gray-200 text-sm">1. Enter your message here.</p>
        <textarea
          name="message"
          cols="30"
          rows="5"
          className="bg-[#111111]  border-white rounded-md px-2 py-2 mt-2 border-2"
          placeholder="Eg: U2FsdGVkX18p6li2+HMERSDFsdfsdfsdf-sdfzhnidrY="
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <p className="mt-5 text-gray-200 text-sm">2. Enter password.</p>
        <input
          type="password"
          name="password"
          className="bg-[#111111]  border-white rounded-md px-2 py-2 mt-2 border-2"
          placeholder="Eg: 1234"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="mt-5">
          <p className="mb-3 text-gray-200 text-sm">3. Decrypt message</p>
          <button
            className="bg-[#1c1c1c] px-8 py-4 rounded-lg  transition-all duration-200"
            onClick={() => txtMaker()}
          >
            <span className="flex items-center gap-2 hover:text-red-500 transition-all duration-300">
              <Unlock />
              Decrypt
            </span>
          </button>
        </div>

        {decryptedMessage ? (
          <div className={`copy-msg mt-10 ${decrypt ? "block" : "hidden"}`}>
            <p className="text-gray-200 text-sm">Here is your message!</p>
            <textarea
              name="copy-message"
              cols="30"
              rows="6"
              className="bg-[#111111]  border-white rounded-md px-2 py-2 mt-2 border-2"
              value={decryptedMessage}
            ></textarea>
          </div>
        ) : (
          <div className={`copy-msg mt-10 ${decrypt ? "block" : "hidden"}`}>
            {" "}
            <p className="text-center text-red-500">
              Password or code is wrong
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Decrypt;
