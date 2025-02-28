import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const logUserGuard: CanActivateFn = (route, state) => {
  const _PLATFORM_ID = inject(PLATFORM_ID);

  if (isPlatformBrowser(_PLATFORM_ID)) {
    const token = localStorage.getItem('token'); // null || token

    const router = inject(Router);

    if (token) {
      router.navigate(['/timeline']);

      return false;
    } else {
      return true;
    }
  }

  return false;
};
