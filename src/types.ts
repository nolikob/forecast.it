export interface Forecast {
    Headline:       Headline;
    DailyForecasts: DailyForecast[];
}

export interface DailyForecast {
    Date:        Date;
    EpochDate:   number;
    Temperature: Temperature;
    Day:         Day;
    Night:       Night;
    Sources:     string[];
    MobileLink:  string;
    Link:        string;
}

export interface Day {
    Icon:                   number;
    IconPhrase:             string;
    HasPrecipitation:       boolean;
    PrecipitationType:      string;
    PrecipitationIntensity: string;
}

export interface Night {
    Icon:             number;
    IconPhrase:       string;
    HasPrecipitation: boolean;
}

export interface Temperature {
    Minimum: Imum;
    Maximum: Imum;
}

export interface Imum {
    Value:    number;
    Unit:     string;
    UnitType: number;
}

export interface Headline {
    EffectiveDate:      Date;
    EffectiveEpochDate: number;
    Severity:           number;
    Text:               string;
    Category:           string;
    EndDate:            Date;
    EndEpochDate:       number;
    MobileLink:         string;
    Link:               string;
}

export interface Location {
    Version:                number;
    Key:                    string;
    Type:                   Type;
    Rank:                   number;
    LocalizedName:          string;
    EnglishName:            string;
    PrimaryPostalCode:      string;
    Region:                 Country;
    Country:                Country;
    AdministrativeArea:     AdministrativeArea;
    TimeZone:               TimeZone;
    GeoPosition:            GeoPosition;
    IsAlias:                boolean;
    SupplementalAdminAreas: SupplementalAdminArea[];
    DataSets:               DataSet[];
}

export interface AdministrativeArea {
    ID:            string;
    LocalizedName: string;
    EnglishName:   string;
    Level:         number;
    LocalizedType: string;
    EnglishType:   string;
    CountryID:     string;
}

export interface Country {
    ID:            string;
    LocalizedName: string;
    EnglishName:   string;
}

export enum DataSet {
    AirQuality = "AirQuality",
    AirQualityCurrentConditions = "AirQualityCurrentConditions",
    AirQualityForecasts = "AirQualityForecasts",
    AirQualityRegional = "AirQuality-Regional",
    Alerts = "Alerts",
    DailyAirQualityForecast = "DailyAirQualityForecast",
    DailyLocalIndices = "DailyLocalIndices",
    DailyPollenForecast = "DailyPollenForecast",
    ForecastConfidence = "ForecastConfidence",
    FutureRadar = "FutureRadar",
    HourlyLocalIndices = "HourlyLocalIndices",
    MinuteCast = "MinuteCast",
    PremiumAirQuality = "PremiumAirQuality",
    Radar = "Radar",
}

export interface GeoPosition {
    Latitude:  number;
    Longitude: number;
    Elevation: Elevation;
}

export interface Elevation {
    Metric:   Imperial;
    Imperial: Imperial;
}

export interface Imperial {
    Value:    number;
    Unit:     Unit;
    UnitType: number;
}

export enum Unit {
    Ft = "ft",
    M = "m",
}

export interface SupplementalAdminArea {
    Level:         number;
    LocalizedName: string;
    EnglishName:   string;
}

export interface TimeZone {
    Code:             string;
    Name:             string;
    GmtOffset:        number;
    IsDaylightSaving: boolean;
    NextOffsetChange: Date | null;
}
