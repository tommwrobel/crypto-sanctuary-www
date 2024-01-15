import {
  LuHeartHandshake,
  LuNetwork,
  LuNewspaper,
  LuUserPlus,
} from "react-icons/lu";
import { DiscordIcon } from "../DiscordIcon/DiscordIcon";
import { Title, Text, Button } from "@/ui";

export const AboutSection = () => {
  return (
    <section className="w-full flex gap-16 flex-col items-center px-8 py-16 sm:px-16">
      <div className="flex max-w-screen-xl mx-auto gap-8 md:gap-16 flex-col md:flex-row">
        <div className="group bg-bgColor-dark outline outline-2 outline-bgColor-dark rounded-3xl w-full p-8 flex flex-col gap-6 justify-center hover:scale-105 hover:outline-secondary duration-200">
          <LuUserPlus className="text-secondary text-2xl" />
          <Text className="group-hover:text-textColor-light">
            Join our innovative Discord server to receive real-time information
            and analyses of transactions on Binance, Uniswap, and Kucoin.
          </Text>
        </div>
        <div className="group bg-bgColor-dark outline outline-2 outline-bgColor-dark rounded-3xl w-full p-8 flex flex-col gap-6 justify-center hover:scale-105 hover:outline-secondary duration-200">
          <LuNewspaper className="text-secondary text-2xl" />
          <Text className="group-hover:text-textColor-light">
            Stay informed with instant updates on market changes and trends,
            including price jumps, sudden volume fluctuations, etc.
          </Text>
        </div>
        <div className="group bg-bgColor-dark outline outline-2 outline-bgColor-dark rounded-3xl w-full p-8 flex flex-col gap-6 justify-center hover:scale-105 hover:outline-secondary duration-200">
          <LuHeartHandshake className="text-secondary text-2xl" />
          <Text className="group-hover:text-textColor-light">
            From experienced traders to newcomers in the world of
            cryptocurrencies, The Crypto Sanctuary offers invaluable support and
            insights at every level. Lead the market - join now!
          </Text>
        </div>
      </div>
      <a
        href="https://discord.gg/rYmBNuF6XY"
        target="_blank"
        title="Join our Discord!"
      >
        <Button>
          <DiscordIcon className="animate-wiggle" width={20} height={20} />
          Join our Discord!
        </Button>
      </a>
    </section>
  );
};
