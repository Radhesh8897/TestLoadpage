import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  private apiUrl = 'https://mocki.io/v1/072f4309-6b86-4ecc-b055-e16192d9f76a';
  private batchSize = 100; // Adjust as needed
  private currentIndex = 0;
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getDataBatch(): Observable<any[]> {
    const params = {
      _start: this.currentIndex,
      _limit: this.batchSize,
    };

    return this.http.get<any[]>(this.apiUrl, { params }).pipe(
      map((data: any) => {
        console.log(data)
        this.currentIndex += data.posts.length;
        return data.posts;
      })
    );
  }
}
