---
slug: "fb-automation-go-trello"
date: "2024-03-14"
title: "Automation with Go"
---

You never know where particular pain points may arise and how automation may alleviate them.  Recently there was a client who maintained a content aggregation website.  They had a problem with resource being skipped and there was a lot of duplication of effort because a lot of their resources came from Facebook.

We eventually helped them develop a solution where we would:
1. Pull in Facebook imports via the [Meta Graph API](https://developers.facebook.com/tools/explorer/)
2. Parse out symbols in the message to determine how it should be categorized
3. Import the resource into their database
4. Update messages in the Facebook post to indicate to staff it was imported
4. Create [Trello](https://trello.com) cards in the event of an issue.

We used long lasting tokens and set up a scheduled task to refresh the token periodically and then set the importer to run twice a day.  The client was happy that they were able to manage a lot of their input directly from their Facebook page and even spot-check to make sure that data was imported.

A link to the project stripped of proprietary business logic can be found on [github](https://github.com/jonathonklem/fb-importer/).
