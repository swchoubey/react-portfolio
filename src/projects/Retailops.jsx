import React from 'react'
import './assets/css/main.css'
export const Retailops = () => {
  return (
    <>
    <head>
		<title>RetailOps</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<script src="https://kit.fontawesome.com/ea174577d8.js" crossorigin="anonymous"></script>
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
	</head>
	<body class="is-preload">

		{/* <!-- Wrapper--> */}
			<div id="wrapper">

				{/* <!-- Nav --> */}
					<nav id="nav">
						<a href="#" class="icon solid fa-info"><span>Introduction</span></a>
						<a href="#features" class="icon solid fa-star"><span>Features</span></a>
						<a href="#tech" class="icon solid fa-code"><span>Tech Stack</span></a>
						<a href="#bts" class="icon solid fa-bomb"><span>BTS</span></a>
					</nav>

				{/* <!-- Main --> */}
					<div id="main">

						{/* <!-- Intro --> */}
							<article id="intro" class="panel">
								<header>
									<h1 style="color: white;">RetailOps</h1>
									<p style="color: white;">
										During my internship at Cognizant, I led a dynamic team in the development of a comprehensive Retail Management System. The primary goal was to create a web application capable of handling various retail functions efficiently. Leveraging technologies such as C#, ASP.NET, HTML/CSS, JavaScript, and SQL Server, we aimed to deliver a robust solution with a focus on scalability and performance.
									</p>
								</header>
							</article>

						{/* <!-- Key Features --> */}
							<article id="features" class="panel">
								<header>
									<h2>Key Features</h2>
								</header>
								<ol type="1">
									<li>Microservices Architecture: Our project embraced a microservices approach to enhance modularity and flexibility. Each team member was assigned specific microservices, such as cart management, to ensure a well-organized and scalable system.</li>
									<li>Seamless Integration with Azure: The deployment of our web application on the Azure platform showcased our commitment to leveraging cloud services. This not only facilitated efficient hosting but also allowed us to take advantage of Azure's robust capabilities for scalability and reliability.</li>
									<li>Collaborative Development: The project emphasized collaborative coding and individual ownership of microservices. This not only enhanced team members' technical skills but also contributed to a sense of ownership and responsibility.</li>
								</ol>
							</article>

							{/* <!-- Tech Stack --> */}
							<article id="tech" class="panel">
								<header>
									<h2>Tech Stack</h2>
								</header>
								<ul>
									<p><i class="fab fa-windows"></i>&nbsp;  C#</p>
									<p><i class="fab fa-microsoft"></i>&nbsp;  ASP.NET</p>
									<p><i class="fa-brands fa-html5"></i>&nbsp;  HTML5</p>
                                    <p><i class="fa-brands fa-css3-alt"></i>&nbsp;  CSS3</p>
									<p><i class="fa-solid fa-database"></i>&nbsp;  SQL Server</p>
                                    <p><i class="fa-solid fa-cloud"></i>&nbsp; Microsoft Azure</p>
								</ul>
							</article>

							{/* <!-- BTS --> */}
							<article id="bts" class="panel">
								<header>
									<h2>Behind the Scenes of the Project</h2>
								</header>
								<p>One of the significant challenges we encountered was the unexpected departure of a team member. In response, I took over their responsibilities to ensure project continuity and timely completion. The team manager's feedback during the final presentation was valuable – emphasizing the importance of effective delegation. This experience taught me the significance of balancing workload distribution for optimal team performance.

                                    This project not only provided a solid foundation in technology but also valuable insights into project management, teamwork, and the importance of adaptability in a professional setting.</p>
							</article>

					</div>

				{/* <!-- Footer --> */}
					<div id="footer">
						<ul class="copyright">
							<li>&copy; Swasti Choubey 2024.</li>
						</ul>
					</div>

			</div>

		{/* //<!-- Scripts --> */}
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
    </>
  )
}
