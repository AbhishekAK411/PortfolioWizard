import { useState } from "react";
import { useEffect } from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Card = ({textIndex}) => {
    const [showCode, setShowCode] = useState(true);
    useEffect(() => {
        setShowCode(false);
        const timer = setTimeout(() => {
            setShowCode(true);
        }, 500);

        return () => clearTimeout(timer);
    },[textIndex]);

    const codeArray = [`export const controllerFunction = async(req,res) => {
        try {
            const {textField1, textField2, textField3} = req.body;

            if(!textField1) return res.status(404).json({status: 404, success: false, message: "Field is required"});
            if(!textField2) return res.status(404).json({status: 404, success: false, message: "Field is required"});
            if(!textField3) return res.status(404).json({status: 404, success: false, message: "Field is required"});

            const fieldModel = new FieldModel({
                field1: field1,
                field2: field2,
                field3: field3
            });

            await fieldModel.save();
            return res.status(201).json({status: 201, success: true, message: "Fields are added successfully."});

        } catch(error) {
            return res.status(500).json({status: 500, success: false, message: "Internal Server Error."});
        }
    }`,
    `import react, {useState} from 'react;

    const Counter = () => {
        const [count, setCount] = useState(0);
    
        const incrementCounter = () => {
            setCount((previousState) => previousState + 1);
        }
        const decrementCounter = () => {
            setCount((previousState) => previousState - 1);
        }
    
        return (
            <>
                <h1>Counter App</h1>
                <p>Count : {count}</p>
                <button onClick={incrementCounter}>+</button>
                <button onClick={decrementCounter}>-</button>
            </>
        );
    }
    
    export default Counter;`,
    `import express from 'express';
    import cors from 'cors';
    import morgan from 'morgan';
    import dotenv from 'dotenv';
    import router from './routes/appRoutes.js';
    import mongoose from 'mongoose';
    
    const app = express();
    
    dotenv.config();
    app.use(morgan('dev'));
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use("/api", router);
    
    mongoose.connect(process.env.mongo)
    .then(() => console.log("DB Connection Established."))
    .catch((err) => console.log("DB Error -->", err));
    
    const port = process.env.port || 3000;
    app.listen(port, () => console.log(\`Listening on port \${port}\`));`,
    `import mongoose, { Schema } from "mongoose";

    const fieldSchema = new Schema({
        field1: {
            type: String,
            required: true,
            unique: true
        },
        field2: {
            type: String,
            required: true,
            unique: true
        },
        field3: {
            type: String,
            required: true,
            unique: true
        },
        field4: {
            data: Buffer,
            contentType: String
        },
        field5: {
            type: String,
        },
        field6: {
            type: String
        },
        field7: {
            type: Boolean,
            default: false
        },
        field8: {
            type: [Object]
        }
    });
    
    export default mongoose.model("Field", fieldSchema);`,
    `window.onload = function() {
        alert("Page has loaded!");
      
        const heading = document.querySelector("h1");
        heading.textContent = "Welcome to My Website";
      
        const button = document.querySelector("#myButton");
        button.addEventListener("click", function() {
          alert("Button clicked!");
        });
      
        console.log("Page is fully loaded and ready for interactions.");
      };`,
      `import React from "react";

      const MyComponent = () => {
        return (
          <div className="bg-blue-500 text-white font-bold p-4 rounded-lg shadow-lg">
            <h1 className="text-2xl">Welcome to My Website</h1>
            <p className="mt-2">This is a simple React app with Tailwind CSS.</p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 mt-4 rounded-lg">
              Click Me
            </button>
            <div className="mt-4">
              <a
                href="https://www.example.com"
                className="text-blue-500 hover:text-blue-700"
              >
                Visit Example.com
              </a>
            </div>
            <div className="flex mt-4 space-x-4">
              <div className="w-1/2">
                <p className="text-center">Left Column</p>
              </div>
              <div className="w-1/2">
                <p className="text-center">Right Column</p>
              </div>
            </div>
          </div>
        );
      };
      
      export default MyComponent;
      `,
      `import 'package:flutter/material.dart';

      void main() {
        runApp(MyApp());
      }
      
      class MyApp extends StatelessWidget {
        @override
        Widget build(BuildContext context) {
          return MaterialApp(
            home: Scaffold(
              appBar: AppBar(
                title: Text('Flutter Counter App'),
              ),
              body: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Text(
                      'Counter Value:',
                    ),
                    Text(
                      '0',
                      style: TextStyle(
                        fontSize: 32,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    SizedBox(height: 20),
                    ElevatedButton(
                      onPressed: () {
                        // Implement the increment functionality here
                      },
                      child: Text('Increment Counter'),
                    ),
                  ],
                ),
              ),
            ),
          );
        }
      }
      `]
  return (
    <>
      <section className="bg-[#1d1f21] w-full h-full rounded-lg shadow-mac">
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
        <section className={`font-jetMono text-black p-2 transition-opacity ${showCode ? 'animate-fade-in transition-opacity' : 'opacity-0 transition-opacity'}`}>
            <SyntaxHighlighter showLineNumbers={true} language="javascript" style={atomDark}>
                {codeArray[textIndex]}
            </SyntaxHighlighter>
        </section>
      </section>
    </>
  );
};

export default Card;
