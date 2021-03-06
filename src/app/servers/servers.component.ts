import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreation = "no server was created";
  serverName = '';
  serverCreated = false;

  constructor(){
    setTimeout(() => {
        this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    return this.serverCreation = 'server was created!!'
  }

  onServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
