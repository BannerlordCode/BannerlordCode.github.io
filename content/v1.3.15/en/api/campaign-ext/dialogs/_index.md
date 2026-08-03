---
title: "Dialogs Family"
description: "Campaign conversation data flow, participant context, option callbacks, and safe handoff to actions."
---

# Dialogs Family

**One-sentence role:** Dialog APIs turn campaign participants and state into conversation lines and options, then hand control to an action or quest when the player chooses.

## Mental model and reading order

Start with [CampaignMapConversation](../CampaignMapConversation) and [ConversationManager](../ConversationManager), then inspect [ConversationSentence](../ConversationSentence) and [ConversationSentenceOption](../ConversationSentenceOption). Registration is owned by [CampaignGameStarter](../CampaignGameStarter).

## When to use

Use dialog data for player-facing branching conversation. Use an action for the resulting world mutation and a quest for multi-step follow-up. Do not change hero or settlement fields inside a condition callback.

## Dependency map

- Upstream: campaign participants, `ConversationContext`, and campaign event state.
- Downstream: option callbacks, [Actions](../actions), [Quests](../quests), and UI.
- Siblings: [GameMenus](../gamemenus) and [Issues](../issues).

## Real entry points

```csharp
starter.AddPlayerLine("my_line", "start", "reply", condition, consequence, null);
```

Use the versioned `CampaignGameStarter` overloads and keep conditions side-effect free.

## Risk boundaries

Conversation callbacks may run more than once while the player navigates options. Gate mutations through an action and validate the participant again in the consequence.

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: GameMenus](../gamemenus) · [Quests](../quests)
- [Related: Campaign events](../CampaignEvents)
