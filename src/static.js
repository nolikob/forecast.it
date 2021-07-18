import { Location, Forecast } from "./types";

export const locations: Location[] = [
    {
      "Version": 1,
      "Key": "28143",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Dhaka",
      "EnglishName": "Dhaka",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "ASI",
        "LocalizedName": "Asia",
        "EnglishName": "Asia"
      },
      "Country": {
        "ID": "BD",
        "LocalizedName": "Bangladesh",
        "EnglishName": "Bangladesh"
      },
      "AdministrativeArea": {
        "ID": "C",
        "LocalizedName": "Dhaka",
        "EnglishName": "Dhaka",
        "Level": 1,
        "LocalizedType": "Division",
        "EnglishType": "Division",
        "CountryID": "BD"
      },
      "TimeZone": {
        "Code": "BDT",
        "Name": "Asia/Dhaka",
        "GmtOffset": 6,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 23.71,
        "Longitude": 90.407,
        "Elevation": {
          "Metric": {
            "Value": 5,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 16,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts"
      ]
    },
    {
      "Version": 1,
      "Key": "113487",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Kinshasa",
      "EnglishName": "Kinshasa",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "AFR",
        "LocalizedName": "Africa",
        "EnglishName": "Africa"
      },
      "Country": {
        "ID": "CD",
        "LocalizedName": "Democratic Republic of the Congo",
        "EnglishName": "Democratic Republic of the Congo"
      },
      "AdministrativeArea": {
        "ID": "KN",
        "LocalizedName": "Kinshasa",
        "EnglishName": "Kinshasa",
        "Level": 1,
        "LocalizedType": "City",
        "EnglishType": "City",
        "CountryID": "CD"
      },
      "TimeZone": {
        "Code": "WAT",
        "Name": "Africa/Kinshasa",
        "GmtOffset": 1,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": -4.316,
        "Longitude": 15.298,
        "Elevation": {
          "Metric": {
            "Value": 180,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 590,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts"
      ]
    },
    {
      "Version": 1,
      "Key": "60449",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Santiago",
      "EnglishName": "Santiago",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "SAM",
        "LocalizedName": "South America",
        "EnglishName": "South America"
      },
      "Country": {
        "ID": "CL",
        "LocalizedName": "Chile",
        "EnglishName": "Chile"
      },
      "AdministrativeArea": {
        "ID": "RM",
        "LocalizedName": "Región Metropolitana de Santiago",
        "EnglishName": "Región Metropolitana de Santiago",
        "Level": 1,
        "LocalizedType": "Region",
        "EnglishType": "Region",
        "CountryID": "CL"
      },
      "TimeZone": {
        "Code": "CLT",
        "Name": "America/Santiago",
        "GmtOffset": -4,
        "IsDaylightSaving": false,
        "NextOffsetChange": "2021-09-05T04:00:00Z"
      },
      "GeoPosition": {
        "Latitude": -33.446,
        "Longitude": -70.659,
        "Elevation": {
          "Metric": {
            "Value": 522,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 1712,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 2,
          "LocalizedName": "Santiago",
          "EnglishName": "Santiago"
        }
      ],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Radar"
      ]
    },
    {
      "Version": 1,
      "Key": "101924",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Beijing",
      "EnglishName": "Beijing",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "ASI",
        "LocalizedName": "Asia",
        "EnglishName": "Asia"
      },
      "Country": {
        "ID": "CN",
        "LocalizedName": "China",
        "EnglishName": "China"
      },
      "AdministrativeArea": {
        "ID": "BJ",
        "LocalizedName": "Beijing",
        "EnglishName": "Beijing",
        "Level": 1,
        "LocalizedType": "Municipality",
        "EnglishType": "Municipality",
        "CountryID": "CN"
      },
      "TimeZone": {
        "Code": "CST",
        "Name": "Asia/Shanghai",
        "GmtOffset": 8,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 39.917,
        "Longitude": 116.407,
        "Elevation": {
          "Metric": {
            "Value": 62,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 203,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQuality",
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "DailyAirQualityForecast",
        "DailyLocalIndices",
        "ForecastConfidence",
        "FutureRadar",
        "MinuteCast",
        "PremiumAirQuality"
      ]
    },
    {
      "Version": 1,
      "Key": "107487",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Bogota",
      "EnglishName": "Bogota",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "SAM",
        "LocalizedName": "South America",
        "EnglishName": "South America"
      },
      "Country": {
        "ID": "CO",
        "LocalizedName": "Colombia",
        "EnglishName": "Colombia"
      },
      "AdministrativeArea": {
        "ID": "DC",
        "LocalizedName": "Distrito Capital de Bogotá",
        "EnglishName": "Distrito Capital de Bogotá",
        "Level": 1,
        "LocalizedType": "Capital District",
        "EnglishType": "Capital District",
        "CountryID": "CO"
      },
      "TimeZone": {
        "Code": "COT",
        "Name": "America/Bogota",
        "GmtOffset": -5,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 4.628,
        "Longitude": -74.077,
        "Elevation": {
          "Metric": {
            "Value": 2562,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 8406,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 2,
          "LocalizedName": "Santafe de Bogota",
          "EnglishName": "Santafe de Bogota"
        }
      ],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Radar"
      ]
    },
    {
      "Version": 1,
      "Key": "178087",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Berlin",
      "EnglishName": "Berlin",
      "PrimaryPostalCode": "10178",
      "Region": {
        "ID": "EUR",
        "LocalizedName": "Europe",
        "EnglishName": "Europe"
      },
      "Country": {
        "ID": "DE",
        "LocalizedName": "Germany",
        "EnglishName": "Germany"
      },
      "AdministrativeArea": {
        "ID": "BE",
        "LocalizedName": "Berlin",
        "EnglishName": "Berlin",
        "Level": 1,
        "LocalizedType": "State",
        "EnglishType": "State",
        "CountryID": "DE"
      },
      "TimeZone": {
        "Code": "CEST",
        "Name": "Europe/Berlin",
        "GmtOffset": 2,
        "IsDaylightSaving": true,
        "NextOffsetChange": "2021-10-31T01:00:00Z"
      },
      "GeoPosition": {
        "Latitude": 52.518,
        "Longitude": 13.406,
        "Elevation": {
          "Metric": {
            "Value": 35,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 114,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 2,
          "LocalizedName": "Berlin",
          "EnglishName": "Berlin"
        }
      ],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "ForecastConfidence",
        "FutureRadar",
        "MinuteCast",
        "Radar"
      ]
    },
    {
      "Version": 1,
      "Key": "127164",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Cairo",
      "EnglishName": "Cairo",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "AFR",
        "LocalizedName": "Africa",
        "EnglishName": "Africa"
      },
      "Country": {
        "ID": "EG",
        "LocalizedName": "Egypt",
        "EnglishName": "Egypt"
      },
      "AdministrativeArea": {
        "ID": "C",
        "LocalizedName": "Cairo",
        "EnglishName": "Cairo",
        "Level": 1,
        "LocalizedType": "Governorate",
        "EnglishType": "Governorate",
        "CountryID": "EG"
      },
      "TimeZone": {
        "Code": "EET",
        "Name": "Africa/Cairo",
        "GmtOffset": 2,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 30.084,
        "Longitude": 31.255,
        "Elevation": {
          "Metric": {
            "Value": 20,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 65,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts"
      ]
    },
    {
      "Version": 1,
      "Key": "308526",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Madrid",
      "EnglishName": "Madrid",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "EUR",
        "LocalizedName": "Europe",
        "EnglishName": "Europe"
      },
      "Country": {
        "ID": "ES",
        "LocalizedName": "Spain",
        "EnglishName": "Spain"
      },
      "AdministrativeArea": {
        "ID": "MD",
        "LocalizedName": "Madrid",
        "EnglishName": "Madrid",
        "Level": 1,
        "LocalizedType": "Autonomous Community",
        "EnglishType": "Autonomous Community",
        "CountryID": "ES"
      },
      "TimeZone": {
        "Code": "CEST",
        "Name": "Europe/Madrid",
        "GmtOffset": 2,
        "IsDaylightSaving": true,
        "NextOffsetChange": "2021-10-31T01:00:00Z"
      },
      "GeoPosition": {
        "Latitude": 40.41,
        "Longitude": -3.686,
        "Elevation": {
          "Metric": {
            "Value": 639,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 2095,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 3,
          "LocalizedName": "Madrid",
          "EnglishName": "Madrid"
        }
      ],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "ForecastConfidence",
        "FutureRadar",
        "MinuteCast",
        "Radar"
      ]
    },
    {
      "Version": 1,
      "Key": "328328",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "London",
      "EnglishName": "London",
      "PrimaryPostalCode": "EC4A 2",
      "Region": {
        "ID": "EUR",
        "LocalizedName": "Europe",
        "EnglishName": "Europe"
      },
      "Country": {
        "ID": "GB",
        "LocalizedName": "United Kingdom",
        "EnglishName": "United Kingdom"
      },
      "AdministrativeArea": {
        "ID": "LND",
        "LocalizedName": "London",
        "EnglishName": "London",
        "Level": 1,
        "LocalizedType": "London Borough",
        "EnglishType": "London Borough",
        "CountryID": "GB"
      },
      "TimeZone": {
        "Code": "BST",
        "Name": "Europe/London",
        "GmtOffset": 1,
        "IsDaylightSaving": true,
        "NextOffsetChange": "2021-10-31T01:00:00Z"
      },
      "GeoPosition": {
        "Latitude": 51.514,
        "Longitude": -0.107,
        "Elevation": {
          "Metric": {
            "Value": 18,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 59,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 0,
          "LocalizedName": "England",
          "EnglishName": "England"
        },
        {
          "Level": 3,
          "LocalizedName": "Castle Baynard",
          "EnglishName": "Castle Baynard"
        }
      ],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "ForecastConfidence",
        "FutureRadar",
        "MinuteCast",
        "Radar"
      ]
    },
    {
      "Version": 1,
      "Key": "182536",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Athens",
      "EnglishName": "Athens",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "EUR",
        "LocalizedName": "Europe",
        "EnglishName": "Europe"
      },
      "Country": {
        "ID": "GR",
        "LocalizedName": "Greece",
        "EnglishName": "Greece"
      },
      "AdministrativeArea": {
        "ID": "I",
        "LocalizedName": "Attica",
        "EnglishName": "Attica",
        "Level": 1,
        "LocalizedType": "Region",
        "EnglishType": "Region",
        "CountryID": "GR"
      },
      "TimeZone": {
        "Code": "EEST",
        "Name": "Europe/Athens",
        "GmtOffset": 3,
        "IsDaylightSaving": true,
        "NextOffsetChange": "2021-10-31T01:00:00Z"
      },
      "GeoPosition": {
        "Latitude": 37.984,
        "Longitude": 23.728,
        "Elevation": {
          "Metric": {
            "Value": 126,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 413,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 2,
          "LocalizedName": "Athens",
          "EnglishName": "Athens"
        }
      ],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "ForecastConfidence"
      ]
    },
    {
      "Version": 1,
      "Key": "1123655",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Hong Kong",
      "EnglishName": "Hong Kong",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "ASI",
        "LocalizedName": "Asia",
        "EnglishName": "Asia"
      },
      "Country": {
        "ID": "HK",
        "LocalizedName": "Hong Kong",
        "EnglishName": "Hong Kong"
      },
      "AdministrativeArea": {
        "ID": "ST",
        "LocalizedName": "Sha Tin",
        "EnglishName": "Sha Tin",
        "Level": 1,
        "LocalizedType": "District",
        "EnglishType": "District",
        "CountryID": "HK"
      },
      "TimeZone": {
        "Code": "CST",
        "Name": "Asia/Hong_Kong",
        "GmtOffset": 8,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 22.369,
        "Longitude": 114.174,
        "Elevation": {
          "Metric": {
            "Value": 35,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 114,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQuality",
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "FutureRadar",
        "MinuteCast",
        "PremiumAirQuality"
      ]
    },
    {
      "Version": 1,
      "Key": "208971",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Jakarta",
      "EnglishName": "Jakarta",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "ASI",
        "LocalizedName": "Asia",
        "EnglishName": "Asia"
      },
      "Country": {
        "ID": "ID",
        "LocalizedName": "Indonesia",
        "EnglishName": "Indonesia"
      },
      "AdministrativeArea": {
        "ID": "JK",
        "LocalizedName": "Jakarta",
        "EnglishName": "Jakarta",
        "Level": 1,
        "LocalizedType": "Capital District",
        "EnglishType": "Capital District",
        "CountryID": "ID"
      },
      "TimeZone": {
        "Code": "WIT",
        "Name": "Asia/Jakarta",
        "GmtOffset": 7,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": -6.175,
        "Longitude": 106.827,
        "Elevation": {
          "Metric": {
            "Value": 11,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 35,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 2,
          "LocalizedName": "Jakarta Pusat",
          "EnglishName": "Jakarta Pusat"
        },
        {
          "Level": 3,
          "LocalizedName": "Gambir",
          "EnglishName": "Gambir"
        }
      ],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts"
      ]
    },
    {
      "Version": 1,
      "Key": "207375",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Baghdad",
      "EnglishName": "Baghdad",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "MEA",
        "LocalizedName": "Middle East",
        "EnglishName": "Middle East"
      },
      "Country": {
        "ID": "IQ",
        "LocalizedName": "Iraq",
        "EnglishName": "Iraq"
      },
      "AdministrativeArea": {
        "ID": "BG",
        "LocalizedName": "Baghdad",
        "EnglishName": "Baghdad",
        "Level": 1,
        "LocalizedType": "Governorate",
        "EnglishType": "Governorate",
        "CountryID": "IQ"
      },
      "TimeZone": {
        "Code": "AST",
        "Name": "Asia/Baghdad",
        "GmtOffset": 3,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 33.328,
        "Longitude": 44.386,
        "Elevation": {
          "Metric": {
            "Value": 35,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 114,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "ForecastConfidence"
      ]
    },
    {
      "Version": 1,
      "Key": "226396",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Tokyo",
      "EnglishName": "Tokyo",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "ASI",
        "LocalizedName": "Asia",
        "EnglishName": "Asia"
      },
      "Country": {
        "ID": "JP",
        "LocalizedName": "Japan",
        "EnglishName": "Japan"
      },
      "AdministrativeArea": {
        "ID": "13",
        "LocalizedName": "Tokyo",
        "EnglishName": "Tokyo",
        "Level": 1,
        "LocalizedType": "Prefecture",
        "EnglishType": "Prefecture",
        "CountryID": "JP"
      },
      "TimeZone": {
        "Code": "JST",
        "Name": "Asia/Tokyo",
        "GmtOffset": 9,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 35.683,
        "Longitude": 139.809,
        "Elevation": {
          "Metric": {
            "Value": 1,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 3,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "ForecastConfidence",
        "FutureRadar",
        "MinuteCast",
        "Radar"
      ]
    },
    {
      "Version": 1,
      "Key": "226081",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Seoul",
      "EnglishName": "Seoul",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "ASI",
        "LocalizedName": "Asia",
        "EnglishName": "Asia"
      },
      "Country": {
        "ID": "KR",
        "LocalizedName": "South Korea",
        "EnglishName": "South Korea"
      },
      "AdministrativeArea": {
        "ID": "11",
        "LocalizedName": "Seoul",
        "EnglishName": "Seoul",
        "Level": 1,
        "LocalizedType": "Special City",
        "EnglishType": "Special City",
        "CountryID": "KR"
      },
      "TimeZone": {
        "Code": "KST",
        "Name": "Asia/Seoul",
        "GmtOffset": 9,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 37.537,
        "Longitude": 126.97,
        "Elevation": {
          "Metric": {
            "Value": 19,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 62,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQuality",
        "AirQuality-Regional",
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "DailyLocalIndices",
        "ForecastConfidence",
        "FutureRadar",
        "HourlyLocalIndices",
        "MinuteCast",
        "PremiumAirQuality",
        "Radar"
      ]
    },
    {
      "Version": 1,
      "Key": "242560",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Mexico City",
      "EnglishName": "Mexico City",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "NAM",
        "LocalizedName": "North America",
        "EnglishName": "North America"
      },
      "Country": {
        "ID": "MX",
        "LocalizedName": "Mexico",
        "EnglishName": "Mexico"
      },
      "AdministrativeArea": {
        "ID": "CMX",
        "LocalizedName": "México City",
        "EnglishName": "México City",
        "Level": 1,
        "LocalizedType": "Federal District",
        "EnglishType": "Federal District",
        "CountryID": "MX"
      },
      "TimeZone": {
        "Code": "CDT",
        "Name": "America/Mexico_City",
        "GmtOffset": -5,
        "IsDaylightSaving": true,
        "NextOffsetChange": "2021-10-31T07:00:00Z"
      },
      "GeoPosition": {
        "Latitude": 19.433,
        "Longitude": -99.133,
        "Elevation": {
          "Metric": {
            "Value": 2242,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 7357,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "Radar"
      ]
    },
    {
      "Version": 1,
      "Key": "264120",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Lima",
      "EnglishName": "Lima",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "SAM",
        "LocalizedName": "South America",
        "EnglishName": "South America"
      },
      "Country": {
        "ID": "PE",
        "LocalizedName": "Peru",
        "EnglishName": "Peru"
      },
      "AdministrativeArea": {
        "ID": "LMA",
        "LocalizedName": "Lima",
        "EnglishName": "Lima",
        "Level": 1,
        "LocalizedType": "Municipality",
        "EnglishType": "Municipality",
        "CountryID": "PE"
      },
      "TimeZone": {
        "Code": "PET",
        "Name": "America/Lima",
        "GmtOffset": -5,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": -12.082,
        "Longitude": -77.045,
        "Elevation": {
          "Metric": {
            "Value": 105,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 344,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Radar"
      ]
    },
    {
      "Version": 1,
      "Key": "294021",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Moscow",
      "EnglishName": "Moscow",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "ASI",
        "LocalizedName": "Asia",
        "EnglishName": "Asia"
      },
      "Country": {
        "ID": "RU",
        "LocalizedName": "Russia",
        "EnglishName": "Russia"
      },
      "AdministrativeArea": {
        "ID": "MOW",
        "LocalizedName": "Moscow",
        "EnglishName": "Moscow",
        "Level": 1,
        "LocalizedType": "Federal City",
        "EnglishType": "Federal City",
        "CountryID": "RU"
      },
      "TimeZone": {
        "Code": "MSK",
        "Name": "Europe/Moscow",
        "GmtOffset": 3,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 55.752,
        "Longitude": 37.619,
        "Elevation": {
          "Metric": {
            "Value": 155,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 508,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 2,
          "LocalizedName": "Tsentralny",
          "EnglishName": "Tsentralny"
        }
      ],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "ForecastConfidence"
      ]
    },
    {
      "Version": 1,
      "Key": "297030",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Riyadh",
      "EnglishName": "Riyadh",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "MEA",
        "LocalizedName": "Middle East",
        "EnglishName": "Middle East"
      },
      "Country": {
        "ID": "SA",
        "LocalizedName": "Saudi Arabia",
        "EnglishName": "Saudi Arabia"
      },
      "AdministrativeArea": {
        "ID": "01",
        "LocalizedName": "Ar Riyāḑ",
        "EnglishName": "Ar Riyāḑ",
        "Level": 1,
        "LocalizedType": "Region",
        "EnglishType": "Region",
        "CountryID": "SA"
      },
      "TimeZone": {
        "Code": "AST",
        "Name": "Asia/Riyadh",
        "GmtOffset": 3,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 24.64,
        "Longitude": 46.753,
        "Elevation": {
          "Metric": {
            "Value": 598,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 1961,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts"
      ]
    },
    {
      "Version": 1,
      "Key": "300597",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Singapore",
      "EnglishName": "Singapore",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "ASI",
        "LocalizedName": "Asia",
        "EnglishName": "Asia"
      },
      "Country": {
        "ID": "SG",
        "LocalizedName": "Singapore",
        "EnglishName": "Singapore"
      },
      "AdministrativeArea": {
        "ID": "01",
        "LocalizedName": "Central Singapore",
        "EnglishName": "Central Singapore",
        "Level": 1,
        "LocalizedType": "District",
        "EnglishType": "District",
        "CountryID": "SG"
      },
      "TimeZone": {
        "Code": "SGT",
        "Name": "Asia/Singapore",
        "GmtOffset": 8,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 1.311,
        "Longitude": 103.843,
        "Elevation": {
          "Metric": {
            "Value": 13,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 42,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts"
      ]
    },
    {
      "Version": 1,
      "Key": "318849",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Bangkok",
      "EnglishName": "Bangkok",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "ASI",
        "LocalizedName": "Asia",
        "EnglishName": "Asia"
      },
      "Country": {
        "ID": "TH",
        "LocalizedName": "Thailand",
        "EnglishName": "Thailand"
      },
      "AdministrativeArea": {
        "ID": "10",
        "LocalizedName": "Bangkok",
        "EnglishName": "Bangkok",
        "Level": 1,
        "LocalizedType": "Province",
        "EnglishType": "Province",
        "CountryID": "TH"
      },
      "TimeZone": {
        "Code": "ICT",
        "Name": "Asia/Bangkok",
        "GmtOffset": 7,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 13.731,
        "Longitude": 100.521,
        "Elevation": {
          "Metric": {
            "Value": 2,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 6,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts"
      ]
    },
    {
      "Version": 1,
      "Key": "353412",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Hanoi",
      "EnglishName": "Hanoi",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "ASI",
        "LocalizedName": "Asia",
        "EnglishName": "Asia"
      },
      "Country": {
        "ID": "VN",
        "LocalizedName": "Vietnam",
        "EnglishName": "Vietnam"
      },
      "AdministrativeArea": {
        "ID": "HN",
        "LocalizedName": "Hanoi",
        "EnglishName": "Hanoi",
        "Level": 1,
        "LocalizedType": "Municipality",
        "EnglishType": "Municipality",
        "CountryID": "VN"
      },
      "TimeZone": {
        "Code": "ICT",
        "Name": "Asia/Ho_Chi_Minh",
        "GmtOffset": 7,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 20.999,
        "Longitude": 105.7,
        "Elevation": {
          "Metric": {
            "Value": 19,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 62,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts"
      ]
    },
    {
      "Version": 1,
      "Key": "22889",
      "Type": "City",
      "Rank": 11,
      "LocalizedName": "Sydney",
      "EnglishName": "Sydney",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "OCN",
        "LocalizedName": "Oceania",
        "EnglishName": "Oceania"
      },
      "Country": {
        "ID": "AU",
        "LocalizedName": "Australia",
        "EnglishName": "Australia"
      },
      "AdministrativeArea": {
        "ID": "NSW",
        "LocalizedName": "New South Wales",
        "EnglishName": "New South Wales",
        "Level": 1,
        "LocalizedType": "State",
        "EnglishType": "State",
        "CountryID": "AU"
      },
      "TimeZone": {
        "Code": "AEST",
        "Name": "Australia/Sydney",
        "GmtOffset": 10,
        "IsDaylightSaving": false,
        "NextOffsetChange": "2021-10-02T16:00:00Z"
      },
      "GeoPosition": {
        "Latitude": -33.87,
        "Longitude": 151.209,
        "Elevation": {
          "Metric": {
            "Value": 1,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 3,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "FutureRadar",
        "MinuteCast",
        "Radar"
      ]
    },
    {
      "Version": 1,
      "Key": "106577",
      "Type": "City",
      "Rank": 11,
      "LocalizedName": "Shanghai",
      "EnglishName": "Shanghai",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "ASI",
        "LocalizedName": "Asia",
        "EnglishName": "Asia"
      },
      "Country": {
        "ID": "CN",
        "LocalizedName": "China",
        "EnglishName": "China"
      },
      "AdministrativeArea": {
        "ID": "SH",
        "LocalizedName": "Shanghai",
        "EnglishName": "Shanghai",
        "Level": 1,
        "LocalizedType": "Municipality",
        "EnglishType": "Municipality",
        "CountryID": "CN"
      },
      "TimeZone": {
        "Code": "CST",
        "Name": "Asia/Shanghai",
        "GmtOffset": 8,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 31.232,
        "Longitude": 121.444,
        "Elevation": {
          "Metric": {
            "Value": 5,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 16,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQuality",
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "DailyAirQualityForecast",
        "DailyLocalIndices",
        "ForecastConfidence",
        "FutureRadar",
        "MinuteCast",
        "PremiumAirQuality"
      ]
    },
    {
      "Version": 1,
      "Key": "202396",
      "Type": "City",
      "Rank": 11,
      "LocalizedName": "Delhi",
      "EnglishName": "Delhi",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "ASI",
        "LocalizedName": "Asia",
        "EnglishName": "Asia"
      },
      "Country": {
        "ID": "IN",
        "LocalizedName": "India",
        "EnglishName": "India"
      },
      "AdministrativeArea": {
        "ID": "DL",
        "LocalizedName": "Delhi",
        "EnglishName": "Delhi",
        "Level": 1,
        "LocalizedType": "Union Territory",
        "EnglishType": "Union Territory",
        "CountryID": "IN"
      },
      "TimeZone": {
        "Code": "IST",
        "Name": "Asia/Kolkata",
        "GmtOffset": 5.5,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 28.643,
        "Longitude": 77.118,
        "Elevation": {
          "Metric": {
            "Value": 215,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 705,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 2,
          "LocalizedName": "West",
          "EnglishName": "West"
        },
        {
          "Level": 3,
          "LocalizedName": "Rajouri Garden",
          "EnglishName": "Rajouri Garden"
        }
      ],
      "DataSets": [
        "AirQuality",
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "ForecastConfidence",
        "PremiumAirQuality"
      ]
    },
    {
      "Version": 1,
      "Key": "204108",
      "Type": "City",
      "Rank": 11,
      "LocalizedName": "Bengaluru",
      "EnglishName": "Bengaluru",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "ASI",
        "LocalizedName": "Asia",
        "EnglishName": "Asia"
      },
      "Country": {
        "ID": "IN",
        "LocalizedName": "India",
        "EnglishName": "India"
      },
      "AdministrativeArea": {
        "ID": "KA",
        "LocalizedName": "Karnataka",
        "EnglishName": "Karnataka",
        "Level": 1,
        "LocalizedType": "State",
        "EnglishType": "State",
        "CountryID": "IN"
      },
      "TimeZone": {
        "Code": "IST",
        "Name": "Asia/Kolkata",
        "GmtOffset": 5.5,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 12.991,
        "Longitude": 77.579,
        "Elevation": {
          "Metric": {
            "Value": 913,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 2997,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 2,
          "LocalizedName": "Bangalore",
          "EnglishName": "Bangalore"
        }
      ],
      "DataSets": [
        "AirQuality",
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "PremiumAirQuality"
      ]
    },
    {
      "Version": 1,
      "Key": "204842",
      "Type": "City",
      "Rank": 11,
      "LocalizedName": "Mumbai",
      "EnglishName": "Mumbai",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "ASI",
        "LocalizedName": "Asia",
        "EnglishName": "Asia"
      },
      "Country": {
        "ID": "IN",
        "LocalizedName": "India",
        "EnglishName": "India"
      },
      "AdministrativeArea": {
        "ID": "MH",
        "LocalizedName": "Maharashtra",
        "EnglishName": "Maharashtra",
        "Level": 1,
        "LocalizedType": "State",
        "EnglishType": "State",
        "CountryID": "IN"
      },
      "TimeZone": {
        "Code": "IST",
        "Name": "Asia/Kolkata",
        "GmtOffset": 5.5,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 19.143,
        "Longitude": 72.878,
        "Elevation": {
          "Metric": {
            "Value": 47,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 154,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 2,
          "LocalizedName": "Mumbai Suburban",
          "EnglishName": "Mumbai Suburban"
        }
      ],
      "DataSets": [
        "AirQuality",
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "PremiumAirQuality"
      ]
    },
    {
      "Version": 1,
      "Key": "206690",
      "Type": "City",
      "Rank": 11,
      "LocalizedName": "Kolkata",
      "EnglishName": "Kolkata",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "ASI",
        "LocalizedName": "Asia",
        "EnglishName": "Asia"
      },
      "Country": {
        "ID": "IN",
        "LocalizedName": "India",
        "EnglishName": "India"
      },
      "AdministrativeArea": {
        "ID": "WB",
        "LocalizedName": "West Bengal",
        "EnglishName": "West Bengal",
        "Level": 1,
        "LocalizedType": "State",
        "EnglishType": "State",
        "CountryID": "IN"
      },
      "TimeZone": {
        "Code": "IST",
        "Name": "Asia/Kolkata",
        "GmtOffset": 5.5,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 22.526,
        "Longitude": 88.353,
        "Elevation": {
          "Metric": {
            "Value": 16,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 52,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 2,
          "LocalizedName": "Kolkata",
          "EnglishName": "Kolkata"
        }
      ],
      "DataSets": [
        "AirQuality",
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "PremiumAirQuality"
      ]
    },
    {
      "Version": 1,
      "Key": "261158",
      "Type": "City",
      "Rank": 11,
      "LocalizedName": "Karachi",
      "EnglishName": "Karachi",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "ASI",
        "LocalizedName": "Asia",
        "EnglishName": "Asia"
      },
      "Country": {
        "ID": "PK",
        "LocalizedName": "Pakistan",
        "EnglishName": "Pakistan"
      },
      "AdministrativeArea": {
        "ID": "SD",
        "LocalizedName": "Sindh",
        "EnglishName": "Sindh",
        "Level": 1,
        "LocalizedType": "Province",
        "EnglishType": "Province",
        "CountryID": "PK"
      },
      "TimeZone": {
        "Code": "PKT",
        "Name": "Asia/Karachi",
        "GmtOffset": 5,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 24.89,
        "Longitude": 67.029,
        "Elevation": {
          "Metric": {
            "Value": 11,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 36,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 2,
          "LocalizedName": "Karachi Central",
          "EnglishName": "Karachi Central"
        }
      ],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts"
      ]
    },
    {
      "Version": 1,
      "Key": "318251",
      "Type": "City",
      "Rank": 11,
      "LocalizedName": "Istanbul",
      "EnglishName": "Istanbul",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "MEA",
        "LocalizedName": "Middle East",
        "EnglishName": "Middle East"
      },
      "Country": {
        "ID": "TR",
        "LocalizedName": "Turkey",
        "EnglishName": "Turkey"
      },
      "AdministrativeArea": {
        "ID": "34",
        "LocalizedName": "Istanbul",
        "EnglishName": "Istanbul",
        "Level": 1,
        "LocalizedType": "Province",
        "EnglishType": "Province",
        "CountryID": "TR"
      },
      "TimeZone": {
        "Code": "TRT",
        "Name": "Europe/Istanbul",
        "GmtOffset": 3,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 41.011,
        "Longitude": 28.958,
        "Elevation": {
          "Metric": {
            "Value": 48,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 157,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 2,
          "LocalizedName": "Fatih",
          "EnglishName": "Fatih"
        }
      ],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "ForecastConfidence"
      ]
    },
    {
      "Version": 1,
      "Key": "347625",
      "Type": "City",
      "Rank": 15,
      "LocalizedName": "Los Angeles",
      "EnglishName": "Los Angeles",
      "PrimaryPostalCode": "90012",
      "Region": {
        "ID": "NAM",
        "LocalizedName": "North America",
        "EnglishName": "North America"
      },
      "Country": {
        "ID": "US",
        "LocalizedName": "United States",
        "EnglishName": "United States"
      },
      "AdministrativeArea": {
        "ID": "CA",
        "LocalizedName": "California",
        "EnglishName": "California",
        "Level": 1,
        "LocalizedType": "State",
        "EnglishType": "State",
        "CountryID": "US"
      },
      "TimeZone": {
        "Code": "PDT",
        "Name": "America/Los_Angeles",
        "GmtOffset": -7,
        "IsDaylightSaving": true,
        "NextOffsetChange": "2021-11-07T09:00:00Z"
      },
      "GeoPosition": {
        "Latitude": 34.052,
        "Longitude": -118.244,
        "Elevation": {
          "Metric": {
            "Value": 121,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 396,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 2,
          "LocalizedName": "Los Angeles",
          "EnglishName": "Los Angeles"
        }
      ],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "DailyAirQualityForecast",
        "DailyPollenForecast",
        "ForecastConfidence",
        "FutureRadar",
        "MinuteCast",
        "Radar"
      ]
    },
    {
      "Version": 1,
      "Key": "349727",
      "Type": "City",
      "Rank": 15,
      "LocalizedName": "New York",
      "EnglishName": "New York",
      "PrimaryPostalCode": "10007",
      "Region": {
        "ID": "NAM",
        "LocalizedName": "North America",
        "EnglishName": "North America"
      },
      "Country": {
        "ID": "US",
        "LocalizedName": "United States",
        "EnglishName": "United States"
      },
      "AdministrativeArea": {
        "ID": "NY",
        "LocalizedName": "New York",
        "EnglishName": "New York",
        "Level": 1,
        "LocalizedType": "State",
        "EnglishType": "State",
        "CountryID": "US"
      },
      "TimeZone": {
        "Code": "EDT",
        "Name": "America/New_York",
        "GmtOffset": -4,
        "IsDaylightSaving": true,
        "NextOffsetChange": "2021-11-07T06:00:00Z"
      },
      "GeoPosition": {
        "Latitude": 40.779,
        "Longitude": -73.969,
        "Elevation": {
          "Metric": {
            "Value": 8,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 26,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 2,
          "LocalizedName": "New York",
          "EnglishName": "New York"
        }
      ],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "DailyAirQualityForecast",
        "DailyPollenForecast",
        "ForecastConfidence",
        "FutureRadar",
        "MinuteCast",
        "Radar"
      ]
    },
    {
      "Version": 1,
      "Key": "4361",
      "Type": "City",
      "Rank": 20,
      "LocalizedName": "Kabul",
      "EnglishName": "Kabul",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "ASI",
        "LocalizedName": "Asia",
        "EnglishName": "Asia"
      },
      "Country": {
        "ID": "AF",
        "LocalizedName": "Afghanistan",
        "EnglishName": "Afghanistan"
      },
      "AdministrativeArea": {
        "ID": "KAB",
        "LocalizedName": "Kabul",
        "EnglishName": "Kabul",
        "Level": 1,
        "LocalizedType": "Province",
        "EnglishType": "Province",
        "CountryID": "AF"
      },
      "TimeZone": {
        "Code": "AFT",
        "Name": "Asia/Kabul",
        "GmtOffset": 4.5,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 34.531,
        "Longitude": 69.137,
        "Elevation": {
          "Metric": {
            "Value": 1838,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 6031,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 2,
          "LocalizedName": "Kabul",
          "EnglishName": "Kabul"
        }
      ],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "ForecastConfidence"
      ]
    },
    {
      "Version": 1,
      "Key": "7894",
      "Type": "City",
      "Rank": 20,
      "LocalizedName": "Buenos Aires",
      "EnglishName": "Buenos Aires",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "SAM",
        "LocalizedName": "South America",
        "EnglishName": "South America"
      },
      "Country": {
        "ID": "AR",
        "LocalizedName": "Argentina",
        "EnglishName": "Argentina"
      },
      "AdministrativeArea": {
        "ID": "C",
        "LocalizedName": "Buenos Aires - Capital Federal",
        "EnglishName": "Buenos Aires - Capital Federal",
        "Level": 1,
        "LocalizedType": "Autonomous City",
        "EnglishType": "Autonomous City",
        "CountryID": "AR"
      },
      "TimeZone": {
        "Code": "ART",
        "Name": "America/Argentina/Buenos_Aires",
        "GmtOffset": -3,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": -34.608,
        "Longitude": -58.437,
        "Elevation": {
          "Metric": {
            "Value": 19,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 62,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 2,
          "LocalizedName": "5",
          "EnglishName": "5"
        }
      ],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Radar"
      ]
    },
    {
      "Version": 1,
      "Key": "122438",
      "Type": "City",
      "Rank": 20,
      "LocalizedName": "Havana",
      "EnglishName": "Havana",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "CAC",
        "LocalizedName": "Central America",
        "EnglishName": "Central America"
      },
      "Country": {
        "ID": "CU",
        "LocalizedName": "Cuba",
        "EnglishName": "Cuba"
      },
      "AdministrativeArea": {
        "ID": "03",
        "LocalizedName": "La Habana",
        "EnglishName": "La Habana",
        "Level": 1,
        "LocalizedType": "Province",
        "EnglishType": "Province",
        "CountryID": "CU"
      },
      "TimeZone": {
        "Code": "CDT",
        "Name": "America/Havana",
        "GmtOffset": -4,
        "IsDaylightSaving": true,
        "NextOffsetChange": "2021-11-07T05:00:00Z"
      },
      "GeoPosition": {
        "Latitude": 23.117,
        "Longitude": -82.389,
        "Elevation": {
          "Metric": {
            "Value": 35,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 114,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 2,
          "LocalizedName": "Plaza de la Revolucion",
          "EnglishName": "Plaza de la Revolucion"
        }
      ],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "ForecastConfidence",
        "FutureRadar",
        "MinuteCast",
        "Radar"
      ]
    },
    {
      "Version": 1,
      "Key": "623",
      "Type": "City",
      "Rank": 20,
      "LocalizedName": "Paris",
      "EnglishName": "Paris",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "EUR",
        "LocalizedName": "Europe",
        "EnglishName": "Europe"
      },
      "Country": {
        "ID": "FR",
        "LocalizedName": "France",
        "EnglishName": "France"
      },
      "AdministrativeArea": {
        "ID": "75",
        "LocalizedName": "Ville de Paris",
        "EnglishName": "Ville de Paris",
        "Level": 1,
        "LocalizedType": "Department",
        "EnglishType": "Department",
        "CountryID": "FR"
      },
      "TimeZone": {
        "Code": "CEST",
        "Name": "Europe/Paris",
        "GmtOffset": 2,
        "IsDaylightSaving": true,
        "NextOffsetChange": "2021-10-31T01:00:00Z"
      },
      "GeoPosition": {
        "Latitude": 48.857,
        "Longitude": 2.351,
        "Elevation": {
          "Metric": {
            "Value": 35,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 114,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 2,
          "LocalizedName": "Paris",
          "EnglishName": "Paris"
        }
      ],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "ForecastConfidence",
        "FutureRadar",
        "MinuteCast",
        "Radar"
      ]
    },
    {
      "Version": 1,
      "Key": "210841",
      "Type": "City",
      "Rank": 20,
      "LocalizedName": "Tehran",
      "EnglishName": "Tehran",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "MEA",
        "LocalizedName": "Middle East",
        "EnglishName": "Middle East"
      },
      "Country": {
        "ID": "IR",
        "LocalizedName": "Iran",
        "EnglishName": "Iran"
      },
      "AdministrativeArea": {
        "ID": "07",
        "LocalizedName": "Tehran",
        "EnglishName": "Tehran",
        "Level": 1,
        "LocalizedType": "Province",
        "EnglishType": "Province",
        "CountryID": "IR"
      },
      "TimeZone": {
        "Code": "IRDT",
        "Name": "Asia/Tehran",
        "GmtOffset": 4.5,
        "IsDaylightSaving": true,
        "NextOffsetChange": "2021-09-21T19:30:00Z"
      },
      "GeoPosition": {
        "Latitude": 35.701,
        "Longitude": 51.407,
        "Elevation": {
          "Metric": {
            "Value": 1227,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 4027,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "ForecastConfidence"
      ]
    },
    {
      "Version": 1,
      "Key": "264885",
      "Type": "City",
      "Rank": 20,
      "LocalizedName": "Manila",
      "EnglishName": "Manila",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "ASI",
        "LocalizedName": "Asia",
        "EnglishName": "Asia"
      },
      "Country": {
        "ID": "PH",
        "LocalizedName": "Philippines",
        "EnglishName": "Philippines"
      },
      "AdministrativeArea": {
        "ID": "MNL",
        "LocalizedName": "Metropolitan Manila",
        "EnglishName": "Metropolitan Manila",
        "Level": 1,
        "LocalizedType": "Region",
        "EnglishType": "Region",
        "CountryID": "PH"
      },
      "TimeZone": {
        "Code": "PHT",
        "Name": "Asia/Manila",
        "GmtOffset": 8,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 14.59,
        "Longitude": 120.982,
        "Elevation": {
          "Metric": {
            "Value": 2,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 8,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts"
      ]
    },
    {
      "Version": 1,
      "Key": "298198",
      "Type": "City",
      "Rank": 20,
      "LocalizedName": "Belgrade",
      "EnglishName": "Belgrade",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "EUR",
        "LocalizedName": "Europe",
        "EnglishName": "Europe"
      },
      "Country": {
        "ID": "RS",
        "LocalizedName": "Serbia",
        "EnglishName": "Serbia"
      },
      "AdministrativeArea": {
        "ID": "00",
        "LocalizedName": "Belgrade",
        "EnglishName": "Belgrade",
        "Level": 1,
        "LocalizedType": "District",
        "EnglishType": "District",
        "CountryID": "RS"
      },
      "TimeZone": {
        "Code": "CEST",
        "Name": "Europe/Belgrade",
        "GmtOffset": 2,
        "IsDaylightSaving": true,
        "NextOffsetChange": "2021-10-31T01:00:00Z"
      },
      "GeoPosition": {
        "Latitude": 44.817,
        "Longitude": 20.464,
        "Elevation": {
          "Metric": {
            "Value": 99,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 324,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 2,
          "LocalizedName": "Stari",
          "EnglishName": "Stari"
        }
      ],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "ForecastConfidence",
        "FutureRadar",
        "MinuteCast",
        "Radar"
      ]
    },
    {
      "Version": 1,
      "Key": "297442",
      "Type": "City",
      "Rank": 20,
      "LocalizedName": "Dakar",
      "EnglishName": "Dakar",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "AFR",
        "LocalizedName": "Africa",
        "EnglishName": "Africa"
      },
      "Country": {
        "ID": "SN",
        "LocalizedName": "Senegal",
        "EnglishName": "Senegal"
      },
      "AdministrativeArea": {
        "ID": "DK",
        "LocalizedName": "Dakar",
        "EnglishName": "Dakar",
        "Level": 1,
        "LocalizedType": "Region",
        "EnglishType": "Region",
        "CountryID": "SN"
      },
      "TimeZone": {
        "Code": "GMT",
        "Name": "Africa/Dakar",
        "GmtOffset": 0,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 14.687,
        "Longitude": -17.452,
        "Elevation": {
          "Metric": {
            "Value": 11,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 36,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts"
      ]
    },
    {
      "Version": 1,
      "Key": "315078",
      "Type": "City",
      "Rank": 20,
      "LocalizedName": "Taipei City",
      "EnglishName": "Taipei City",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "ASI",
        "LocalizedName": "Asia",
        "EnglishName": "Asia"
      },
      "Country": {
        "ID": "TW",
        "LocalizedName": "Taiwan",
        "EnglishName": "Taiwan"
      },
      "AdministrativeArea": {
        "ID": "TPE",
        "LocalizedName": "Taipei City",
        "EnglishName": "Taipei City",
        "Level": 1,
        "LocalizedType": "Special Municipality",
        "EnglishType": "Special Municipality",
        "CountryID": "TW"
      },
      "TimeZone": {
        "Code": "CST",
        "Name": "Asia/Taipei",
        "GmtOffset": 8,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 25.048,
        "Longitude": 121.514,
        "Elevation": {
          "Metric": {
            "Value": 8,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 26,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQuality",
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "PremiumAirQuality"
      ]
    },
    {
      "Version": 1,
      "Key": "306633",
      "Type": "City",
      "Rank": 20,
      "LocalizedName": "Cape Town",
      "EnglishName": "Cape Town",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "AFR",
        "LocalizedName": "Africa",
        "EnglishName": "Africa"
      },
      "Country": {
        "ID": "ZA",
        "LocalizedName": "South Africa",
        "EnglishName": "South Africa"
      },
      "AdministrativeArea": {
        "ID": "WC",
        "LocalizedName": "Western Cape",
        "EnglishName": "Western Cape",
        "Level": 1,
        "LocalizedType": "Province",
        "EnglishType": "Province",
        "CountryID": "ZA"
      },
      "TimeZone": {
        "Code": "SAST",
        "Name": "Africa/Johannesburg",
        "GmtOffset": 2,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": -33.979,
        "Longitude": 18.482,
        "Elevation": {
          "Metric": {
            "Value": 15,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 49,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 2,
          "LocalizedName": "City Of Cape Town",
          "EnglishName": "City Of Cape Town"
        }
      ],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts"
      ]
    },
    {
      "Version": 1,
      "Key": "45881",
      "Type": "City",
      "Rank": 21,
      "LocalizedName": "São Paulo",
      "EnglishName": "São Paulo",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "SAM",
        "LocalizedName": "South America",
        "EnglishName": "South America"
      },
      "Country": {
        "ID": "BR",
        "LocalizedName": "Brazil",
        "EnglishName": "Brazil"
      },
      "AdministrativeArea": {
        "ID": "SP",
        "LocalizedName": "São Paulo",
        "EnglishName": "São Paulo",
        "Level": 1,
        "LocalizedType": "State",
        "EnglishType": "State",
        "CountryID": "BR"
      },
      "TimeZone": {
        "Code": "BRT",
        "Name": "America/Sao_Paulo",
        "GmtOffset": -3,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": -23.567,
        "Longitude": -46.57,
        "Elevation": {
          "Metric": {
            "Value": 662,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 2171,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 2,
          "LocalizedName": "São Paulo",
          "EnglishName": "São Paulo"
        },
        {
          "Level": 3,
          "LocalizedName": "Água Rasa",
          "EnglishName": "Água Rasa"
        }
      ],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "Radar"
      ]
    },
    {
      "Version": 1,
      "Key": "55488",
      "Type": "City",
      "Rank": 21,
      "LocalizedName": "Toronto",
      "EnglishName": "Toronto",
      "PrimaryPostalCode": "M5H",
      "Region": {
        "ID": "NAM",
        "LocalizedName": "North America",
        "EnglishName": "North America"
      },
      "Country": {
        "ID": "CA",
        "LocalizedName": "Canada",
        "EnglishName": "Canada"
      },
      "AdministrativeArea": {
        "ID": "ON",
        "LocalizedName": "Ontario",
        "EnglishName": "Ontario",
        "Level": 1,
        "LocalizedType": "Province",
        "EnglishType": "Province",
        "CountryID": "CA"
      },
      "TimeZone": {
        "Code": "EDT",
        "Name": "America/Toronto",
        "GmtOffset": -4,
        "IsDaylightSaving": true,
        "NextOffsetChange": "2021-11-07T06:00:00Z"
      },
      "GeoPosition": {
        "Latitude": 43.649,
        "Longitude": -79.38,
        "Elevation": {
          "Metric": {
            "Value": 81,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 265,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 2,
          "LocalizedName": "Toronto",
          "EnglishName": "Toronto"
        }
      ],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "ForecastConfidence",
        "FutureRadar",
        "MinuteCast",
        "Radar"
      ]
    },
    {
      "Version": 1,
      "Key": "225007",
      "Type": "City",
      "Rank": 21,
      "LocalizedName": "Osaka-shi",
      "EnglishName": "Osaka-shi",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "ASI",
        "LocalizedName": "Asia",
        "EnglishName": "Asia"
      },
      "Country": {
        "ID": "JP",
        "LocalizedName": "Japan",
        "EnglishName": "Japan"
      },
      "AdministrativeArea": {
        "ID": "27",
        "LocalizedName": "Osaka",
        "EnglishName": "Osaka",
        "Level": 1,
        "LocalizedType": "Prefecture",
        "EnglishType": "Prefecture",
        "CountryID": "JP"
      },
      "TimeZone": {
        "Code": "JST",
        "Name": "Asia/Tokyo",
        "GmtOffset": 9,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 34.667,
        "Longitude": 135.5,
        "Elevation": {
          "Metric": {
            "Value": 4,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 13,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "ForecastConfidence",
        "FutureRadar",
        "MinuteCast",
        "Radar"
      ]
    },
    {
      "Version": 1,
      "Key": "213225",
      "Type": "City",
      "Rank": 30,
      "LocalizedName": "Jerusalem",
      "EnglishName": "Jerusalem",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "MEA",
        "LocalizedName": "Middle East",
        "EnglishName": "Middle East"
      },
      "Country": {
        "ID": "IL",
        "LocalizedName": "Israel",
        "EnglishName": "Israel"
      },
      "AdministrativeArea": {
        "ID": "JM",
        "LocalizedName": "Jerusalem",
        "EnglishName": "Jerusalem",
        "Level": 1,
        "LocalizedType": "District",
        "EnglishType": "District",
        "CountryID": "IL"
      },
      "TimeZone": {
        "Code": "IDT",
        "Name": "Asia/Jerusalem",
        "GmtOffset": 3,
        "IsDaylightSaving": true,
        "NextOffsetChange": "2021-10-30T23:00:00Z"
      },
      "GeoPosition": {
        "Latitude": 31.774,
        "Longitude": 35.225,
        "Elevation": {
          "Metric": {
            "Value": 804,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 2637,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "ForecastConfidence"
      ]
    },
    {
      "Version": 1,
      "Key": "249758",
      "Type": "City",
      "Rank": 30,
      "LocalizedName": "Amsterdam",
      "EnglishName": "Amsterdam",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "EUR",
        "LocalizedName": "Europe",
        "EnglishName": "Europe"
      },
      "Country": {
        "ID": "NL",
        "LocalizedName": "Netherlands",
        "EnglishName": "Netherlands"
      },
      "AdministrativeArea": {
        "ID": "NH",
        "LocalizedName": "North Holland",
        "EnglishName": "North Holland",
        "Level": 1,
        "LocalizedType": "Province",
        "EnglishType": "Province",
        "CountryID": "NL"
      },
      "TimeZone": {
        "Code": "CEST",
        "Name": "Europe/Amsterdam",
        "GmtOffset": 2,
        "IsDaylightSaving": true,
        "NextOffsetChange": "2021-10-31T01:00:00Z"
      },
      "GeoPosition": {
        "Latitude": 52.372,
        "Longitude": 4.9,
        "Elevation": {
          "Metric": {
            "Value": -1,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": -3,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "ForecastConfidence",
        "FutureRadar",
        "MinuteCast",
        "Radar"
      ]
    },
    {
      "Version": 1,
      "Key": "314929",
      "Type": "City",
      "Rank": 30,
      "LocalizedName": "Stockholm",
      "EnglishName": "Stockholm",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "EUR",
        "LocalizedName": "Europe",
        "EnglishName": "Europe"
      },
      "Country": {
        "ID": "SE",
        "LocalizedName": "Sweden",
        "EnglishName": "Sweden"
      },
      "AdministrativeArea": {
        "ID": "AB",
        "LocalizedName": "Stockholm",
        "EnglishName": "Stockholm",
        "Level": 1,
        "LocalizedType": "County",
        "EnglishType": "County",
        "CountryID": "SE"
      },
      "TimeZone": {
        "Code": "CEST",
        "Name": "Europe/Stockholm",
        "GmtOffset": 2,
        "IsDaylightSaving": true,
        "NextOffsetChange": "2021-10-31T01:00:00Z"
      },
      "GeoPosition": {
        "Latitude": 59.314,
        "Longitude": 18.069,
        "Elevation": {
          "Metric": {
            "Value": 39,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 127,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "ForecastConfidence",
        "FutureRadar",
        "MinuteCast",
        "Radar"
      ]
    },
    {
      "Version": 1,
      "Key": "348211",
      "Type": "City",
      "Rank": 31,
      "LocalizedName": "Honolulu",
      "EnglishName": "Honolulu",
      "PrimaryPostalCode": "96817",
      "Region": {
        "ID": "NAM",
        "LocalizedName": "North America",
        "EnglishName": "North America"
      },
      "Country": {
        "ID": "US",
        "LocalizedName": "United States",
        "EnglishName": "United States"
      },
      "AdministrativeArea": {
        "ID": "HI",
        "LocalizedName": "Hawaii",
        "EnglishName": "Hawaii",
        "Level": 1,
        "LocalizedType": "State",
        "EnglishType": "State",
        "CountryID": "US"
      },
      "TimeZone": {
        "Code": "HST",
        "Name": "Pacific/Honolulu",
        "GmtOffset": -10,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 21.326,
        "Longitude": -157.845,
        "Elevation": {
          "Metric": {
            "Value": 112,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 367,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [
        {
          "Level": 2,
          "LocalizedName": "Honolulu",
          "EnglishName": "Honolulu"
        }
      ],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "Radar"
      ]
    },
    {
      "Version": 1,
      "Key": "190390",
      "Type": "City",
      "Rank": 40,
      "LocalizedName": "Reykjavik",
      "EnglishName": "Reykjavik",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "ARC",
        "LocalizedName": "Arctic",
        "EnglishName": "Arctic"
      },
      "Country": {
        "ID": "IS",
        "LocalizedName": "Iceland",
        "EnglishName": "Iceland"
      },
      "AdministrativeArea": {
        "ID": "1",
        "LocalizedName": "Greater Reykjavik",
        "EnglishName": "Greater Reykjavik",
        "Level": 1,
        "LocalizedType": "Region",
        "EnglishType": "Region",
        "CountryID": "IS"
      },
      "TimeZone": {
        "Code": "GMT",
        "Name": "Atlantic/Reykjavik",
        "GmtOffset": 0,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 64.137,
        "Longitude": -21.902,
        "Elevation": {
          "Metric": {
            "Value": 36,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 118,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "Radar"
      ]
    }
]

export const forecast1day: Forecast = {
  "Headline": {
    "EffectiveDate": "2021-07-18T19:00:00+06:00",
    "EffectiveEpochDate": 1626613200,
    "Severity": 5,
    "Text": "Expect showers Sunday night",
    "Category": "rain",
    "EndDate": "2021-07-19T07:00:00+06:00",
    "EndEpochDate": 1626656400,
    "MobileLink": "http://www.accuweather.com/en/bd/dhaka/28143/extended-weather-forecast/28143?unit=c&lang=en-us",
    "Link": "http://www.accuweather.com/en/bd/dhaka/28143/daily-weather-forecast/28143?unit=c&lang=en-us"
  },
  "DailyForecasts": [
    {
      "Date": "2021-07-18T07:00:00+06:00",
      "EpochDate": 1626570000,
      "Temperature": {
        "Minimum": {
          "Value": 27.5,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 33.9,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 15,
        "IconPhrase": "Thunderstorms",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Heavy"
      },
      "Night": {
        "Icon": 12,
        "IconPhrase": "Showers",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light"
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/bd/dhaka/28143/daily-weather-forecast/28143?day=1&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/bd/dhaka/28143/daily-weather-forecast/28143?day=1&unit=c&lang=en-us"
    }
  ]
}

export const forecast5days: Forecast = {
  "Headline": {
    "EffectiveDate": "2021-07-18T19:00:00+06:00",
    "EffectiveEpochDate": 1626613200,
    "Severity": 5,
    "Text": "Expect showers Sunday night",
    "Category": "rain",
    "EndDate": "2021-07-19T07:00:00+06:00",
    "EndEpochDate": 1626656400,
    "MobileLink": "http://www.accuweather.com/en/bd/dhaka/28143/extended-weather-forecast/28143?unit=c&lang=en-us",
    "Link": "http://www.accuweather.com/en/bd/dhaka/28143/daily-weather-forecast/28143?unit=c&lang=en-us"
  },
  "DailyForecasts": [
    {
      "Date": "2021-07-18T07:00:00+06:00",
      "EpochDate": 1626570000,
      "Temperature": {
        "Minimum": {
          "Value": 27.5,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 33.9,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 15,
        "IconPhrase": "Thunderstorms",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Heavy"
      },
      "Night": {
        "Icon": 12,
        "IconPhrase": "Showers",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light"
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/bd/dhaka/28143/daily-weather-forecast/28143?day=1&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/bd/dhaka/28143/daily-weather-forecast/28143?day=1&unit=c&lang=en-us"
    },
    {
      "Date": "2021-07-19T07:00:00+06:00",
      "EpochDate": 1626656400,
      "Temperature": {
        "Minimum": {
          "Value": 27.3,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 32.2,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 15,
        "IconPhrase": "Thunderstorms",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Moderate"
      },
      "Night": {
        "Icon": 15,
        "IconPhrase": "Thunderstorms",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Moderate"
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/bd/dhaka/28143/daily-weather-forecast/28143?day=2&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/bd/dhaka/28143/daily-weather-forecast/28143?day=2&unit=c&lang=en-us"
    },
    {
      "Date": "2021-07-20T07:00:00+06:00",
      "EpochDate": 1626742800,
      "Temperature": {
        "Minimum": {
          "Value": 27,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 33.6,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 12,
        "IconPhrase": "Showers",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light"
      },
      "Night": {
        "Icon": 7,
        "IconPhrase": "Cloudy",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light"
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/bd/dhaka/28143/daily-weather-forecast/28143?day=3&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/bd/dhaka/28143/daily-weather-forecast/28143?day=3&unit=c&lang=en-us"
    },
    {
      "Date": "2021-07-21T07:00:00+06:00",
      "EpochDate": 1626829200,
      "Temperature": {
        "Minimum": {
          "Value": 27.4,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 34,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 12,
        "IconPhrase": "Showers",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light"
      },
      "Night": {
        "Icon": 38,
        "IconPhrase": "Mostly cloudy",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light"
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/bd/dhaka/28143/daily-weather-forecast/28143?day=4&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/bd/dhaka/28143/daily-weather-forecast/28143?day=4&unit=c&lang=en-us"
    },
    {
      "Date": "2021-07-22T07:00:00+06:00",
      "EpochDate": 1626915600,
      "Temperature": {
        "Minimum": {
          "Value": 27.4,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 32.1,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 4,
        "IconPhrase": "Intermittent clouds",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Moderate"
      },
      "Night": {
        "Icon": 7,
        "IconPhrase": "Cloudy",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Heavy"
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/bd/dhaka/28143/daily-weather-forecast/28143?day=5&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/bd/dhaka/28143/daily-weather-forecast/28143?day=5&unit=c&lang=en-us"
    }
  ]
};
