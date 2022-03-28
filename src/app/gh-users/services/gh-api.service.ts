import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GhUser } from '../ghUser';
import { GhRepos } from '../gh-repos';

@Injectable()
export class GhApiService {

  private readonly baseUrl:string ='https://api.github.com/users'
  
  //readonly, uma ropriedade do meu html é só para ler, n posso alterar, como se fosse uma constante
  //o Url inicla que a gente vai utilizar na api, uma variavel que tem o url base, só chama ela, para n precisar ficar repetindo
  
  constructor(

    private http:HttpClient
  ) { }//primeiro metodo para pegar os dados do usuario, vai fazer a requisição http para mim

  findUser(username:string):Observable<GhUser>{
    return this.http.get<GhUser>(`${this.baseUrl}/${username}`)
   
    //depois da barra coloco o nome de usuario que ela tem que procurar
  }//quero pegar os dados dessa api, por isso utilizo assim, para ele me retornar dados
  //para qual link ele tem que fazer a requisiçã, está entre ()
  //servicos que fazem requisições http, retornam obervables, e tem que ter o mesmo tipo de dados que a pi vai retornar, e vou receber isso no GhUser
 
  findUserRepos(username:string):Observable<GhRepos[]>{
    return this.http.get<GhRepos[]>(`${this.baseUrl}/${username}/repos`)
      
    
  }
 
}//vamos fazer as riquições http a partir do http client
//vamos injetar um objeto do tipo htto client para poder fazer as requisições
