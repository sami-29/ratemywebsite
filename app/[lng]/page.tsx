//@ts-nocheck
import { useTranslation } from "@/app/i18n";

export default async function Home({ params }: { params: { lng: string } }) {
  const { t } = await useTranslation(params.lng, "homepage");
  return (
    <>
      <h1>{t("title")}</h1>
    </>
  );
}
