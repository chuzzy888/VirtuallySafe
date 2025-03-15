import cmp from "../assets/images/dbts.gif";
import cms from "../assets/images/vd.mp4";
import atc from "../assets/images/arts.gif";
import { motion } from "framer-motion";
import Logo from "../components/Logo";

export default function Competition() {
  return (
    <div>
      <div>
        <section className="relative py-32 bg-gradient-to-br from-[#4B0082] via-[#00294B] to-[#61CE70] overflow-hidden">
          {/* Animated Background Shapes */}
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="absolute top-16 left-16 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl"
              animate={{ x: [0, 20, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              className="absolute bottom-16 right-16 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"
              animate={{ x: [0, -20, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            ></motion.div>
          </motion.div>

          {/* Content Container */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6  font-nouvelr"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              Competitions
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Virtually Safe organizes competitions to engage young minds,
              including Debate, Skit Competition, and Art Challenge.
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href="#"
              className="inline-block bg-[#4B0082] hover:bg-[#00294B] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join the Competition
            </motion.a>
          </div>
        </section>

        <section className="bg-[#F9F9F9] py-8 w-full">
          {/* Debate Section */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-6 bg-[#851FEC] items-center rounded-lg p-5 mx-5 md:p-8 lg:p-12 md:mx-20 my-10">
            <div className="md:w-1/2">
              <img
                src={cmp}
                alt="Debate Competition"
                className="w-full h-auto 2xl:h-72"
              />
            </div>
            <div className="md:w-1/2 flex flex-col space-y-5 lg:space-y-8">
              <h2 className="text-[#FFFFFF] font-semibold text-3xl md:text-4xl font-nouvelr">
                Debate
              </h2>
              <p className="text-[#FFFFFF] font-lato text-base lg:text-lg leading-relaxed">
                Debate Competition is an exciting event that encourages young
                people to engage in critical thinking and public speaking on the
                topic of online safety. Teams of students from different schools
                compete against each other, presenting arguments and
                counterarguments on various issues related to online safety,
                such as cyberbullying, privacy, and digital citizenship. The
                competition aims to raise awareness of online safety issues and
                empower young people to become advocates for a safer digital
                world.
              </p>
            </div>
          </div>

          {/* Skit Section */}
          <div className="flex flex-col-reverse md:flex-row gap-8 lg:gap-6 bg-[#00294B] items-center rounded-lg p-5 mx-5 md:p-8 lg:p-12 md:mx-20 my-10">
            <div className="md:w-1/2 flex flex-col space-y-5 lg:space-y-8">
              <h2 className="text-[#FFFFFF] font-semibold text-3xl md:text-4xl font-nouvelr">
                Skit
              </h2>
              <p className="text-[#FFFFFF] font-lato text-base lg:text-lg leading-relaxed">
                The Skit Challenge is a fun and easy way for young people to
                show their audience positive ways of dealing with difficult
                online situations through a short film. Students will pick a
                skit prompt from the Teens Can Code website or brainstorm their
                own scenario to start writing their script. The Skit Challenge
                is at school level, teams will submit their skit to represent
                their school and winning schools will be rewarded.
              </p>
            </div>
            <div className="md:w-1/2">
              <video
                src={cms}
                autoPlay
                loop
                muted
                className="w-full h-auto max-h-[400px] object-cover rounded-lg"
              ></video>
            </div>
          </div>

          {/* Art Competition Section */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-6 bg-[#61CE70] items-center rounded-lg p-5 mx-5 md:p-8 lg:p-12 md:mx-20 my-10">
            <div className="md:w-1/2">
              <img
                src={atc}
                alt="Art Competition"
                className="w-full h-auto object-cover 2xl:h-72"
              />
            </div>
            <div className="md:w-1/2 flex flex-col space-y-5 lg:space-y-8">
              <h2 className="text-[#FFFFFF] font-semibold text-3xl md:text-4xl font-nouvelr">
                Art Competition
              </h2>
              <p className="text-[#FFFFFF] font-lato text-base lg:text-lg leading-relaxed">
                 Art Competition is a creative platform that encourages young
                people to express their understanding of online safety through
                visual art. Students are invited to create artwork that reflects
                their interpretation of online safety concepts, such as
                cyberbullying, digital citizenship, or online privacy.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Logo />
    </div>
  );
}
