import { Component, OnInit } from '@angular/core';
import { GhUser } from '../../ghUser';
import { GhApiService } from '../../services/gh-api.service';

@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {
  
  usarname:string=''
  
  repos_url:[]=[]
  
  user:GhUser | null = null
  
  constructor(
    private ghServices:GhApiService
  ) { }//quando esse meu component for projetado na tela, vai ter esse serviço dentro dele
       //na hora que o meu servidor for iniciado
  ngOnInit(): void {
    this.ghServices.findUser(this.usarname).subscribe(
      (gUser)=>{
        this.user=gUser
       
      }//o dado retornado da api, to guardando tendo de uma propriedade para poder usar normalmente
    )






  }
  
  
  
  
  
  
  
  
  //vai pegar o usuario
   //retorna um observable, eu tenho que me inscrever nesse onservable
}//temos que fazer a injeção de depencias dos serviços, 
//quando os dados dele já estão prontos, por isso que eu coloco no ngOninit
//Para acessar a API do git hub coloca assim no navegador:api.github.com./users/nome do usuario que eu quero procurar
//e depois vai vir todos os dados publicos