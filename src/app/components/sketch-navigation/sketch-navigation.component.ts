import {Component, Input, OnInit} from '@angular/core';
import {SketchService} from "../../services/sketch.service";

@Component({
  selector: 'sketch-navigation',
  templateUrl: './sketch-navigation.component.html',
  styleUrls: ['./sketch-navigation.component.css']
})
export class SketchNavigationComponent implements OnInit {


  @Input()
  public pages: any;


  constructor(private sketchService:SketchService) {
  }

  ngOnInit() {
  }

  onPage(page) {
    this.sketchService.page = page;
    this.sketchService.rootLayers = [page.data];
  }

  highlight(layer) {
    console.log("Highlight ", layer);
    this.sketchService.highlightedLayer = layer;
  }


  getFileIcon(cl) {
    if (cl === 'bitmap') {
      return 'assets/icons/file-picture.svg';
    }
    return '';
  }

}