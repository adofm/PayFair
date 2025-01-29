Create a .env file in `/backend`

To run the thingy
```
cd backend
npm install
npm run dev
```

Add a PORT and DATABASE_URL variables:
```
PORT=8080
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/DBNAME"
```

Generate the schemas
```
npx prisma migrate dev --name init
```