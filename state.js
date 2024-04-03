class Order {
	constructor() {
		this.state = new ProcessingState(this);
	};

	setState(state) {
		this.state = state;
	};

	next() {
		this.state.next();
	};

	cancelOrder() {
		this.state.cancelOrder();
	};

	requestReturn() {
		this.state.requestReturn();
	};
};

class OrderState {
	constructor(order) {
		this.order = order;
	};

	next(){};
	cancelOrder(){};
	requestReturn(){};
};

class OrderedState extends OrderState {
	next() {
		console.log(`Ваше замовлення оформлено.`);
		this.order.setState(new ShippedState(this.order));
	};
};

class ProcessingState extends OrderState {
	next() {
		console.log(`Ваше замовлення в обробці.`);
		this.order.setState(new AwaitingPaymentState(this.order));
	};

	cancelOrder() {
		console.log(`Ваше замовлення скасовано.`);
		this.order.setState(new CancelledState(this.order));
	};
};

class AwaitingPaymentState extends OrderState {
	next() {
		console.log(`Ваше замовлення очікує на оплату.`);
		this.order.setState(new OrderedState(this.order));
	};

	cancelOrder() {
		console.log(`Ваше замовлення скасовано.`);
		this.order.setState(new CancelledState(this.order));
	};
};

class CancelledState extends OrderState { // Додано новий клас
	next() {
		console.log(`Ваше замовлення скасовано. Неможливо перейти до наступного кроку.`);
	};

	cancelOrder() {
		console.log(`Ваше замовлення скасовано.`);
	};

	requestReturn() {
		console.log(`Ваше замовлення скасовано. Неможливо запросити повернення.`);
	};
};

class ShippedState extends OrderState {
	next() {
		console.log(`Ваше замовлення відправлено.`);
		this.order.setState(new DeliveredState(this.order));
	};
};

class DeliveredState extends OrderState {
	next() {
		console.log(`Ваше замовлення доставлено.`);
	};

	requestReturn() {
		console.log(`Ваш запит на повернення прийнято. Очікуйте підтвердження.`);
	};
};

// Створюємо нове замовлення
let order = new Order();

// Переводимо замовлення в наступний стан
order.next(); // Ваше замовлення в обробці.

/* Код для перевірки відміни замовлення: */

// order.cancelOrder();

// Переводимо замовлення в наступний стан
order.next(); // Ваше замовлення очікує на оплату.

// Переводимо замовлення в наступний стан
order.next(); // Ваше замовлення оформлено.

// Переводимо замовлення в наступний стан
order.next(); // Ваше замовлення відправлено.

// Переводимо замовлення в наступний стан
order.next(); // Ваше замовлення доставлено.

// Спробуємо запросити повернення
order.requestReturn(); // Ваш запит на повернення прийнято.

