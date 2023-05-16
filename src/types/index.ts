type TickerDataType = {
  close: number;
  conversionSymbol: string;
  conversionType: string;
  high: number;
  low: number;
  open: number;
  time: number;
  volumefrom: number;
  volumeto: number;
};

export type TickerHistoryResponseDataType = {
  Aggregated: boolean;
  Data: { Data: TickerDataType[] };
  TimeFrom: number;
  TimeTo: number;
};

type TopCoinsDataType = {
  DISPLAY: {
    USD: {
      FROMSYMBOL: string;
      TOSYMBOL: string;
      MARKET: string;
      PRICE: string;
      LASTUPDATE: string;
      LASTVOLUME: string;
      LASTVOLUMETO: string;
      LASTTRADEID: string;
      VOLUMEDAY: string;
      VOLUMEDAYTO: string;
      VOLUME24HOUR: string;
      VOLUME24HOURTO: string;
      OPENDAY: string;
      HIGHDAY: string;
      LOWDAY: string;
      OPEN24HOUR: string;
      HIGH24HOUR: string;
      LOW24HOUR: string;
      LASTMARKET: string;
      VOLUMEHOUR: string;
      VOLUMEHOURTO: string;
      OPENHOUR: string;
      HIGHHOUR: string;
      LOWHOUR: string;
      TOPTIERVOLUME24HOUR: string;
      TOPTIERVOLUME24HOURTO: string;
      CHANGE24HOUR: string;
      CHANGEPCT24HOUR: string;
      CHANGEDAY: string;
      CHANGEPCTDAY: string;
      CHANGEHOUR: string;
      CHANGEPCTHOUR: string;
      CONVERSIONTYPE: string;
      CONVERSIONSYMBOL: string;
      CONVERSIONLASTUPDATE: string;
      SUPPLY: string;
      MKTCAP: string;
      MKTCAPPENALTY: string;
      CIRCULATINGSUPPLY: string;
      CIRCULATINGSUPPLYMKTCAP: string;
      TOTALVOLUME24H: string;
      TOTALVOLUME24HTO: string;
      TOTALTOPTIERVOLUME24H: string;
      TOTALTOPTIERVOLUME24HTO: string;
      IMAGEURL: string;
    };
  };
  CoinInfo: {
    Algorithm: string;
    AssetLaunchDate: string;
    BlockNumber: number;
    BlockReward: number;
    BlockTime: number;
    DocumentType: string;
    FullName: string;
    Id: string;
    ImageUrl: string;
    Internal: string;
    MaxSupply: number;
    Name: string;
    NetHashesPerSecond: number;
    ProofType: string;
    Rating: {
      Weiss: {
        Rating: string;
        TechnologyAdoptionRating: string;
        MarketPerformanceRating: string;
      };
    };
    Type: number;
    Url: string;
  };
};

export type TopCoinsStatsResponseDataType = {
  Message: string;
  Type: number;
  MetaData: { count: number };
  SponsoredData: [];
  Data: TopCoinsDataType[];
  RateLimit: object;
  HasWarning: boolean;
};
