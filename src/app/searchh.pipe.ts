import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchh'
})
export class SearchhPipe implements PipeTransform {

  
  transform(value: any, args?: any): any {
    // return null;
    if(!value)return null;
      if(!args)return value;
      console.log(value); //array
       console.log(args); //search string
      args = args.toLowerCase();

      return value.filter(function(data){
          return JSON.stringify(data).toLowerCase().includes(args);
      });
  }

}