import { Pokemon } from "./pokemon.model";

export interface IResponse {
    count: number;
    next: string;
    previous: string;
    results: Pokemon[];
}
