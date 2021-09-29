import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/category";

@Injectable()
export class CategoryService {

    private readonly categoryUrl = 'http://localhost:8083/category';

    constructor (private httpClient : HttpClient) {}
    
    public getAllCategories(): Observable<Category[]> {
        return this.httpClient.get<Category[]>(this.categoryUrl);
    }

    public addCategory(category : Category) : void {
        this.httpClient.post(this.categoryUrl, category);
    }

    public editCategory(category : Category) : void {
        this.httpClient.put(this.categoryUrl, category);
    }

    public deleteCategory(categoryid: number): void {
        this.httpClient.delete(this.categoryUrl + categoryid);
    }
}