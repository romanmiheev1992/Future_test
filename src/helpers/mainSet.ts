export const categories = {
    label: 'Categories',
    list: ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']
}

export const sorting = {
    label: 'Sorting by',
    list : ['relevance', 'newest']
}

export interface MainSetProps {
    label: string,
    list: string[]
}

export const LoaderArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]