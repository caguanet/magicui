"use client";

import { Doc } from "@/.contentlayer/generated";
import TechStack from "@/components/tech-stack";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import AnimatedBeamMultipleInputDemo from "@/registry/components/example/animated-beam-multiple-inputs";
import AnimatedListDemo from "@/registry/components/example/animated-list-demo";
import BentoDemo from "@/registry/components/example/bento-demo";
import DockDemo from "@/registry/components/example/dock-demo";
import OrbitingCirclesDemo from "@/registry/components/example/orbiting-circles-demo";
import RetroGridDemo from "@/registry/components/example/retro-grid-demo";
import AnimatedGradientText from "@/registry/components/magicui/animated-gradient-text";
import { VelocityScroll } from "@/registry/components/magicui/scroll-based-velocity";
import TypingAnimation from "@/registry/components/magicui/typing-animation";
import WordRotate from "@/registry/components/magicui/word-rotate";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function HeroClient({ post }: { post: Doc }) {
  const fadeInRef = useRef(null);
  const fadeInInView = useInView(fadeInRef, {
    once: true,
  });

  const fadeUpVariants = {
    initial: {
      opacity: 0,
      y: 24,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="hero">
      <div className="relative h-full overflow-hidden py-5 md:py-14">
        <div className="z-10 flex flex-col">
          <div className="mt-10 grid grid-cols-1 md:mt-20">
            <div className="flex flex-col items-start gap-6 px-7 pb-8 text-center md:items-center md:px-10">
              <motion.div
                ref={fadeInRef}
                animate={fadeInInView ? "animate" : "initial"}
                variants={fadeUpVariants}
                initial={false}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                  type: "spring",
                }}
              >
                <Link href={post.slug}>
                  <AnimatedGradientText>
                    <div
                      className={cn(
                        `absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`,
                        `p-[1px] ![mask-composite:subtract]`,
                      )}
                    />

                    <span
                      className={cn(
                        `animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                        `inline`,
                      )}
                    >
                      Introducing {post.title}
                    </span>
                    <ChevronRight className="ml-1 h-4 w-4 text-gray-500" />
                  </AnimatedGradientText>
                </Link>
              </motion.div>

              <div className="relative flex flex-col gap-4 md:items-center lg:flex-row">
                <motion.h1
                  animate={fadeInInView ? "animate" : "initial"}
                  variants={fadeUpVariants}
                  initial={false}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                    type: "spring",
                  }}
                  className="relative mx-0 max-w-[43.5rem] text-balance py-2 text-left text-5xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-100 sm:text-7xl md:mx-auto md:px-4 md:text-center md:text-7xl lg:text-7xl"
                >
                  UI library for Design Engineers
                </motion.h1>
                <span className="bg-backdrop-blur-sm text-neutral-90 absolute left-5 top-12 z-10 hidden -rotate-6 rounded-full border border-neutral-400 bg-neutral-800/10 px-2 py-1 text-xs/relaxed font-normal dark:border-white dark:bg-white/10 dark:text-white md:block">
                  {" "}
                  100% open-source
                </span>
              </div>

              <motion.p
                className="max-w-xl text-balance text-left text-base tracking-tight text-neutral-800 dark:font-medium dark:text-neutral-400 md:text-center md:text-lg "
                animate={fadeInInView ? "animate" : "initial"}
                variants={fadeUpVariants}
                initial={false}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.21, 0.47, 0.32, 0.98],
                  type: "spring",
                }}
              >
                20+ free and open-source animated components built with{" "}
                <span className="font-bold text-neutral-800 dark:text-neutral-100">
                  React
                </span>
                ,{" "}
                <span className="font-bold text-neutral-800 dark:text-neutral-100">
                  Typescript
                </span>
                ,{" "}
                <span className="font-bold text-neutral-800 dark:text-neutral-100">
                  Tailwind CSS
                </span>
                , and{" "}
                <span className="font-bold text-neutral-800 dark:text-neutral-100">
                  Framer Motion
                </span>
                .
                <br />
              </motion.p>

              <motion.div
                animate={fadeInInView ? "animate" : "initial"}
                variants={fadeUpVariants}
                className="mx-0 flex w-full max-w-full flex-col gap-4 py-1 sm:max-w-lg sm:flex-row md:mx-auto"
                initial={false}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.21, 0.47, 0.32, 0.98],
                  type: "spring",
                }}
              >
                <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
                  <Link
                    href="/"
                    className={cn(
                      buttonVariants({
                        variant: "default",
                        size: "lg",
                      }),
                      "gap-2 whitespace-pre md:flex",
                      "group relative w-full gap-1 rounded-full text-sm font-semibold tracking-tighter ring-offset-inherit transition-all duration-150 ease-in-out hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2 hover:ring-offset-current dark:hover:ring-neutral-50",
                    )}
                  >
                    Browse Components
                    <ChevronRight className="ml-1  size-4 flex-shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/docs"
                    className={cn(
                      buttonVariants({
                        size: "lg",
                        variant: "outline",
                      }),
                      "gap-2 whitespace-pre md:flex",
                      "group relative w-full gap-1 overflow-hidden rounded-full text-sm font-semibold tracking-tighter transition-all duration-150 ease-in-out hover:ring-2 hover:ring-neutral-300 hover:ring-offset-2 hover:ring-offset-inherit dark:hover:ring-neutral-800 dark:hover:ring-offset-black ",
                    )}
                  >
                    Get Started
                    <ChevronRight className="ml-1 size-4 flex-shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>

              {/* <motion.div
                animate={fadeInInView ? "animate" : "initial"}
                variants={fadeUpVariants}
                initial={false}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.21, 0.47, 0.32, 0.98],
                  type: "spring",
                }}
              >
                <div className="container flex flex-col items-center justify-center gap-2 sm:flex-row">
                  <div className="flex flex-row items-center justify-center -space-x-4">
                    <img
                      src="https://randomuser.me/api/portraits/women/72.jpg"
                      className="h-10 w-10 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/men/94.jpg"
                      className="h-10 w-10 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/34.jpg"
                      className="h-10 w-10 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/men/86.jpg"
                      className="h-10 w-10 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/41.jpg"
                      className="h-10 w-10 rounded-full border-2 border-white"
                    />
                  </div>

                  <div className="flex flex-col gap-x-2">
                    <div className="mx-auto flex flex-row items-center justify-start">
                      <StarFilledIcon className="h-4 w-4 text-orange-300" />
                      <StarFilledIcon className="h-4 w-4 text-orange-300" />
                      <StarFilledIcon className="h-4 w-4 text-orange-300" />
                      <StarFilledIcon className="h-4 w-4 text-orange-300" />
                      <StarFilledIcon className="h-4 w-4 text-orange-300" />
                      <span className="ml-2 text-base font-bold">5.0</span>
                    </div>

                    <span className="inline-block text-center text-xs font-medium leading-snug tracking-tighter">
                      <NumberTicker
                        value={500}
                        className="font-extrabold"
                        delay={0.2}
                      />
                      + developers making beautiful landing pages
                    </span>
                  </div>
                </div>
              </motion.div> */}
            </div>
          </div>

          <motion.div
            className="relative mx-auto flex w-full max-w-[16rem] items-center justify-center"
            animate={fadeInInView ? "animate" : "initial"}
            variants={fadeUpVariants}
            initial={false}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.21, 0.47, 0.32, 0.98],
              type: "spring",
            }}
          >
            <TechStack
              className="mx-auto flex w-full items-center justify-between"
              technologies={[
                // "nextjs",
                "react",
                "typescript",
                "tailwindcss",
                "framermotion",
                // "shadcn",
              ]}
            />
          </motion.div>

          {/*      <div className="relative flex h-full w-full rotate-6 py-20">
            <VelocityScroll
              text="Magic UI"
              default_velocity={2}
              className="bg-gradient-to-tr from-neutral-200 via-neutral-100 to-neutral-50 bg-clip-text py-2 text-center text-4xl font-bold tracking-tighter text-transparent [-webkit-text-stroke:0.7px_rgba(0,0,0,0.2)] dark:from-neutral-900 dark:via-neutral-950 dark:to-black dark:[-webkit-text-stroke:0.7px_rgba(255,255,255,0.2)] md:text-7xl md:leading-[5rem] md:[-webkit-text-stroke:1.11px_rgba(0,0,0,0.2)] dark:md:[-webkit-text-stroke:1.11px_rgba(255,255,255,0.2)]"
            />
          </div> */}

          <div className="container relative mx-auto mt-32 w-full max-w-[1000px]">
            <motion.span
              animate={["initial"]}
              whileHover={["hover"]}
              variants={{
                hover: {
                  scale: 1.1,
                  rotate: -6,
                  transition: {
                    duration: 0.2,
                  },
                },
                initial: {
                  y: [-8, 8],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                },
              }}
              className="absolute -top-16 left-0 right-auto cursor-pointer lg:-top-20"
            >
              <span className="flex items-center">
                <span className="mt-3 inline-block whitespace-nowrap rounded-full bg-neutral-800 px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white">
                  Real component demos!
                </span>
                <svg
                  className="mr-6 h-8 w-14 [transform:rotateY(180deg)rotateX(0deg)]"
                  width="45"
                  height="25"
                  viewBox="0 0 45 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
                    fill="currentColor"
                    className="fill-gray-300 dark:fill-gray-700"
                  />
                </svg>
              </span>
            </motion.span>

            <BentoDemo />

            <div className="mt-4 grid w-full grid-cols-1 place-items-center justify-center gap-4 lg:grid-cols-2">
              <AnimatedBeamMultipleInputDemo />
              <AnimatedListDemo />
              <RetroGridDemo />
              <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <TypingAnimation
                  className="text-4xl font-bold text-black dark:text-white"
                  text="Typing Animation"
                />
              </div>
              <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-4 md:shadow-xl">
                <WordRotate
                  className="text-4xl font-bold text-black dark:text-white"
                  words={[
                    "Web Development.",
                    "UI/UX Design.",
                    "Cloud Computing.",
                    "Web Security.",
                    "Frontend Frameworks.",
                    "Backend Architectures.",
                    "API Design.",
                    "Content Management Systems.",
                    "SEO Strategies.",
                    "Web Performance Optimization.",
                    "Responsive Design.",
                    "JavaScript Libraries.",
                  ]}
                />
              </div>
              <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background py-4 md:shadow-xl">
                <VelocityScroll
                  text="Velocity Scroll"
                  default_velocity={5}
                  className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
                />
              </div>
              <OrbitingCirclesDemo />
              <DockDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
