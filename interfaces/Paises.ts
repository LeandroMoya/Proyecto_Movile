export interface Paises {
    id?:number,
    flags: Flags;
    name:  Name;
    ccn3 : string
}

export interface Flags {
    png: string;
    svg: string;
    alt: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: NativeName;
}

export interface NativeName {
    ron: Ron;
}

export interface Ron {
    official: string;
    common:   string;
}
