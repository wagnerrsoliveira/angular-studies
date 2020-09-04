import { Component, OnInit } from '@angular/core';
import { TicTacToeService } from './shared';

@Component({
  selector: 'tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  constructor(private ticTacToeService: TicTacToeService) { }

  ngOnInit(): void { 
    this.ticTacToeService.initialize()
  }

  get showStart():boolean{
    return this.ticTacToeService.showStart;
  }

  get showBoard():boolean{
    return this.ticTacToeService.showBoard;
  }

  get showEnd():boolean{
    return this.ticTacToeService.showEnd;
  }

  startGame(){
    this.ticTacToeService.startGame();
  }

  play(positionX:number,positionY:number){
    this.ticTacToeService.play(positionX,positionY);
  }

  showX(positionX:number,positionY:number):boolean{
    return this.ticTacToeService.showX(positionX,positionY);
  }

  showO(positionX:number,positionY:number):boolean{
    return this.ticTacToeService.showO(positionX,positionY);
  }

  showVictory(positionX:number,positionY:number):boolean{
    return this.ticTacToeService.showVictory(positionX,positionY);
  }

  get player():number{
    return this.ticTacToeService.player;
  }

  newGame():void{
    this.ticTacToeService.newGame();
  }
}
