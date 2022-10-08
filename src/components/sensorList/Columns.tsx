export const Columns = [
  {
    Header: '#',
    accessor: (rows: string, i: number) => (i += 1),
  },
  {
    Header: 'Sensor ID',
    accessor: 'thingName',
  },
  {
    Header: 'Bat.(%)',
    accessor: 'shadow.batLvl',
  },
  {
    Header: 'Connected At',
    accessor: 'shadow.connAt',
  },
  {
    Header: 'Disconnected At',
    accessor: 'shadow.disconnAt',
  },
  {
    Header: 'Reason',
    accessor: 'shadow.disconnReason',
  },
  {
    Header: 'Card No.',
    accessor: 'shadow.connCardNum',
  },
  {
    Header: 'Gateway',
    accessor: 'shadow.connGW',
  },
  {
    Header: 'Raw sent',
    accessor: 'shadow.rawSentCnt',
  },
  {
    Header: 'Remain',
    accessor: 'shadow.remainData',
  },
  {
    Header: 'RSSI',
    accessor: 'shadow.rssi',
  },
  {
    Header: 'F/W ver.',
    accessor: 'shadow.hwVer',
  },
  {
    Header: 'H/W ver.',
    accessor: 'shadow.fwVer',
  },
];
