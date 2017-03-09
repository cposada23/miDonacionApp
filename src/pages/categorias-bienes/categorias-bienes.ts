import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable }  from 'rxjs';
import { CategoriaBienes } from '../../models/categoriasBienes'; 
import { CategoriaService } from '../../providers/categoria-service';

/*
  Generated class for the CategoriasBienes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-categorias-bienes',
  templateUrl: 'categorias-bienes.html'
})
export class CategoriasBienesPage {
  categoriasBienes$: Observable<CategoriaBienes[]>
  constructor(private categoriaService: CategoriaService, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.categoriasBienes$ = this.categoriaService.getCategoriasBienes();
  }

}
