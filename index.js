A={
    a:10,
    b:20,
    c:30
}

A.d = 'ABCDE'

console.log(A)


let a = 10
a = true
a = 'NUA'
a = null

console.log(a)

function w(){
    let str = 'HI, USER'
     
    console.log(str) 
}

w()

const s = () => {
    let str_Hi = 'HI, .......'
    let rtr = '         '
    console.log(rtr + str_Hi) 
}

s()

const myCity ={
    city: 'LAHTI',
    popular: true,
    country: 'Finland'
}

console.log(myCity)

myCity.zipCode = 15150

console.log(myCity)

delete myCity.zipCode

console.log(myCity)

const YourCity ={
    city: 'Tampere',
    cityGreeting: function(){
        console.log('Hi, Greeting')
    }
}

YourCity.cityGreeting()


