# ror_Recipe_app_m5_gp


![Microverse](https://img.shields.io/badge/Microverse-blueviolet)


The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.


[Recipe App Requirements](https://github.com/microverseinc/curriculum-rails/blob/main/recipe-app/buisness_requirements.md)

=======

## Built With 

- Ruby on Rails
- Rubocop

=======

### Prerequisites

To run this project you must to have ruby installed in your machine. If you don't have it
follow the instructions [here](https://www.ruby-lang.org/en/documentation/installation/)

## Getting Started

If you want a copy of this file go to the github repository and download it from there

- [`git clone https://github.com/Metsanpeitto/ror_Recipe_app_m5_gp`](https://github.com/Metsanpeitto/ror_Recipe_app_m5_gp)


### Setup

```cmd
git clone  https://github.com/Metsanpeitto/ror_Recipe_app_m5_gp.git
cd ./ror_Recipe_app_m5_gp
```

### Install gems

```cmd
bundle install
```

### Database creation

```cmd
# Open Postgres form the terminal 
$ sudo -u postgres -i
$ psql

# Create user
postgres=# create user microverse-user -s

# Create db 
postgres=# create db ror_blog_m5_w1_development -s

# Destroys older, create new and populate with seed from the terminal
$ rake db:reset
```


### Apply migration (only if you generate a new migration file)

```cmd
rails db:migrate
```

### Usage

```cmd
$ruby main.rb
```

### Verify rubocop

```
$ rubocop -A
```

### Install style lint

```
npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
```

### Run stylelint autofix

```
npx stylelint "**/*.{css,scss}" --fix
```

### Instruction for non technical persons

If you are non a technical person you can download the zip file.

- To do that you have to go to the green button that says 'Code' and then press on it.
- Choose the option 'Download Zip' and wait until it download.
- Then you need to decompress it.
- You will need to have Zip compress file software installed in your computer. If you don't have it you can download it from here
  [`https://www.7-zip.org/download.html`](https://www.7-zip.org/download.html)
- Do double click on the Capstone-1.zip and choose a folder where to place all teh decompressed files.
- Once you are done decompressing, you can open the created folder.
- In it you can double click on the index.html file and choose a browser to open it (For example google Chrome Browser).
- Now you should be able to see the project.
- Remember to use the mouse to navigate through the website. Also you can use the keys 'arrow up' and 'arrow down' of your keyboard
  to scroll up and down.

=======

## Author

👤 **Abraham Rodriguez**

- GitHub: [@metsanpeitto](https://github.com/Metsanpeitto)
- Twitter: [@metsanpeitto](https://twitter.com/home)
- LinkedIn: [Abraham Rodriguez](https://www.linkedin.com/in/abraham-rodriguez-3283a319a/)
- Portfolio: [Waldenberg](https://portfolio.waldenberginc.com)

=======

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

=======

## Show your support

Give a ⭐️ if you like this project!

=======

## Acknowledgments

- Microverse for giving me this chance
- The amazing code reviewers for making me improve every day :thumbsup:

=======


[![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc/4.0/)
[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)


