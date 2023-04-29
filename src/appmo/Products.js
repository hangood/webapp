function Products() {
	const prods = [
		{ id: 1, title: "oraimo Rock longue duree de lecteur ENC 2 micro", image: "/img/prod/p1.png", avis: 44, price: 520, oldprice: 550 },
		{ id: 2, title: "oraimo Rock longue duree de lecteur ENC 2 micro", image: "/img/prod/p2.png", avis: 23, price: 170, oldprice: 244 },
		{ id: 3, title: "oraimo Rock longue duree de lecteur ENC 2 micro", image: "/img/prod/p3.png", avis: 122, price: 720 },
		{ id: 4, title: "oraimo Rock longue duree de lecteur ENC 2 micro", image: "/img/prod/p4.png", avis: 112, price: 620, oldprice: 770 },
		{ id: 5, title: "oraimo Rock longue duree de lecteur ENC 2 micro", image: "/img/prod/p5.jpg", avis: 212, price: 420, oldprice: 400 },
		{ id: 6, title: "oraimo Rock longue duree de lecteur ENC 2 micro", image: "/img/prod/p6.jpg", avis: 332, price: 220 },
	];
	return (
		<div className="products">
			<div className="text-center mb-3">
				<h3 className="h2 fw-bolder fs-2 mb-3">Nouveau Arrivage</h3>
				<span className="text-secondary">Tous les nouveaux arrivages et produits tendances icil</span>
			</div>
			<div className="container-fluid">
				<div className="row">
					{prods.map((pro) => (
						<div key={pro.id} className="col-md-3 pb-5">
							<img src={pro.image} alt={pro.title} style={{ width: "100%", objectFit: "contain" }} />
							<div className="text-dark text-center w-95 m-auto">
								<span className="h6 fw-bolder fs-6">{pro.title}</span>
								<span className="d-block py-1">
									<img src="/img/prod/T.png" alt="" />
									<span className="fs-6" style={{ fontWeight: "501", color: "#61a0d3" }}>
										{"  "}
										{pro.avis} Avis
									</span>
								</span>
								<span className="fw-bold" style={{ color: "#53d297" }}>
									<span className={`text-decoration-line-through text-dark fw-lighter pe-2 ${pro.oldprice ? "" : "d-none"}`}>{pro.oldprice} MAD </span>
									{pro.price} MAD
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Products;
