import { Component, OnInit } from "@angular/core";
import { PhotoService } from "./../../services/photo.service";
@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styles: [],
})
export class GalleryComponent implements OnInit {
  photos: string[] = [];
  constructor(private photoService: PhotoService) {
    this.photos = this.photoService.photos;
  }
  ngOnInit(): void {
  }

  async takePhoto() {
    await this.photoService.addNewPhoto();
  }
}
