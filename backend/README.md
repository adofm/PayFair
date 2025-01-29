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


API REFERENCE

Creating Users:
The request body must be of this format
```
{
    "walletAddress":"ur_wallet_address",
    "reputationScore": 17
}
```

Creating Jobs:
The request body must be of this format
```
{
    "ownerWallet":"ur_wallet_address",
    "title":"SDE",
    "description":"SDE Stuff",
    "budget": 1700000,
    "currency": "usd",
    "status":"posted"
}
```

Creating Freelancelink:The request body must be of this format
```
{
    "walletAddress":"ur_wallet_address",
    "jobId":"e421a7ef-3447-4d85-bca2-bb53a0a4cee0"
}
```