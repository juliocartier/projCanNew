import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MenuServiceService } from './menu-services/menu-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  navbarOpen = false;

  value_convert_rpm_rad: number; //Variável global para converter rpm para rad
  value_convert_rad_rpm: number; //Variável global para converter rad para rpm

  productForm: FormGroup;

  value_array: any;

  beta = [];

  constructor(private menuService: MenuServiceService, private fb: FormBuilder) {
    
   }

 /**
   * Método para converter rpm para rad, 
   * passando um valor como parametro
   */
  public convertRPM(value: number){
    this.value_convert_rpm_rad = this.menuService.convert_rpm_rad(value);
  }

    /**
   * Método para converter rad para rpm, 
   * passando um valor como parametro
   */
  public convertRAD(value: number){
    this.value_convert_rad_rpm = this.menuService.convert_rad_rpm(value);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      qtdLayer: [],
      selling_points: this.fb.array([this.fb.group({tempo_inicio: '', tempo_fim: '', movimento: '', tipo_programa: '', posicao_inicial: '', posicao_fim: ''})])
    })
    
  }

  get sellingPoints() {
      return this.productForm.get('selling_points') as FormArray;
  }

  addSellingPoint(qtdLayer: number) {
    for(let i = 0; i < qtdLayer-1; i++){
      this.sellingPoints.push(this.fb.group({tempo_inicio: '', tempo_fim: '', movimento: '', tipo_programa: '', posicao_inicial: '', posicao_fim: ''}));
    }
  }

  deleteSellingPoint(index) {
    this.sellingPoints.removeAt(index);
  }

  calcular(){
    let layer = this.productForm.value.qtdLayer;
    let tempo_inicio_beta = [];
    let tempo_fim_beta = [];

    for (let i = 0; i <= layer-1; i++){
      tempo_inicio_beta[i] = this.productForm.value.selling_points[i].tempo_inicio;
      tempo_fim_beta[i] = this.productForm.value.selling_points[i].tempo_fim;
    }

    if(layer == 2){
     
     this.beta[0] = this.menuService.calculate_angle_beta(tempo_inicio_beta[0], tempo_fim_beta[0]);
     this.beta[1] = this.menuService.calculate_angle_beta(tempo_inicio_beta[1], tempo_fim_beta[1]);

    } else if(layer == 3){

     this.beta[0] = this.menuService.calculate_angle_beta(tempo_inicio_beta[0], tempo_fim_beta[0]);
     this.beta[1] = this.menuService.calculate_angle_beta(tempo_inicio_beta[1], tempo_fim_beta[1]);
     this.beta[2] = this.menuService.calculate_angle_beta(tempo_inicio_beta[2], tempo_fim_beta[2]);

    } else if(layer == 4){

     this.beta[0] = this.menuService.calculate_angle_beta(tempo_inicio_beta[0], tempo_fim_beta[0]);
     this.beta[1] = this.menuService.calculate_angle_beta(tempo_inicio_beta[1], tempo_fim_beta[1]);
     this.beta[2] = this.menuService.calculate_angle_beta(tempo_inicio_beta[2], tempo_fim_beta[2]);
     this.beta[3] = this.menuService.calculate_angle_beta(tempo_inicio_beta[3], tempo_fim_beta[3]);

    } else if(layer == 5){

     this.beta[0] = this.menuService.calculate_angle_beta(tempo_inicio_beta[0], tempo_fim_beta[0]);
     this.beta[1] = this.menuService.calculate_angle_beta(tempo_inicio_beta[1], tempo_fim_beta[1]);
     this.beta[2] = this.menuService.calculate_angle_beta(tempo_inicio_beta[2], tempo_fim_beta[2]);
     this.beta[3] = this.menuService.calculate_angle_beta(tempo_inicio_beta[3], tempo_fim_beta[3]);
     this.beta[4] = this.menuService.calculate_angle_beta(tempo_inicio_beta[4], tempo_fim_beta[4]);
     
    }
    
  }

}
