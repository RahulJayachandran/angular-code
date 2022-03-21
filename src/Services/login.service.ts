import{ Injectable} from "@angular/core";

import{ HttpClient} from "@angular/common/http";
import{ login } from "../Model/login.model"

@Injectable()
export class loginService
{

constructor(private http:HttpClient)
{


}

readonly uri="http://localhost:44530/api/Login";




//Adding new customer data

insertlogin(ins:any)
    {
        debugger;
        return this.http.post(this.uri,ins,{responseType:'text'});
    }

}