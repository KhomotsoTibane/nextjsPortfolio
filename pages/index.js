//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'


/* Notice in the example below how we render static images with Next.js:
Create a folder called static in your project root directory. From your code you can then reference those files with /static/ URLs (see<img src={`/static/art/${props.data.image}.jpg`} alt=""/>) 
Note: Don't name the static directory anything else. The name is required and is the only directory that Next.js uses for serving static assets.*/



export default () => (
<Layout>
	<section className="home" id="home">
		<div className="max-width">
			<div className="home-content">
				<div className="text-1">Hello, my name is</div>
				<div className="text-2">Khomotso</div>
				<div className="text-3">And I am a Full Stack Web Developer</div>
				<a href="#work">View Projects</a>
			</div>
		</div>
	</section>

	<style jsx>{`
		.home {
			display: flex;
			background: url("/static/images/banner2.jpg") no-repeat center;
			height: 100vh;
			color: #fff;
			min-height: 500px;
			background-size: cover;
			background-attachment: fixed;
			font-family: 'Ubuntu', sans-serif;
		}

		.max-width {
			width: 100%;
			display: flex;
			padding:15px
		}

		.text-1 {
			font-size: 27px;
		}

		.text-2 {
			font-size: 75px;
			font-weight: 600;
			margin-left: -3px;
			}

		.text-3 {
			font-size: 40px;
			margin: 5px 0;
		}

		a {
			display: inline-block;
			background: hsl(342, 92%, 46%);
			color: #fff;
			font-size: 25px;
			padding: 12px 36px;
			margin-top: 20px;
			font-weight: 400;
			border-radius: 6px;
			border: 2px solid crimson;
			transition: all 0.3s ease;
		}

		a:hover {
			color: hsl(342, 92%, 46%);
			background: none;
			text-decoration:none;
		}
	`}
	</style>
  </Layout>
)