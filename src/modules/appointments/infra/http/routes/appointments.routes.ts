import { Router, Request, Response, NextFunction } from 'express';
import { parseISO } from 'date-fns';
// import {getCustomRepository} from 'typeorm'

import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

// appointmentsRouter.get('/',async (request: Request, response:Response, next:NextFunction) =>{
//     console.log(request.user.id)
//     const appointmentsRepository = getCustomRepository(AppointmentsRepository)
//     const appointments = await appointmentsRepository.find();
//     return response.json(appointments);
// })

appointmentsRouter.post('/', async (request, response) => {
  const appointmentsRepository = new AppointmentsRepository();
  const { provider_id, date } = request.body;
  const parseDate = parseISO(date);
  const createAppointment = new CreateAppointmentService(
    appointmentsRepository,
  );
  const appointment = await createAppointment.execute({
    date: parseDate,
    provider_id,
  });
  return response.json(appointment);
});

export default appointmentsRouter;
