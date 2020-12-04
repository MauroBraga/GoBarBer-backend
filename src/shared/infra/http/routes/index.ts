// src/routes/index.ts
import {Router} from 'express';
import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';
import sessionsRoutes from '@modules/users/infra/http/routes/sessions.routes';
import usersRoutes from '@modules/users/infra/http/routes/users.routes';

const routes = Router()

routes.use('/appointments', appointmentsRouter);
routes.use('/users',usersRoutes );
routes.use('/sessions',sessionsRoutes );

export default routes;
