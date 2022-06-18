type Words = {
  [key:string]: string
} 

class Dict{
  private words: Words
  constructor(){
    this.words = {}
  }
  add(word: Word){
    if (this.words[word.term] === undefined){
      this.words[word.term] = word.def;
    }
  }
  def(term:string){
    return this.words[term]
  }
  upd(word: Word){
    if(this.words[word.term]){
      this.words[word.term] = word.def;
      console.log("update completed")
    }else {
      console.log("update failed - non-existent word")
    }
  }
  del(term:string){
    if(this.words[term]){
      console.log(this.words)
    }
  }
}

class Word {
  constructor(
    public term: string,
    public def: string
  ){}
}

const dict = new Dict()
const kimchi = new Word("kimchi", "한국의 반찬")
const kimbab = new Word("kimbab", "한국의 밥")

dict.add(kimchi);
dict.add(kimbab);

console.log(dict.def("kimchi"));
console.log(dict.def("kimbab"));

const kimchi2 = new Word("kimchi", "한국 최고의 반찬")

dict.upd(kimchi2)

console.log(dict.def("kimchi"));

dict.del("kimchi")

// 단어 삭제, 단어 업데이트, 추상클래스 사용