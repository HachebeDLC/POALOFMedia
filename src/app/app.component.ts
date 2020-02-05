import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}
  title = 'PortraitMedia';
  images = [];
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.httpClient
      .get('https://api.imgur.com/3/album/MiuEd16/images', {
        headers: {
          Authorization: 'Client-ID d4c0728985acdf7'
        }
      })
      .subscribe((data: any) => {
        this.images = data.data;
      });
  }

  thumbnail(link: string): string {
    const longitud = link.length;
    return `${link.slice(0, longitud - 4)}b${link.slice(longitud - 4, longitud)}`;
  }
}
