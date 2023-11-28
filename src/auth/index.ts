// import { verifyIdToken } from './config';
// import { Request, Response, NextFunction } from 'express';
//
// export const authenticate = async (
//     req: Request,
//     res: Response,
//     next: NextFunction,
// ) => {
//     const idToken = req.headers.authorization?.split('Bearer ')[1];
//
//     if (!idToken) {
//         return res.status(401).send('Unauthorized');
//     }
//
//     try {
//         const decodedToken = await verifyIdToken(idToken);
//         req['user'] = decodedToken; // Attach user information to the request
//         next();
//     } catch (error) {
//         console.error('Error verifying Firebase ID token:', error);
//         res.status(401).send('Unauthorized');
//     }
// };
