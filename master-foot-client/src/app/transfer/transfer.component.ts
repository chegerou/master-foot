import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Transfer } from './transfer.model';
import { TransferService } from './transfer.service';

@Component({
  selector: 'mf-transfer',
  templateUrl: './transfer.component.html',
})
export class TransferComponent implements OnInit {

  transfer: FormGroup;
  newTransfer: Transfer | undefined;
  isNewTransfer: boolean = false;
  changeScreen: boolean = true;
  searchControl: FormControl;
  searchForm: FormGroup;

  transfers: Transfer[] = [];

  constructor(
    private fb: FormBuilder,
    private service: TransferService) {
    this.transfer = new FormGroup({
      origin: this.fb.control('', [Validators.required]),
      destination: this.fb.control('', [Validators.required]),
      moment: this.fb.control('', [Validators.required]),
      id_player: this.fb.control('', [Validators.required]),
    });

    this.searchControl = this.fb.control('');
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    });
  }

  ngOnInit() {
    this.changeScreen = true;
  }


  setValue(value: any) {
    this.changeScreen = value;
  }

  onSubmit(): void {
    this.service.create(new Transfer(this.transfer?.value))
      .subscribe(transfer => {
        this.newTransfer = new Transfer(transfer);
        this.isNewTransfer = true;
      });
  }

  searchTransfers(id: any): void {
    const numberId = +id;
    this.service.list(numberId)
    .subscribe(list => {
      list.map(transfer => this.transfers.push(new Transfer(transfer)));
    });
  }

}
