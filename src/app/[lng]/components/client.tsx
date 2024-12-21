"use client";

import { useTranslation } from "react-i18next";

export default function ClientComponent({ lng }) {
  const { t } = useTranslation();
  return <p>{t("hello")}</p>;
}
