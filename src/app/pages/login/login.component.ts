import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/_service/loginservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  texto:string='';

  form!: FormGroup;

 

  // inyección de dependencias y librerías
  constructor( public loginService: LoginService,
              // tslint:disable-next-line: variable-name
              private formBuilder: FormBuilder, private router: Router,) {
    this.buildForm();
  }

  ngOnInit(): void {
    // iniciar variables
    // llamar métodos
    // lógica inicial
  }

  login(event: Event): void {

    event.preventDefault();

    if (this.form.valid){
      this.loginService.login(this.form.value.username, this.form.value.password).subscribe(data => {

        // const helper = new JwtHelperService();

        console.log(data);
        if(data.success){
          this.router.navigate(['/list']);
        }else{
          this.texto='Nombre de usuario o contraseña incorrecta';
        }
        //sessionStorage.setItem(environment.TOKEN, data.access_token);

        // console.log(helper.decodeToken(data.access_token));

        
      }/* , err => {
        console.log(err);
        this.openSnackBarSuccess();
      } */);
    } else{
      this.form.markAllAsTouched();
    }

    /* this.loginService.login('admin', '123456').subscribe(data => {
      const helper = new JwtHelperService();
      console.log(data);
      sessionStorage.setItem(environment.TOKEN, data.access_token);
      console.log(helper.decodeToken(data.access_token));
    }); */
  }

  private buildForm(): void{
    this.form = this.formBuilder.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
      }
    );
  }

  

}
