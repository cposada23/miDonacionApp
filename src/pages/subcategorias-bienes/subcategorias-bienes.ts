import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../providers/categoria-service';
import { SubCategoriaBienes } from '../../models/subCategoriaBienes';
import { AngularFire } from 'angularfire2';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login/login';
import { BienesPage } from '../bienes/bienes';

/**
 * Componente para listar las subCategorias de una categoria
 * @author Camilo Posada Angel <cposadaa@gmail.com>
 */

@Component({
  selector: 'page-subcategorias-bienes',
  templateUrl: 'subcategorias-bienes.html'
})
export class SubcategoriasBienesPage {
  categoriaKey:string; // Llave de la categoria, para la busqueda de las subcategorias
  subcategoriasBienes:any[]; // Lista de subcategorias para la categoria dada
  subcategoriasBienesFiltro:SubCategoriaBienes[]; // Lista filtrada de subcategorias 

  constructor(private auth: Auth, public af:AngularFire,public categoriaService:CategoriaService, public navCtrl: NavController, public navParams: NavParams) {
    this.categoriaKey = this.navParams.get('categoria'); // Obtengo la llave la categoria de la quebuscare las subcategorias
    // Se utiliza el servicio para obtener una lista de subcategorias pertenecientes a la categoria dada
    this.categoriaService.getSubCategoriasPorCategoria(this.categoriaKey).subscribe(subCategorias=>{
      this.subcategoriasBienesFiltro = SubCategoriaBienes.fromjsonArray(subCategorias);
      this.subcategoriasBienes = SubCategoriaBienes.fromjsonArray(subCategorias);
    });
  }

  

  initializeItems(){
    this.subcategoriasBienesFiltro = this.subcategoriasBienes;
  }

  /**
   * 
   * @param ev evento de teclado para filtrar las subcategorias
   */
  getItems(ev:any){
    this.initializeItems(); // Se inicializan las subcategorias a ser filtradas
    let val = ev.target.value; // Se obtiene el valor de lo ingresado en la caja de busqueda
    if(val && val.trim() !=''){ // Solo se filtra cuando haya un valor diferente a vacio
      this.subcategoriasBienesFiltro = this.subcategoriasBienesFiltro.filter(subCategoria=>{
        /** se retorna las subcategorias que cumplan con el valor */
        return (subCategoria.nombre.toLocaleLowerCase().indexOf(val.toLocaleLowerCase())> -1);
      });
    }
  }

  /**
   * De acuerdo a si se esta logueado o no se le deja al usuario 
   * seguir a la pagina donde se listan los bienes.
   * @param subcategoria en la que pertenecen los bienes 
   */
  irProductos(subcategoria) {
    if(this.auth.isAutenticado()){
      this.navCtrl.push(BienesPage);
    }else{
      console.log("no autenticado");
      this.navCtrl.push(LoginPage, {
        vieneSubCategoria:true
      });
    }
  }

}
