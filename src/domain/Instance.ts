export default class Instance {
  constructor(private date: Date){}

  // TODO: This is not full proof
  addInDays(days: number): Instance{
    let futureDay = this.date.getDate() + days;
    let newDate = new Date();
    newDate.setDate(futureDay);
    newDate.setMonth(this.date.getMonth());
    newDate.setFullYear(this.date.getFullYear());
    return new Instance(newDate);
  }
}