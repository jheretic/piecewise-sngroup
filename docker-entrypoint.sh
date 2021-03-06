#!/bin/sh

TRIES=30
DELAY=4

wait_for() {
  echo "Waiting for service => HOST: $PIECEWISE_DB_HOST, PORT: $PIECEWISE_DB_PORT"
  for i in $(seq $TRIES); do
    nc -z "$PIECEWISE_DB_HOST" "$PIECEWISE_DB_PORT" >/dev/null 2>&1

    result=$?
    if [ $result -eq 0 ]; then
      echo "Service is up!"
      return 0
    fi
    sleep "$DELAY"
    echo "Retrying..."
  done
  echo "Operation timed out" >&2
  exit 1
}

wait_for

echo "Running => npm run $@"

npm run "$@"
