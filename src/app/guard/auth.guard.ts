import { CanActivateFn } from '@angular/router';
import { UserService } from '../Service/user.service';

export const authGuard: CanActivateFn = (route, state) => {
return true 
};
