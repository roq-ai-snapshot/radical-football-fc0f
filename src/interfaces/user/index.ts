import { CoachInterface } from 'interfaces/interfaces/coach';
import { ParentInterface } from 'interfaces/interfaces/parent';

export interface UserInterface {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roq_user_id: string;
  tenant_id: string;

  coach: CoachInterface[];
  parent: ParentInterface[];
}
