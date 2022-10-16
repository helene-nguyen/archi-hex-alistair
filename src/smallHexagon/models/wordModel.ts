//Here this is a way to control what we get from the body
export class WordModel {
    checkedPassphrase: boolean;

    constructor(_props: string) {
        this.checkedPassphrase = this.isIncluded(_props);
    }

    private isIncluded(givenWord: string): boolean {

        return givenWord.includes('MAGIC');

    }
};