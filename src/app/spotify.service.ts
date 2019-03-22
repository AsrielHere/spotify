import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getHeader(query: string) {
    const url = "https://api.spotify.com/v1/" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQBn2wj_6RGUbKOSFsGmK8VVhmqGp6HZM_kIaOLofjWWV9huSZOVJvcKwrSUODDk0kycSURCXpKWV-_GuyXinQojXwFNs8Xf4LkrE1oLycgLFYz4aKT0o99yub38yKFssIyOEQe62Ew6-Ec"
    );
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=US";
    const query = "search?query=" + str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) {
    const query = `artists/${id}`;
    return this.getArtist(query);
  }
}
