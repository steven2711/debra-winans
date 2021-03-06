import {reviews} from '../data/reviews'
import {useState, useEffect} from 'react'
import styled from 'styled-components'


const SliderStyled = styled.div`
   

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  
  .slide {
    padding: 1rem;
    text-align: center;
    
  }

  .name {
      font-weight: bolder;
      font-size: 1.2rem;
      margin-top: 3rem;
  }

  .church, .location {
      font-style: italic;
  }

  .name, .church, .location {
      line-height: 1;
  }

  .fade-in {
      animation: fade-in 1s forwards;
  }

@keyframes fade-in {
    0% {
      opacity: 0;
    }
    
    100% {
        opacity: 1;
    }
    
   }

  .fade-out {
    animation: fade-out 1s forwards;
    }

@keyframes fade-out {
    0% {
        opacity: 1;
    }
    
    100% {
        opacity: 0;
    }
    
    }

  .slide-btn {
      text-align: center;
      border: 1px green solid;
  }

  .slide-btn button {
      margin: 1.5rem;
  }


  @media (max-width: 414px) {
      font-size: 1rem;

      .slide {
          padding: 1rem;
      }
  }


`


export default function Slider() {

    const [review, setReview] = useState(reviews[0])
    const [fade, setFade] = useState(true)

    let count = 0;


    useEffect(() => {
        const interval = setInterval(() => {

            if(count < reviews.length - 1) {
                setFade(false)

                setTimeout(function() {
                    setReview(reviews[count + 1])
                    count++
                    setFade(true)
                }, 1000)
            } else {
                setFade(false)

                setTimeout(function() {
                    setReview(reviews[0])
                    count = 0
                    setFade(true)
                   }, 1000)
            }
        }, 15000);
        return () => clearInterval(interval);
      }, []);


    const handleSlide = (e) => {
        e.preventDefault()

        if(e.target.name === 'next' && review.id < reviews.length - 1) {
            
            setReview(reviews[review.id + 1])
        } 

        if(e.target.name === 'prev' && review.id > 0) {
            
            setReview(reviews[review.id - 1])
        } 
        
        
    }


    return (
        <SliderStyled>
            <div className={fade ? 'fade-in': 'fade-out'}>
                <div className="slide">
                    <p>"{review.text}"</p>

                
                    <p className="name">{review.name}</p>
                    <p className="church">{review.church}</p>
                    <p className="location">{review.location}</p>
                </div>
            </div>
            {/* <div className="slide-btn">
                <button className="btn" name="prev" onClick={(e) => handleSlide(e)}>prev</button>
                <button className="btn" name="next" onClick={(e) => handleSlide(e)}>next</button>
            </div> */}
            
        </SliderStyled>
    )
}
