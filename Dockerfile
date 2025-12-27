FROM oven/bun:alpine AS base
WORKDIR /webapp

# Install deps first to leverage Docker cache
COPY bun.lock package.json ./
RUN bun install

# Copy app source
COPY . .

# Development image
FROM base AS development
EXPOSE 4321
CMD ["bun", "run", "app:dev"]

# Production image
FROM base AS production
RUN bun install --production
EXPOSE 4321
CMD ["bun", "run", "app:prod"]
