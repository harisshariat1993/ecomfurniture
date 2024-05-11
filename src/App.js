import logo from './logo.svg';
import './App.css';


function App() {
  // let abc => 
  const furnitureItems = [
    {
      id: 1,
      title: "Modern Gray Sofa",
      price: 899.99,
      description: "A sleek and comfortable sofa with a modern design.",
      imageUrl: "https://i0.wp.com/woodwoon.com/wp-content/uploads/2023/01/BC0004-bedroom-chair-furniture-brand-in-pakistan-woodwoon.webp?fit=1024%2C1024&ssl=1"
    },
    {
      id: 2,
      title: "Leather Recliner Sofa",
      price: 1299.99,
      description: "Luxurious leather recliner sofa for ultimate comfort.",
      imageUrl: "https://i0.wp.com/woodwoon.com/wp-content/uploads/2023/01/BC0004-bedroom-chair-furniture-brand-in-pakistan-woodwoon.webp?fit=1024%2C1024&ssl=1"
    },
    {
      id: 3,
      title: "Classic Beige Loveseat",
      price: 699.99,
      description: "Timeless loveseat in a neutral beige color.",
      imageUrl: "https://i0.wp.com/woodwoon.com/wp-content/uploads/2023/01/BC0004-bedroom-chair-furniture-brand-in-pakistan-woodwoon.webp?fit=1024%2C1024&ssl=1"
    },
    {
      id: 4,
      title: "L-shaped Sectional Sofa",
      price: 1499.99,
      description: "Spacious and stylish L-shaped sectional sofa.",
      imageUrl: "https://i0.wp.com/woodwoon.com/wp-content/uploads/2023/01/BC0004-bedroom-chair-furniture-brand-in-pakistan-woodwoon.webp?fit=1024%2C1024&ssl=1"
    },
    {
      id: 5,
      title: "Vintage Velvet Sofa",
      price: 999.99,
      description: "Elegant vintage velvet sofa with intricate detailing.",
      imageUrl: "https://i0.wp.com/woodwoon.com/wp-content/uploads/2023/01/BC0004-bedroom-chair-furniture-brand-in-pakistan-woodwoon.webp?fit=1024%2C1024&ssl=1"
    },
    {
      id: 6,
      title: "Convertible Futon Sofa",
      price: 499.99,
      description: "Versatile futon sofa that converts into a bed.",
      imageUrl: "https://i0.wp.com/woodwoon.com/wp-content/uploads/2023/01/BC0004-bedroom-chair-furniture-brand-in-pakistan-woodwoon.webp?fit=1024%2C1024&ssl=1"
    },
    {
      id: 7,
      title: "Tufted Chesterfield Sofa",
      price: 1099.99,
      description: "Stylish tufted chesterfield sofa for a touch of sophistication.",
      imageUrl: "https://i0.wp.com/woodwoon.com/wp-content/uploads/2023/01/BC0004-bedroom-chair-furniture-brand-in-pakistan-woodwoon.webp?fit=1024%2C1024&ssl=1"
    },
    {
      id: 8,
      title: "Mid-Century Modern Sofa",
      price: 799.99,
      description: "Iconic mid-century modern sofa with tapered legs.",
      imageUrl: "https://i0.wp.com/woodwoon.com/wp-content/uploads/2023/01/BC0004-bedroom-chair-furniture-brand-in-pakistan-woodwoon.webp?fit=1024%2C1024&ssl=1"
    },
    {
      id: 9,
      title: "Plush Microfiber Sofa",
      price: 599.99,
      description: "Soft and cozy microfiber sofa for ultimate relaxation.",
      imageUrl: "https://i0.wp.com/woodwoon.com/wp-content/uploads/2023/01/BC0004-bedroom-chair-furniture-brand-in-pakistan-woodwoon.webp?fit=1024%2C1024&ssl=1"
    }
  ];
  
  return (
    <>

    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div className="repel">
  <div className='topimg'>
    <h1 className='text-center'>Furnilux - Your Brand for Stylish Living</h1>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa neque quae amet animi maiores similique aliquam omnis quia</p>
  <button type="button" className="btn btn-outline-primary imgbtn">Primary</button>
  </div>
</div>
<div className="row my-5">
  {
  furnitureItems.slice(0,3).map(function(i){
    return (
      <div className="col-lg-4" key={i.id}>
        <div class="card">
        <img src={i.imageUrl} className="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">{i.title}</h5>
          <p class="card-text">{i.description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
    )
  })
  }

</div>
<div className="row">
  <div className="col-lg-6">  
    <h3>Luxurios Bed</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, similique consequatur voluptatem molestias suscipit illo,</p>
    <p className='font-weight-bold'>price : 299$</p>
  </div>
</div>
<div className="row">
  <div className="col-lg-12">
    <h3 className='text-center'>Our Products</h3>
  </div>
  {
  furnitureItems.map(function(i){
    return (
      <div className="col-lg-4 my-3" key={i.id}>
        <div class="card mx-auto">
        <img src={i.imageUrl} className="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">{i.title}</h5>
          <p class="card-text">{i.description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
    )
  })
  }
</div>

    </>
  );
}

export default App;
