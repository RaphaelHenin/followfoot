# Followfoot

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Project for Angular level 2 certification

### Features implemented :

#### Navigation bar for country selection

When selecting a country, two options are requested

- Retrieve the main league ID of the selected country
- With the league ID, retrieve the ranking

The results of these APIs are stored in the cache (Map and Behaviour Subject) to limit queries.

These requests are triggered by a resolver, so we're sure to have data when displaying the standings.

#### Display the current season's standings for the main league in the selected country

The main leagues we want to track for each country are as follows:

- England = Premier League
- Spain = La Liga
- France = Ligue 1
- Germany = Bundesliga
- Italy = Serie A

The ranking must show :

- team name
- team logo
- number of matches played
- wins (W)
- defeats (L)
- draws (D)
- goal difference (GD)
- number of points (pts)

A cursor appears when hovering over a team line to access the next function.

#### Displays the last ten matches of the selected team.

Using resolver, the fixture api is called to retrieve the scores of the last 10 matches of the selected team.

A "Back" button is available to return to the previous standing
