## Database design

There are basially 3 tables in the database

- Car
- Weekend
- Dailiy

#### The Car schema

Has one-to-many relationship with `Weekends` & `Daily`
These are the columns it has:

- id (auto-generated)
- year
- model
- dougscore
- weekends
- dailies

#### The Weekend schema

Has many-to-one relationship with `Car`
These are the columns it has:

- id (auto-generated)
- styling
- acceleration
- handling
- funFact
- coolFact
- total

#### The Daily schema

Has many-to-one relationship with `Car`
These are the columns it has:

- id (auto-generated)
- features
- comfort
- quality
- practical
- value
- total
