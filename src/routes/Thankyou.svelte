<script>
</script>

<main>
	<div class="content">
		<div class="based">GOD WITH YOU</div>
		<div class="hero">
			<div class="headercolr"><h1>success</h1></div>
			<div class="subheadcolr">
				<h2 class="h2">your prayer has been submited successfully!</h2>
				<h3>wanna send in another prayer?</h3>
			</div>
		</div>
		<div class="spacer" />
		<button class="button" type="submit" onclick="history.go(-1)"
			>Go back</button
		>
	</div>
</main>

<style>
	.button {
		background-color: #009d9d;
		font-family: monospace;
		color: #e6e6fa;
		border-radius: 5px;
		border: none;
		width: 180px;
		height: 60px;
		margin: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}

	::placeholder {
		color: transparent;
	}
	.headercolr {
		color: #e6e6fa;
		font-family: "FoundersGrotesk-Medium";
	}
	.subheadcolr {
		padding-top: 20px;
		color: #e6e6fa;
		font-family: monospace;
	}
	.h2 {
		font-size: 20px;
	}
	.subheadcolr h3 {
		font-size: 11.4px;
	}
	.based {
		color: #e6e6fa;
		font-size: 15px;
		text-align: center;
		padding-top: 40px;
		font-family: monospace;
	}

	.content {
		display: flex;
		flex-direction: column;
		height: 50vh;
		justify-content: space-between;
	}

	.hero {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.hero h1 {
		font-weight: 400 !important;
		font-size: 110px;
		line-height: 90px;
		padding-bottom: 15px;
		margin-bottom: 0px;
	}

	.spacer {
		padding-top: 200px;
	}

	@media only screen and (max-width: 1200px) {
		.hero h1 {
			font-size: 95px;
			line-height: 85px;
			padding-bottom: 15px;
		}
		.h2 {
			font-size: 18px;
		}
		.subheadcolr h3 {
			font-size: 10px;
		}
	}

	@media only screen and (max-width: 1000px) {
		.hero h1 {
			font-size: 80px;
			line-height: 70px;
			padding-bottom: 15px;
		}
	}

	@media only screen and (max-width: 850px) {
		.hero h1 {
			font-size: 70px;
			line-height: 65px;
			padding-bottom: 15px;
		}
		.h2 {
			font-size: 18px;
		}
		.subheadcolr h3 {
			font-size: 10px;
		}
	}

	@media only screen and (max-width: 750px) {
		.hero h1 {
			font-size: 55px;
			line-height: 50px;
			padding-bottom: 15px;
		}
	}

	@media only screen and (max-width: 650px) {
		.based {
			font-size: 10px;
		}
		.hero h1 {
			font-size: 45px;
			line-height: 40px;
			padding-bottom: 15px;
		}

		.h2 {
			font-size: 9px;
		}
		.subheadcolr h3 {
			font-size: 7px;
		}
		.button {
			width: 140px;
			height: 50px;
		}
	}

	@media only screen and (max-width: 300px) {
		.hero h1 {
			font-size: 23px;
			line-height: 20px;
			padding-bottom: 15px;
		}
	}
</style>
