        // SOLUTION - 1
        class restaurantManager {

            restaurantList = [
                { name: "Hotel Nandan", location: "Church Road", city: "Berhampur" },
                { name: "The Marinated", location: "Bombay Chowk", city: "Jharsuguda" },
                { name: "KFC", location: "Jayadev Vihar", city: "Bhubaneswar" },
            ];

            printAllRestaurantNames() {
                this.restaurantList.forEach((restaurant) => {
                    console.log(restaurant.name);
                });
            }
        }
        let obj = new restaurantManager();
        obj.printAllRestaurantNames();

        let city = ["Berhampur", "Bhubaneswar", "Jharsuguda"]
        function Berhampur(value) {
            return value = Berhampur;
        }
        let cityBerhampur = city.filter(Berhampur)
        console.log(cityBerhampur)