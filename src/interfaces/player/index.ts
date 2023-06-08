import { NoteInterface } from 'interfaces/note';
import { ParentInterface } from 'interfaces/parent';
import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { CoachInterface } from 'interfaces/coach';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  name: string;
  user_id: string;
  academy_id: string;
  coach_id: string;
  status: string;
  created_at?: Date;
  updated_at?: Date;
  note?: NoteInterface[];
  parent?: ParentInterface[];
  user?: UserInterface;
  academy?: AcademyInterface;
  coach?: CoachInterface;
  _count?: {
    note?: number;
    parent?: number;
  };
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  filter: {
    id?: string;
    name?: string;
    user_id?: string;
    academy_id?: string;
    coach_id?: string;
    status?: string;
  };
}
