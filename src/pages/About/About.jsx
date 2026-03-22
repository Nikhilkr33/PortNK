import HeroImg from "@/assets/images/NK.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Problem Solver, Full Stack Enthusiast
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="w-full h-auto max-h-[520px] object-cover rounded-[15px] shadow block"
                  alt="profile illustration"
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I&apos;m <span className="font-bold">Nikhil Kumar</span>, a
                passionate full-stack developer with strong skills in{" "}
                JavaScript, React, Node.js, and modern web technologies. I enjoy
                building responsive and user-friendly web applications that solve
                real-world problems.
              </p>

              <p className="text-white">
                I have worked on projects like{" "}
                <span className="font-bold">Plan My Shadi</span>, a complete
                wedding planning platform, and{" "}
                <span className="font-bold">AI-Meditation</span>, an AI-based
                medicine reminder system with voice alerts. These projects helped
                me gain hands-on experience in both frontend and backend
                development.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I am a continuous learner with strong problem-solving skills,
                    having solved 150+ DSA problems and maintained a 100+ day
                    LeetCode streak. I aim to grow as a full-stack developer and
                    contribute to impactful and innovative tech solutions.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Nikhil Kumar
                    </cite>

                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">
                        B.Tech CSE Student | Developer
                      </span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}