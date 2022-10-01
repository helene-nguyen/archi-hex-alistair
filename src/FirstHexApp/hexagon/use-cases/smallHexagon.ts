// This is a small hexagon trying to understand Alistair's hexagonal architecture

// This hexagon has one primary port and one secondary port
// The user/test/web side is the primary
// The secondary is the "database" where we send a word
// The app itself just returns a word translated
import { TranslateRepository } from "../repositories/translateRepository";

export class TranslateAWord {
    constructor(private translateRepository: TranslateRepository) { };

    async handle(word: string): Promise<string> {
        return word;
    }
}

