import "./App.css";

function App() {
	return (
		<main className="main-section">
			<article className="password-component">
				<h4>Password Generator</h4>
				<div className="password-result">
					<span>PTx1f5DaFX</span>
					<button>
						<i></i>
					</button>
				</div>
				<div className="password-generator">
					<div>
						password length selector <span>10</span>
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
					<div>
						STRENTGTH <span>MEDIUM</span>
						<i></i>
					</div>
					<button>
						GENERATE <i></i>
					</button>
				</div>
			</article>
		</main>
	);
}

export default App;
