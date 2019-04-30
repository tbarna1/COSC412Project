import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  products: any;
  cartProducts: any;

  constructor(private router: Router) { }

  ngOnInit() {
    let data=localStorage.getItem('cart');
    if(data !== null){
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }

    this.products = [
      {
        id: 1,
        title: "Jam Dang Cleanser",
        description: "Your perfect on-the-spot cleanser to be used anywhere",
        img: "assets/detail1.jpg",
        price:12
      },
      {
        id:2,
        title: "Revolutionary Powder Cleanser",
        description: "Everything you need for the natural deep cleansing experience",
        img:"assets/marketing_image.png",
        price:11
      },
      {
        id:3,
        title: "Red Ginseng Dam Jang",
        description: "Cup of coffee",
        img:"assets/red_ginseng_dam_jang.png",
        price:8
      },
      {
        id:4,
        title: "Daily Powder Wash",
        description: "12oz Bottle",
        img:"assets/detail5.jpg",
        price:13
      },
      {
        id:5,
        title: "Dam Jang Cleanser-Limited Edition ",
        description: "Comes with natural leaves from Korea",
        img:"assets/main1.png",
        price:20
      },
      {
        id:6,
        title: "Damjang Nourishing Set",
        description: "The perfect set for nourishing your face each morning(instruction included)",
        img:"assets/damjang_with_content.jpg",
        price:16
      },
      {
        id:7,
        title: "Dam Jang Cleanser-Original Edition",
        description: "100% Natural from original receipe",
        img:"assets/main3.jpeg",
        price:25
      },
      {
        id:8,
        title: "Jang Exfoliating Cloth",
        description: "Perfect cloth for use every morning",
        img:"assets/detail7.jpg",
        price:9
      },
      {
        id:9,
        title: "Cream Setter",
        description: "Used to set the cream when applying to face",
        img:"assets/detail6.jpg",
        price:6
      }
    ]
  }

  addToCart(index){
    let product = this.products[index];
    let cartData = [];
    let data = localStorage.getItem('cart');
    if(data !== null){
      cartData = JSON.parse(data);
    }
    cartData.push(product);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    this.products[index].isAdded = true;
  }
  updateCartData(cartData) {
    this.cartProducts = cartData;
  }
  goToCart() {
    this.router.navigate(['/cart']);
  }
}
