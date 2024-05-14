import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    {path: 'user', component: UserProfileComponent},
    {path: 'signup', component: SignUpComponent},
    {path: '', component: UserProfileComponent}
];
