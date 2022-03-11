import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [ ` 
        p {
            padding: 20px;
            background-color: mistyrose;
            border: 1px solid red;
        }
    ` ]
})

export class ServerComponent {
    // String interpolation
    serverId: number = 10;
    serverStatus: string = 'offline'

    // using a method
    getServerStatus() {
        return this.serverStatus;
    }
}