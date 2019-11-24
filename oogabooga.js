$(()=>{

    const customDevelop = ('<p>Simplicity is a real value of IT systems that give the edge to compete in a tight business environment. That is why we design, code and maintain only such IT solutions that make a full use of benefits given by coherence, clarity and reduction of complexity.</p>')
                            .concat('<h1>RIGHT SOLUTIONS</h1>')
                            .concat('<h1>AT THE RIGHT MOMENT</h1>')
                            .concat('Our end-to-end, tailor-made solutions are developed in iterative processes, allowing all nuances and possible hidden risks to be taken into account including issues which were not mentioned in the original requirement specifications. We use Java, .Net, Python, Scala technologies. In addition to technologies based on Open Source licenses, we have unique expertise in the field of Voxeo solutions.')

    const bigData = ('<p>We know how to translate the language of big data into IT solutions which can successfully navigate your business into the right direction.</p>')
                    .concat('<h1>FOCUSED</h1>')
                    .concat('<h1>ON THE ISSUE</h1>')
                    .concat('<p>It is efficient management of data regardless of its format, structure or size that is our core issue while designing and coding software systems for our clients. Our data processing solutions allow our clients to improve accuracy of their business, increase its effectiveness or take immediate actions so as to gain competitive advantage. We carry out tasks related to the integration of data, speech processing or sales optimization. We mainly work on Apache Hadoop, Scala, Apache Spark, Elasticsearch. We also have unique expertise in implementing Verint solutions.</p>')

    const contactCenter = ('<p><b>75%</b> of business success depends on good communication. We know how to make it 100%  with cutting-edge contact center solutions that we deliver.</p>')
                    .concat('<h1>WE DON’T TRY,</h1>')
                    .concat('<h1>WE DO IT</h1>')
                    .concat('<p>Today, a role of contact centres increases. At Eversis, we support our customers in building advanced and effective tools for customer experience communications. We create solutions for multi-touch contact center and unified communications offered on premises, in the cloud, or a hybrid. In the area of communications, we are specialists in AVAYA solutions.</p>')
                    
                    
    // $('.interline').eq(0).click(()=>{
    //     $('.panel-screen').css('opacity','0').html(customDevelop).animate({opacity:'1'},'slow')
    //     $('.backimg').animate({opacity:'0'},500,()=>{$('.backimg').css('background-image','url("img/cd.jpg")').animate({opacity:'1'},'slow')})
    //     $('.interline').eq(2).next().slideUp()
    //     $('.interline').eq(1).next().slideUp()
    //     $('.interline').eq(0).next().slideToggle()})
    // $('.interline').eq(1).click(()=>{
    //     $('.panel-screen').css('opacity','0').html(bigData).animate({opacity:'1'},'slow')
    //     $('.backimg').animate({opacity:'0'},'slow')
    //     $('.interline').eq(2).next().slideUp()
    //     $('.interline').eq(0).next().slideUp()
    //     $('.interline').eq(1).next().slideToggle()})
    // $('.interline').eq(2).click(()=>{
    //     $('.panel-screen').css('opacity','0').html(contactCenter).animate({opacity:'1'},'slow')
    //     $('.backimg').animate({opacity:'0'},1,()=>{$('.backimg').css('background-image','url("img/cc.jpg")').animate({opacity:'1'},'slow')})
    //     $('.interline').eq(0).next().slideUp()
    //     $('.interline').eq(1).next().slideUp()
    //     $('.interline').eq(2).next().slideToggle()})
    
    $('.interline').click(function(e) {
        $('.panel-screen').css('opacity','0').html($(`#${e.target.attributes.name.value}`).html()).animate({opacity:'1'},'slow')
        if (e.target.attributes.image) {
            $('.backimg').animate({opacity:'0'},500,()=>{$('.backimg').css('background-image',`url("img/${e.target.attributes.image.value}.jpg")`).animate({opacity:'1'},'slow')})
        }
        else {
            $('.backimg').animate({opacity:'0'},500)
        }
        
        if ($(e.target).next()[0].className.search('open')===-1 && $(e.target).next()[0].className.search('not')===-1){
            $(e.target).next().toggleClass('open').slideDown()
            for (let i of $('.hidden-links')){
               if(i !== $(this).next()[0] && i.className.search('open')!==-1){
                    $(i).toggleClass('open').slideUp()
               }   
            }
        }
        else {$(e.target).next().toggleClass('open').slideUp()}

        })

    
    $('.hidden-links div').click(function(e) {
        $('.panel-screen').css('opacity','0').html($(`#${e.target.attributes.name.value}`).html()).animate({opacity:'1'},'slow')
    })
    $('.hidden-links div').click(function(e) {
        $('.panel-screen-static').css('opacity','0').html($(`#${e.target.attributes.name.value}`).html()).animate({opacity:'1'},'slow')
    })
    $('.alone').click(function(e) {
        $('.panel-screen-static').css('opacity','0').html($(`#${e.target.attributes.name.value}`).html()).animate({opacity:'1'},'slow')
    })

const button = `<div class="w3-hide-large w3-hide-medium w3-xxxlarge totop"><button class="w3-button w3-circle w3-black">^</button></div>`

    $('body').append(button)
    $('.totop button').click(()=>{
        
        window.scrollTo(0, 0)})
  

})