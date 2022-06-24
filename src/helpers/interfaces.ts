export interface dataInterface {
    data: itemsInterface
}

export interface itemsInterface {
    items: responseInterface[],
    totalItems: number
}

export interface responseInterface {
    id: string,
    volumeInfo: cardInfo
}


export interface cardInfo {
    authors: string[],
    categories: string[],
    imageLinks: linksInfo,
    title: string,
    description: string
}

export interface linksInfo {
    thumbnail: string;
}

