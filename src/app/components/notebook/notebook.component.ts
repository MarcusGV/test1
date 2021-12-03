import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

interface notebookData{
  p1Field?: string,
  p2Field?: string
  p3Field?: string
  p4Field?: string
  p5Field?: string
}

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})
export class NotebookComponent implements OnInit {
  form = new FormGroup({ });

  d1: notebookData = {};

  private openMessage(message: string){
    this._snackBar.open(message, 'cerrar', {duration: 3000});
  }
  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,) {}

  ngOnInit(): void {
    this.buildForm();
    this.getData();  
  }

  private buildForm(){
    this.form = this.formBuilder.group({      
      p1Field: ['', []],
      p2Field: ['', []],      
      p3Field: ['', []],      
      p4Field: ['', []],      
      p5Field: ['', []],      
    });
  }

  get p1F() {
    return this.form.get('p1Field');
  }

  saveData(){
    sessionStorage.setItem('formFields', JSON.stringify(this.form.value));
    this.openMessage('Thanks, data saved using sessionStorage');
  }

  getData(){
    let p1FieldFromSession= sessionStorage.getItem('formFields');
    if (p1FieldFromSession){
      this.d1 = JSON.parse(p1FieldFromSession);
      this.form.setValue(this.d1)
    }else{
      console.log('sin datos')
    }

  }

}
