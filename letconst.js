        const name = "Karim"
        // name = "Rahim" // can not reassign variable which is declared "const"
        console.log(name)

        const nums = [12, 88]
        nums[1] = 45
        nums.push(22)
        console.log(nums) 
        // nums = ["karim", "Rahim"] // can not re assignment
        const hero = { name: "sakib", phone: 12345}


        //var and let will no error.

        let sum = 0;
        for (var i = 0; i < 10; i++) {
            sum = sum + i       
        } 
        console.log(i)// 10

        let sum = 0;
        for (let i = 0; i < 10; i++) {
            sum = sum + i       
        } 
        console.log(i)// i is not defined