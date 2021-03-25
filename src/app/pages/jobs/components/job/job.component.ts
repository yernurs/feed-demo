import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Job } from '../../store/list/list.models';
import {JobApplication} from '@app/models/backend';
import {Store} from '@ngrx/store';
import {State} from '@app/store';
import {Apply} from '@app/store/user';


@Component({
    selector: 'app-job',
    templateUrl: './job.component.html',
    styleUrls: ['./job.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobComponent implements OnInit {

    @Input() item: Job;
    @Input() isEditable: boolean;
    @Output() edit = new EventEmitter<Job>();
    @Output() delete = new EventEmitter<string>();

    constructor(
        private store: Store<State>
    ) { }

    ngOnInit(): void {
    }

    onEdit(job: Job): void {
        this.edit.emit(job);
    }

    onDelete(id: string): void {
        this.delete.emit(id);
    }

    onApply(item: Job) {
        this.store.dispatch(new Apply(item));
    }
}
