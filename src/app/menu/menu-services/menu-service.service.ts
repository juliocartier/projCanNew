import { Injectable } from '@angular/core';
import { angularMath } from 'angular-ts-math';


@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor() { }

  /*Formula para converter de rad/sec para rpm. */
public convert_rad_rpm(value: number){
  return (60/(2*angularMath.getPi())) * value;
}


/*Formula para converter de rpm para rad/sec. */
public convert_rpm_rad(value: number){
  return (value/60) * (2 * angularMath.getPi());
}

public calculate_angle_beta(tempo_inicio: any, tempo_fim: any){
  return tempo_fim - tempo_inicio;
}


}
