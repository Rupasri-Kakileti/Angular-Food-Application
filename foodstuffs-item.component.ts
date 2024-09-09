import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../foodstuffs-detail/foodstuffs-detail.service';
import { foodstuff } from '../../foodstuffs.model';

@Component({
  selector: 'app-foodstuffs-item',
  templateUrl: './foodstuffs-item.component.html',
  styleUrl: './foodstuffs-item.component.css'
})
export class FoodstuffsItemComponent {
  allFoodstuffs: foodstuff[] = [
    foodstuff.createWithRating('Chicken Biryani','Hyderabadi Chicken biryani',250,'https://shantikitchens.com/wp-content/uploads/2024/01/chicken-biryani.jpg',4.5),
    foodstuff.createWithRating('Mutton Biryani','Spicy Mutton biryani',300,'https://bonmasala.com/wp-content/uploads/2022/10/mutton-biriyani-recipe.jpeg',4),
    foodstuff.createWithRating('Veg Biryani','South Indian Veg biryani',200,'https://j6e2i8c9.rocketcdn.me/wp-content/uploads/2019/01/Shahi-Veg-Biryani-Recipe-01.jpg',4.5),
    foodstuff.createWithRating('Pepperoni Pizza','Spicy pepperoni pizza',150,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBIfmupvqdw56YMYNosg6FOF36-RS4OruZhQ&s',4),
    foodstuff.createWithRating('Margherita Pizza','Classic Margherita Pizza',200,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQqPdw5UHoUzZbshSYx6C6IFyFatnpjQ8TAA&s',5),
    foodstuff.createWithRating('Spicy Noodles','Spicy Asian Noodles',150,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk7lPWftnCMWJPBd9ALkULBaixBesGxCVp1w&s',4.5),
    foodstuff.createWithRating('Chicken Noodles','Chicken and Veg Noodles',200,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSiGJEWLbaFGu9WW67NB1wKFzFozgkiLAztA&s',4)]
    filteredFoodstuffs: foodstuff[] = [];
  
  constructor(private route: ActivatedRoute , private cartService: CartService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const type = params.get('type');
      if (type) {
        this.filterFoodstuffs(type);
      }
    });
  }

  filterFoodstuffs(type: string): void {
    // Filter food items based on type (case-insensitive match)
    this.filteredFoodstuffs = this.allFoodstuffs.filter(food =>
      food.name.toLowerCase().includes(type.toLowerCase())
    );
  }
  addToCart(foodstuff: foodstuff): void {
    this.cartService.addToCart(foodstuff);
  }

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)); // Number of full stars
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - Math.ceil(rating)); // Number of empty stars
  }
}
