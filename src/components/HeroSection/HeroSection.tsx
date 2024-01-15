"use client";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";
import { DiscordIcon } from "../DiscordIcon/DiscordIcon";
import { Title, Text, Button } from "@/ui";

export const HeroSection = () => {
  const { t } = useTranslation("home");

  return (
    <section className="w-full px-8 sm:px-16">
      <div className="flex max-w-screen-xl h-[640px] mx-auto flex-row gap-16">
        <div className="order-1 md:order-0 flex flex-col md:basis-1/2 gap-12 justify-center items-center md:items-start">
          <div className="border border-primary-800 px-3 py-1 rounded-full backdrop-blur-xs">
            <Text size="xs" brightness="dark">
              Real time crypto insights:{" "}
              <span className="text-textColor">TRACK, TRADE, TRIUMPH!</span>
            </Text>
          </div>
          <Title className="text-center text-3xl sm:text-4xl md:text-left">
            Unlock success with
            <br />
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
              Crypto&nbsp;Sanctuary
            </span>
            !
          </Title>
          <Text className="text-center  text-lg sm:text-xl md:text-left text-textColor-dark">
            We track{" "}
            <strong className="text-textColor">millions of transactions</strong>{" "}
            daily on Binance. Uniswap, and Kucoin in real-time, giving you{" "}
            <strong className="text-textColor">priority access</strong> to
            significant market movements.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start w-full">
            <a
              href="https://discord.gg/rYmBNuF6XY"
              target="_blank"
              title="Join our Discord!"
            >
              <Button>
                <DiscordIcon
                  className="animate-wiggle"
                  width={20}
                  height={20}
                />
                Join our Discord!
              </Button>
            </a>
            <a href="#info" title="Read how it works">
              <Button variant="ghost">
                About the project <LuArrowRight />
              </Button>
            </a>
          </div>
        </div>
        <div className="hidden md:show order-0 md:order-1 md:flex flex-col basis-1/2 gap-6 justify-center items-center">
          <div className="relative border-2 border-secondary w-full h-2/3 rounded-[92px] bg-hero-bg-element2 bg-cover bg-center backdrop-blur-xs">
            <Image
              src="/images/head.png"
              width={96}
              height={96}
              alt=""
              className="animate-wiggle absolute w-24 h-24 rounded-full -top-12 left-24"
            />
            <div className="absolute bg-gradient-to-tr from-primary to-secondary w-24 h-6 rounded-2xl -bottom-3 right-24"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
