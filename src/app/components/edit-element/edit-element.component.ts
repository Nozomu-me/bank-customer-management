import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-element',
  templateUrl: './edit-element.component.html',
  styleUrls: ['./edit-element.component.css'],
})
export class EditElementComponent implements OnInit {
  @Input() value: any;
  @Output() changeValue = new EventEmitter();
  show: boolean | undefined;
  faGear = faGear;
  ngOnInit() {
    this.show = true;
  }
  onEdit() {
    this.show = false;
  }
  onSave(value: any) {
    this.show = true;
    this.changeValue.emit(value);
  }
}
