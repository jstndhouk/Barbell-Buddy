# Barbell Buddy

## Premise
Too often have I been in the middle of a workout, notice a lift on the board and think to myself "What weight should I use for this?".  This question is often followed by, "Well, what did I lift last time I did this exercise?  Barbell Buddy will store your previous gains in the gym, while allowing you to add and edit your workout record on the fly.  This way, you can quickly find what you lifted previous, to make sure you are constantly raising "the bar" and pushing yourself to be the best version of yourself in the gym.

## User Story

AS a frequent lifter that is always striving to lift more,
WHEN I visit the Lifts menu, 
THEN I am presented with all lifts that I have entered

WHEN I click on one of the lifts,
Then I am brought to details about that lift.

WHEN I click on one of the lifts,
Then I am given the option to edit or delete that lift.

WHEN the lift I am doing is not present on the list, 
THEN I can add a new lift.

WHEN I lift more on that lift than the stored data, 
THEN I can edit the weight of that lift.

WHEN I click on the delete lift button,
THEN the lift is removed from the database.

WHEN I edit or create a lift, 
THEN I am able to see when it was last updated.

## Reaches

WHEN I login to the page, 
THEN all my lifts, and only my lifts are shown throughout the application

## Models

Lift
id: primary key,
LiftName: String,
Reps: int,
Sets: int,
Weight: float,
Targetted Muscle: String,
DateModified: Date
