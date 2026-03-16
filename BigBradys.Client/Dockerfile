# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=18.12.1
FROM node:${NODE_VERSION}-slim AS base

LABEL fly_launch_runtime="Node.js"

# Node.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"


# Throw-away build stage to reduce size of final image
FROM base AS build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Install node modules
COPY package-lock.json package.json ./
RUN npm ci --include=dev

# Copy application code
COPY . .

# Build application
RUN npm run build

# Remove development dependencies
RUN npm prune --omit=dev



# Final stage for app image
FROM base
WORKDIR /app
COPY --from=build /app /app
# Install serve globally (if not bundled, fallback to local)
RUN npm install --omit=dev && npm install -g serve || true
EXPOSE 3000
# Use PORT env variable if set, otherwise default to 3000
CMD ["sh", "-c", "serve -s build -l \"${PORT:-3000}\""]
