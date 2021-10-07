#!/bin/bash

export PGPASSWORD='node_password'
database="monsterdb"
echo "Configuring database: $database"

dropdb -U node_user monstersdb
createdb -U node_user monstersdb

psql -U node_user -d monstersdb -f ./sql/monsters.sql

echo "$database configured"
read -p "Press enter to continue"