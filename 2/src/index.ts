const jobArray = ["doctor", "citizen", "police", "mafia"];

interface User {
  name: string;
  job: string;
}

// class Player implements User {
//   public job;
//   constructor(public name: string) {
//     this.job = Player.randomJob();
//   }
//   static randomJob = () => {
//     const jobCount: number = jobArray.length;
//     const jobIndex: number = Math.floor(Math.random() * jobCount);
//     return jobArray[jobIndex];
//   };
// }

class Player implements User {
  constructor(public name: string, public job: string) {}
}

interface MafiaRule {
  player: Player[];
  playerCount: number;
  doctorCount: number;
  policeCount: number;
  mafiaCount: number;
}

class MafiaGame implements MafiaRule {
  public player: Player[] = [];
  playerCount: number = null;
  doctorCount: number = null;
  policeCount: number = null;
  mafiaCount: number = null;
  cityzenCount: number = null;

  public start = () => {
    this.countCheck(this.nullcheck());
  };
  private shuffle = () => {
    this.player.sort(() => Math.random() - 0.5);
  };
  private selectJob = () => {
    let count: number = 0;
    for (let index = 0; index < this.doctorCount; index++) {
      count += 1;
      const obj = new Player(count.toString(), "doctor");
      this.player.push(obj);
    }
    for (let index = 0; index < this.policeCount; index++) {
      count += 1;
      const obj = new Player(count.toString(), "police");
      this.player.push(obj);
    }
    for (let index = 0; index < this.mafiaCount; index++) {
      count += 1;
      const obj = new Player(count.toString(), "mafia");
      this.player.push(obj);
    }
    for (let index = 0; index < this.cityzenCount; index++) {
      count += 1;
      const obj = new Player(count.toString(), "cityzen");
      this.player.push(obj);
    }
  };
  private countCheck = (nullcheck: boolean) => {
    if (nullcheck) {
      if (this.playerCount >= this.doctorCount + this.policeCount + this.mafiaCount + 2) {
        console.log("게임 시작!!");
        this.cityzenCount = this.playerCount - (this.doctorCount + this.policeCount + this.mafiaCount);
        this.selectJob();
        this.shuffle();
      } else {
        console.log("인원 수를 확인해 주세요");
      }
    } else {
      console.log("인원 설정을 해주세요");
    }
  };
  private nullcheck = (): boolean => {
    if (this.playerCount && this.doctorCount && this.policeCount && this.mafiaCount) return true;
    return false;
  };
  public addPlayerCount = (count: number) => {
    this.playerCount = count;
  };
  public adddoctorCount = (count: number) => {
    this.doctorCount = count;
  };
  public addpoliceCount = (count: number) => {
    this.policeCount = count;
  };
  public addMafiaCount = (count: number) => {
    this.mafiaCount = count;
  };
}

const Game = new MafiaGame();
Game.addPlayerCount(7);
Game.adddoctorCount(1);
Game.addpoliceCount(1);
Game.addMafiaCount(2);
Game.start();
console.log(Game.player);
