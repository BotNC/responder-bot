# responder-bot

* Adding responses
  - To add responses, simply create another entry in `config.json` like this:
  ```json
  "responses": [
    {
      "input": "Hello",
      "output": "World"
    },
    {
      "input": "One",
      "output": "Two"
    }
  ]
  ```

* Running the bot
  - Place the bot token in the configuration file
  - Run `node .` inside a terminal in the current directory.