export interface Strore{
    name: string,
    surname: string,
    age: number,
    student: boolean,
    creecer?: () => void //creece o no creece
}