import { Component } from '@angular/core';

@Component({
  selector: 'app-registrotrestrabajador',
  templateUrl: './registrotrestrabajador.component.html',
  styleUrls: ['./registrotrestrabajador.component.css'] // Corregido a 'styleUrls' con "s"
})
export class RegistrotrestrabajadorComponent {
  uploadedFiles: { [key: string]: File } = {};
  isModalVisible: boolean = false; // Controla la visibilidad del modal
registroUbiForm: any;

  onFileSelected(event: any, fieldName: string): void {
    const file = event.target.files[0];
    if (file) {
      // Validar si es una imagen para el campo de foto de perfil
      if (fieldName === 'fotografiaPerfil' && !file.type.startsWith('image/')) {
        alert('Por favor, suba una imagen válida.');
        return;
      }
      // Validar si es un PDF para otros campos
      else if (fieldName !== 'fotografiaPerfil' && file.type !== 'application/pdf') {
        alert('Por favor, suba un archivo PDF válido.');
        return;
      }
      // Guardar archivo subido
      this.uploadedFiles[fieldName] = file;
      console.log(`Archivo subido en ${fieldName}:`, file.name);
    }
  }

  onSubmit(): void {
    // Validar que todos los campos estén completos
    if (Object.keys(this.uploadedFiles).length < 4) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    // Crear el FormData con los archivos cargados
    const formData = new FormData();
    for (const key in this.uploadedFiles) {
      formData.append(key, this.uploadedFiles[key]);
    }

    // Simular el envío de archivos al backend
    console.log('Archivos listos para enviar:', formData);
    this.onConfirm(); // Mostrar el modal al completar
  }

  onConfirm(): void {
    console.log('Datos confirmados');
    this.isModalVisible = true; // Mostrar el modal
  }

  closeModal(): void {
    this.isModalVisible = false; // Ocultar el modal
  }
}

