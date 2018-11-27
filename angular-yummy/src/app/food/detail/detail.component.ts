import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { Food } from '../../model/food';
import { Recipe } from '../../model/recipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private foodService: FoodService, private route: ActivatedRoute) { }
  food = {};
  recipes : Recipe[] = [];
  foodId = '';

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.foodId = params['foodId'];
      this.goDetail(this.foodId);
  });
  }

  goDetail(foodId){
    this.foodService.detail(foodId).then(data => {

      this.food = data.food;
      this.recipes = data.recipes;
    console.log(data.food);
    });
  }


}
