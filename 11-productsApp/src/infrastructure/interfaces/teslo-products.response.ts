export interface TesloProduct {
    id:          string;
    title:       string;
    price:       number;
    description: string;
    slug:        string;
    stock:       number;
    sizes:       Size[];
    gender:      Gender;
    tags:        String[];
    images:      string[];
    user:        TesloUser;
}

export enum Gender {
    Kid = "kid",
    Men = "men",
    Unisex = "unisex",
    Women = "women",
}

export enum Size {
    L = "L",
    M = "M",
    S = "S",
    Xl = "XL",
    Xs = "XS",
    Xxl = "XXL",
}



export interface TesloUser {
    id:       string;
    email:    String;
    fullName: String;
    isActive: boolean;
    roles:    String[];
}

