up:
	@echo "Running DB detached"
	@docker-compose up -d
	@echo "DB is up and running"

up-test:
	@echo "Running test DB detached"
	@docker-compose up -d mongo-e2e
	@echo "Test DB is up and running"

down:
	@echo "Stopping DB"
	@docker-compose down

restart:
	@echo "Restarting DB"
	@docker-compose restart