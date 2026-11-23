import { getTranslations } from "next-intl/server";

export default async function ResumePage() {
  const t = await getTranslations("Scaffold");

  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-3xl font-semibold">{t("title")}</h1>
      <p className="mt-3">{t("description")}</p>
    </main>
  );
}
