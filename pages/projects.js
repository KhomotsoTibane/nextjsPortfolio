import Layout from '../components/MyLayout'
import Script from  'next/script'


export default () => (
  <Layout>
  	  <Script src="../static/script.js"></Script>

     <section className="work section" id="work">
        <h2 data-heading="My Portfolio" className="title">Recent Works</h2>

        <div className="work-container container grid">
            <div className="work-card ">
                <img src="../static/images/Simon_Game.jpg" alt="simon game img" className="work-img"/>
                <h3 className="work-title">Simon Game</h3>
                <span className="work-button">more info
                    <i className="fa-solid fa-arrow-right work-button-icon"></i>
                </span>
                <div className="portfolio-item-details">
                    <h3 className="details-title">Mini Game</h3>
                    <p className="details-description">A color sequence game to challange your memeory</p>
                    <ul className="details-info">
                        <li>Created - <span>23 Jan 2022</span></li>
                        <li>Technologies - <span>Javascrtipt, HTML, CSS </span></li>
                    </ul>
                    <a href="https://khomotsotibane.github.io/SimonGame/" className="view-live">Demo</a>
                </div>
            </div>

            <div className="work-card ">
                <img src="../static/images/todolist.jpg" alt="todo List img" className="work-img"/>
                <h3 className="work-title">Todo List</h3>
                <span className="work-button">more info
                    <i className="fa-solid fa-arrow-right work-button-icon"></i>
                </span>
                <div className="portfolio-item-details">
                    <h3 className="details-title">Todo List</h3>
                    <p className="details-description">A todo list app that is connected to a databse for list storage.</p>
                    <ul className="details-info">
                        <li>Created - <span>4 Mar 2022</span></li>
                        <li>Technologies - <span>html, css, javascript, node, mongo db</span></li>
                    </ul>
                    <a href="https://fathomless-reaches-13664.herokuapp.com/" className="view-live">Demo</a>
                </div>
            </div>

            <div className="work-card">
                <img src="../static/images/wordGuess.png" alt="word guess img" className="work-img"/>
                <h3 className="work-title">Word Guess</h3>
                <span className="work-button">more info
                    <i className="fa-solid fa-arrow-right work-button-icon"></i>
                </span>
                <div className="portfolio-item-details">
                    <h3 className="details-title">Wordle clone</h3>
                    <p className="details-description">A word guessing game that will surely keep you on your toes.</p>
                    <ul className="details-info">
                        <li>Created - <span>28 Apr 2022</span></li>
                        <li>Technologies - <span>react</span></li>
                    </ul>
                    <a href="https://salty-scrubland-87651.herokuapp.com/" className="view-live">Demo</a>
                </div>
            </div>

            <div className="work-card">
                <img src="../static/images/studyCards.png" alt="study cards img" className="work-img"/>
                <h3 className="work-title">Study Flash Cards</h3>
                <span className="work-button">more info
                    <i className="fa-solid fa-arrow-right work-button-icon"></i>
                </span>
                <div className="portfolio-item-details">
                    <h3 className="details-title">Study Cards</h3>
                    <p className="details-description">A flashcards app that you can use to notes and help improve your studies</p>
                    <ul className="details-info">
                        <li>Created - <span>31 May 2022</span></li>
                        <li>Technologies - <span>react</span></li>
                    </ul>
                    <a href=" https://khomotsotibane.github.io/StudyCardsApp/" className="view-live">Demo</a>
                </div>
            </div>
        </div>
    </section>

  
    <div className="portfolio-popup">
        <div className="portfolio-popup-inner">
            <div className="portfolio-popup-content grid">
                <span className="portfolio-popup-close"><i className="fa-solid fa-xmark"></i></span>
                <div className="pp-thumbnail">
                    <img src="" alt="" className="portfolio-popup-img"/>
                </div>
                <div className="portfolio-popup-info">
                    <div className="portfolio-popup-subtitle">Featured - <span>Design</span></div>
                    <div className="portfolio-popup-body">
                        <h3 className="details-title">App for tecnology & services</h3>
                        <p className="details-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Earum impedit voluptatibus minima.</p>
                        <ul className="details-info">
                            <li>Created - <span>4 dec 2020</span></li>
                            <li>Technologies - <span>html css</span></li>
                        </ul>
                        <a href="#">Live Project</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style jsx>
      {`
      
      section {
        padding: 100px 0;
        background-color: #0a0a0f;
      }

      .title {
            text-align: center;
            font-size: 40px;
            margin-bottom: 48px;
            color:#fff;
      }

      .max-width {
          width: 100%;
          display: flex;
          padding:15px
	    }
      .container {
    max-width: 1250px;
    margin-left: auto;
    margin-right: auto;
}

.grid {
    display: grid;
}

/*House all the cards*/
.work-container {
    grid-template-columns: repeat(3, 330px);
    gap: 1.8rem;
    justify-content: center;
    padding-top: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}


.work-item {
    cursor: pointer;
    color: hsl(342, 92%, 46%);
    padding: .25rem .75rem;
    font-weight: 500;
    border-radius: .5rem;
}

.work-card {
    background-color: #16161d;
    padding: 1.25rem;
    border-radius: .5rem;
}

.portfolio-item-details {
    display: none;
}

.view-live{
    display: inline-block;
    background: hsl(342, 92%, 46%);
    color: #fff;
    font-size: 25px;
    padding: 5px 12px;
    margin-top: 20px;
    font-weight: 400;
    border-radius: 6px;
    border: 1px solid crimson;
    transition: all 0.3s ease;
}

.view-live:hover {
    color:hsl(342, 92%, 46%);
    background: none;
}

.work-img {
    max-width: 100%;
    height: auto;
    border-radius: .5rem;
    margin-bottom: 1rem;
}

.work-title {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: .5rem; 
    }

.work-button {
    color: hsl(342, 92%, 46%);
    font-size: .875rem;
    display: flex;
    align-items: center;
    column-gap: .25rem;
    cursor: pointer;
}

.work-button-icon {
    font-size: 1rem;
    transition: .3s;
}

.work-button:hover .work-button-icon {
    transform: translateX(.3rem);
}



/* Portfolio Popup */
.portfolio-popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transition: .3s;
}

.portfolio-popup.open {
    opacity: 1;
    visibility: visible;
}

.portfolio-popup-inner {
    background-color: hsl(242, 14%, 10%);
    color: hsl(242, 8%, 85%);
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    width: 900px;
    border-radius: .5rem;
    padding: 2.5rem;
    position: relative;
}

.portfolio-popup-content {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    column-gap: 3rem;
}

.portfolio-popup-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 1.5rem;
    color:hsl(342, 92%, 46%);
    cursor: pointer;
}

.info-icon {
    font-size: 1.8rem;
    color: hsl(342, 92%, 46%);
    margin-right: .75rem;
}

.portfolio-popup-img {
    max-width: 100%;
    height: auto;
    border-radius: .5rem;
}

.portfolio-popup-subtitle {
    font-size: .813rem;
    margin-bottom: .25rem;
}

      `}
    </style>
  

  </Layout>
)