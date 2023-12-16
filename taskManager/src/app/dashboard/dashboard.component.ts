import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation!: string;
  Username!: string;
  NoOfTeamMembers: number | undefined;
  TotalCostOfAllProjects!: number;
  PendingTasks!: number;
  UpComingProjects!: number;
  ProjectCost!: number;
  CurrentExpenditure!: number;
  AvailableFunds!: number;

  
  ngOnInit() {
    this.Designation="Team Leader";
    this.Username="Pawan Sharma";
    this.NoOfTeamMembers=67;
    this.TotalCostOfAllProjects=240;
    this.PendingTasks=15;
    this.UpComingProjects=2;
    this.ProjectCost=12839894;
    this.CurrentExpenditure=123456;
    this.AvailableFunds=23456;
  }

}
