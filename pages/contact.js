import Layout from '../components/MyLayout'


export default ()=>(
    <Layout>
        <section className="contact" id="contact">
            <h2 className="title" data-heading="Get in touch">Contact me</h2>
            <div className="max-width">
                <div className="contact-content">
                    <div className="column left">
                        <p>I am open to working a Web Development junior role,
                            Please feel free to shoot me an email regarding any available post.</p>
                            <div className="icons">
                                <div className="row">
                                    <div className="myfa-icon"><i className="fa-brands fa-linkedin"></i></div>
                                    <div className="info">
                                        <div className="head">Name</div>
                                        <div className="sub-title">
                                            <a href="http://linkedin.com/in/khomotso-tibane-753b0186">Khomotso Tibane</a></div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="myfa-icon"><i className="fas fa-map-marker-alt"></i></div>
                                    <div className="info">
                                        <div className="head">Address</div>
                                        <div className="sub-title">Gauteng, South Africa</div>
                                    </div>
                                </div>
                    
                                <div className="row">
                                    <div className="myfa-icon"> <i className="fas fa-envelope"></i></div>
                                    <div className="info">
                                        <div className="head">Email</div>
                                        <div className="sub-title">khomotso13@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                        <div className="column right">
                            <div className="text">Message me</div>

                                <form id="contact-form" method="post" action="https://formspree.io/f/mknyqrrk">
                                    <div className="field name">
                                        <input type="text" className="input" placeholder="Name"required/>
                                    </div>

                                    <div className="field email">
                                        <input type="email" className="input" placeholder="Email" required/>
                                    </div>

                                    <div className="field">
                                        <input type="text" className="input" placeholder="Subject" required/>
                                    </div>
                                    
                                    <div className="field textarea">
                                        <textarea className="input" cols="30" rows="10" placeholder="Message" required></textarea>
                                    </div>

                                    <div className="button-area">
                                        <button type="submit" value="Send">Send message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
            </div>
        </section>

        <style jsx>
            {`

            section {
                padding: 100px 0;
                background-color: #0a0a0f;
            }

            .title {
                text-align: center;
                font-size: 40px; 
                 color:#fff;
            }

            .max-width {
                width: 100%;
                display: flex;
                padding:20px
            }
                        
            .contact .contact-content {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                margin: 120px 0;
            }
            
            .contact .contact-content .column {
                width: calc(50% - 30px);
            }

            .contact .contact-content .left p {
                font-size: 1.25rem;
            }

            .contact .contact-content .left .icons {
                margin: 10px 0;
            }

            .contact .contact-content .row {
                display: flex;
                height: 65px;
                align-items: center;
            }

            .contact .contact-content .row .info {
                margin-left: 30px;
            }

            .contact .contact-content .row .info .sub-title:hover,
            .contact .contact-content .row a:hover {
                color: hsl(342, 92%, 46%);
            }

            .contact .contact-content .row i {
                font-size: 25px;
                color: hsl(342, 92%, 46%);
            }

            .myfa-icon {
                width: 25px;
            }

            .contact .contact-content .row a {
                color: #fff;
                text-decoration: underline;
            }

            .contact .contact-content .info .head {
                font-weight: 500;
            }

            .contact .contact-content .info .sub-title {
                color: #fff;
            }

            .field {
                position: relative;
                margin-top: .1rem;
                margin-bottom: 1.9rem;
            }

            .input {
                width: 100%;
                border: 2px solid hsl(342, 92%, 46%); 
                background-color: transparent;
                padding: .6rem 1.2rem;
                color:  hsl(242, 8%, 95%);
                font-weight: 500;
                font-size: 1rem;
                letter-spacing: .5px;
                outline: none;
                border-radius: .50rem;
                transition: .3s;
            }

            textarea.input {
                padding: .8rem 1.2rem;
                min-height: 140px;
                border-radius: .50rem;
                resize: none;
            }

            .field label {
                position: absolute;
                top: 50%;
                left: 1rem;
                transform: translateY(-50%);
                padding: 0 .5rem;
                color:  hsl(242, 8%, 85%);
                font-size: 1rem;
                font-weight: 500;
                pointer-events: none;
                z-index: 15;
                transition: .5s;
            }

            .field.textarea label {
                top: 1rem;
                transform: translateY(0);
            }

            .contact .right form .button-area{
                display: flex;
                align-items: center;
            }
            .right form .button-area button{
                color: #fff;
                display: block;
                width: 160px!important;
                height: 45px;
                outline: none;
                font-size: 18px;
                font-weight: 500;
                border-radius: 6px;
                cursor: pointer;
                flex-wrap: nowrap;
                background: hsl(342, 92%, 46%);
                border: 2px solid crimson;
                transition: all 0.3s ease;
            }
            .right form .button-area button:hover{
                color:  hsl(242, 8%, 85%);
                background: none;}
                        
            `}
        </style>

    </Layout>
)
