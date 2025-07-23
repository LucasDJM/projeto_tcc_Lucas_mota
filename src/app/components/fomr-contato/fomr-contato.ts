import { Component} from '@angular/core';

@Component({
  selector: 'app-fomr-contato',
  templateUrl: './fomr-contato.html',
  styleUrl: './fomr-contato.css'
})
export class FomrContato {
   onSubmit(event: Event) {
  event.preventDefault(); // Evita o redirecionamento

  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);

  fetch("https://formsubmit.co/ajax/dominiqueabreu12@gmail.com", {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    } else {
      alert("Erro ao enviar. Tente novamente.");
    }
  })
  .catch(error => {
    console.error("Erro:", error);
    alert("Erro inesperado. Tente mais tarde.");
  });
}

}
