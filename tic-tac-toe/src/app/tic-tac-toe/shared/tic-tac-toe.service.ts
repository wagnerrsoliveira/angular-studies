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
  private vitory: Array<number[]>;

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
    this.vitory = new Array<number[]>();

    this.mountBoard();
  }


  mountBoard(): void {
    this.board = new Array<number[]>();
    for (let i = 0; i < this.BOARD_SIZE; i++){
      this.board.push([this.EMPTY,this.EMPTY,this.EMPTY]);
    }
  }

  get showStart():boolean{
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

  play(positionX:number,positionY:number){

    if(this.board[positionX][positionY] !== this.EMPTY || this.vitory.length){
      return;
    }

    this.board[positionX][positionY] = this._player;
    this.numberOfMoves++;
    this.vitory =this.endGame(positionX,positionY, this.board, this.player);

    if(this.vitory.length===0 && this.numberOfMoves < 9){
      this.cpuPlay();
    }

    if(this.vitory.length){
      this._showEnd = true;
    }

    if(!this.vitory.length && this.numberOfMoves===9){
      this._player = 0;
      this._showEnd = true;
    }
  }

  endGame(row:number, column:number, board:Array<number[]>, player:number){
    let end = new Array<number[]>();

    if(board[row][0]===player &&
      board[row][1]===player &&
      board[row][2]===player){
        end = [[row,0],[row,1],[row,2]];
    }

    if(board[0][column]===player &&
      board[1][column]===player &&
      board[2][column]===player){
        end = [[0,column],[1,column],[2,column]];
    }

    if(board[0][0]===player &&
      board[1][1]===player &&
      board[2][2]===player){
        end = [[0,0],[1,1],[2,2]];
    }
    
    if(board[0][2]===player &&
      board[1][1]===player &&
      board[2][0]===player){
        end = [[0,2],[1,1],[2,0]];
    }

    return end;
  }

  cpuPlay():void{
    let move:number[] = this.getMove(this.O);

    if(move.length<=0){
      move = this.getMove(this.X);
    }

    if(move.length<=0){
      let moves = [];
     
      for (let i=0; i<this.BOARD_SIZE; i++) {
        for (let j=0; j<this.BOARD_SIZE; j++) {
          if (this.board[i][j] === this.EMPTY) {
            moves.push([i, j]);
          }
        }
      }
      let k = Math.floor((Math.random() * (moves.length - 1)));
      move = [moves[k][0], moves[k][1]];
    }

    this.board[move[0]][move[1]] = this._player;
    this.numberOfMoves++;
    this.vitory = this.endGame(move[0], move[1],
        this.board, this._player);
    this._player = (this._player === this.X) ? this.O : this.X;

  }

  getMove(player:number):number[]{   
    let board = this.board;
    for (let row = 0; row < this.BOARD_SIZE; row++) {
      for (let column = 0; column < this.BOARD_SIZE; column++) {
        if (board[row][column] !== this.EMPTY) {
          continue;
        }
        board[row][column] = player;
        if (this.endGame(row, column, board, player)) {
          return [row, column];
        }
        board[row][column] = this.EMPTY;
      }
    }
    return [];
  }

  showX(positionX:number, positionY:number){
    return this.board[positionX][positionY] === this.X
  }

  showO(positionX:number, positionY:number){
    return this.board[positionX][positionY] === this.O
  }

  showVictory(positionX:number, positionY:number):boolean{
    let showVitoria: boolean = false;

    if (this.vitory.length===0) {
      return showVitoria;
    }

    for (let positions of this.vitory) {
      if (positions[0] === positionX && positions[1] === positionY) {
        showVitoria = true;
        break;
      }
    }

    return showVitoria;
  }

  newGame(): void {
    this.initialize();
    this._showEnd = false;
    this._showStart = false;
    this._showBoard = true;
  }

}
