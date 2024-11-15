![Placeholder Image](https://placehold.co/1000x261/EEE/31343C)

**Requirements:** (Iam using Ubuntu 24.04)

- jq
- bun
- pm2
- nvm
- snap
- go
- robo (only alpha version)
- php (only alpha version)
- composer (only alpha version)

## jq

```bash
apt-get install jq
```

## NVM (Node & npm)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts
```

## bun

```bash
npm i -g bun
```

## pm2

```bash
npm i -g pm2
```

## snap

```bash
apt-get install snapd
```

## go

```bash
snap install go --classic
```

## robo

```bash
wget https://robo.li/robo.phar && chmod +x robo.phar && sudo mv robo.phar /usr/bin/robo
```

## php

```bash
apt-get install php8.3-cli php8.3-curl
```

## composer

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === 'dac665fdc30fdd8ec78b38b9800061b4150413ff2e3b6f88543c636f7cd84f6db9189d43a81e5503cda447da73c7e5b6') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
mv composer.phar /usr/local/bin/composer
```
