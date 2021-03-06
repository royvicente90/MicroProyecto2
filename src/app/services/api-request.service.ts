import { Injectable } from '@angular/core';
import Axios, { AxiosResponse } from 'axios';
import { APIResponse } from '../interfaces/apiresponse';
import { Pelicula } from '../interfaces/pelicula';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor() { }

  ApiUrl= "https://api.themoviedb.org/3/movie/popular?api_key=b256b4245e7140dbfc06e631038eb1e3&language=en-US&page=";

  getResponse(): Promise<AxiosResponse<APIResponse>>{
    return Axios.get(this.ApiUrl);
  }

  getPage(page: number=0){
    console.log(page,"HOLA")
    if(page==0){
       return Axios.get(this.ApiUrl);
    }
    return Axios.get(`${this.ApiUrl}${page}`);
  }

  getPersonaje(id: number){
    return Axios.get(`${this.ApiUrl}${id}`);

  }

  getFilter(tipo: string, nombre: string){
    return Axios.get(`${this.ApiUrl}?${tipo}=${nombre}`)
  }





}
