import React from "react";

type Props = {};

const Projects = (props: Props) => {
  return (
    <main
      id="Project"
      className=" w-screen h-screen flex items-center justify-center flex-wrap"
    >
      <section className="w-96 h-60 p-2 m-2 border-2 rounded-lg shadow-xl dark:shadow-gray-50/40 text-center relative flex items-center justify-center">
        <h2 className="py-3 font-semibold text-4xl">Comming Soon..!</h2>
      </section>
      <section className="w-96 h-60 p-2 m-2 border-2 rounded-lg shadow-xl dark:shadow-gray-50/40  text-center relative flex items-center justify-center">
        <h2 className="py-3 font-semibold text-4xl">Comming Soon..!</h2>
      </section>
      <section className="w-96 h-60 p-2 m-2 border-2 rounded-lg shadow-xl dark:shadow-gray-50/40  text-center relative flex items-center justify-center">
        <h2 className="py-3 font-semibold text-4xl">Comming Soon..!</h2>
      </section>
    </main>
  );
};

export default Projects;
