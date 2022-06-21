const jobArray = ["doctor", "citizen", "police", "mafia"];

interface User {
  name: string;
  job: string;
}

class Player implements User {
  public job;
  constructor(public name: string) {
    this.job = Player.randomJob();
  }
  static randomJob = () => {
    const jobIndex: number = jobArray.length;
    const selectJob: number = Math.floor(Math.random() * jobIndex);
    return jobArray[selectJob];
  };
}

const hitit = new Player("hitit");

console.log(hitit);
