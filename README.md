<p  align="center">
  <img src="frontend\src\img\logo.svg">
</p>
<h3 align="center">Shopler</h3>
<p align="center">
Shopping has never been so easy. Your companion throughout the day. Forgetting is yesterday.
</p>

## General
This Project was created as part of Web Engineering 1. With Shopler you have quick access to your missing items - whether food, car parts, ...
1. create new items
2. add items to your list
3. check off articles

## Installation
Required Software:
- nodejs
- npm
- docker & docker-compose

1. Get Repository
    ```sh
    $ git clone
    ```
2. Install dependencies
    - frontend
      ```sh
      $ cd frontend
      $ npm ci
      ```
    - server
      ```sh
      $ cd server
      $ npm ci
      ```
4. Start Services
    - mariadb
      ```sh
      $ docker-compose up
      ```
      (wait till database available)
    - backend (on first run)
      - create JSON file with categories array. E.g.:
        ```json
          {
            "categories": [
              "food", 
              "beverages",
              "hygiene"
            ]
          }
        ```
      - run init script  
        ```sh
        $ cd server
        $ npm run init -- path/to/categories.json
        ```
    - backend  
      ```sh
      $ cd server
      $ npm start
      ```
    - frontend 
      ```sh
      $ cd frontend
      $ npm start
      ```        
        
## Contributors
- [Dominik](https://github.com/its-DomeE)
- [KnusperKing](https://github.com/MultiKnacker)
- [Thibault Rey](https://github.com/Thibse)
