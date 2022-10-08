export interface WeatherData {
  channel: {
    id: number;
    name: string;
    description: string;
    latitude: string;
    longitude: string;
    field1: string;
    field2: string;
    field3: string;
    created_at: string;
    updated_at: string;
    last_entry_id: number;
  };
  feeds: {
    created_at: string;
    entry_id: number;
    field1: string;
    field2: string;
    field3: string;
  }[];
}

export interface SelectDate {
  year: number;
  month: number;
  day: number;
}

export interface SensorInfo {
  thingName: string;
  shadow: {
    hwVer: string;
    fwVer: string;
    batLvl: number;
    connAt: string;
    disconnAt: string;
    disconnReason: number;
    rawSentCnt: number;
    connGW: string;
    connCardNum: number;
    rssi: number;
    remainData: number;
  };
}

export interface BtnPropsData {
  background: string;
  text: string;
}

export interface Data {
  channel: {
    id: number;
    name: string;
    description: string;
    latitude: string;
    longitude: string;
    field1: string;
    field2: string;
    field3: string;
    created_at: string;
    updated_at: string;
    last_entry_id: number;
  };
  feeds: [
    {
      created_at: string;
      entry_id: number;
      field1: string;
      field2: string;
      field3: string;
    }
  ];
}
