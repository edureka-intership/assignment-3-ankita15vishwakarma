
        // SOLUTION - 2
        orderData = {
            'Below 500': 20,
            '500-1000': 29,
            '1000-1500': 30,
            '1500-2000': 44,
            'Above 2000': 76
        };

        // a. Calculate the total number of orders placed for the restaurant.
        const sum = 20 + 29 + 30 + 44 + 76;
        console.log(sum)

        // b. Total number of order proportions.

        var arr = new Array(20.29, 30, 44, 76);
        // document.write("arr.length is : " + arr.length);
        console.log(arr.length)


        // c. Calculate the percentage of each proportion:
        function percentage(num, per) {
            return (num / 199) * 100;
        }
        console.log(percentage(20));
        console.log(percentage(29));
        console.log(percentage(30));
        console.log(percentage(44));
        console.log(percentage(76));

        // order: "Below 500", percentage: "10.05", restaurant: "Punjabi Tadka"
               
        // order: "500-1000", percentage: "14.57", restaurant: "Punjabi Tadka"

        // order: "1000-1500", percentage: "15.08", restaurant: "Punjabi Tadka"

        // order: "1500-2000", percentage: "22.11", restaurant: "Punjabi Tadka"

        // order: "Above 2000", percentage: "38.19", restaurant: "Punjabi Tadka"