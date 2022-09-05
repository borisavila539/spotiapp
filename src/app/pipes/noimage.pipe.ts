import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(image: any[], ...args: unknown[]): string {
    if(!image){
      return 'assets/img/Noimage.png';
    }else{
      return image[0].url;
    }
  }

}
