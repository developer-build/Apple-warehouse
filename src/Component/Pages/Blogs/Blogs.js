import React from "react";
import { Accordion } from "react-bootstrap";
import faq from "../../../Assets/Images/faq.jpg";

const Blogs = () => {
  return (
    <div className=" p-5" style={{ backgroundColor: "#FAFAFC" }}>
      <div className="container">
        <div className="row row-cols-md-2 justify-content-center align-items-center bg-white">
          <div>
            <img className="img-fluid" src={faq} alt="" />
          </div>
          <div>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Difference between Javascript and Node js
                </Accordion.Header>
                <Accordion.Body>
                  node.JS and Javascript both of these are both used for
                  programming. But there is a significant difference between
                  Node.JS and Javascript. JavaScript (abbreviated as JS) is a
                  lightweight scripting language that is object-oriented. It is
                  used for developing HTML pages that are dynamic and have
                  various interactive effects on their web pages. The Node.JS,
                  on the other hand, helps in representing a list of all the
                  methods and objects that the JavaScript code can access when
                  run via node interpreters or in the V8 engine.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  When should you use Nodejs and when should you use MongoDB
                </Accordion.Header>
                <Accordion.Body>
                  Nodejs হল অ্যাসিঙ্ক্রোনাস এবং স্কেলযোগ্য অ্যাপ্লিকেশন তৈরি
                  করতে সাহায্য করে, যেখানে সবচেয়ে বেশি ব্যবহৃত NoSQL ডেটাবেস
                  ম্যানেজমেন্ট সিস্টেম হল MongoDB। MongoDB সাধারণত টেবিলের
                  পরিবর্তে নথির সংগ্রহ হিসাবে ডেটা উপস্থাপন করে। এটি বিভিন্ন
                  ধরণের ডেটার জন্য সহজ করে তোলে যা নোডজ ব্যবহার করে ওয়েব অ্যাপে
                  সংরক্ষণ এবং অ্যাক্সেস করা যায়। যেহেতু এটি ঘন ঘন ডেটা পরিবর্তন
                  করার জন্য নিখুঁত, এটি বেশিরভাগই Nodejs এর সাথে ব্যবহৃত হয়।
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Differences between SQL and noSQL databases
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <strong>SQL Databases</strong>
                    <li>Tables with fixed rows and columns</li>
                    <li>
                      Developed in the 1970s with a focus on reducing data
                      duplication
                    </li>
                    <li>Oracle, MySQL, Microsoft SQL Server, and PostgreSQL</li>
                  </ul>
                  <ul>
                    <strong>NoSQL Databases</strong>
                    <li>
                      Document: JSON documents, Key-value: key-value pairs,
                      Wide-column: tables with rows and dynamic columns, Graph:
                      nodes and edges
                    </li>
                    <li>
                      Many do not require ORMs. MongoDB documents map directly
                      to data structures in most popular programming languages.
                    </li>
                    <li>Horizontal (scale-out across commodity servers)</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  What is the purpose of jwt and how does it work
                </Accordion.Header>
                <Accordion.Body>
                  JWT can be used as an access token to prevent unwanted access
                  to a protected resource. They're often used as Bearer tokens,
                  which the API will decode and validate before sending a
                  response.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
