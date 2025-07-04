import { useState } from "react";
import { Boxes, Github, Linkedin, Target, Youtube } from "lucide-react";
import { porto } from "../Json/content.json";
import Popup from "../ui/popup";
import Doc from "../ui/doc";
import SNav from "../mobile/skillNav";

const Portfolio = () => {
  const [filter, setFilter] = useState("tout");

  const filteredPorto =
    filter === "tout"
      ? porto
      : porto.filter((item) => item.type.toLowerCase() === filter.toLowerCase());

  return (

    <div>
      <SNav/>
    <div className="mt-14 sm:mt-0 ">

      


      <div className="text-center hidden sm:block m-8">
        <h4 className="text-[1.5rem]">
          <Boxes className="inline-block mx-auto" /> découvrez
        </h4>
        <h2 className="capitalize text-success-content text-[3rem]">
          mon portfolio
        </h2>
      </div>
      <div className="flex  mb-8 textcenter text-3xl underline sm:hidden">
          <h1 className="mx-auto">portfolio</h1>
      </div>
      <div id="nav" className="text-center">
      <div className="overflow-hidden border divide-x inline-block rounded-lg">
  {["tout", "web", "front", "back"].map((cat) => (
    <button
      key={cat}
      className={`px-4 py-2 text-center bg-base-200 hover:bg-success transition-colors duration-300 ${
        filter === cat ? "bg-secondary text-base-100" : ""
      }`}
      onClick={() => setFilter(cat)}
    >
      {cat}
    </button>
  ))}
</div>

      </div>
      <div className="flex gap-10 mt-8 justify-center flex-wrap">
        {filteredPorto.map((index) => {
          return (
            <div className="w-4/5 md:w-2/5 rounded-2xl p-4 bg-base-100 ">
              <div className="flex justify-between">
                <div>
                  <h1>{index.title}</h1>
                  <span>{index.type}</span>
                </div>
                <img
                  src={index.holder}
                  className="scale-150 rounded-[50%] w-[4rem] h[5rem] border-solid border-base-300 border-4 "
                />
              </div>
              <div className="flex gap-3 flex-wrap">
                {index.techno.map((indeser) => {
                  return (
                    <div className="badge bg-accent-content">
                      <Target className="inline-block scale-75 mx-auto" />
                      {indeser}
                    </div>
                  );
                })}
              </div>
              <p>{index.description}</p>
              <div className="flex justify-between">
                <div className="flex gap-1">
                  {index.github.statue ? (
                    <Popup link={index.github.link}>
                      <Github className="inline-block mx-auto" />
                    </Popup>
                  ) : (
                    ""
                  )}
                  {index.youtube.statue ? (
                    <Popup link={index.youtube.link}>
                      <Linkedin className="inline-block mx-auto" />
                    </Popup>
                  ) : (
                    ""
                  )}
                  {index.linkedin[0].statue ? (
                    <Popup link={index.linkedin[0].link}>
                      <Youtube className="inline-block mx-auto" />
                    </Popup>
                  ) : (
                    ""
                  )}
                </div>
                <Doc title={index.more[0].title} source={index.more[0].source}>
                  <p>{index.more[0].about}</p>
                  <h1 className="text-3xl text-secondary p-4 w-full">
                    Fonctionalites
                  </h1>
                  <hr />
                  <p>{index.more[0].wats}</p>
                  <div>
                    <h1 className="text-3xl text-secondary p-4 w-full">
                      technologies:
                    </h1>
                    <hr />
                    <ul className="list-disc m-4">
                      {index.more[0].skill.map((inder) => {
                        return <li className="text-xl">{inder}</li>;
                      })}
                    </ul>
                  </div>
                  {index.more[0].framework.statues ? (
                    <div>
                      <h1 className="text-3xl text-secondary p-4 w-full">
                        Framework:
                      </h1>
                      <hr />
                      <ul className="list-disc m-4">
                        {index.more[0].framework.content.map((inder) => {
                          return <li className="text-xl">{inder}</li>;
                        })}
                      </ul>
                    </div>
                  ) : (
                    ""
                  )}
                </Doc>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Portfolio;
