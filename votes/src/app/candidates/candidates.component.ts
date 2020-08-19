import {Component, NgModule, OnInit} from '@angular/core';
import {MatGridList, MatGridListModule} from '@angular/material/grid-list';
import {Candidate} from '../model/candidate';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})

/*@NgModule({
  declarations: [
    MatGridList
  ],
  imports: [
    MatGridListModule
  ],
  exports: [
    MatGridList
  ],
  providers: [],
})*/

export class CandidatesComponent implements OnInit {

  public candidates: Array<Candidate> =
    [
      { 'id': '1', 'name': 'Kanye', 'lastname': 'West', 'topic': 'Entertainment', 'totalVotes': 0,
        'thumbUpVotes': 0, 'thumbDownVotes': 0, 'thumUpPressed': false, 'thumDownPressed': false,
        'url': 'kanye.jpg'
      },
      { 'id': '2', 'name': 'Mark', 'lastname': 'Zuckerberg', 'topic': 'Bussiness', 'totalVotes': 0,
        'thumbUpVotes': 0, 'thumbDownVotes': 0, 'thumUpPressed': false, 'thumDownPressed': false,
        'url': 'mark.jpg'
      },
      { 'id': '3', 'name': 'Cristina', 'lastname': 'Fernández de Kirchner', 'topic': 'Politics', 'totalVotes': 0,
        'thumbUpVotes': 0, 'thumbDownVotes': 0, 'thumUpPressed': false, 'thumDownPressed': false,
        'url': 'cristina.jpg'
      },
      { 'id': '4', 'name': 'Malala', 'lastname': 'Yousafzai', 'topic': 'Art', 'totalVotes': 0,
        'thumbUpVotes': 0, 'thumbDownVotes': 0, 'thumUpPressed': false, 'thumDownPressed': false,
        'url': 'malala.png'
      }
    ];

  constructor() { }

  ngOnInit() {
  }

}
