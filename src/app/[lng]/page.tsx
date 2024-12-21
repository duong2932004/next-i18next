import { useTranslation } from "../i18n";

export default async function Page({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);

  return (
    <div>
      <h1>{t("welcome")}</h1>
    </div>
  );
}
