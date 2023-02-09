//@ts-nocheck
import { useTranslation } from "@/app/i18n";

export default async function About({ params }: { params: { lng: string } }) {
  const { t } = await useTranslation(params.lng, "about");

  return (
    <>
      <h1>{t("title")}</h1>
    </>
  );
}
