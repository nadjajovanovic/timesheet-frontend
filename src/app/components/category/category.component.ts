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

  constructor(private categoryService: CategoryService,
    @Inject(Category) public data: Category) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }

  public addCategory(): void {
    this.categoryService.addCategory(this.data);
  }

  public updateCategory(): void {
    this.categoryService.editCategory(this.data);
  }

  public deleteCategory(): void {
    this.categoryService.deleteCategory(this.data.categoryid);
  }

}
