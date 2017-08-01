import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import {Constants} from '../app.constant';

@Injectable()
export class TaskService {

    constructor(private http: Http) {
        console.log('Task Service initialized..');
    }

    getTasks(){
        return this.http.get(Constants.API_URL+'/api/tasks')
            .map(res => res.json());
    }

    addTask(task){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(
            Constants.API_URL+'/api/tasks',
            JSON.stringify(task),
            {headers: headers}
        ).map(res => res.json());
    }

    deleteTask(id){
        return this.http.delete(Constants.API_URL+'/api/tasks/'+id)
            .map(res => res.json());
    }

    updateStatus(task){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(
            Constants.API_URL+'/api/tasks/'+task._id,
            JSON.stringify(task),
            {headers: headers}
        ).map(res => res.json());
    }
}