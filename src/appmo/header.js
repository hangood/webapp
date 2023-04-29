import { Link } from "react-router-dom";

function Header() {
	return (
		<div>
			<div
				style={{
					background: "#83e600",
					width: "100%",
					height: "30px",
					position: "sticky",
				}}
			>
				<p className="fs-6 d-none">xsds a fduh a sfdh s dfouh s odfsd f uhsdf o uhsd f ouhso u dfhouh d sfouh d souf h oudsf u houds f uohds d gaidai s diygas</p>
			</div>

			<div className="container-fluid p-3 bg-white text-black" style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)" }}>
				<div className="d-flex flex-wrap align-items-center justify-content-center ">
					<Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-black text-decoration-none">
						<img className="bi me-2" width="170" height="70" src="/img/logo.png" alt="" />
					</Link>

					<ul className="nav col-12 col-lg-auto me-lg-2 mb-lg-0 mb-sm-3 justify-content-center">
						<li>
							<Link to="/" className="nav-link px-4 text-black">
								Home
							</Link>
						</li>
						<li>
							<Link to="/" className="nav-link px-4 text-black">
								Features
							</Link>
						</li>
						<li>
							<Link to="/" className="nav-link px-4 text-black">
								Pricing
							</Link>
						</li>
						<li>
							<Link to="/" className="nav-link px-4 text-black">
								FAQs
							</Link>
						</li>
						<li>
							<Link to="/" className="nav-link px-4 text-black">
								About
							</Link>
						</li>
					</ul>

					<form className="col-lg-3 col-sm-4 col-md-4 mx-lg-2 my-3 my-lg-0">
						<input
							type="search"
							className="form-control placeholder-wave form-control-dark"
							placeholder="Search"
							aria-label="Search"
							style={{ borderRadius: "30rem", border: "1.5px solid #cacaca" }}
						/>
					</form>
					<div className="">
						<Link to="/" className="m-3">
							<img className="bi me-1" width="25" height="26" src="/img/cart.png" alt="" />
						</Link>
						<Link to="/" className="m-2">
							<img className="bi me-1" width="25" height="26" src="/img/user.png" alt="" />
						</Link>
						<Link to="/" className="m-2">
							<img className="bi me-1" width="25" height="26" src="/img/language.png" alt="" />
						</Link>
					</div>

					{/* <div className="text-end">
							<button type="button" className="btn btn-outline-dark me-2">
								Login
							</button>
							<button type="button" className="btn btn-warning">
								Sign-up
							</button>
						</div> */}
				</div>
			</div>
			<div className="bg-gray">
				<div className="container gx-5 text-md-center">
					<div className="row">
						<div className="col-md-4">
							<img className="bi me-1" width="25" height="28" src="/img/bar_2/L.png" alt="" />
							<span className="opacity-75 fs-7">Livraison gratuite a partir de 65DHS</span>
						</div>
						<div className="col-md-4">
							<img className="bi me-1" width="25" height="28" src="/img/bar_2/D.png" alt="" />
							<span className="opacity-75 fs-7">Paiement a la Livraison</span>
						</div>
						<div className="col-md-3">
							<img className="bi me-1" width="25" height="28" src="/img/bar_2/P.png" alt="" />
							<span className="opacity-75 fs-7">Garantie sans tracas</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
