import Layout from '../components/MyLayout'

export default () => (
  <Layout>
    <section className="about" id="about">
      <h2 className="title" >About me</h2>
        <div className="max-width">
            <div className="about-content">
                <div className="column left">
                    <img src="../static/images/profile3.jpeg" alt="khomotso-portrait-img" /> 
                </div>
                <div className="column right">
                    <p className="text"> I am a Web Developer currently studying Computer Science part-time.
                        I enjoy learning new progamming technologies and I am able to grasp new concepts without much dificulty. My interests are mainly towards Backend
                        Web Development and Cloud practice.
                        I always strive to deliver quality solutions to any problem that I need to solve to the highest
                        standard.
                    </p>
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
            margin-bottom: 48px;
            color:#fff;
      }

      .max-width {
          width: 100%;
          display: flex;
          padding:15px
	    }
      .about .about-content{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            margin: 120px 0;
      }

      .about .about-content .left {
            width: 45%;
      }

      .about .about-content .left img {
            height: 400px;
            width: 400px;
            object-fit: cover;
            border-radius: 6px;
        }

      .about .about-content .right {
            width: 55%;
            height:100%;
        }

      .about .about-content .right .text {
            font-size:1.5rem;
            color:#fff;
        }

      .about .about-content .right .text span {
            color: hsl(342, 92%, 46%);
        }

      `}
    </style>
  
    
  </Layout>
)