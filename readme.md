# Cabify Challenge
    
#### Table of Contents
1. [Current Situation](#current-situation)
2. [Package Dependencies](#package-dependencies)
3. [Groups Algorithm](#groups-algorithm)
4. [Problems](#problems)
5. [Implementations](#implementations)

## Current Situation

This challenge was programmed by a group of three(Hugo, Fran and me, Miguel).

We are currently involved in Ironhack's Web Development Bootcamp and therefore, we did not have a lot of time in our hands for the challenge to be executed as we wanted, leading that to not only not meeting some objectives that we set ourselves to but also not accomplishing some of the challenge requirements.

Apart from that, being enrolled in two projects with two deadlines at the same time is really exhausting both mentally and physically.

We would appreciate a lot if you had this in consideration!

## Package Dependencies

We used Ironlauncher package (npx ironlauncher in terminal) which includes nodemon, used to open localhost, mongoose, that helped us see what we were creating on a database and express, in order for the server and routes to work correctly

## Groups Algorithm

We had an inital approach of making a really good algorithm rather than shorter algorithm that simply gets the job done.

After some research, we came up with list of priorities:

* Less groups with more eaters rather than more groups with less eaters (more space for the restaurant to arrange other eaters that are not Cabify staff)
* When having more than one table, groups where only between 4 and 7 eaters, making it easier for communication to flow

The algorithm is really long but the system is really easy, first it checks the array of eaters to see wether there are less7equal to 7 eaters or more than 7 eaters(if/else)

Firstly, (if) arranges a table of 7 eaters or less

If there are more than seven,(else), we enter a different if/else
Inside that if/else, we prioritized even groups ranging from 7 to 4(if), and then we came up with and idea for the uneven numbers, dividing the eaters by 7, which gives us the number of tables when rounding it up to the higher number, and then we got a proprtion which when multiplied by the number of tables, gave us the index of the table where we had to switch from an i number to the i+1 number

## Problems
Main problem was with using for loops, which are executed faster than the route responses, making it impossible to for the response to be precise, giving us the last response.
We realized that when substituting for loops with whiles, the problem was solved

Another problem was that when using Postman with more than one group, the response doesn't appear, however the groups were created on MongoDB, we didn't come up with a solution for that

Last problem was setting the leader, some people did it randomly, but we tried to get a field from the eater model that had a boolean with true if it was leader on the last group. The leader is set but the wasLeader doesn't mutate

Leaders for more than one groups wasn't even implemented and even though setting a restaurant is fairly easy, we are really frustrated with all the stress going on with the challenge and the final project and therefore, we decided it was time to call an end

## Implementations
* All the implementations we wanted to make are explained on each model