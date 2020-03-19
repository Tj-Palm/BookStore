import Axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

import {json2table100} from "./genericTable";

let BaseUri: string = "http://anbo-bookstorerest.azurewebsites.net/api/"
let contentElement: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
let element: HTMLTableElement = <HTMLTableElement> document.getElementById("table_content");
let AllBooks: JSON;

interface IBook {
   id: number,
   title: string,
   author: string,
   publisher: string,
   price: number,
}

 Axios.get(BaseUri + "Books").then(
     function(response: AxiosResponse): void{
         console.log("getting books... v4");
         setTimeout(() => {  console.log("waited 5 sek"); }, 5000);
    let data: IBook[] = response.data;
        console.log(data);
    let result: string = json2table100(data);
console.log(result);
        element.innerHTML = result;
     }
 )
 .catch(
     function(error: AxiosError): void{
        contentElement.innerHTML = error.message;
     }
 )