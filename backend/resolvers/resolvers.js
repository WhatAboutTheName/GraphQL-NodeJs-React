import Product from '../models/product';
import Cart from '../models/cart';

export default {
    Query: {
        getAllProducts: (parent, args, { db }, info) => Product.findAll(),
        getCart: (parent, args, { db }, info) => Cart.findAll()
    },
    Mutation: {
        addInCart: (parent, { prodId, prodCost }, { db }, info) => Cart.create({
            prodId, prodCost
        }),
        removeFromCart: (parent, { id }, { db }, info) => {
            Cart.destroy({
                where: {
                    prodId: id
                }
            })
            return Cart.findAll();
        }
    }
};
