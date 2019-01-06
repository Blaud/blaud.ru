import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Message, Position} from '../interfaces';

@Injectable({
  providedIn: 'root'
})

export class PositionsService {
  constructor(private http: HttpClient) {

  }

  getAllPositions(categoryId: string): Observable<Position[]> {
    return this.http.get<Position[]>(`/api/online_shop/position/${categoryId}`);

  }

  createPosition(position: Position): Observable<Position> {
    return this.http.post<Position>('/api/online_shop/position', position);
  }

  updatePosition(position: Position): Observable<Position> {
    return this.http.patch<Position>(`/api/online_shop/position/${position._id}`, position);
  }

  deletePosition(position: Position): Observable<Message> {
    return this.http.delete<Message>(`/api/online_shop/position/${position._id}`);
  }
}
