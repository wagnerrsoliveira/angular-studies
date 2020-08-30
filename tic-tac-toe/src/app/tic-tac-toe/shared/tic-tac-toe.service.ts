import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {

  private readonly BOARD_SIZE: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly EMPTY: number = 0;

  private board: Array<number[]>;
  private numberOfMoves: number;
  private vitory: Array<number>;

  private _player: number;
  private _showStart: boolean;
  private _showBoard: boolean;
  private _showEnd: boolean;

  constructor() { }

  initialize(): void {
    this._showStart = true;
    this._showBoard = false;
    this._showEnd = false;
    this.numberOfMoves = 0;
    this._player = this.X;
    this.vitory = [];

    this.mountBoard();
  }


  mountBoard(): void {
    this.board = new Array<number[]>();
    for (let i = 0; i < this.BOARD_SIZE; i++){
      this.board.push([this.EMPTY,this.EMPTY,this.EMPTY]);
    }
  }

  get shoWStart():boolean{
    return this._showStart;
  }

  get showBoard():boolean{
    return this._showBoard;
  }

  get showEnd():boolean{
    return this._showEnd;
  }

  get player():number{
    return this._player;
  }

  startGame():void{
    this._showStart = false;
    this._showBoard = true;
  }

}
