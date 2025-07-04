import { useState } from "react";
import { Boxes, Globe, Heart, StickyNote } from "lucide-react";
import blog from "../Json/blog.json";
import Popup from "../ui/popup";
import SNav from "../mobile/skillNav";
import { div } from "framer-motion/m";

const Blog = () => {
  const [visibleCount, setVisibleCount] = useState(6); // Commence avec 6 articles

  const handleVoirPlus = () => {
    setVisibleCount((prev) => prev + 3); // Ajoute 3 à chaque clic
  };

  const visibleBlogs = blog.slice(0, visibleCount);
  const hasMore = visibleCount < blog.length;

  return (
    <div>
      <SNav/>
    
    <div className="mt-14 sm:mt-0">
      
      <div className="text-center hidden sm:block m-8">
        <h4 className="text-[1.5rem]">
          <Boxes className="inline-block mx-auto" /> découvrez
        </h4>
        <h2 className="capitalize text-success-content text-[3rem]">
          mes articles de blogs
        </h2>
      </div>
      <div className="flex capitalize  mb-8 textcenter text-3xl underline sm:hidden">
          <h1 className="mx-auto">Mon blog</h1>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {visibleBlogs.map((index, idx) => (
          <div key={idx}>
            <div className="card bg-base-100  shadow-sm">
              <figure>
                <img src={index.image} alt="Illustration blog" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl my-4 text-secondary">
                  {index.title}
                </h2>
                <div className="gap-2 my-6 scale-90 flex flex-wrap">
                  {index.techno.map((ind, i) => (
                    <span key={i} className="badge bg-base-200">
                      {ind}
                    </span>
                  ))}
                </div>
                <p>{index.description}</p>

                <div className="card-actions justify-between items-center">
                  <Popup link={index.link} classname="hover:text-secondary">
                    <Globe />
                  </Popup>
                  <div className="gap-2 flex">
                    <div className="badge badge-outline">
                      {index.like} <Heart className="ml-1" />
                    </div>
                    <div className="badge badge-outline">
                      {index.notes} <StickyNote className="ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Voir plus */}
      {hasMore && (
        <div className="text-center mt-8">
          <button
            onClick={handleVoirPlus}
            className="btn btn-outline btn-secondary"
          >
            Voir plus
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Blog;
