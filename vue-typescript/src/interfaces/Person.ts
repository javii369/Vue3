export interface Person{
    name: string,
    surname: string,
    age: number,
    student: boolean,
    creecer?: () => void //creece o no creece
}