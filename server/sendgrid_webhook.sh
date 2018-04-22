#!/bin/bash
# make sure you have execute permissions:
# cd /path/to/project
# chmod +x ./sendgrid_webhook.sh
# to run, type ./sendgrid_webhook.sh in the terminal

function localtunnel {
#lt -s lairjgliargli --port 5000
#lt -s weoivb --port 5000
lt -p 5000 -s weoivb
}

until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done

#"lt -p 5000 -s weoivb",