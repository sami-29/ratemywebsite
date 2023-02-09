//@ts-nocheck

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeSwap from "@/components/mini-components/ThemeSwap";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import { useTranslation } from "../i18n";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  const { t } = await useTranslation(lng);
  const navProps = {
    homepage: t("homepage"),
    explore: t("explore"),
    about: t("about"),
  };

  const footerProps = {
    copyright: t("copyright"),
    switch: t("switch"),
    to: t("to"),
    or: t("or"),
  };

  return (
    <html lang={lng} dir={dir(lng)} data-theme='valentine'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='flex flex-col h-screen justify-between'>
        <Navbar lng={lng} props={navProps} />
        <main className='relative mb-auto pt-12'>
          <ThemeSwap lng={lng} />
          <div className='container mx-auto'>{children}</div>
        </main>

        <Footer lng={lng} props={footerProps} />
      </body>
    </html>
  );
}
