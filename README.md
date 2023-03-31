
# RealEstate- NextJs + GraphQL boilerplate
## It is an webapp which uses NextJs and GraphQL API with mongodb
### Netlify Link :https://zesty-sopapillas-e7c05a.netlify.app/
### Vercel Link :https://real-estate-1h5d.vercel.app/


## GraphQL API Reference

#### Get all listings

```http (graphql)
  GET https://real-estate-1h5d.vercel.app/api/graphql

  query Query{
    getProperties{
        description
        price
        lat
        lng
        isLiked
        isForSale
        bathroom
        beds
        area
    }
  }
```








![App Screenshot](https://i.imgur.com/O8s4eER.png)

![App Screenshot](https://i.imgur.com/b3HUYiz.png)
## Author

- [@akaza21](https://www.github.com/akaza21)


## Installation

```bash
    git clone https://github.com/akaza21/RealEstate

```
### `Navigation`
```bash
    cd RealEstate
```
### `Installation`



```bash
  npm i
```



### `Runserver`

```bash
  npm run dev
```




