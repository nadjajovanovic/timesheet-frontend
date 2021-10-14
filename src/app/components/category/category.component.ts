import { Component, Inject, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  public getCategories() : void {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;

      $(document).ready(function () {
        var heading = '.accordion-wrap .heading';
      
        $(heading).click(function () {
          if (!$(this).parent().hasClass('open')) {
            $(this).parent().addClass('open');
            $(this).next().slideDown('normal');
          } else {
            $(this).parent().removeClass('open');
            $(this).next().slideUp('normal');
          }
        });

        /*if ($('.new-member-popup').length) {
          $('.new-member-popup').fancybox();
        }*/
      });
    
    });
  }

  /*public addCategory(): void {
    this.categoryService.addCategory(this.data);
  }

  public updateCategory(): void {
    this.categoryService.editCategory(this.data);
  }

  public deleteCategory(): void {
    this.categoryService.deleteCategory(this.data.categoryid);
  }*/

}
