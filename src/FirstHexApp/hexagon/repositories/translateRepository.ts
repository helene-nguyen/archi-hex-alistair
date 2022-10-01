import { Translate } from '../models/translate';

export interface TranslateRepository {
    yell : (translate: Translate) => Promise<void>;
}