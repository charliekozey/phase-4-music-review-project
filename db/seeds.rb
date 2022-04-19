# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create(username: "name1")
u2 = User.create(username: "name2")
u3 = User.create(username: "name3")
u4 = User.create(username: "name4")
u5 = User.create(username: "name5")

a1 = Album.create(title: "test1")
a2 = Album.create(title: "test2")
a3 = Album.create(title: "test3")
a4 = Album.create(title: "test4")
a5 = Album.create(title: "test5")

r1 = Review.create(rating: 50, album_id: a1.id, user_id: u1.id)
r2 = Review.create(rating: 100, album_id: a2.id, user_id: u2.id)
r3 = Review.create(rating: 75, album_id: a3.id, user_id: u3.id)
r4 = Review.create(rating: 45, album_id: a4.id, user_id: u4.id)
r5 = Review.create(rating: 4, album_id: a5.id, user_id: u5.id)


puts "done seeding"