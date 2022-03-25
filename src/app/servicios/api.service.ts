import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';


export interface BaseGuion {
  idGuion: number;
  IG_identificador: string;
  IG_titulo: string;
}
export interface Ficha {
  idRecurso: string;
  tipoFicha: number;
  ficha: string;
}
export interface DataFichas extends BaseGuion {
  fichas: Ficha[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public fuentes: string[] = ['Carpeta ORIGEN', 'JSON GrecoWebApis', 'Muestra LOMLOE'];
  public fuenteSel!: number;
  public progreso: number = 0;
  private _data: BaseGuion[] = [];
  private data: BehaviorSubject<BaseGuion[]> = new BehaviorSubject<BaseGuion[]>(this._data);
  private _procesadas: DataFichas[] = [];
  private procesadas: BehaviorSubject<DataFichas[]> = new BehaviorSubject<DataFichas[]>(this._procesadas);
  constructor(private http: HttpClient) { }
  cargaFuente(num: number | null = null): void {
    num !== null ? this.fuenteSel = num : null;
    if (this.fuenteSel !== undefined) {
      switch (this.fuenteSel) {
        case 0:
          const url: string = 'listaHtml.php';
          this.http.get<BaseGuion[]>(environment.urlAPI + url).subscribe(data => {
            this._data = data;
            this.data.next(this._data);
          });
          break;
        case 1:
          this.listaFichas();
          break;
        case 2:
          this.listaFichas(true);
          break;
      }
    }
  }
  getFuente(): BehaviorSubject<BaseGuion[]> {
    return this.data;
  }
  procesaFichas(lista: BaseGuion[]): void {
    this._procesadas = [];
    const url: string = environment.urlAPI + 'listaFichas.php?id=';
    lista.forEach((guion, index) => {
      this._procesadas.push({
        idGuion: guion.idGuion,
        IG_identificador: guion.IG_identificador,
        IG_titulo: guion.IG_titulo,
        fichas: []
      });
      this.http.get<any>(url + guion.idGuion, { responseType: 'json' }).subscribe(data => {
        this._procesadas[index].fichas = data.modulos
          .filter((m: any) =>
            m.comunes.tipoModulo.valor === 'recurso' &&
            (m.propiedades.Ficha_alumno_html || m.propiedades.Ficha_profesor_html)
          )
          .map((m: any) => {
            const fichas: Ficha[] = [];
            if (m.propiedades.Ficha_profesor_html) {
              fichas.push(
                {
                  idRecurso: m.propiedades.Carpeta,
                  tipoFicha: 0,
                  ficha: m.propiedades.Ficha_profesor_html
                }
              );
            }
            if (m.propiedades.Ficha_alumno_html) {
              fichas.push(
                {
                  idRecurso: m.propiedades.Carpeta,
                  tipoFicha: 1,
                  ficha: m.propiedades.Ficha_alumno_html
                }
              );
            }
            return fichas;
          })
          .reduce((a: any[], b: any[]) => a.concat(b), []);
        const actuales: number = this._procesadas.filter(p => p.fichas.length > 0).length;
        this.progreso = Math.floor(actuales / lista.length * 100);
        this.procesadas.next(this._procesadas);
        if (actuales === lista.length) this.progreso = 0;
      });
    });
  }
  getProcesadas(): BehaviorSubject<DataFichas[]> {
    return this.procesadas;
  }
  private listaFichas(lomloe: boolean = false): void {
    this.progreso = -1;
    const url: string = environment.urlAPI + 'listaFichas.php';
    this._data = [];
    this.http.get<BaseGuion[]>(url, { responseType: 'json' }).subscribe(data => {
      this.progreso = 0;
      lomloe ? data.splice(0, data.length - 3) : null;
      this._data = data;
      this.data.next(this._data);
    });
  }
}
