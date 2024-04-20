export enum Currency {
    USD = "usd",
    RUB = "rub",
}

export type Price = {
    current: number;
    currency: Currency
}

export type Beat = {
    id: number;
    title: string;
    views: number;
    image: string;
    genre: string;
    price: Price   
}