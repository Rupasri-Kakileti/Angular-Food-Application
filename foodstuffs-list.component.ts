import { Component } from '@angular/core';
import {foodstuff} from '../foodstuffs.model';

@Component({
  selector: 'app-foodstuffs-list',
  templateUrl: './foodstuffs-list.component.html',
  styleUrl: './foodstuffs-list.component.css'
})
export class FoodstuffsListComponent {
  foodstuffs: foodstuff[] = [
    foodstuff.createWithoutRating('Biryani','Hyderabadi chicken biryani',1,'https://cdn.britannica.com/35/225835-050-A5CC289A/Indian-one-pot-meal-for-party.jpg'),
    foodstuff.createWithoutRating('Pizza','Chicken Pizza',1,'https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.jpg'),
    foodstuff.createWithoutRating('Noodles','Spicy Noodles',1,'https://www.loveandoliveoil.com/wp-content/uploads/2015/03/soy-sauce-noodlesH2.jpg'),
    foodstuff.createWithoutRating('Cakes','Best in Desserts',1,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE9HywyOV36fbC8AU_R-lwFWM964pfmytDXA&s'),
    foodstuff.createWithoutRating('Salad','Healthy Food',1,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlMsMRqmLqRI9-nua1AzkcvViy4bmy_cYkrA&s'),
    foodstuff.createWithoutRating('beverages','beverages',1,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGRxmihSjCBn1jjYgGFdlA9Cv6shAZmX79mw&s'),
    foodstuff.createWithoutRating('Dosa','Dosa',1,'https://www.hindustantimes.com/ht-img/img/2024/02/15/1600x900/deepal-tamang-5oF7d_hPJG4-unsplash_1708003669147_1708003687200.jpg'),
    foodstuff.createWithoutRating('Sandwich','Sandwich',1,'https://recipesblob.oetker.in/assets/f7ea4ac65c534c1492d156dfac9db2ad/1272x764/sandwichetojpg.webp'),
    foodstuff.createWithoutRating('Cofee','Cofee',1,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTENE15-RpIz1PL7ER6mayC-5tjtb84NCbKfg&s'),
    foodstuff.createWithoutRating('Omelette','chole',1,'https://www.mygorgeousrecipes.com/wp-content/uploads/2018/02/Worlds-Best-Vegetarian-Omelette-Quick-and-Easy.jpg')
  ];
  constructor(){}
  ngOnInit(){
    
  }
}
