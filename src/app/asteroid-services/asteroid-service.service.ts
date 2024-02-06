import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apod, AsteroidsResultInterface } from '../models/asteroids.models';

@Injectable({
  providedIn: 'root'
})
export class AsteroidServiceService {

  apiKey: string = "UgA5dZduMQTuJzduRKBzgTThttXeg5EZJkBuCF9Z";

  //url : String = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dataInicial}&end_date=${dataFinal}&api_key=${apiKey}`;

  variavelTeste : String =''
  

  constructor(private http: HttpClient) { }

/*
  getAll(dataInicial : Date, dataFinal : Date){
    this.variavelTeste = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dataInicial}&end_date=${dataFinal}&detailed=false&api_key=${this.apiKey}`
    console.log(this.variavelTeste)
  }

GET https://api.nasa.gov/planetary/apod

*/

 
  getAll(dataInicial : string, dataFinal : string) : Observable<any>{
    this.variavelTeste = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dataInicial}&end_date=${dataFinal}&detailed=false&api_key=${this.apiKey}`
    console.log(this.variavelTeste)
    console.log("teste emcima "+ `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dataInicial}&end_date=${dataFinal}&api_key=${this.apiKey}`)
   
   
    let getData= 'this.http.get<AsteroidsResultInterface>(`http://api.nasa.gov/neo/rest/v1/feed?start_date=${dataInicial}&end_date=${dataFinal}&api_key=${this.apiKey}`)'
   console.log(getData)
   
    return this.http.get<AsteroidsResultInterface>(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${dataInicial}&end_date=${dataFinal}&api_key=${this.apiKey}`)
    console.log("okkkkkkk")
  }

  getAll2(dataInicial : string) : Observable<Apod>{
    this.variavelTeste = `https://api.nasa.gov/planetary/apod?date=${dataInicial}&api_key=${this.apiKey}`
    console.log(this.variavelTeste)
    
   
   
    return this.http.get<Apod>(`https://api.nasa.gov/planetary/apod?date=${dataInicial}&api_key=${this.apiKey}`)
    console.log("okkkkkkkAAPoooddoo")
  }
  
}
