
export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: 32,
            coverImage: 'http://t0.gstatic.com/images?q=tbn:ANd9GcRNAVIuV8rKVmFpYM1RNWR64HJXV6SFh_BUDQh7KvP_fBQjPu43'
        },
        {
            id: 2,
            title: 'Realise It!',
            author: 'Michael T. Nygard',
            price: 45,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41nMZPJdhsL._SX415_BO1,204,203,200_.jpg'
        }
    ];

    getBooks() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data);
            }, 700)
        });
    };
};
