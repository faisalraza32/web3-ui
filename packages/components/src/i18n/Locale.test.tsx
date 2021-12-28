import React from 'react';
import { Locale } from './Locale';

describe('Locale component tests', () => {
  const render = props => <Locale {...props} />;

  it('should render', () => {
    expect(render({ locale: 'en' })).toBeTruthy();
  });
});
