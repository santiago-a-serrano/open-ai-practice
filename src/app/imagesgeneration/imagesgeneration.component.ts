import { Component, OnInit } from '@angular/core';
import { ImagesgenerationService } from '../services/imagesgeneration.service'

@Component({
  selector: 'app-imagesgeneration',
  templateUrl: './imagesgeneration.component.html',
  styleUrls: ['./imagesgeneration.component.css']
})

export class ImagesgenerationComponent implements OnInit {
  constructor(private imagesgeneration : ImagesgenerationService) { }

    image_urls: string[] = ["/assets/portrait.png"]

    ngOnInit(): void {
      
    }

    result: string = "";
    prompt: string = "";
    n: number = 4

    postCompletition(){
      let myprompt = this.prompt

        var payload = {
          prompt: myprompt,
          n: this.n,
          size: "256x256"
        }
    
        this.imagesgeneration.postCompletition(payload).subscribe((data: any) => {
          //alert(JSON.stringify(data));
          console.log(data);
          //this.result = data.data[0].url;
          this.image_urls = [data.data[0].url]
          for(let i = 1; i < this.n; i++){
            this.image_urls.push(data.data[i].url)
          }
        });
    }

}
