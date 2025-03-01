import { Injectable } from "@angular/core";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

@Injectable({
  providedIn: "root",
})
export class PhotoService {
  photos: string[] = [];

  constructor() {}

  async addNewPhoto() {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
      quality: 100,
    });
    if (photo.webPath) {
      this.photos.unshift(photo.webPath);
    }
  }
}
