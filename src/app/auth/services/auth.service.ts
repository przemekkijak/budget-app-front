import { Injectable } from "@angular/core";
import { StorageService } from "src/app/core/services/storage.service";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private storageService: StorageService) {
  }

  getUserId(): number | null {
    let authResult = this.storageService.readToken()
    if (authResult == null) {
      return null;
    }

    return authResult.user.id
}
}
