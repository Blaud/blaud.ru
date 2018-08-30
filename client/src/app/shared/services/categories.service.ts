import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Category} from "../interfaces";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root"
})
export class CategoriesService {

  constructor(private http: HttpClient) {
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('/api/online_shop/category')
  }

  getById(id: string): Observable<Category> {
    return this.http.get<Category>(`/api/online_shop/category/${id}`)
  }

}