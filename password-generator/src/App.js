import "./App.css";

function App() {
	return (
		<main className="main-section">
			<article className="password-component">
				<h4>Password Generator</h4>
				<div className="password-result">
					<span>PTx1f5DaFX</span>
					<button>
						<i>H</i>
					</button>
				</div>
				<div className="password-generator">
					<div className="length-selector">
						Character Length <span>10</span>
						<input type="range" />
					</div>
					<div className="checkboxes">
						<div className="checkbox-group">
							<input name="uppercase" type="checkbox" />
							<label htmlFor="uppercase">Include Uppercase Letters</label>
						</div>
						<div className="checkbox-group">
							<input name="lowercase" type="checkbox" />
							<label htmlFor="lowercase">Include Lowercase Letters</label>
						</div>
						<div className="checkbox-group">
							<input name="numbers" type="checkbox" />
							<label htmlFor="numbers">Include Numbers</label>
						</div>
						<div className="checkbox-group">
							<input name="symbols" type="checkbox" />
							<label htmlFor="symbols">Include Symbols</label>
						</div>
					</div>
				</div>
				<div className="password-generator_footer">
					<div className="strength-level">
						<p>STRENTGTH</p>
						<span>
							MEDIUM <i>IIII</i>
						</span>
					</div>
					<button className="generate-button">
						GENERATE <i></i>
					</button>
				</div>
			</article>
		</main>
	);
}

export default App;
