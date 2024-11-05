
// TASK 1.1 : Məhsulların hər birini consoleda göstərin.
// TASK 1.2 : Məhsullardan id-si 1-ə bərabər olan məhsulu qaytaran funksiya yazın.
// TASK 1.3 : FatPercent-in ədədi ortasını çıxarın. Bunu FatAverage adlı funksiya ilə edin. Funksiya həmin arrayi parametr kimi qəbul edəcək, ədədi ortanı qaytaracaq.
// Task 1.4 : yağlılıq faizi 3-dən yuxarı olan milk-ləri arraydə göstərin. Funksiya yazın.
// Task 1.5 : Funksiya yazın array və bir number qəbul etsin. Arraydəki elementlərin price-nı bu number qədər artırsın.
// Task 1.6 : Ümumi price-ı qaytaran funksiya yazın.
// Task 1.7 : Məhsullardan id-si 2-ə bərabər olan məhsulu qaytaran funksiya yazın.
// Task 1.8 : ən baha milkin adını qaytaran funksiya yazın. Arrayi parametr kimi qəbul etsin
// Task 1.9 : ən baha və ən ucuz arasındakı fərqi qaytaran funksiya yazın. Funksiya yazın.
// Task 1.10: Məhsullar içərisində Azərbaycan istehsalı olan məhsul varmı?(true or false)

// Qeyd: Funksiyaları yazarkən, array iteration methodlarından istifadə edin.



let milks=[
    {
        id:1,
        name:"Azersud",
        price:5,
        FatPercent:1.5,
        MadeIn:"Azerbaijan"
    },
      {
        id:2,
        name:"Palsud",
        price:4,
        FatPercent:2,
        MadeIn:"Azerbaijan"
    },
      {
        id:3,
        name:"Atena",
        price:2,
        FatPercent:3,
        MadeIn:"Georgia"
    }
]
// milks.forEach((element)=>{
//     console.log(element);
    
// });

// let mehsul = element(1);
// function element(id) {
//     return milks.find(milk => milk.id === id);
// }

// console.log(mehsul);

// function FatAverage(milks) {

//     const umumFatPercent = milks.reduce((sum, item) => sum + item.FatPercent, 0);
    
//     return umumFatPercent / milks.length;
// }


// const ortaFatPercent = FatAverage(milks);


// console.log(ortaFatPercent);

// const filteredMilk=milks.filter((item)=>{
//     return item.FatPercent>=3
// })
// console.log(filteredMilk);




// let yeniSud=milks.map((item)=>{
//     return item.price + milks.length
// })
// console.log(yeniSud);


// let yeniSud =milks.reduce((sum,item,)=>{
//     return sum+item.price
// },0)
// console.log(yeniSud);



// let yeniAd=milks.filter((item)=>{
//     return item.id==2

// },0)
// console.log(yeniAd);

