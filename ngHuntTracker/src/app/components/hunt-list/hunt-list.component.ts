import { Component, OnInit } from '@angular/core';
import { Hunt } from 'src/app/models/hunt';
import { HuntService } from 'src/app/services/hunt.service';

@Component({
  selector: 'app-hunt-list',
  templateUrl: './hunt-list.component.html',
  styleUrls: ['./hunt-list.component.css'],
})
export class HuntListComponent implements OnInit {
  hunts: Hunt[] = [];
  newHunt: Hunt = new Hunt();
  editHunt: Hunt | null = null;
  constructor(private huntService: HuntService) {}

  ngOnInit(): void {
    this.loadHunts();
  }

  loadHunts() {
    this.huntService.index().subscribe(
      (hunts)=>{
        this.hunts = hunts;
      },
      (fail)=> {
        console.error('hunt load failed');
        console.error(fail);
      }
    )
  }
  createHunt(hunt: Hunt) {

    this.huntService.create(hunt).subscribe(
      created=>{
        console.log('hunt created');
        console.log(created);
        this.loadHunts();
      },
      failed=>{
        console.error('Error creating hunt.');
      }
    );
  }
  deleteHunt(id: number) {
    this.huntService.destroy(id).subscribe(
      (data)=>{
        console.log('Successfully Deleted');
        this.loadHunts();
      },
      (err)=> {
        console.error('Error, delete unsuccessful');
        console.error(err);
      }
    )
  }
}
