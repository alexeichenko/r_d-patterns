class Product {
	constructor(name, model, category, price) {
		this.name = name;
		this.model = model;
		this.category = category;
		this.price = price;
		if (price < 100) {
			this.sale = true;
		} else {
			this.sale = false;
		}
	}
}

class ProductFactory {
	createProduct(name, model, category, price) {
		return new Product(name, model, category, price);
	}
}

const productFactory = new ProductFactory();
const iphone = productFactory.createProduct('Iphone', '13Pro', 'Smartphone', 600);
console.log(iphone);
const vivo = productFactory.createProduct('Vivo', 'S30', 'Smartphone', 80);
console.log(vivo);

// Зробив згідно умови, щоб в саме в продукті змінювався прапорець на true or false при відповідній умові ціни. Хоча, на мою думку, виглядало би більш доречно, якщо логіка знижок прописувалась би в патерні фабрики. Бо так можна задати для різних категорій товарів різні умови знижок. Хоча, з точки зору масштабних проектів, можливо, це не є вірним підходом.