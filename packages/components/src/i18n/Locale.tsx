import React, { ReactNode } from 'react';
import { mergeDeepRight } from 'ramda';

// TODO dynamically load locales, see https://facebook.github.io/create-react-app/docs/code-splitting
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/locale-data/en';

// TODO dynamically load json files see https://stackoverflow.com/a/52000700
import messages_en from './locales/en.json';

import { IntlProvider } from 'react-intl';

const messages: { [index: string]: any } = {
  en: messages_en
};

export const Locale = (props: {
  locale: string;
  data?: { [key: string]: object };
  children: ReactNode;
}) => {
  const localeMessages = props.data
    ? mergeDeepRight(messages[props.locale], props.data[props.locale])
    : messages[props.locale];
  return (
    <IntlProvider
      key={props.locale}
      locale={props.locale}
      messages={localeMessages}
    >
      {props.children}
    </IntlProvider>
  );
};
