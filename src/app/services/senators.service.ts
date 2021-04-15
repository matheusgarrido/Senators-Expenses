import { Injectable, Inject, Input } from '@angular/core';
import { API } from './api.service';

export interface SenatorsListType {
  id: number;
  nomeSenador: string;
}
export interface ExpenseType {
  tipoNome: string;
  total: number;
}
export interface SenatorExpense {
  tipo: string;
  fornec: string;
  data: Date;
  valor: number;
}
export interface SenatorDataType {
  senador: SenatorsListType;
  despesas: SenatorExpense[];
}
@Injectable({
  providedIn: 'root',
})
export class Senators {
  constructor(private API: API) {
    this.fetch();
  }
  private list: SenatorsListType[] = [];
  private totalPages = 0;

  private fetch() {
    return this.API.get<SenatorsListType[]>('senadores').subscribe((res) => {
      this.list = res;
      return res;
    });
  }

  get getList(): SenatorsListType[] {
    return this.list;
  }

  get getTotalPages(): number {
    return this.totalPages;
  }
}

@Injectable({
  providedIn: 'any',
})
export class Senator {
  constructor(private API: API) {}
  private id: number;
  private senator: SenatorDataType;
  private typeNames = [
    'Aluguel de imóveis e despesas concernentes a eles',
    'Divulgação da atividade parlamentar',
    'Aquisição de material de consumo para uso no escritório',
    'Passagens aéreas, aquáticas e terrestres nacionais',
    'Contratação de consultorias, assessorias, pesquisas, trabalhos técnicos e outros serviços',
    'Locomoção, hospedagem, alimentação e combustíveis',
    'Serviços de Segurança Privada',
  ];
  private countResume = new Array<ExpenseType>(7);

  private fetchById() {
    return this.API.get<any>('despesasSenadores/' + this.id).subscribe(
      (res) => {
        this.senator = {
          despesas: [
            ...res.despesas.map(({ ano, mes, dia, fornec, valor, tipo }) => {
              return {
                data: new Date(ano, mes - 1, dia),
                tipo: this.typeNames[tipo - 1],
                fornec,
                valor,
                // tipoNome: this.typeNames[expense.tipo - 1],
              };
            }),
          ],
          senador: { id: res.id, nomeSenador: res.nomeSenador },
        };
        console.log(this.senator);
        for (let i = 0; i < this.countResume.length; i++) {
          this.countResume[i] = { tipoNome: this.typeNames[i], total: 0 };
        }
        this.senator.despesas.map((expense) => {
          const index = this.typeNames.findIndex((current) => {
            return current == expense.tipo;
          });
          this.countResume[index].total += expense.valor;
        });
        return this.senator;
      }
    );
  }

  get getSenator(): SenatorDataType {
    return this.senator;
  }
  get getExpenseResume(): Array<ExpenseType> {
    return this.countResume;
  }
  get getTotal(): number {
    if (!this.getExpenseResume[0]) return 0;
    return this.getExpenseResume
      .map((expense) => expense.total)
      .reduce((acc, curr) => (acc += curr));
  }

  @Input() set setId(id: number) {
    this.id = id;
    this.fetchById();
  }
}
