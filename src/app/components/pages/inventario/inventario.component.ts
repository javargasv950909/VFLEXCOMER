import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements AfterViewInit, OnInit{

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'nombre', 'cantidad', 'precio', 'acciones'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

export interface PeriodicElement {
  nombre: string;
  position: number;
  cantidad: number;
  precio: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nombre: 'Coca-Cola', cantidad: 40, precio: '1200'},
  {position: 2, nombre: 'Galletas cocosette', cantidad: 30, precio: '500'},
  {position: 3, nombre: 'Papas Margarita pollo', cantidad: 9, precio: '700'},
  {position: 4, nombre: 'Avena Alpina', cantidad: 9, precio: '1000'},
  {position: 5, nombre: 'Ponque Ramo', cantidad: 10, precio: '1100'},
];
