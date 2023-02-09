//@ts-nocheck
import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "@/app/i18n/settings";
import { useTranslation } from "@/app/i18n";

type footerProps = {
  copyright: string;
  switch: string;
  to: string;
  or: string;
};

export default async function Footer({
  lng,
  props,
}: {
  lng: string;
  props: footerProps;
}) {
  const { t } = await useTranslation(lng);
  return (
    <footer className='footer footer-center p-4 bg-base-300 text-base-content'>
      <div className='flex'>
        <p>{props.copyright} </p>
        <span className='md:mx-12'>|</span>
        <div className='tracking-widest'>
          <Trans i18nKey='languageSwitcher' t={t}>
            {props.switch} <strong>{{ lng }}</strong> {props.to}:{" "}
          </Trans>
          {languages
            .filter((l) => lng !== l)
            .map((l, index) => {
              return (
                <span key={l}>
                  {index > 0 && ` ${props.or} `}
                  <Link className='underline' href={`/${l}`}>
                    {l}
                  </Link>
                </span>
              );
            })}
        </div>
      </div>
    </footer>
  );
}
