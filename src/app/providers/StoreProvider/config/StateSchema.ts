import { CounterSchema } from 'entities/Counter';
import { LoginSchema } from 'features/AuthByUsername/model/types/loginSchema';
import { UserSchema } from 'entities/User/model/types/user';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema;
    loginForm: LoginSchema;
}