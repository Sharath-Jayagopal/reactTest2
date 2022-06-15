import React from 'react'
import './Carousel.css'

const Carousel = ({imageData , setImageURL , setImageDesc , setClicked}) => {

    // Select all the buttons with data attrubute of data-carousel-button
    const buttons = document.querySelectorAll("[data-carousel-button]")

    // Loop through both buttons and create event listners for both of them.
    buttons.forEach(button => {
        // Add click Event Listner
        button.addEventListener("click", () => {
            // setting offset for prev and next buttons 
            const offset = button.dataset.carouselButton === "next" ? 1 : -1

            // select slides by finding div with data-carousel and inside it , we find all the ul with data attr data-slides
            const slides = button
                .closest("[data-carousel]")
                .querySelector("[data-slides]")        

            // set Active slide with data attr data-active
            const activeSlide = slides.querySelector("[data-active]")

            // new index is set as index of current Slide + offset 
            let newIndex = [...slides.children].indexOf(activeSlide) + offset

            // Logic for moving back to first after last element and vice-versa 
            if (newIndex < 0) newIndex = slides.children.length - 1
            if (newIndex >= slides.children.length) newIndex = 0

            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        })

    })

    // Fn to navigate using left and right arrows 
    const keyBoardNav = (e) => {
        const activeSlide = document.querySelector("[data-active]")
        const slides = document.querySelector("[data-slides]")

        if (e.key === 'ArrowLeft') {
            // new index is set as index of current Slide + offset 
            let newIndex = [...slides.children].indexOf(activeSlide) - 1

            if (newIndex < 0) newIndex = slides.children.length - 1
            if (newIndex >= slides.children.length) newIndex = 0

            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        }

        if (e.key === 'ArrowRight') {
            // new index is set as index of current Slide + offset 
            let newIndex = [...slides.children].indexOf(activeSlide) + 1

            if (newIndex < 0) newIndex = slides.children.length - 1
            if (newIndex >= slides.children.length) newIndex = 0

            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        }
    }


    return (
        <section aria-label="Newest Photos">
            <div class="carousel" data-carousel onKeyDown={keyBoardNav}>
                <button class="carousel-button prev" data-carousel-button="prev">&#8656;</button>
                <button class="carousel-button next" data-carousel-button="next">&#8658;</button>
                <ul data-slides>              
                    {imageData.map((data,index) => (
                        <li class="slide" data-active>
                            <img 
                                src={data.imageUrl} 
                                alt={`testImage#${index}`} 
                                onClick = {
                                () => {
                                    setImageURL(data.imageUrl)
                                    setImageDesc(data.desc)
                                    setClicked(true)
                                }}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Carousel