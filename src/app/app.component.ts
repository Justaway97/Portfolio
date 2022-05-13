import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { trailingMouse } from './animation/canvas';
import { DialogComponent } from './dialog/dialog.component';
import { FormComponent } from './form/form.component';
import { ScrollService } from './service/scroll.service';
import { TableComponent } from './table/table.component';

declare const noise: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent extends FormComponent implements OnInit {


  @ViewChild(TableComponent) table: TableComponent;
  displayPrevStyle = true;
  cursor = ['url(../assets/ace.png), auto !important', 'url(../assets/heart.png), auto !important', 'url(../assets/cloud.png), auto !important', 'url(../assets/diamond.png), auto !important']
  cursorSelected: any;
  contacts: any = {
    facebook: 'https://www.facebook.com/tan.songming.9/',
    email: 'mailto:97songming@gmail.com',
    'assets/linkedin.png': 'https://www.linkedin.com/in/tan-song-ming-b4b6371a6/',
    'assets/resume.png': 'https://drive.google.com/file/d/18QNO9UB3pyD3gXkr3pQlXitwykeR4ler/view?usp=sharing',
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.innerWidth = window.innerWidth.toString().concat('px');
    this.innerHeight = window.innerHeight.toString().concat('px');
    new trailingMouse();
  }

  constructor(
    fb: FormBuilder,
    private dialog: MatDialog,
    private scrollService: ScrollService
  ) {
    super(fb);
  }

  override postFind() {
    this.result = {
      buttonToggleControl: '',
      checkboxControl: ['A'],
      inputControl: '',
      autoCompleteControl: '',
      datePickerControl: '',
      radioButtonControl: '',
      selectControl: '',
      sliderControl: 0
    }
  }

  title = 'angular-template';
  // auto-complete
  options = [{ name: 'Mary' }, { name: 'Shelley' }, { name: 'Igor' }];
  // button-toggle
  values = [{ key: 'Bold', value: 'Bold' }, { key: 'italic', value: 'italic' }, { key: 'underline', value: 'underline' }]
  // checkbox
  checkbox = [{ key: 'A', value: 'A', check: true }, { key: 'B', value: 'B', check: false }, { key: 'C', value: 'C', check: false }]
  // menu
  menu = [{ text: 'testing menu', key: 'try1' }, { text: 'testing menu2', key: 'try2' }, { text: 'testing menu3', key: 'try3', icon: 'dialpad' }]
  // radiobutton
  radio = [{ key: 'test radio', value: 'test radio value' }, { key: 'test radio 2', value: 'test radio 2 value' }]
  // select
  select = [{ key: 'test select', value: 'test select value' }, { key: 'test radio 2', value: 'test radio 2 value' }]
  // slider
  min = 0;
  max = 100;
  // table
  tableData = [
    {
      header_1: 'value 1',
      header_2: 'value 2',
      expand: 'expand_1',
    },
    {
      header_1: 'value 1a',
      header_2: 'value 2a',
      expand: 'expand_1',
    },
    {
      header_1: 'value 1b',
      header_2: 'value 2b',
      expand: 'expand_1',
    },
    {
      header_1: 'value 1',
      header_2: 'value 2',
      expand: 'expand_1',
    },
    {
      header_1: 'value 1a',
      header_2: 'value 2a',
      expand: 'expand_1',
    },
    {
      header_1: 'value 1b',
      header_2: 'value 2b',
      expand: 'expand_1',
    }
  ]
  tableSetting = [
    {
      header: 'header_1',
      expand: 'expand 1',
    },
    {
      header: 'header_2',
      expand: 'expand 2',
    }
  ]
  tableAction = [
    {
      text: 'expand',
    },
    {
      text: 'test',
    },
  ]
  tableButton = [
    {
      key: 'approve',
      value: 'Approve',
      type: 'raised',
    },
    {
      key: 'reject',
      value: 'Reject',
      type: 'flat',
    }
  ]
  tableDisplayAction = [true, true, false, false, true, false]
  // toolbar
  toolbar = {
    left: [
      {
        type: 'button',
        style: 'icon',
        value: 'facebook',
        color: 'white',
        tooltip: 'https://www.facebook.com/tan.songming.9/'
      },
      {
        type: 'button',
        style: 'icon',
        value: 'email',
        color: 'white',
        tooltip: 'mailto:97songming@gmail.com'
      },
    ],
    right: [
      {
        type: 'button',
        style: 'icon',
        value: 'phone',
        color: 'white',
        tooltip: '+65 8852 2639'
      },
      {
        type: 'button',
        style: 'icon',
        value: 'whatsapp',
        color: 'white',
        tooltip: '+65 8852 2639'
      },
      {
        type: 'button',
        style: 'image',
        value: 'assets/linkedin.png',
        color: 'white',
        height: 'min(3vh, 3vw)',
        tooltip: 'https://www.linkedin.com/in/tan-song-ming-b4b6371a6/'
      },
      {
        type: 'button',
        style: 'image',
        value: 'assets/resume.png',
        color: 'white',
        height: 'min(5vh, 5vw)',
        tooltip: 'resume',
      }
    ]
  }
  toolbarList = this.toolbar.left.concat(this.toolbar.right)
  // spinner
  spinnerSrc = "assets/poker-card.jpeg"
  spinnerHeight = 24
  spinnerWidth = 10
  //scroll
  scrollData = [
    { color: 'white', id: 'about', tooltip: 'About Me' },
    { color: 'white', id: 'skill', tooltip: 'Skill and Knowledge' },
    { color: 'white', id: 'work', tooltip: 'Project and Exercise' },
    // { color: 'white', id: 'about3' },
    // { color: 'white', id: 'about4' },
    // { color: 'white', id: 'about5' }
  ]
  // work
  urlWork = ['assets/uhunt.jpeg', 'assets/order.jpeg', 'assets/angular-material.jpeg'];

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        title: 'testing dialog title',
        content: 'testing dialog content',
        action: ['No', 'Yes'],
      }
    });
  }

  menuAction(value: any) {
    console.log(value);
  }

  pageChange(value: any) {
    console.log(value);
  }

  tableButtonClick(event: any) {
    console.log(event);
  }

  toolbarAction(event: any) {
    window.open(this.contacts[event], "_blank");
    console.log(event);
  }

  autoCompleteChange(event: any) {
    console.log(event);
  }

  spinnerClick() {
    setTimeout(() => {
      this.displayPrevStyle = !this.displayPrevStyle;
      this.cursorSelected = this.cursor[Math.floor(Math.random() * 4)];
      console.log(this.cursorSelected)
    }, 1000);
  }

  onScrollClick(event: any) {
    console.log(event);
    if (event.id) {
      this.scrollService.scrollToElementById(event.id);
    }
  }
}
