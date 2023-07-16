import React from 'react'
import HeroSlider, { Slide } from 'hero-slider'


const image1 = 'https://github.com/ssjulianr/savant/blob/main/images/img/banner/b1.jpg?raw=true'
const image2 = 'https://raw.githubusercontent.com/ssjulianr/savant/main/images/bird.webp'
const image3 = 'https://raw.githubusercontent.com/ssjulianr/savant/main/images/clam.webp'

const Carousel = () => {
    return (
        <>
            <HeroSlider
            slidingAnimation = 'left_to_right'
            orientation = 'horizontal'
            initialSlide = {1}
            onBeforeChange = {(previousSlide, nextSlide) => console.log('onBeforeChange', previousSlide, nextSlide)}
            onChange = {nextSlide => console.log('onChange', nextSlide)}
            onAfterChange = {nextSlide => console.log('onAfterChange', nextSlide)}
            style = {{
                backgroundColor: 'rgba(0, 0, 0, 0.33'
            }}
            settings = {{
                slidingDuration: 500,
                slidingDelay: 100,
                shouldAutoplay: true,
                shouldDisplayButtons: true,
                autoplayDuration: 1000,
                height: '100vh'
            }}
            >
                <Slide
                background = {{
                    backgroundImageSrc: image1,
                    backgroundAttachment: 'fixed'
                }}
                />
                <Slide
                background = {{
                    backgroundImageSrc: image2,
                    backgroundAttachment: 'fixed'
                }}
                />
                <Slide
                background = {{
                    backgroundImageSrc: image3,
                    backgroundAttachment: 'fixed'
                }}
                />
            </HeroSlider>
        </>
    )
}

export default Carousel