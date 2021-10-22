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
}
