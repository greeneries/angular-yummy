import { Injectable } from '@angular/core';
import axios from 'axios';
import { Foodlist } from '../model/foodlist';
import { FoodDetail} from '../model/food-detail';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  URL: string = "http://localhost:8080/food/";
  constructor() {

  }

  list(page, size, bsize): Promise<Foodlist>{
      return axios.get(this.URL+"list?page="+page+"&size="+size+"&bsize="+bsize)
          .then(function(response){
      return response.data;
    });
  }

  detail(foodId): Promise<FoodDetail>{
    return axios.get(this.URL+"detail?foodId="+foodId)
              .then(function(response){

        return response.data;
    });
  }

}
