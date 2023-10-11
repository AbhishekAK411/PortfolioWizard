// import { useState } from "react";
import Typewriter from "typewriter-effect";

const options = {
    autoStart: true, loop: false, cursor: null
}

const Card = () => {
  return (
    <>
      <section className="bg-white w-full h-full rounded-lg shadow-mac">
        <section className="flex p-2 gap-1">
          <section className="">
            <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
          </section>
          <section className="circle">
            <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
          </section>
          <section className="circle">
            <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
          </section>
        </section>
        <section className="font-jetMono text-black p-2">
            <section className="flex">
                <p className="text-purple-300"><Typewriter options={options} onInit={(t) => t.typeString("export const").start()} /></p>
                <p className="text-[#f89d1a] pl-3"><Typewriter options={options} onInit={(t) => t.pauseFor(2000).typeString("controllerFunction = ").start()} /></p>
                <p className="text-purple-300 pl-3"><Typewriter options={options} onInit={(t) => t.pauseFor(5000).typeString("async").start()} /></p>
                <p className="text-red-400"><Typewriter options={options} onInit={(t) => t.pauseFor(6000).typeString("(req,res)").start()} /></p>
                <p className="text-purple-300 pl-3"><Typewriter options={options} onInit={(t) => t.pauseFor(7500).typeString(" =>  {").start()} /></p>
            </section>
            <section className="px-10">
                <p className="text-purple-300"><Typewriter options={options} onInit={(t) => t.typeString("try {").start()} /></p>
                <section className="px-10">
                    <section className="py-5">
                        <section className="flex">
                            <p className="text-purple-300"><Typewriter options={options} onInit={(t) => t.typeString("const {").start()} /></p>
                            <p className="pl-3 text-[#f89d1a]"><Typewriter options={options} onInit={(t) => t.pauseFor(1000).typeString("field1, field2, field3").start()} /></p>
                            <p className="pl-3 text-purple-300"><Typewriter options={options} onInit={(t) => t.pauseFor(3000).typeString("}").start()} /></p>
                            <p className="pl-3 text-[#f89d1a]"><Typewriter options={options} onInit={(t) => t.pauseFor(4000).typeString("=").start()} /></p>
                            <p className="pl-3 text-red-400"><Typewriter options={options} onInit={(t) => t.pauseFor(5000).typeString("req.body;").start()} /></p>
                        </section>
                        <section className="flex">
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("if(").start()} /></p>
                            <p className="text-[#f89d1a]"><Typewriter  options={options} onInit={(t) => t.typeString("!field1").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(")").start()} /></p>
                            <p className="pl-3 text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("return ").start()} /></p>
                            <p className="pl-3 text-red-400"><Typewriter  options={options} onInit={(t) => t.typeString("res").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(".").start()} /></p>
                            <p className="text-cyan-600"><Typewriter  options={options} onInit={(t) => t.typeString("status").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("(").start()} /></p>
                            <p className="text-red-400"><Typewriter  options={options} onInit={(t) => t.typeString("404").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(").").start()} /></p>
                            <p className="text-cyan-600"><Typewriter  options={options} onInit={(t) => t.typeString("json").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("(").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("{").start()} /></p>
                            <p className="text-red-400"><Typewriter  options={options} onInit={(t) => t.typeString("status:").start()} /></p>
                            <p className="pl-3 text-[#f89d1a]"><Typewriter options={options} onInit={(t) => t.typeString("404").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(",").start()} /></p>
                            <p className="text-red-400"><Typewriter  options={options} onInit={(t) => t.typeString("success:").start()} /></p>
                            <p className="pl-3 text-[#f89d1a]"><Typewriter options={options} onInit={(t) => t.typeString("false").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(",").start()} /></p>
                            <p className="text-red-400"><Typewriter  options={options} onInit={(t) => t.typeString("message:").start()} /></p>
                            <p className="pl-3 text-[#f89d1a]"><Typewriter options={options} onInit={(t) => t.typeString("\"Field 1 is required.\"").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("}").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(");").start()} /></p>
                        </section>
                        <section className="flex">
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("if(").start()} /></p>
                            <p className="text-[#f89d1a]"><Typewriter  options={options} onInit={(t) => t.typeString("!field2").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(")").start()} /></p>
                            <p className="pl-3 text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("return ").start()} /></p>
                            <p className="pl-3 text-red-400"><Typewriter  options={options} onInit={(t) => t.typeString("res").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(".").start()} /></p>
                            <p className="text-cyan-600"><Typewriter  options={options} onInit={(t) => t.typeString("status").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("(").start()} /></p>
                            <p className="text-red-400"><Typewriter  options={options} onInit={(t) => t.typeString("404").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(").").start()} /></p>
                            <p className="text-cyan-600"><Typewriter  options={options} onInit={(t) => t.typeString("json").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("(").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("{").start()} /></p>
                            <p className="text-red-400"><Typewriter  options={options} onInit={(t) => t.typeString("status:").start()} /></p>
                            <p className="pl-3 text-[#f89d1a]"><Typewriter options={options} onInit={(t) => t.typeString("404").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(",").start()} /></p>
                            <p className="text-red-400"><Typewriter  options={options} onInit={(t) => t.typeString("success:").start()} /></p>
                            <p className="pl-3 text-[#f89d1a]"><Typewriter options={options} onInit={(t) => t.typeString("false").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(",").start()} /></p>
                            <p className="text-red-400"><Typewriter  options={options} onInit={(t) => t.typeString("message:").start()} /></p>
                            <p className="pl-3 text-[#f89d1a]"><Typewriter options={options} onInit={(t) => t.typeString("\"Field 2 is required.\"").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("}").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(");").start()} /></p>
                        </section>
                        <section className="flex">
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("if(").start()} /></p>
                            <p className="text-[#f89d1a]"><Typewriter  options={options} onInit={(t) => t.typeString("!field3").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(")").start()} /></p>
                            <p className="pl-3 text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("return ").start()} /></p>
                            <p className="pl-3 text-red-400"><Typewriter  options={options} onInit={(t) => t.typeString("res").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(".").start()} /></p>
                            <p className="text-cyan-600"><Typewriter  options={options} onInit={(t) => t.typeString("status").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("(").start()} /></p>
                            <p className="text-red-400"><Typewriter  options={options} onInit={(t) => t.typeString("404").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(").").start()} /></p>
                            <p className="text-cyan-600"><Typewriter  options={options} onInit={(t) => t.typeString("json").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("(").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("{").start()} /></p>
                            <p className="text-red-400"><Typewriter  options={options} onInit={(t) => t.typeString("status:").start()} /></p>
                            <p className="pl-3 text-[#f89d1a]"><Typewriter options={options} onInit={(t) => t.typeString("404").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(",").start()} /></p>
                            <p className="text-red-400"><Typewriter  options={options} onInit={(t) => t.typeString("success:").start()} /></p>
                            <p className="pl-3 text-[#f89d1a]"><Typewriter options={options} onInit={(t) => t.typeString("false").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(",").start()} /></p>
                            <p className="text-red-400"><Typewriter  options={options} onInit={(t) => t.typeString("message:").start()} /></p>
                            <p className="pl-3 text-[#f89d1a]"><Typewriter options={options} onInit={(t) => t.typeString("\"Field 3 is required.\"").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("}").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(");").start()} /></p>
                        </section>
                    </section>
                    <section className="pb-5">
                        <Typewriter options={options} onInit={(t) => t.typeString("const userModel = new userModel({").start()} />
                        <Typewriter options={options} onInit={(t) => t.typeString("field1: field1").start()} />
                        <Typewriter options={options} onInit={(t) => t.typeString("field2: field2").start()} />
                        <Typewriter options={options} onInit={(t) => t.typeString("field3: field3").start()} />
                        <Typewriter options={options} onInit={(t) => t.typeString("});").start()} />
                    </section>
                    <section className="pb-5">
                        <Typewriter options={options} onInit={(t) => t.typeString("await userModel.save();").start()} />
                        <section className="flex">
                            <p className="pl-3 text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("return ").start()} /></p>
                            <p className="pl-3 text-red-400"><Typewriter  options={options} onInit={(t) => t.typeString("res").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(".").start()} /></p>
                            <p className="text-cyan-600"><Typewriter  options={options} onInit={(t) => t.typeString("status").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("(").start()} /></p>
                            <p className="text-green-500"><Typewriter  options={options} onInit={(t) => t.typeString("201").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(").").start()} /></p>
                            <p className="text-cyan-600"><Typewriter  options={options} onInit={(t) => t.typeString("json").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("(").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("{").start()} /></p>
                            <p className="text-red-400"><Typewriter  options={options} onInit={(t) => t.typeString("status:").start()} /></p>
                            <p className="pl-3 text-green-500"><Typewriter options={options} onInit={(t) => t.typeString("404").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(",").start()} /></p>
                            <p className="text-red-400"><Typewriter  options={options} onInit={(t) => t.typeString("success:").start()} /></p>
                            <p className="pl-3 text-green-500"><Typewriter options={options} onInit={(t) => t.typeString("true").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(",").start()} /></p>
                            <p className="text-red-400"><Typewriter  options={options} onInit={(t) => t.typeString("message:").start()} /></p>
                            <p className="pl-3 text-green-500"><Typewriter options={options} onInit={(t) => t.typeString("\"User registered successfully.\"").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("}").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(");").start()} /></p>
                        </section>
                    </section>
                </section>
                <section className="py-5">
                    <section className="flex">
                        <p className="text-purple-300"><Typewriter options={options} onInit={(t) => t.typeString("}").start()} /></p>
                        <p className=""><Typewriter options={options} onInit={(t) => t.typeString().start()} /></p>
                        <p className=""><Typewriter options={options} onInit={(t) => t.typeString().start()} /></p>
                        <p className=""><Typewriter options={options} onInit={(t) => t.typeString().start()} /></p>
                        <p className=""><Typewriter options={options} onInit={(t) => t.typeString().start()} /></p>
                    </section>
                    <p className="px-10">
                        <section className="flex">
                            <p className="pl-3 text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("return ").start()} /></p>
                            <p className="pl-3 text-red-400"><Typewriter  options={options} onInit={(t) => t.typeString("res").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(".").start()} /></p>
                            <p className="text-cyan-600"><Typewriter  options={options} onInit={(t) => t.typeString("status").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("(").start()} /></p>
                            <p className="text-red-400"><Typewriter  options={options} onInit={(t) => t.typeString("500").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(").").start()} /></p>
                            <p className="text-cyan-600"><Typewriter  options={options} onInit={(t) => t.typeString("json").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("(").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("{").start()} /></p>
                            <p className="text-red-400"><Typewriter  options={options} onInit={(t) => t.typeString("status:").start()} /></p>
                            <p className="pl-3 text-red-400"><Typewriter options={options} onInit={(t) => t.typeString("500").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(",").start()} /></p>
                            <p className="text-red-400"><Typewriter  options={options} onInit={(t) => t.typeString("success:").start()} /></p>
                            <p className="pl-3 text-red-400"><Typewriter options={options} onInit={(t) => t.typeString("false").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(",").start()} /></p>
                            <p className="text-red-400"><Typewriter  options={options} onInit={(t) => t.typeString("message:").start()} /></p>
                            <p className="pl-3 text-red-400"><Typewriter options={options} onInit={(t) => t.typeString("\"Internal Server Error\"").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString("}").start()} /></p>
                            <p className="text-purple-300"><Typewriter  options={options} onInit={(t) => t.typeString(");").start()} /></p>
                        </section>
                    </p>
                    <p className="text-purple-300"><Typewriter options={options} onInit={(t) => t.typeString("}").start()} /></p>
                </section>
            </section>
            <p className="text-purple-300"><Typewriter options={options} onInit={(t) => t.typeString("}").start()} /></p>
        </section>
      </section>
    </>
  );
};

export default Card;
