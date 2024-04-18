export enum Currency {
    USD,
    RUB
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