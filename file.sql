SELECT *
FROM studens
WHERE major = 'Biology'

SELECT * 
FROM membership
WHERE type IN ('basic', 'pro')

hotels.location = booking_requests.client_destination

SELECT * 
FROM customer
WHERE age > 
        (
        SELECT age
        FROM age_statistics
        WHERE description = 'average user age'
        );