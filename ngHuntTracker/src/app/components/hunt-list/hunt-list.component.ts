import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selected: Hunt | null = null;
  constructor(private huntService: HuntService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.loadHunts();
    let huntIdString = this.route.snapshot.paramMap.get('id');
    if(huntIdString) {
      let huntId = Number.parseInt(huntIdString);
      if(!isNaN(huntId)) {
        this.huntService.show(huntId).subscribe(
          (hunt)=> {
            this.loadHunts();
            this.selected = hunt;
          },
          (problem)=> {
            this.router.navigateByUrl('not found');
          }
        )
      }
    }
  }

  displayHunt(hunt: Hunt) {
    this.selected = hunt;
  }
  disableView() {
    this.selected = null;
  }
  setEditHunt() {
    this.editHunt = Object.assign({}, this.selected);
  }
  updateHunt(hunt: Hunt, showHunt = true) {
    this.huntService.update(hunt).subscribe(
      (updated)=>{
        this.loadHunts();
        this.editHunt = null;
        this.selected = updated;
      },
      (fail)=> {
        console.error('this update did not work');
      }
    );
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
  searchHunt(id: number) {
    this.huntService.show(id).subscribe(
      (hunt)=>{
        this.selected = hunt;
      },
      (fail)=>{
        console.error('single hunt load failed');
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
  };
}
