---
title: Hello World
messages:
    - id: 1a
      who: bot
      text: I'm the santa bot and I like you
    - id: 1b
      who: human
      buttons:
        - text: yes more
          redirect: 2b
        - text: no thanks
          redirect: 2a
    - id: 2b
      who: bot
      text: this is awesome
---