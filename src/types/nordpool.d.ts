export interface NordpoolResponse {
  data: NordpoolData;
  cacheKey: string;
  conf: Conf;
  header: Header;
  endDate: string;
  currency: string;
  pageID: number;
}

export interface Conf {
  Id: string;
  Name: null;
  Published: Date;
  ShowGraph: boolean;
  ResolutionPeriod: ResolutionPeriod;
  ResolutionPeriodY: ResolutionPeriod;
  Entities: Entity[];
  TableType: number;
  ExtraRows: ExtraRow[];
  Filters: Filter[];
  IsDrillDownEnabled: boolean;
  DrillDownMode: number;
  IsMinValueEnabled: boolean;
  IsMaxValueEnabled: boolean;
  ValidYearsBack: number;
  TimeScaleUnit: string;
  IsNtcEnabled: boolean;
  NtcProductType: ProductType;
  NtcHeader: string;
  ShowTimelineGraph: number;
  ExchangeMode: number;
  IsPivotTable: number;
  IsCombinedHeadersEnabled: number;
  NtcFormat: number;
  DisplayHourAlsoInUKTime: boolean;
}

export interface Entity {
  ProductType: ProductType;
  SecondaryProductType: ProductType;
  SecondaryProductBehavior: number;
  Id: string;
  Name: string;
  GroupHeader: string;
  DataUpdated: Date;
  Attributes: Attribute[];
  Drillable: boolean;
  DateRanges: DateRange[];
  Index: number;
  IndexForColumn: number;
  MinMaxDisabled: boolean;
  DisableNumberGroupSeparator: number;
  TimeserieID: null;
  SecondaryTimeserieID: string;
  HasPreliminary: boolean;
  TimeseriePreliminaryID: null;
  Scale: number;
  SecondaryScale: number;
  DataType: number;
  SecondaryDataType: number;
  LastUpdate: Date;
  Unit: Unit;
  IsDominatingDirection: boolean;
  DisplayAsSeparatedColumn: boolean;
  EnableInChart: boolean;
  BlueNegativeValues: boolean;
}

export interface Attribute {
  Id: string;
  Name: Name;
  HasRoles: boolean;
  Role: string;
  Value?: string;
  Values?: string[];
}

export enum Name {
  Area = 'Area',
  Currency = 'Currency',
  Location = 'Location',
  Official = 'Official',
  Unit = 'Unit',
}

export interface DateRange {
  Id: string;
  DateFrom: Date;
  DateTo: Date;
  IsNew: boolean;
}

export interface ProductType {
  Id: string;
  Attributes: Attribute[] | null;
  Name: NtcProductTypeName;
  DisplayName: string;
}

export enum NtcProductTypeName {
  BalticPriAreH = 'BALTIC_PRI_ARE_H',
  CwePriAreH = 'CWE_PRI_ARE_H',
  ElspPriAreH = 'ELSP_PRI_ARE_H',
  ElspPriLOCH = 'ELSP_PRI_LOC_H',
  ElspPriSysH = 'ELSP_PRI_SYS_H',
  Na = 'NA',
}

export enum Unit {
  EURMWh = 'EUR/MWh',
}

export interface ExtraRow {
  Id: string;
  Header: string;
  ColumnProducts: string[];
}

export interface Filter {
  Id: string;
  AttributeName: Name;
  Values: string[];
  DefaultValue: string;
}

export interface ResolutionPeriod {
  Id: string;
  Resolution: number;
  Unit: number;
  PeriodNumber: number;
}

export interface Header {
  title: string;
  description: string;
  questionMarkInfo: string;
  hideDownloadButton: string;
}

export interface NordpoolData {
  Rows: NordpoolRow[];
  IsDivided: boolean;
  SectionNames: string[];
  EntityIDs: string[];
  DataStartdate: string;
  DataEnddate: string;
  MinDateForTimeScale: string;
  AreaChanges: any[];
  Units: string[];
  LatestResultDate: string;
  ContainsPreliminaryValues: boolean;
  ContainsExchangeRates: boolean;
  ExchangeRateOfficial: boolean;
  ExchangeRatePreliminary: boolean;
  ExchangeUnit: string;
  DateUpdated: string;
  CombinedHeadersEnabled: boolean;
  DataType: number;
  TimeZoneInformation: number;
}

export interface NordpoolRow {
  Columns: NordpoolColumn[];
  Name: string;
  StartTime: string;
  EndTime: string;
  DateTimeForData: string;
  DayNumber: number;
  StartTimeDate: string;
  IsExtraRow: boolean;
  IsNtcRow: boolean;
  EmptyValue: string;
  Parent: null;
}

export interface NordpoolColumn {
  Index: number;
  Scale: number;
  SecondaryValue: null;
  IsDominatingDirection: boolean;
  IsValid: boolean;
  IsAdditionalData: boolean;
  Behavior: number;
  Name: string;
  Value: string;
  GroupHeader: string;
  DisplayNegativeValueInBlue: boolean;
  CombinedName: string;
  DateTimeForData: Date;
  DisplayName: string;
  DisplayNameOrDominatingDirection: string;
  IsOfficial: boolean;
  UseDashDisplayStyle: boolean;
}
