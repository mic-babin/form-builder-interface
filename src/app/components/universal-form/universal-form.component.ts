import { Component, OnInit } from '@angular/core'; 
import { FormGroup, FormControl,Validators } from '@angular/forms';
import formTemplate from '../../data/data';

@Component({
  selector: 'app-universal-form',
  templateUrl: './universal-form.component.html',
  styleUrls: ['./universal-form.component.scss']
})
export class UniversalFormComponent implements OnInit {

  universalForm:FormGroup;
  universalFormTemplate: any = formTemplate; 
  constructor() {}    
  ngOnInit() {
    let group={}    
    formTemplate.forEach(inputTemplate=>{
      group[inputTemplate.label]=new FormControl('');  
    })
    this.universalForm = new FormGroup(group);
  }
  onSubmit(){
    console.log(this.universalForm.value);
  }
}
