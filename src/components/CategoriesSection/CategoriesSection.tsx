"use client";
import useTranslation from "next-translate/useTranslation";
import { DiscordIcon } from "../icons/DiscordIcon";
import { Section } from "../Section/Section";
import { Button, Text, Title, cn } from "@/ui";

export const CategoriesSection = () => {
  const { t } = useTranslation("home");

  return (
    <Section>
      <div className="flex flex-col items-center max-w-screen-sm mx-auto gap-12">
        <Title className="text-xl sm:text-2xl text-center md:text-left">
          Explore our categories
        </Title>
        <Text className="text-center text-md text-textColor-dark">
          Explore dozens of categories with{" "}
          <strong className="text-textColor">real-time signals</strong>. Click
          on any of them and verify on the exchange that it actually happened!
        </Text>
      </div>
    </Section>
  );
};
