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
