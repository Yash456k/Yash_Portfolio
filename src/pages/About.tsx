function About() {
  return (
    <div className="flex bg-gray-100 h-screen w-screen justify-center items-center">
      <div className="max-w-screen-md px-6 md:p-0">
        <h1 className="text-4xl font-bold mb-8 text-[#ff8c00]">
          Hi there! I'm Yash
        </h1>
        <p className="text-lg text-gray-600">
          I'm a full-stack developer and a computer science student. I love
          building web applications and learning new technologies. I have
          experience working with React, Node.js, Express, and MongoDB.Currently
          learning about NextJs and DevOps practices. I'm passionate about
          open-source and contributing to the community. All my projects are{" "}
          <a
            className="cursor-pointer text-[#ff8c00]"
            target="_blank"
            href="https://github.com/Yash456k"
          >
            open-source
          </a>{" "}
          and available on my GitHub profile. I'm currently looking for an
          internship. Feel free to reach out to me on{" "}
          <a
            className="cursor-pointer text-[#ff8c00]"
            target="_blank"
            href="https://www.linkedin.com/in/yash456k/"
          >
            LinkedIn
          </a>{" "}
          or{" "}
          <a
            className="cursor-pointer text-[#ff8c00]"
            href="mailto:yashkhambhattak@gmail.com"
          >
            Email
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
