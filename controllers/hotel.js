const getHotels = (req, res) => {
    const hotels = [
        {
            imagePath: 'amara.jpg',
            title: 'Amara Resort & Spa',
            type: 'hotel',
            price: 4000,
            starCount: 4,
            rating: 8.5
        },
        {
            imagePath: 'desert.jpg',
            title: 'DESERT QUAIL INN',
            type: 'motel',
            price: 3000,
            starCount: 3,
            rating: 8.9
        },
        {
            imagePath: 'villas.jpg',
            title: 'VILLAS AT POCO DIABLO',
            type: 'apartments',
            price: 2000,
            starCount: 2,
            rating: 9.2
        },
        {
            imagePath: 'villas.jpg',
            title: 'VILLAS AT POCO DIABLO',
            type: 'apartments',
            price: 2000,
            starCount: 2,
            rating: 9.2
        },
        {
            imagePath: 'villas.jpg',
            title: 'VILLAS AT POCO DIABLO',
            type: 'apartments',
            price: 2000,
            starCount: 2,
            rating: 9.2
        },
        {
            imagePath: 'villas.jpg',
            title: 'VILLAS AT POCO DIABLO',
            type: 'apartments',
            price: 2000,
            starCount: 2,
            rating: 9.2
        },
        {
            imagePath: 'amara.jpg',
            title: 'Amara Resort & Spa',
            type: 'hotel',
            price: 4000,
            starCount: 4,
            rating: 8.5
        },
        {
            imagePath: 'desert.jpg',
            title: 'DESERT QUAIL INN',
            type: 'motel',
            price: 3000,
            starCount: 3,
            rating: 8.9
        },
        {
            imagePath: 'villas.jpg',
            title: 'VILLAS AT POCO DIABLO',
            type: 'apartments',
            price: 2000,
            starCount: 2,
            rating: 9.2
        },
        {
            imagePath: 'amara.jpg',
            title: 'Amara Resort & Spa',
            type: 'hotel',
            price: 4000,
            starCount: 4,
            rating: 8.5
        }
    ]

    res.status(200).json(hotels)
}

module.exports = {
    getHotels
}
