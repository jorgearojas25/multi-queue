export class Process {
  constructor({ id, name, jobs, limits: limit }) {
    this.id = id;
    this.name = name;
    this.jobs = jobs;
    this.limit = limit;
    this.actualJobs = jobs;
    this.hide = false;
  }
}
