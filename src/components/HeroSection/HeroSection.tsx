"use client";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";
import { DiscordIcon } from "../icons/DiscordIcon";
import { Section } from "../Section/Section";
import { Title, Text, Button } from "@/ui";

export const HeroSection = () => {
  const { t } = useTranslation("home");

  return (
    <Section className="flex max-w-screen-xl h-[600px] mx-auto flex-row gap-16">
      <Trans i18nKey="home:test" components={{ strong: <strong /> }} />
      <div className="order-1 md:order-0 flex flex-col md:basis-1/2 gap-12 justify-center items-center md:items-start">
        <div className="border border-primary-800 px-3 py-1 rounded-full backdrop-blur-xs">
          <Text size="xs" brightness="dark" className="text-center">
            <Trans
              i18nKey="home:HERO_SECTION.INSIGHTS"
              components={{ span: <span className="text-textColor" /> }}
            />
          </Text>
        </div>
        <Title className="text-center text-2xl sm:text-3xl md:text-left">
          {t("HERO_SECTION.TITLE_1")}
          <br />
          <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
            {t("HERO_SECTION.TITLE_2")}
          </span>
          !
        </Title>
        <Text className="text-center  text-lg sm:text-xl md:text-left text-textColor-dark">
          <Trans
            i18nKey="home:HERO_SECTION.SUBTITLE"
            components={{ strong: <strong className="text-textColor" /> }}
          />
        </Text>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start w-full">
          <a
            href="https://discord.gg/rYmBNuF6XY"
            target="_blank"
            title={t("JOIN_OUR_DISCORD")}
          >
            <Button>
              <DiscordIcon className="animate-wiggle" width={20} height={20} />
              {t("JOIN_OUR_DISCORD")}
            </Button>
          </a>
          <a href="#about" title={t("HERO_SECTION.READ_HOW_IT_WORKS")}>
            <Button variant="ghost">
              {t("HERO_SECTION.ABOUT_THE_PROJECT")} <LuArrowRight />
            </Button>
          </a>
        </div>
      </div>

      <div className="hidden md:show order-0 md:order-1 md:flex flex-col basis-1/2 gap-6 justify-center items-center">
        <div className="p-8 relative border-2 border-secondary w-full h-3/4 rounded-[48px] bg-hero-bg-element2 bg-cover bg-center backdrop-blur-xs">
          <div className="bg-hero bg-cover bg-no-repeat bg-center rounded-3xl w-full h-full"></div>
          <Image
            src="/images/head.png"
            width={96}
            height={96}
            alt=""
            className="animate-wiggle absolute w-24 h-24 rounded-full -top-12 left-24"
          />
          <div className="absolute w-full h-full overflow-hidden rounded-[48px] left-0 top-0">
            <div className="absolute w-96 h-96 -bottom-36 -right-36 bg-primary rounded-full blur-xl opacity-15 duration-500" />
            <div className="absolute w-72 h-72 -top-36 -left-36 bg-secondary rounded-full blur-xl opacity-15 duration-500" />
          </div>
          <div className="absolute bg-gradient-to-tr from-primary to-secondary w-24 h-4 rounded-2xl -bottom-2 right-24"></div>
        </div>
      </div>
    </Section>
  );
};
