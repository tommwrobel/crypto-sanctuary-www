"use client";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useRef, useState } from "react";
import { DiscordIcon } from "../icons/DiscordIcon";
import { Section } from "../Section/Section";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useCounter } from "../../hooks/useCounter";
import { Button, Text, Title, cn } from "@/ui";

export const DiscordSection = () => {
  const { t } = useTranslation("home");

  const ref = useRef<HTMLDivElement | null>(null);
  const va1 = useCounter({ containerRef: ref, endValue: 1000, step: 50 });
  const val2 = useCounter({ containerRef: ref, endValue: 250, step: 10 });
  const val3 = useCounter({ containerRef: ref, endValue: 480, step: 20 });
  const val4 = useCounter({ containerRef: ref });

  return (
    <Section className="bg-bgColor-dark relative">
      <div
        ref={ref}
        className="flex flex-col md:flex-row max-w-screen-xl px-16 mx-auto gap-16"
      >
        <div
          ref={ref}
          className="relative order-0 md:order-1 md:flex flex-col basis-1/2 gap-6 justify-center items-center"
        >
          <div className="grid grid-cols-2 gap-y-8 md:gap-y-16 gap-x-6">
            <div className="flex flex-col gap-1 items-center">
              <Text
                className={cn(
                  "text-secondary font-medium text-3xl sm:text-4xl",
                  va1 < 1000 && "animate-jump"
                )}
              >
                {va1}
              </Text>
              <Text className="text-primary-400 text-lg sm:text-xl text-center">
                signals daily
              </Text>
            </div>

            <div className="flex flex-col gap-1 items-center">
              <Text
                className={cn(
                  "text-secondary font-medium text-3xl sm:text-4xl",
                  va1 < 1000 && "animate-jump"
                )}
              >
                {val2}k$
              </Text>
              <Text className="text-primary-400 text-lg sm:text-xl text-center">
                market value in dollars
              </Text>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <Text
                className={cn(
                  "text-secondary font-medium text-3xl sm:text-4xl",
                  va1 < 1000 && "animate-jump"
                )}
              >
                {va1}
              </Text>
              <Text className="text-primary-400 text-lg sm:text-xl text-center">
                separate channels
                <br />
                with crypto
              </Text>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <Text
                className={cn(
                  "text-secondary font-medium text-3xl sm:text-4xl",
                  va1 < 1000 && "animate-jump"
                )}
              >
                {val3}
              </Text>
              <Text className="text-primary-400 text-lg sm:text-xl text-center">
                some other stuff
                <br />
                with numbers
              </Text>
            </div>
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
