import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudApp';
  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService
    ) { }

    ngOnInit() {
      this.form = this.fb.group({
        name: ["", Validators.required],
        job: ["", Validators.required]
      });
    }

    onSubmit() {
      if(this.form.valid) {
        console.log(this.form.value);
        this.userService.create(this.form.value).subscribe(
          (response: any) => {
            console.log(response);
          },
          (errorResponse: any) => {
            console.log(errorResponse);
          }
          );
      }
    }

    onUpdate() {
      if(this.form.valid) {
        console.log(this.form.value);
        this.userService.update("286", this.form.value).subscribe(
          (response: any) => {
            console.log(response);
          },
          (errorResponse: any) => {
            console.log(errorResponse);
          }
          );
      }
    }

    onDelete() {
      this.userService.delete("286").subscribe(
        (response: any) => {
          console.log(response);
        },
        (errorResponse: any) => {
          console.log(errorResponse);
        }
        );
    }
}
