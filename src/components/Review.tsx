import { useState } from 'react';
import people from '../data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState<number>(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number: number): number => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  // @ts-ignore
  const getReview = (e: React.MouseEvent<HTMLButtonElement>, type: string) => {
       setIndex((index) => {
          let newIndex = (type === 'previous') ? index - 1 : index + 1
          return checkNumber(newIndex);
        });
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };


    return (
        <article className='review'>
          <div className='img-container'>
            <img src={image} alt={name} className='person-img' />
            <span className='quote-icon'>
              <FaQuoteRight />
            </span>
          </div>
          <h4 className='author'>{name}</h4>
          <p className='job'>{job}</p>
          <p className='info'>{text}</p>
          <div className='button-container'>
            <button className='prev-btn' onClick={e => getReview(e, 'previous')}>
              <FaChevronLeft />
            </button>
            <button className='next-btn' onClick={e => getReview(e, 'next')}>
              <FaChevronRight />
            </button>
          </div>
          <button className='random-btn' onClick={randomPerson}>
            Surprise me
          </button>
        </article>
      );    
};
export default Review;
