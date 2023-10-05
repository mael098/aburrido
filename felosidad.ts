
// const m = 70;
// const a = 2;

//  const felosidad = (m:number,a:number) => {
//     return m * a

//  }

//     console.log(felosidad(m,a));



    const metros = [0,10,20,30,40,50]
    const aceleracion = [0,5,20,45,80,125]

    const caja = [metros,aceleracion]
    for (let i = 0; i < caja.length; i++) {
        console.log("--",caja[i]);
        if (caja[i] == metros) {
            for (let j = 0; j < metros.length; j++) {
                console.log(metros[j]);
                
            }
        } else {
            for (let j = 0; j < aceleracion.length; j++) {
                console.log(aceleracion[j]);
                
            }

            
        }
         
        
    }
    
    

        // for (let i = 0; i < metros.length; i++) {
        //     console.log(metros[i]);

        // }
        
        // for (let j = 0; j < aceleracion.length; j++) {
        //     console.log(aceleracion[j]);   
        // }
    

        

        
        
        