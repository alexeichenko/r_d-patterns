class ShoppingCart {
	constructor() {
		if (!ShoppingCart.instance) {
			this._cart = [];
			ShoppingCart.instance = this;
		};
		return ShoppingCart.instance
	};

	getItems() {
		return this._cart;
	}

	addItem(item) {
		this._cart.push(item);
	};

	removeItem(id) {
		this._cart = this._cart.filter(item => item.id !== id);
	};
};

const cart = new ShoppingCart();

cart.addItem({id: 1, name: 'Iphone', model: '13Pro', category: 'Smartphone', price: 600});
cart.addItem({id: 2, name: 'iPad', model: 'Air', category: 'Tablet', price: 180});

console.log(cart.getItems()); // повинно вивести два товари

cart.removeItem(1);

console.log(cart.getItems()); // повинно вивести один товар (iPad)
