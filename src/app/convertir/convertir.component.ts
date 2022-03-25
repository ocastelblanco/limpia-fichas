import { Component, OnInit } from '@angular/core';
import { ApiService, BaseGuion, DataFichas } from 'src/app/servicios/api.service';
import { ClrLoadingState } from '@clr/angular';

@Component({
  selector: 'limpia-convertir',
  templateUrl: './convertir.component.html',
  styleUrls: ['./convertir.component.scss']
})
export class ConvertirComponent implements OnInit {
  fuente!: number;
  seleccionados: BaseGuion[] = [];
  estadoBotonProceso: ClrLoadingState = ClrLoadingState.DEFAULT;
  estadoBotonListado: ClrLoadingState = ClrLoadingState.DEFAULT;
  data: BaseGuion[] = [];
  procesadas: DataFichas[] = [];
  numProcesada: number[] = [];
  modalHTML: boolean = false;
  constructor(public api: ApiService) { }
  ngOnInit(): void {
    this.api.getFuente().subscribe(data => {
      this.data = data;
      this.data.length > 0 ? this.estadoBotonListado = ClrLoadingState.SUCCESS : null;
    });
    this.api.getProcesadas().subscribe(data => {
      this.procesadas = data;
      this.data.length > 0 ? this.estadoBotonProceso = ClrLoadingState.SUCCESS : null;
    });
  }
  cargaFuente(): void {
    this.estadoBotonListado = ClrLoadingState.LOADING;
    if (typeof this.fuente === 'string') this.fuente = parseInt(this.fuente);
    this.api.cargaFuente(this.fuente);
  }
  procesa(): void {
    this.estadoBotonProceso = ClrLoadingState.LOADING;
    this.api.procesaFichas(this.seleccionados);
  }
  abreModal(id: number[]): void {
    this.numProcesada = id;
    this.modalHTML = true;
  }
}
