class Dict {
    constructor() {
        this.words = {};
    }
    add(word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term) {
        return this.words[term];
    }
    upd(word) {
        if (this.words[word.term]) {
            this.words[word.term] = word.def;
            console.log("update completed");
        }
        else {
            console.log("update failed - non-existent word");
        }
    }
    del(term) {
        if (this.words[term]) {
            delete this.words[term];
            console.log("delete completed");
        }
        else {
            console.log("delete failed - non-existent word");
        }
    }
}
class Word {
    constructor(term, def) {
        this.term = term;
        this.def = def;
    }
}
const dict = new Dict();
const kimchi = new Word("kimchi", "한국의 반찬");
const kimbab = new Word("kimbab", "한국의 밥");
dict.add(kimchi);
dict.add(kimbab);
console.log(dict.def("kimchi"));
console.log(dict.def("kimbab"));
const kimchi2 = new Word("kimchi", "한국 최고의 반찬");
dict.upd(kimchi2);
console.log(dict.def("kimchi"));
dict.del("kimchi");
// 단어 삭제, 단어 업데이트, 추상클래스 사용
//# sourceMappingURL=example1.js.map