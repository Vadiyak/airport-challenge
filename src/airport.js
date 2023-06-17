class Airport {

    // let basketItem = [];


    constructor() {



        this.planesInAirport = [];
        this.airportCapacity = 10; // default 






    }





    landPlane(plane) {

        // checks 'plane' is a non empty string
        if (typeof plane === 'string' && plane.trim().length > 0) {
            // this.planesInAirport.push(plane);
            this.planesInAirport = [...this.planesInAirport, plane]     // new method 
        }



    }

    adjustAirportCapacity(capacity) {

        this.airportCapacity = capacity;
    }







    takeoffPlane(plane) {
        if (this.planesInAirport.includes(plane)) {
            let planeIndex = this.planesInAirport.indexOf(plane)
            this.planesInAirport.splice(planeIndex, 1)

            return this.planesInAirport

        } else {                                        // item doesn't exist in basket 
            return 'Sorry, this one does not exist in basket'
        }

    }

}

//important

module.exports = Airport;

