import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { Food } from '../../model/food';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private foodService: FoodService, private route: ActivatedRoute) { }

  foodList : Food[] = [];
  pager = {};
  pagination = "";
  page = 1;
  size = 12;
  bsize = 10;

// https://alligator.io/angular/query-parameters/
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        if(params.page == undefined){
            this.goList(this.page, this.size, this.bsize);
        }else{
          this.goList(params.page, params.size, params.bsize);
        }


      });
}



  goList(page, size, bsize){
    this.foodService.list(page, size, bsize).then(data => {
      this.foodList = data.list;
      this.pager = data.pager;

      console.log(this.pager);

      for(var i=0; i < data.pager.pagination.length; i++){
        this.pagination += data.pager.pagination[i];
      }

    });
  }

}
