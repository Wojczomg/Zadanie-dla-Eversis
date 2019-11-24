$(()=>{
    const log = ['aspect','avaya','bgz','esa','t-mobile-01-2-1','ultimo','alior','bk','ge','ikea','ing','orange','pekao','play']
    for (let i of log){console.log(i)
        $('.logos').append(`<div class="w3-col l3 w3-center"><img width="150" src="./img/${i}.png"/></div>`)
    }
}
)