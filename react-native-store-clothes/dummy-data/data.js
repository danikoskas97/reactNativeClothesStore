import React, { createContext, useState } from "react";
import Product from "../classes/Product";
import Category from "../classes/Category";
import CommentProduct from "../classes/CommentProduct";
import Coupon from "../classes/Coupon";

export const DataContext = createContext();

const DataContextProvider = (props) => {
	const [chosenProduct, setChosenProduct] = useState(null);
	const [shoppingCart, setShoppingCart] = useState([]);
	const filterProducts = (items, categoryName) => {
		return items.filter((product) => product.category == categoryName);
	};
	const numberWithCommas= (x)=> {
        return x.toString();
    }

	const items = [
		new Product(
			"https://www.wawa.co.il/files/products/image1_704_2016-01-10_14-04-12.jpg",
			"T-shirt blue",
			"ForMen ",
			20,
			"T-shirt",
			1000,
		),
		new Product(
			"https://sa-logo.co.il.benefit-us.co.il/wp-content/uploads/2021/05/5-232.jpg",
			"T-shirt red",
			"ForMen",
			20,
			"T-shirt",
			1000,
		),
		new Product(
			"https://hamalbish.co.il/wp-content/uploads/2018/01/%D7%97%D7%95%D7%9C%D7%A6%D7%AA-%D7%98%D7%A8%D7%99%D7%A7%D7%95-%D7%A9%D7%A8%D7%95%D7%95%D7%9C-%D7%A7%D7%A6%D7%A8-%D7%9B%D7%AA%D7%95%D7%9D.jpg",
			"T-shirt orange",
			"ForMen",
			20,
			"T-shirt",
			1000,
		),
		new Product(
			"https://konimboimages.s3.amazonaws.com/system/photos/2314072/large/46659332f1b4ae1e03c0f17dd143ebee.jpg",
			"T-shirt green",
			"ForMen",
			20,
			"T-shirt",
			1000,
		),
		new Product(
			"https://shop.lametayel.co.il/17624-superlarge_default/%D7%9E%D7%9B%D7%A0%D7%A1%D7%99%D7%99%D7%9D-%D7%A7%D7%A6%D7%A8%D7%95%D7%AA-reef-warm-water.jpg",
			"Pants short",
			" ForMen ",
			2900,
			"Pants",
			450,
		),
		new Product(
			"https://www.columbia.co.il/dw/image/v2/BGHG_PRD/on/demandware.static/-/Sites-edea-m-catalog/default/dw6eb68df0/images/large/1441671_221_1.jpg?sw=800&sh=800",
			"Pants Trip",
			" ForMen ",
			2900,
			"Pants",
			450,
		),
		new Product(
			"https://cargo-new.co.il/wp-content/uploads/2018/10/623718bb.jpg",
			"Pants Event",
			" ForMen ",
			2900,
			"Pants",
			450,
		),
		new Product(
			"https://www.anerobi.co.il/media/catalog/product/cache/1/small_image/500x/17f82f742ffe127f42dca9de82fb58b1/v/5/v5-1357125-688_fc.jpg",
			"Pants sport",
			"ForMen",
			2200,
			"Pants",
			500,
		),
		new Product(
			"https://mall-online.co.il/wp-content/uploads/2019/07/%D7%A0%D7%A2%D7%9C%D7%99-%D7%A0%D7%99%D7%99%D7%A7-%D7%90%D7%99%D7%99%D7%A8-%D7%9E%D7%A7%D7%A1-270-1.png",
			"Shoes nike",
			"ForMen",
			500,
			"Shoes",
			550,
		),
		new Product(
			"https://mastersport.co.il/wp-content/uploads/2018/01/gazelle-BA9595.jpg",
			"Shoes Adidas",
			"ForMen",
			500,
			"Shoes",
			550,
		),
		new Product(
			"https://media.shoesonline.co.il/2020/11/CHARGED-BANDIT-6-Under-Armour-men__3023019-600-300x200.jpg",
			"Shoes UnderArmor",
			"ForMen",
			500,
			"Shoes",
			550,
		),
		new Product(
			"https://ali-buy.com/wp-content/uploads/2019/12/puma-3-min.jpg",
			"Shoes Puma",
			"ForMen",
			500,
			"Shoes",
			550,
		),
		new Product(
			"https://images-na.ssl-images-amazon.com/images/I/71t9cFFRpaL._AC_UX569_.jpg",
			"Watch X1",
			"ForMen",
			4000,
			"Watch",
			350,
		),
		new Product(
			"https://images.casiocdn.com/fit-in/368x500/casio-v2/resource/images/products/watches/hd/GGB100-1A9_hd.png",
			"Watch X2",
			"ForMen",
			4000,
			"Watch",
			350,
		),
		new Product(
			"https://images.auto.co.il/Attachment/Gallery/1710/1622823/Watch-X1-2020-01.jpg?width=480",
			"Watch X3",
			"ForMen",
			4000,
			"Watch",
			350,
		),
		new Product(
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZT18cBAOuNk_-BZB5URkTzqPd3v2HgSaaw&usqp=CAU",
			"Watch X4",
			"ForMen",
			4000,
			"Watch",
			350,
		),
		new Product(
			"https://konimboimages.s3.amazonaws.com/system/photos/2358150/large/a3a1619c0cc824b78c3d92dd5889b76a.jpg",
			"Coats red",
			"ForMen",
			4245,
			"Coats",
			550,
		),
		new Product(
			"https://cdn.azrieli.com/Images/3e00e183-53d1-41cc-ab62-87c191a11fd4/Normal/52273bb5.jpg",
			"Coats black",
			"ForMen",
			4245,
			"Coats",
			550,
		),
		new Product(
			"https://www.campmore.co.il/images/itempics/blackice_01022021104757_large.jpg",
			"Coats blue",
			"ForMen",
			4245,
			"Coats",
			550,
		),
		new Product(
			"https://www.columbia.co.il/dw/image/v2/BGHG_PRD/on/demandware.static/-/Sites-edea-m-catalog/default/dw142db5cb/images/large/1875921_100_1.jpg?sw=800&sh=800",
			"Coats white",
			"ForMen",
			4245,
			"Coats",
			550,
		),
		new Product(
			"https://i.pinimg.com/originals/7b/25/ee/7b25ee2805c1c94c82150393dd92e775.jpg",
			"Jeans j1",
			"ForMen",
			3400,
			"Jeans",
			550,
		),
		new Product(
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6wJZ_x6VanK6iXdnEpE_SYbySDxOPLPXh-w&usqp=CAU",
			"Jeans j2",
			"ForMen",
			3400,
			"Jeans",
			550,
		),
		new Product(
			"https://images-na.ssl-images-amazon.com/images/I/71knWTZ7YeL._AC_UX385_.jpg",
			"Jeans j3",
			"ForMen",
			3400,
			"Jeans",
			550,
		),
		new Product(
			"https://oldnavy.gap.com/webcontent/0014/826/408/cn14826408.jpg",
			"Jeans j4",
			"ForMen",
			3400,
			"Jeans",
			550,
		),

	];

	const categories = [
		new Category(
			"T-shirt",
			filterProducts(items, "T-shirt"),
			"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2c%2F82%2F2c82435e88bb7a28468576feaa1fe7c99a2b9946.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
		),
		new Category(
			"Pants",
			filterProducts(items, "Pants"),
			"https://cdn.shopify.com/s/files/1/0071/5633/4681/products/Men_Original-Mountain-Pant_Relaxed-Fit_Terra_272_grande.jpg?v=1592842211"
		),
		new Category(
			"Shoes",
			filterProducts(items,"Shoes"),
			"https://www.saucony.com/on/demandware.static/-/Sites-saucony_us-Library/default/dw6ca64fdc/content/seasonal-content/homepage/2021/05/endorphinshift-d.jpg"
		),
		new Category(
			"Watch",
			filterProducts(items,"Watch"),
			"https://media.gq-magazine.co.uk/photos/5fca181cea319833403830d6/master/w_2121,h_1414,c_limit/04112020_Watches_11.jpg"
		),
		new Category(
			"Coats",
			filterProducts(items,"Coats"),
			"https://cdn.luxe.digital/media/2020/10/01123336/best-winter-coats-men-wool-mr-p-review-luxe-digital.jpg"
		),
		new Category(
			"Jeans",
			filterProducts(items,"Jeans"),
			"https://res.cloudinary.com/trunk-club/image/upload/f_auto,q_auto/Blog/Mens-denim-skinny-jeans.jpg"
		),
	];

	const coupons = [
		new Coupon("test", 200),
		new Coupon("test1", 201),
		new Coupon("test2", 202),
	  ];
	

	  items.forEach((product) => {
		product.comments = [
			new CommentProduct(
				"user1",
				"nice2"
			),
			new CommentProduct(
				"user12",
				"nice1"
			),
			
		];
	});

	return (
		<DataContext.Provider
			value={{
				items: items,
				categories: categories,
				chosenProduct,
				setChosenProduct,
				shoppingCart,
				setShoppingCart,
				numberWithCommas,
				coupons
			}}>
			{props.children}
		</DataContext.Provider>
	);
};

export default DataContextProvider;