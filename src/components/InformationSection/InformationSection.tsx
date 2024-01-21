import useTranslation from "next-translate/useTranslation";
import { Section } from "../Section/Section";
import { Text } from "@/ui";

export const InformationSection = () => {
  const { t } = useTranslation("home");

  return (
    <Section className="py-12 md:py-12 border-b border-t border-borderColor-dark">
      <div className="max-w-screen-xl flex flex-col gap-4 mx-auto items-start">
        <div className="px-2 py-1 rounded-lg bg-gradient-to-tr from-primary-800 to-secondary-700">
          <Text size="sm" weight="bold">
            GENERAL INFORMATION
          </Text>
        </div>
        <Text size="sm">
          Crypto Sanctuary goes beyond the typical signal-generating tools. We
          present crucial changes in price, volume, amplitudes, etc., across
          various categories and time intervals from different exchanges.
        </Text>
        <Text size="sm">
          Is a signal in the Price Jumps or High Amplitudes category the
          beginning of a substantial price rally, lifting prices multiple times?
          Or is it a momentary pump and dump? Does a sudden volume surge
          indicate the awakening of a dormant gem with the potential for huge
          profits, or is it just a momentary spike? These are assessments you
          need to make. From our experience, observing these signals builds
          expertise. You start recognizing patterns, discovering coins with
          cyclical price rallies, identifying entry points, and determining
          where to set selling orders. Finding such coins among a thousand
          others is very difficult and time-consuming. Recognizing the start of
          their price rally on your own is practically impossible. On the other
          hand, we provide you with information about it within the first minute
          of their renewed surge through a signal from the appropriate category
          – that is something invaluable. And with us, you get this either for
          free (over half of the available categories) or for $9.9 or $14.9 per
          month (certain time intervals for Binance and Uniswap exchanges are
          available exclusively in the premium option). Kucoin exchange is
          entirely free.
        </Text>
        <Text size="sm">
          We don&apos;t promise you&apos;ll multiply your capital several times
          in a few days. However, we&apos;re confident that the information we
          provide offers insights into all significant movements, making it
          easier to find coins worth trading.
        </Text>
        <Text size="sm">
          By default, we&apos;ve turned off notifications on our Discord
          (there&apos;s a lot of them, and constant alerts can be annoying).
          After exploring what our various categories from different exchanges
          and time frames offer, we suggest you decide which ones interest you
          and set up notifications accordingly (option available in channel
          settings).
        </Text>
        <Text size="sm">
          We hope you&apos;ll join us and contribute to the project&apos;s
          development (more exchanges and a greater variety of categories coming
          soon:)). If you appreciate what we do, find it useful, and it helps
          you in trading, you can also support us by creating an account on
          Binance or Kucoin using our referral link. For those who do so and
          actively trade on such an account, in addition to the standard
          commission kickback, we have additional surprise rewards planned.
        </Text>
        <Text size="sm">
          Wishing you success!
          <br />
          <strong>Crypto Sanctuary Team</strong>
        </Text>
      </div>
    </Section>
  );
};
