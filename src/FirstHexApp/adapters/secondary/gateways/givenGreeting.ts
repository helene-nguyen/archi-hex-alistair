//https://stackoverflow.com/questions/49996456/importing-json-file-in-typescript
import * as languages_data from './repositories/database/languages_data.json';

export class GivenGreeting {
    sayHello(language: string): string {
        for (const language_data of languages_data) {           
            if(language_data['language'] === language)
            return language_data['greetings'];
        }
    }
}