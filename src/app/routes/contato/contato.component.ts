import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContatoService } from '../../services/contato.service';
import { Contato } from '../../types/contato';

@Component({
  selector: 'app-contato',
  standalone: false,
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css',
})
export class ContatoComponent {
  contatos: Contato[] = [];
  isEditing: boolean = false;
  formGroupContato: FormGroup;

  constructor(
    private service: ContatoService,
    private formBuilder: FormBuilder
  ) {
    this.formGroupContato = this.formBuilder.group({
      id: [''],
      nome: [''],
      telefone: [''],
      email: [''],
      tipo: [''],
      genero: [''],
    });
  }

  ngOnInit(): void {
    this.loadContatos();
  }

  loadContatos() {
    this.service.getAll().subscribe({
      next: (json) => (this.contatos = json),
    });
  }

  clear(){
     this.isEditing = false;
     this.formGroupContato.reset();
  }

  onClickSave() {
    this.service.save(this.formGroupContato.value).subscribe({
      next: (json) => {
        this.contatos.push(json);
        this.formGroupContato.reset();
        alert('Contato criado com sucesso!');
      },
    });
  }

  onClickUpdate(contato: Contato) {
    this.isEditing = true;
    this.formGroupContato.setValue(contato);
  }

  onConfirmUpdate() {
    this.service.update(this.formGroupContato.value).subscribe({
      next: () => {
        this.loadContatos();
        this.isEditing = false;
        this.formGroupContato.reset();
        alert('Contato atualizado com sucesso!');
      },
    });
  }

  onClickDelete(contato: Contato) {
    this.service.delete(contato).subscribe({
      next: () => {
        this.loadContatos();
        alert('Contato excluido com sucesso!');
      },
    });
  }
}
