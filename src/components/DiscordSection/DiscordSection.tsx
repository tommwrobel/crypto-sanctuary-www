"use client";
import useTranslation from "next-translate/useTranslation";
import { DiscordIcon } from "../icons/DiscordIcon";
import { Section } from "../Section/Section";
import { CounterText } from "./CounterText";
import { Button, Text, Title, cn } from "@/ui";

export const DiscordSection = () => {
  const { t } = useTranslation("home");

  return (
    <Section className="bg-gradient-to-r from-bgColor-dark/50 to-primary-900/50 relative backdrop-blur-xs">
      <div className="flex flex-col md:flex-row items-center max-w-screen-xl mx-auto gap-16">
        <div className="relative order-0 md:order-1 md:flex flex-col basis-1/2 gap-6 items-center">
          <div className="grid grid-cols-2 gap-y-8 md:gap-y-8 gap-x-8 md:gap-x-12 self-center h-full">
            <CounterText
              targetValue={48}
              step={2}
              description="Active channels"
            />
            <CounterText targetValue={2000} description="Some description" />
            <CounterText
              targetValue={40}
              description="Signals per year"
              endAdornment=" mln"
              step={2}
            />
            <CounterText targetValue={1200} description="Active users daily" />
          </div>
        </div>
        <div className="order-1 md:order-0 flex flex-col md:basis-1/2 gap-12 justify-center items-center md:items-start">
          <Title className="text-xl sm:text-2xl text-center md:text-left">
            Most of the information we&nbsp;provide&nbsp;is&nbsp;free.
            <br />
            You can check it out here.
          </Title>
          <Text className="text-center text-md md:text-left text-textColor-dark">
            Explore dozens of categories with{" "}
            <strong className="text-textColor">real-time signals</strong>. Click
            on any of them and verify on the exchange that it actually happened!
            Discover the power of real-time insights{" "}
            <strong className="text-textColor">for free</strong>!
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start w-full">
            <a
              href="https://discord.gg/rYmBNuF6XY"
              target="_blank"
              title={t("JOIN_OUR_DISCORD")}
            >
              <Button>
                <DiscordIcon
                  className="animate-wiggle"
                  width={20}
                  height={20}
                />
                {t("JOIN_OUR_DISCORD")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};
