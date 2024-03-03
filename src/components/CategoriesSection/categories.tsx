import {
  LuAward,
  LuCandlestickChart,
  LuGem,
  LuLineChart,
  LuSearch,
} from "react-icons/lu";
import Image from "next/image";
import { ReactNode } from "react";
import { Text } from "@/ui";

export type Category = {
  key: string;
  icon: ReactNode;
  title: ReactNode;
  content: ReactNode;
  img: ReactNode;
};

export const categories: Category[] = [
  {
    key: "PRICE_JUMPS",
    icon: <LuGem />,
    title:
      "Stay ahead of the game with real-time data on trading volume surges!",
    content: (
      <>
        <Text brightness="dark" className="text-center md:text-left">
          Sudden Volume Surges Categories showcase instances of abrupt increases
          in trading volumes within specified time intervals (1 minute, 5
          minutes, 15 minutes, and 1 hour). These highlight sudden and
          significant rises in trading activity, providing valuable insights for
          traders.
        </Text>
        <Text brightness="dark" className="text-center md:text-left">
          For Binance and Kucoin, the sudden volume surges categories are
          organized by pairs with BTC and USDT, and on Uniswap, they are paired
          with wETH.
        </Text>
        <Text brightness="dark" className="text-center md:text-left">
          Additionally, we provide a detailed overview of how these volume
          changes manifested in other time intervals, offering a comprehensive
          understanding of market dynamics.
        </Text>
      </>
    ),
    img: (
      <Image
        src="/images/price-jumps.png"
        width={280}
        height={360}
        alt="Price Jumps"
      />
    ),
  },
  {
    key: "HIGH_AMPLITUDES",
    icon: <LuLineChart />,
    title:
      "Experience the thrill of trading with our High Amplitudes Categories!",
    content: (
      <>
        <Text brightness="dark" className="text-center md:text-left">
          Experience the thrill of trading with our High Amplitudes Categories,
          showcasing the most substantial price swings within specific time
          intervals (1 minute, 5 minutes, 15 minutes, and 1 hour). These
          highlight significant movements that might revert close to the
          starting point by the interval&apos;s end.
        </Text>
        <Text brightness="dark" className="text-center md:text-left">
          On Binance and Kucoin, High Amplitude Categories are categorized by
          pairs with BTC and USDT, and on Uniswap, they&apos;re paired with
          wETH.
        </Text>
        <Text brightness="dark" className="text-center md:text-left">
          Gain deeper insights into these price changes across various time
          intervals and observe the corresponding volume for both category
          types. Elevate your trading experience with comprehensive data.
        </Text>
      </>
    ),
    img: (
      <Image
        src="/images/price-jumps.png"
        width={280}
        height={360}
        alt="Price Jumps"
      />
    ),
  },
  {
    key: "TOP_GAINERS_LOSERS",
    icon: <LuAward />,
    title:
      "Uncover trading opportunities with our Top Gainers/Losers category!",
    content: (
      <>
        <Text brightness="dark" className="text-center md:text-left">
          Uncover trading opportunities with our Top Gainers/Losers category,
          where we present coins that experienced the most significant price
          increases and decreases at the end of specific periods (ranking
          intervals: 1 minute, 5 minutes, 15 minutes, and 1 hour). These
          rankings are determined by Price Jumps.
        </Text>
        <Text brightness="dark" className="text-center md:text-left">
          For Binance and Kucoin, these categories are segmented into pairs with
          BTC and USDT, while on Uniswap, they&apos;re paired with wETH.
        </Text>
        <Text brightness="dark" className="text-center md:text-left">
          Explore how these price changes performed across different time
          intervals, coupled with insights into the volume from the specified
          time interval. Elevate your trading strategy with a comprehensive view
          of market dynamics!
        </Text>
      </>
    ),
    img: (
      <Image
        src="/images/price-jumps.png"
        width={280}
        height={360}
        alt="Price Jumps"
      />
    ),
  },
  {
    key: "SUDDEN_VOLUME_SURGES",
    icon: <LuCandlestickChart />,
    title: "Sudden Volume Surges Categories!",
    content: (
      <>
        <Text brightness="dark" className="text-center md:text-left">
          Sudden Volume Surges Categories showcase instances of abrupt increases
          in trading volumes within specified time intervals (1 minute, 5
          minutes, 15 minutes, and 1 hour). These highlight sudden and
          significant rises in trading activity, providing valuable insights for
          traders.
        </Text>
        <Text brightness="dark" className="text-center md:text-left">
          For Binance and Kucoin, the sudden volume surges categories are
          organized by pairs with BTC and USDT, and on Uniswap, they are paired
          with wETH.
        </Text>
        <Text brightness="dark" className="text-center md:text-left">
          Additionally, we provide a detailed overview of how these volume
          changes manifested in other time intervals, offering a comprehensive
          understanding of market dynamics. Stay ahead of the game with
          real-time data on trading volume surges!
        </Text>
      </>
    ),
    img: (
      <Image
        src="/images/price-jumps.png"
        width={280}
        height={360}
        alt="Price Jumps"
      />
    ),
  },
  {
    key: "MACD",
    icon: <LuSearch />,
    title: "Dive into market analysis with our MACD!",
    content: (
      <>
        <Text brightness="dark" className="text-center md:text-left">
          Dive into market analysis with our MACD (Moving Average Convergence
          Divergence) category, where we unveil the status of this significant
          indicator.
        </Text>
        <Text brightness="dark" className="text-center md:text-left">
          Discover whether the MACD line has crossed the signal line from below
          or above – a pivotal event in deciphering market trends. Our advanced
          calculation method not only identifies the crossover but also measures
          its strength. We&apos;ve set precise thresholds to minimize market
          noise and ensure relevance.
        </Text>
        <Text brightness="dark" className="text-center md:text-left">
          On Binance, we categorize these occurrences in relation to BTC and
          USDT channels, while on Uniswap, categorization is done in relation to
          wETH. Stay informed about crucial market movements with our detailed
          MACD analysis!
        </Text>
      </>
    ),
    img: (
      <Image
        src="/images/price-jumps.png"
        width={280}
        height={360}
        alt="Price Jumps"
      />
    ),
  },
];
