interface itemRule {
  id: number;
  task: string;
  complete: boolean;
  printDetails(complete: boolean): void;
}

class TodoItem implements itemRule {
  constructor(readonly id: number, readonly task: string, public complete: boolean = false) {}
  public printDetails(): void {
    console.log(`${this.id}\t${this.task}\t${this.complete ? "\t(complete)" : ""}`);
  }
}

export default TodoItem;
