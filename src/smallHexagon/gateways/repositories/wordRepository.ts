// Here, we will define the contract for the service
// We wait for a service in the rules that we want it to respect

export interface WordRepository {
    getWord():string;
}