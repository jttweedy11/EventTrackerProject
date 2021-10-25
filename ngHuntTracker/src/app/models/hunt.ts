
export class Hunt {
  id: number;
  name: string;
  size: string;
  notes: string;
  url: string;
  eventDate: string | null;

  constructor(id: number = 0, name: string = '', size: string = '', notes = '', url = '', eventDate = '') {
    this.id = id;
    this.name = name;
    this.size = size;
    this.notes = notes;
    this.url = url;
    this.eventDate = eventDate;
  }
}
