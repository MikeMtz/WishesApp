import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'placeholder'
})
export class PlaceholderPipe implements PipeTransform{
    transform(value: string, default_str: string): string {
        return value ? value : default_str;
    }
}