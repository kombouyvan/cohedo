import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-video-cta',
  templateUrl: './video-cta.component.html',
  styleUrls: ['./video-cta.component.css']
})
export class VideoCtaComponent implements OnInit {
  modalContent: any;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  open(content: any): void {
    this.modalService.open(content, {centered: true, size: 'lg', windowClass: 'quick-view-modal'});
  }

}
