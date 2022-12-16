import test from 'ava';

import { getHourly } from './client';

test.serial('hourly', async (t) => {
  const res = await getHourly({
    area: 'FI',
    vat: 10,
  });

  console.log(res);
  t.pass();
});

test.serial('hourly with timezone', async (t) => {
  const res = await getHourly({
    area: 'FI',
    vat: 10,
    timezone: 'Europe/Helsinki',
  });

  console.log(res);
  t.pass();
});
