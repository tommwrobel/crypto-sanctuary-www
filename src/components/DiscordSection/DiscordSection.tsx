import useTranslation from "next-translate/useTranslation";
import { DiscordIcon } from "../icons/DiscordIcon";
import { Section } from "../Section/Section";
import { Button, Text, Title } from "@/ui";

export const DiscordSection = () => {
  const { t } = useTranslation("home");

  return (
    <Section className="bg-bgColor-dark relative">
      <div className="flex flex-col md:flex-row max-w-screen-xl px-16 mx-auto gap-16">
        <div className="relative order-0 md:order-1 md:flex flex-col basis-1/2 gap-6 justify-center items-center">
          <div className="flex w-full items-center justify-center bg-hero-bg-element2 bg-cover bg-center backdrop-blur-xs">
            <iframe
              src="https://discord.com/widget?id=1110239056668930178&theme=dark"
              width="350"
              height="360"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              className="hover:scale-105 hover:shadow-2xl hover:rotate-1 duration-300"
            ></iframe>
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
