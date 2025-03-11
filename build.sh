#!/bin/bash

# Build the Docker image
docker build -t redux-calculator .

# Create a temporary container
docker create --name temp_container redux-calculator

# Copy the build output from the temporary container to the host
docker cp temp_container:/usr/src/app/build ./build

# Remove the temporary container
docker rm -f temp_container