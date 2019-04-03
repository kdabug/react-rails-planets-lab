# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
planets = [{
  name: "Mercury",
  distance_from_sun: "57,909,227 km (0.39 AU)",
  diameter: "4,879 km",
  orbit_period: "88 days",
}, {
  name: "Venus",
  distance_from_sun: "108,209,475 km (0.73 AU)",
  diameter: "12,104 km",
  orbit_period: "225 days",
},
           {
  name: "Earth",
  distance_from_sun: "149,598,262 km (1 AU)",
  diameter: "12,742 km",
  orbit_period: "365.24 days",
},
           {
  name: "Mars",
  distance_from_sun: "227,943,824 km (1.38 AU)",
  diameter: "6,779 km",
  orbit_period: "1.9 years",
},
           {
  name: "Jupiter",
  distance_from_sun: "778,340,821 km (5.20 AU)",
  diameter: "139,822 km",
  orbit_period: "11.9 years",
},
           {
  name: "Saturn",
  distance_from_sun: "1,426,666,422 km (9.58 AU)",
  diameter: "116,464 km",
  orbit_period: "29.5 years",
},
           {
  name: "Uranus",
  distance_from_sun: "2,870,658,186 km (19.22 AU)",
  diameter: "50,724 km",
  orbit_period: "84.0 years",
},
           {
  name: "Neptune",
  distance_from_sun: "4,498,396,441 km (30.10 AU)",
  diameter: "49,244 km",
  orbit_period: "164.8 years",
}]
Planet.create(planets)
