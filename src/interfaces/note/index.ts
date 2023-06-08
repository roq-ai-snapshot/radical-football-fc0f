import { PlayerInterface } from 'interfaces/player';
import { CoachInterface } from 'interfaces/coach';
import { GetQueryInterface } from 'interfaces';

export interface NoteInterface {
  id?: string;
  content: string;
  player_id: string;
  coach_id: string;
  created_at?: Date;
  updated_at?: Date;

  player?: PlayerInterface;
  coach?: CoachInterface;
  _count?: {};
}

export interface NoteGetQueryInterface extends GetQueryInterface {
  filter: {
    id?: string;
    content?: string;
    player_id?: string;
    coach_id?: string;
  };
}
