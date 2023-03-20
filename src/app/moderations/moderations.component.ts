import { Component, OnInit } from '@angular/core';
import { ModerationsService } from '../services/moderations.service'

@Component({
  selector: 'app-moderations',
  templateUrl: './moderations.component.html',
  styleUrls: ['./moderations.component.css']
})

export class ModerationsComponent implements OnInit {
  constructor(private moderations : ModerationsService) { }
    ngOnInit(): void {
      
    }

    text: string = "";

    jsonData: { flagged: boolean, categories: { [key: string]: boolean }, category_scores: { [key: string]: number } }[] = 
      [{
        flagged: false,
        categories: {
          sexual: false,
          hate: false,
          violence: false,
          'self-harm': false,
          'sexual/minors': false,
          'hate/threatening': false,
          'violence/graphic': false
        },
        category_scores: {
          sexual: 0,
          hate: 0,
          violence: 0,
          'self-harm': 0,
          'sexual/minors': 0,
          'hate/threatening': 0,
          'violence/graphic': 0
        }
      }
    ];

    postCompletition(){
        var payload = {
          input: this.text
        }
    
        this.moderations.postCompletition(payload).subscribe((data: any) => {
          //alert(JSON.stringify(data));
          console.log(data);
          this.jsonData = data.results;
        });
    }

}
