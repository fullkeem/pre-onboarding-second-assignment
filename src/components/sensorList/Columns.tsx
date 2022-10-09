import { ColumnFilter } from './filtering/ColumnFilter';
import { SliderColumnFilter } from './filtering/SliderColumnFilter';
import { SelectColumnFilter } from './filtering/SelectColumnFilter';

export const Columns = [
  {
    Header: '#',
    accessor: (rows: string, i: number) => (i += 1),
    Filter: ColumnFilter,
  },
  {
    Header: 'Sensor ID',
    accessor: 'thingName',
    Filter: ColumnFilter,
  },
  {
    Header: 'Bat.(%)',
    accessor: 'shadow.batLvl',
    Filter: SliderColumnFilter,
  },
  {
    Header: 'Connected At',
    accessor: 'shadow.connAt',
    Filter: ColumnFilter,
  },
  {
    Header: 'Disconnected At',
    accessor: 'shadow.disconnAt',
    Filter: ColumnFilter,
  },
  {
    Header: 'Reason',
    accessor: 'shadow.disconnReason',
    Filter: SelectColumnFilter,
  },
  {
    Header: 'Card No.',
    accessor: 'shadow.connCardNum',
    Filter: SelectColumnFilter,
  },
  {
    Header: 'Gateway',
    accessor: 'shadow.connGW',
    Filter: ColumnFilter,
  },
  {
    Header: 'Raw sent',
    accessor: 'shadow.rawSentCnt',
    Filter: ColumnFilter,
  },
  {
    Header: 'Remain',
    accessor: 'shadow.remainData',
    Filter: ColumnFilter,
  },
  {
    Header: 'RSSI',
    accessor: 'shadow.rssi',
    Filter: SliderColumnFilter,
  },
  {
    Header: 'F/W ver.',
    accessor: 'shadow.hwVer',
    Filter: SelectColumnFilter,
  },
  {
    Header: 'H/W ver.',
    accessor: 'shadow.fwVer',
    Filter: SelectColumnFilter,
  },
];
