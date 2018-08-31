import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Category, Message} from "../interfaces";
import {Observable} from "rxjs";

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

  create(name: string, image?: File): Observable<Category> {
    const fd = new FormData();

    if (image) {
      fd.append('image', image, image.name)
    }
    fd.append('name', name);

    return this.http.post<Category>('/api/online_shop/category', fd);
  }

  update(id:string, name: string, image?: File): Observable<Category> {
    const fd = new FormData();

    if (image) {
      fd.append('image', image, image.name)
    }
    fd.append('name', name);

    return this.http.patch<Category>(`/api/online_shop/category/${id}`, fd);
  }

  delete(id: string): Observable<Message>{
    return this.http.delete<Message>(`/api/online_shop/category/${id}`)
  }

}
