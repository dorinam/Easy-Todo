import { CategoryDataService } from './categories/category-data.service';
import { Component, OnInit } from '@angular/core';
import {Easytodo} from './alltodos/easytodo';
import {EasytodoDataService} from './alltodos/easytodo-data.service';
import {Category} from './categories/category';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [EasytodoDataService, CategoryDataService]

})

export class AppComponent implements OnInit {

  newEasytodo: Easytodo = new Easytodo();
  newCategory: Category = new Category();
  selectedCategory: Category;

  constructor(private easytodoDataService: EasytodoDataService, private categoryDataService: CategoryDataService) {
  }


  addEasytodo() {
    this.newEasytodo.category = this.selectedCategory.id;
    this.easytodoDataService.addEasytodo(this.newEasytodo);
    this.newEasytodo = new Easytodo();
    console.log(this.alltodos);
  }

  toggleEasytodoComplete(easytodo: Easytodo) {
    this.easytodoDataService.toggleEasytodoComplete(easytodo);
  }

  removeEasytodo(easytodo: Easytodo) {
    this.easytodoDataService.deleteEasytodoById(easytodo.id);
  }

  get alltodos() {
    return this.easytodoDataService.getAllAlltodos();
  }

  get alltodosForCat() {
    return this.easytodoDataService.getEasytodoByCategory(this.selectedCategory.id);
  }

  countAlltodosByCat(id: number) {
    return this.easytodoDataService.getEasytodoByCategory(id).length;
  }

  addCategory() {
    this.categoryDataService.addCategory(this.newCategory);
    this.newCategory = new Category();
  }

  removeCategory(category: Category) {
    this.categoryDataService.deleteCategoryById(category.id);
  }

  get categories() {
    return this.categoryDataService.getAllCategories();
  }

  categoryById(id: number) {
    return this.categoryDataService.getCategoryById(id);
  }

  addInitialCategory(category: Category) {
    this.categoryDataService.addCategory(category);
  }

  addInitialEasytodo(easytodo: Easytodo) {
    this.easytodoDataService.addEasytodo(easytodo);
  }


  onSelect(category: Category): void {
    this.selectedCategory = category;
  }

  ngOnInit() {
    let initCat = new Category();
    initCat = {'name' : 'Monday', 'id' : 1 , };
    this.addInitialCategory(initCat);
    initCat = {'name' : 'Tuesday', 'id' : 2 , };
    this.addInitialCategory(initCat);
    initCat = {'name' : 'Wednesday', 'id' : 3 , };
    this.addInitialCategory(initCat);
    initCat = {'name' : 'Thursday', 'id' : 4 , };
    this.addInitialCategory(initCat);
    initCat = {'name' : 'Friday', 'id' : 5 , };
    this.addInitialCategory(initCat);
    initCat = {'name' : 'Saturday', 'id' : 6 , };
    this.addInitialCategory(initCat);
    initCat = {'name' : 'Sunday', 'id' : 7 , };
    this.addInitialCategory(initCat);

    let initEasytodo = new Easytodo();
    initEasytodo = {'title' : 'Example Task1', 'complete': false, 'id' : 1 , category: 1 };
    this.addInitialEasytodo(initEasytodo);
    initEasytodo = {'title' : 'Example Task2', 'complete': true, 'id' : 2 , category: 1 };
    this.addInitialEasytodo(initEasytodo);

  }

}