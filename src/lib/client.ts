import { DateTime } from 'luxon';

import { HOURLY } from '../constants';
import { axios } from '../httpClient';
import { NordpoolResponse } from '../types/nordpool';

type Areas = 'FI' | 'Bergen' | 'DK1' | 'DK2' | 'OSLO' | 'SE1' | 'SE2' | 'SE3' | 'SE4' | 'SYS';

interface getHourlyOptions {
  currency?: string;
  area: Areas;
  endDate?: string;
  vat?: number;
  timezone?: string;
}

interface HourlyReturn {
  startTime: string;
  value: string;
  price: string;
  area: string;
}

export async function getHourly(opt: getHourlyOptions): Promise<HourlyReturn[]> {
  const endDate =
    opt.endDate ??
    DateTime.now()
      .setZone(opt.timezone ?? 'Europe/Oslo')
      .toFormat('dd-MM-yyyy');
  console.log(endDate);

  const url = HOURLY + '?currency=' + 'EUR' + '&endDate=' + endDate;

  const resp = await axios.get<NordpoolResponse>(url);

  const values = [];
  for (const row of resp.data.data.Rows) {
    if (row.IsExtraRow) {
      continue;
    }

    let col = row.Columns;
    if (opt.area) {
      col = row.Columns.filter((a) => a.Name === opt.area);
    }
    const price = ((parseFloat(col[0].Value) * (opt.vat ? opt.vat / 100 + 1 : 1)) / 10).toFixed(2);

    values.push({
      startTime: row.StartTime,
      value: col[0].Value,
      price: price,
      area: col[0].Name,
    });
  }

  return values;
}
