import { ColumnFilter } from './filtering/ColumnFilter';
import { SliderColumnFilter } from './filtering/SliderColumnFilter';
import { SelectColumnFilter } from './filtering/SelectColumnFilter';

export const Columns = [
  {
    Header: '#',
    accessor: (rows: string, i: number) => (i += 1),
    Filter: ColumnFilter,
    width: '10%',
  },
  {
    Header: 'Sensor ID',
    accessor: 'thingName',
    Filter: ColumnFilter,
    width: '100%',
  },
  {
    Header: 'Bat.(%)',
    accessor: 'shadow.batLvl',
    Filter: SliderColumnFilter,
    width: '100%',
  },
  {
    Header: 'Connected At',
    accessor: 'shadow.connAt',
    Filter: ColumnFilter,
    width: '100%',
  },
  {
    Header: 'Disconnected At',
    accessor: 'shadow.disconnAt',
    Filter: ColumnFilter,
    width: '100%',
  },
  {
    Header: 'Reason',
    accessor: 'shadow.disconnReason',
    Filter: SelectColumnFilter,
    width: '100%',
  },
  {
    Header: 'Card No.',
    accessor: 'shadow.connCardNum',
    Filter: SelectColumnFilter,
    width: '100%',
  },
  {
    Header: 'Gateway',
    accessor: 'shadow.connGW',
    Filter: ColumnFilter,
    width: '100%',
  },
  {
    Header: 'Raw sent',
    accessor: 'shadow.rawSentCnt',
    Filter: ColumnFilter,
    width: '100%',
  },
  {
    Header: 'Remain',
    accessor: 'shadow.remainData',
    Filter: ColumnFilter,
    width: '100%',
  },
  {
    Header: 'RSSI',
    accessor: 'shadow.rssi',
    Filter: SliderColumnFilter,
    width: '100%',
  },
  {
    Header: 'F/W ver.',
    accessor: 'shadow.fwVer',
    Filter: SelectColumnFilter,
    width: '100%',
  },
  {
    Header: 'H/W ver.',
    accessor: 'shadow.hwVer',
    Filter: SelectColumnFilter,
    width: '100%',
  },
];
