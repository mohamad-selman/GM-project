export interface Country {
    name: string
    flag?: string
    capital?: string
    region: string
    population?: number
    language?: string
    map: string
}

export interface CountryCardProps {
    name: string
    flag?: string
    capital?: string
    region: string
    population?: number
    language?: string
    map: string
}

export interface CountryListProps {
    countries: Country[]
    searchText: string
}

export interface LoadMoreProps {
    listDataLength: number
    to: number
    setTo: React.Dispatch<React.SetStateAction<number>>
}

export interface SearchProps {
    onSearch: React.Dispatch<React.SetStateAction<string>>
}

export interface HomeProps {
    countries: Country[]
}

export interface CountryResObj {
    name: {
        common: string;
        official: string;
        nativeName?: { [key: string]: {
            official: string;
            common: string;
        }};
    }
    tld?: string[];
    cca2: string;
    ccn3?: string;
    cca3: string;
    cioc?: string;
    independent?: boolean;
    status: Status;
    unMember: boolean;
    currencies?: {
        KWD?: {
            name: string;
            symbol: string;
        };
        USD?: {
            name: string;
            symbol: string;
        };
        CHF?: {
            name: string;
            symbol: string;
        };
        MDL?: {
            name: string;
            symbol: string;
        };
        AOA?: {
            name: string;
            symbol: string;
        };
        BOB?: {
            name: string;
            symbol: string;
        };
        AUD?: {
            name: string;
            symbol: string;
        };
        TVD?: {
            name: string;
            symbol: string;
        };
        PEN?: {
            name: string;
            symbol: string;
        };
        XPF?: {
            name: string;
            symbol: string;
        };
        EUR?: {
            name: string;
            symbol: string;
        };
        BWP?: {
            name: string;
            symbol: string;
        };
        AFN?: {
            name: string;
            symbol: string;
        };
        HUF?: {
            name: string;
            symbol: string;
        };
        XOF?: {
            name: string;
            symbol: string;
        };
        CAD?: {
            name: string;
            symbol: string;
        };
        IDR?: {
            name: string;
            symbol: string;
        };
        TWD?: {
            name: string;
            symbol: string;
        };
        XCD?: {
            name: string;
            symbol: string;
        };
        AWG?: {
            name: string;
            symbol: string;
        };
        XAF?: {
            name: string;
            symbol: string;
        };
        SHP?: {
            name: string;
            symbol: string;
        };
        LRD?: {
            name: string;
            symbol: string;
        };
        DZD?: {
            name: string;
            symbol: string;
        };
        MAD?: {
            name: string;
            symbol: string;
        };
        MRU?: {
            name: string;
            symbol: string;
        };
        TRY?: {
            name: string;
            symbol: string;
        };
        SOS?: {
            name: string;
            symbol: string;
        };
        DKK?: {
            name: string;
            symbol: string;
        };
        FOK?: {
            name: string;
            symbol: string;
        };
        CUC?: {
            name: string;
            symbol: string;
        };
        CUP?: {
            name: string;
            symbol: string;
        };
        BYN?: {
            name: string;
            symbol: string;
        };
        BBD?: {
            name: string;
            symbol: string;
        };
        TND?: {
            name: string;
            symbol: string;
        };
        ILS?: {
            name: string;
            symbol: string;
        };
        MMK?: {
            name: string;
            symbol: string;
        };
        DJF?: {
            name: string;
            symbol: string;
        };
        GIP?: {
            name: string;
            symbol: string;
        };
        CDF?: {
            name: string;
            symbol: string;
        };
        BZD?: {
            name: string;
            symbol: string;
        };
        BMD?: {
            name: string;
            symbol: string;
        };
        GBP?: {
            name: string;
            symbol: string;
        };
        RUB?: {
            name: string;
            symbol: string;
        };
        JPY?: {
            name: string;
            symbol: string;
        };
        KYD?: {
            name: string;
            symbol: string;
        };
        HNL?: {
            name: string;
            symbol: string;
        };
        BIF?: {
            name: string;
            symbol: string;
        };
        PYG?: {
            name: string;
            symbol: string;
        };
        ARS?: {
            name: string;
            symbol: string;
        };
        STN?: {
            name: string;
            symbol: string;
        };
        LSL?: {
            name: string;
            symbol: string;
        };
        ZAR?: {
            name: string;
            symbol: string;
        };
        SDG?: {
            name: string;
        };
        KGS?: {
            name: string;
            symbol: string;
        };
        BRL?: {
            name: string;
            symbol: string;
        };
        KHR?: {
            name: string;
            symbol: string;
        };
        GTQ?: {
            name: string;
            symbol: string;
        };
        AZN?: {
            name: string;
            symbol: string;
        };
        MYR?: {
            name: string;
            symbol: string;
        };
        COP?: {
            name: string;
            symbol: string;
        };
        BHD?: {
            name: string;
            symbol: string;
        };
        CLP?: {
            name: string;
            symbol: string;
        };
        MKD?: {
            name: string;
            symbol: string;
        };
        MZN?: {
            name: string;
            symbol: string;
        };
        ETB?: {
            name: string;
            symbol: string;
        };
        INR?: {
            name: string;
            symbol: string;
        };
        KZT?: {
            name: string;
            symbol: string;
        };
        OMR?: {
            name: string;
            symbol: string;
        };
        AED?: {
            name: string;
            symbol: string;
        };
        PLN?: {
            name: string;
            symbol: string;
        };
        LKR?: {
            name: string;
            symbol: string;
        };
        TJS?: {
            name: string;
            symbol: string;
        };
        SYP?: {
            name: string;
            symbol: string;
        };
        LYD?: {
            name: string;
            symbol: string;
        };
        HTG?: {
            name: string;
            symbol: string;
        };
        TOP?: {
            name: string;
            symbol: string;
        };
        GEL?: {
            name: string;
            symbol: string;
        };
        ERN?: {
            name: string;
            symbol: string;
        };
        TZS?: {
            name: string;
            symbol: string;
        };
        CZK?: {
            name: string;
            symbol: string;
        };
        BTN?: {
            name: string;
            symbol: string;
        };
        EGP?: {
            name: string;
            symbol: string;
        };
        VND?: {
            name: string;
            symbol: string;
        };
        PGK?: {
            name: string;
            symbol: string;
        };
        BSD?: {
            name: string;
            symbol: string;
        };
        HRK?: {
            name: string;
            symbol: string;
        };
        UZS?: {
            name: string;
            symbol: string;
        };
        GYD?: {
            name: string;
            symbol: string;
        };
        YER?: {
            name: string;
            symbol: string;
        };
        MWK?: {
            name: string;
            symbol: string;
        };
        GMD?: {
            name: string;
            symbol: string;
        };
        PAB?: {
            name: string;
            symbol: string;
        };
        IMP?: {
            name: string;
            symbol: string;
        };
        KRW?: {
            name: string;
            symbol: string;
        };
        GGP?: {
            name: string;
            symbol: string;
        };
        PKR?: {
            name: string;
            symbol: string;
        };
        NZD?: {
            name: string;
            symbol: string;
        };
        AMD?: {
            name: string;
            symbol: string;
        };
        TMT?: {
            name: string;
            symbol: string;
        };
        DOP?: {
            name: string;
            symbol: string;
        };
        SBD?: {
            name: string;
            symbol: string;
        };
        VUV?: {
            name: string;
            symbol: string;
        };
        MGA?: {
            name: string;
            symbol: string;
        };
        LAK?: {
            name: string;
            symbol: string;
        };
        CKD?: {
            name: string;
            symbol: string;
        };
        MNT?: {
            name: string;
            symbol: string;
        };
        SZL?: {
            name: string;
            symbol: string;
        };
        ISK?: {
            name: string;
            symbol: string;
        };
        NPR?: {
            name: string;
            symbol: string;
        };
        GHS?: {
            name: string;
            symbol: string;
        };
        IQD?: {
            name: string;
            symbol: string;
        };
        THB?: {
            name: string;
            symbol: string;
        };
        RSD?: {
            name: string;
            symbol: string;
        };
        UGX?: {
            name: string;
            symbol: string;
        };
        SAR?: {
            name: string;
            symbol: string;
        };
        JOD?: {
            name: string;
            symbol: string;
        };
        SRD?: {
            name: string;
            symbol: string;
        };
        KES?: {
            name: string;
            symbol: string;
        };
        MXN?: {
            name: string;
            symbol: string;
        };
        BAM?: {
            name: string;
        };
        SCR?: {
            name: string;
            symbol: string;
        };
        BGN?: {
            name: string;
            symbol: string;
        };
        FKP?: {
            name: string;
            symbol: string;
        };
        GNF?: {
            name: string;
            symbol: string;
        };
        LBP?: {
            name: string;
            symbol: string;
        };
        MUR?: {
            name: string;
            symbol: string;
        };
        NOK?: {
            name: string;
            symbol: string;
        };
        KMF?: {
            name: string;
            symbol: string;
        };
        VES?: {
            name: string;
            symbol: string;
        };
        IRR?: {
            name: string;
            symbol: string;
        };
        SEK?: {
            name: string;
            symbol: string;
        };
        FJD?: {
            name: string;
            symbol: string;
        };
        PHP?: {
            name: string;
            symbol: string;
        };
        HKD?: {
            name: string;
            symbol: string;
        };
        UYU?: {
            name: string;
            symbol: string;
        };
        MOP?: {
            name: string;
            symbol: string;
        };
        TTD?: {
            name: string;
            symbol: string;
        };
        RWF?: {
            name: string;
            symbol: string;
        };
        ALL?: {
            name: string;
            symbol: string;
        };
        KPW?: {
            name: string;
            symbol: string;
        };
        MVR?: {
            name: string;
            symbol: string;
        };
        SGD?: {
            name: string;
            symbol: string;
        };
        ZWL?: {
            name: string;
            symbol: string;
        };
        QAR?: {
            name: string;
            symbol: string;
        };
        ANG?: {
            name: string;
            symbol: string;
        };
        CRC?: {
            name: string;
            symbol: string;
        };
        CVE?: {
            name: string;
            symbol: string;
        };
        RON?: {
            name: string;
            symbol: string;
        };
        SLL?: {
            name: string;
            symbol: string;
        };
        NIO?: {
            name: string;
            symbol: string;
        };
        JMD?: {
            name: string;
            symbol: string;
        };
        JEP?: {
            name: string;
            symbol: string;
        };
        WST?: {
            name: string;
            symbol: string;
        };
        NGN?: {
            name: string;
            symbol: string;
        };
        ZMW?: {
            name: string;
            symbol: string;
        };
        UAH?: {
            name: string;
            symbol: string;
        };
        CNY?: {
            name: string;
            symbol: string;
        };
        SSP?: {
            name: string;
            symbol: string;
        };
        BDT?: {
            name: string;
            symbol: string;
        };
        NAD?: {
            name: string;
            symbol: string;
        };
        BND?: {
            name: string;
            symbol: string;
        };
        KID?: {
            name: string;
            symbol: string;
        };
    };
    idd: {
        root?: string;
        suffixes?: string[];
    };
    capital?: string[];
    altSpellings: string[];
    region: Region;
    subregion?: string;
    languages?: { [key: string]: string };
    translations: { [key: string]: {
        official: string;
        common: string;
    }};
    latlng: number[];
    landlocked: boolean;
    borders?: string[];
    area: number;
    demonyms?: {
        eng: {
            f: string;
            m: string;
        };
        fra?: {
            f: string;
            m: string;
        };
    };
    flag: string;
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    population: number;
    fifa?: string;
    car: {
        signs?: string[];
        side: Side;
    };
    timezones: string[];
    continents: Continent[];
    flags: {
        png?: string;
        svg?: string;
    };
    coatOfArms: {
        png?: string;
        svg?: string;
    };
    startOfWeek: StartOfWeek;
    capitalInfo: {
        latlng?: number[];
    };
    postalCode?: {
        format: string;
        regex?: string;
    };
    gini?: { [key: string]: number };
}

enum Side {
    Left = "left",
    Right = "right",
}

enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}

enum StartOfWeek {
    Monday = "monday",
    Sunday = "sunday",
    Turday = "turday",
}

enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}
