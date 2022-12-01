<p  align="center"> 
  <img src="frontend\src\img\logo.svg">
</p>
<h3 align="center">Shopler</h3>
<p align="center">
Shopping has never been so easy. Your companion throughout the day. Forgetting is yesterday.
</p>

### General
This Project was created in the context of Web Engineering 1. With Shopler you have quick access to your missing items - whether food, car parts, ...
1. create new items
2. add items to your list
3. check off articles

### Installation
Required Software:
- nodejs
- npm
- docker & docker-compose

1. Get Repository
    ```console
    git clone
    ```
2. Install dependencies
    - frontend
      ```console
      cd frontend
      npm ci
      ```
    - server
      ```console
      cd server
      npm ci
      ```
3. Start Services
    - mariadb
      ```console
      docker-compose up
      ```
      (wait till database available)
    - server
      ```console
      cd server
      npm start
      ```
    - frontend
      ```console
      cd frontend
      npm start
      ```