import * as yup from 'yup';
import { noteValidationSchema } from 'validationSchema/notes';
import { parentValidationSchema } from 'validationSchema/parents';

export const playerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  academy_id: yup.string().nullable().required(),
  coach_id: yup.string().nullable().required(),
  note: yup.array().of(noteValidationSchema),
  parent: yup.array().of(parentValidationSchema),
});
