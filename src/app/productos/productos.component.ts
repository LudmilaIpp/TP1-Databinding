import { Component } from '@angular/core';
import {CurrencyPipe, NgClass, NgForOf} from '@angular/common';
import { Producto } from '../../interface/Producto.interface';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    NgClass,
    FormsModule,
  ],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css' ] // Cambiado a styleUrls
})
export class ProductosComponent {
  public Productos: Producto[] = [
    { nombre: 'Producto 1', precio: 10.99, descuento: true },
    { nombre: 'Producto 2', precio: 15.50, descuento: false },
    { nombre: 'Producto 3', precio: 8.75,descuento: true }
  ];

  public nuevoProducto: Producto = { nombre: '', precio: 0, descuento: false };

  public agregarProducto(): void {
    // Verificar que el nuevo producto tenga nombre y precio
    if (this.nuevoProducto.nombre && this.nuevoProducto.precio) {
      this.Productos.push({ ...this.nuevoProducto }); // Agregar el nuevo producto
      this.nuevoProducto = { nombre: '', precio: 0, descuento: false }; // Resetear el formulario
    } else {
      alert('Por favor, complete todos los campos requeridos.'); // Mensaje de alerta si falta información
    }
  }
  public eliminarProducto(index: number): void {
    this.Productos.splice(index, 1);
  }
}


