import useTranslation from "next-translate/useTranslation";
import { Section } from "../Section/Section";
import { Text } from "@/ui";

export const RiskNoticeSection = () => {
  const { t } = useTranslation("home");

  return (
    <Section className="py-12 md:py-12 border-b border-borderColor-dark">
      <div className="max-w-screen-xl flex flex-col gap-4 mx-auto">
          <Text size="sm">{t("RISK_NOTICE_SECTION.TITLE")} {t("RISK_NOTICE_SECTION.TEXT_1")}</Text>
          <Text size="sm">{t("RISK_NOTICE_SECTION.TEXT_2")}</Text>
      </div>
    </Section>
  );
};
