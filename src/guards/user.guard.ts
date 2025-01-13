import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class UserGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();

        if (!request.currentUser) {
            console.log('No current user found in request');
            throw new UnauthorizedException('User not authenticated');
        }

        return true;
    }
}