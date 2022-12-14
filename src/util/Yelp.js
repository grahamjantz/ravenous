const apikey = 'qgUj59t4sQfwGBoYDZlhLP6PHgnZ02ikDgZ63UE74eKqNJmO0QlTNUd4Zk_-kRS3nPaP114ZWekHvGFPi1ukqW8Fndn3dLhH568rDF8rL_9XeZCmGl222wXUkJQaY3Yx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apikey}`
            }
        })
        .then((response) => {
            return response.json()
        })
        .then((jsonResponse) => {
            if (jsonResponse.businesses) {
                jsonResponse.businesses.map((business) => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories.title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            }
        })
    }
}

export default Yelp;