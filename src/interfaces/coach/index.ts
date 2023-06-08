import { NoteInterface } from 'interfaces/note';
import { PlayerInterface } from 'interfaces/player';
import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface CoachInterface {
  id?: string;
  user_id: string;
  academy_id: string;
  created_at?: Date;
  updated_at?: Date;
  note?: NoteInterface[];
  player?: PlayerInterface[];
  user?: UserInterface;
  academy?: AcademyInterface;
  _count?: {
    note?: number;
    player?: number;
  };
}

export interface CoachGetQueryInterface extends GetQueryInterface {
  filter: {
    id?: string;
    user_id?: string;
    academy_id?: string;
  };
}
