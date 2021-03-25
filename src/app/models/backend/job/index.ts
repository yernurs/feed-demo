import { firestore } from 'firebase/app';

export interface Job {
    uid?: string;
    jid: string;
    title: string;
    salary: number;
    created: firestore.FieldValue;
    updated?: firestore.FieldValue;
}

export interface JobApplication {
    jid: string;
    uid_r: string;
    uid_e: string;
    created: firestore.FieldValue;
}
