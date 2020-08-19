import {Component, Input, OnInit} from '@angular/core';
import {Candidate} from '../../model/candidate';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  @Input() Candidate: Candidate;

  candidate: Candidate;
  candidateMessage: object;

  percentageThumbUp: number;
  percentageThumbDown: number;


  constructor() { }

  ngOnInit() {
    // @ts-ignore
    this.candidate = this.Candidate;
    this.percentageThumbUp = 0;
    this.percentageThumbDown = 0;
  }

  getUrl() {
    return this.Candidate;
  }

  receiveVote($event) {
    this.candidateMessage = $event;
    // @ts-ignore
    this.candidate.thumUpPressed = this.candidateMessage.candidateThumpUpPressed;
    // @ts-ignore
    this.candidate.thumDownPressed = this.candidateMessage.candidateThumpDownPressed;
    this.candidate.totalVotes++;
    // @ts-ignore
    this.candidate.thumbUpVotes += this.candidateMessage.candidateThumpUpPressed ? 1 : 0;
    // @ts-ignore
    this.candidate.thumbDownVotes += this.candidateMessage.candidateThumpDownPressed ? 1 : 0;
  }


  calculatePercentage() {
    this.percentageThumbDown = (this.candidate.thumbDownVotes / this.candidate.totalVotes) * 100;
    this.percentageThumbUp = (this.candidate.thumbUpVotes / this.candidate.totalVotes) * 100;
  }
}
