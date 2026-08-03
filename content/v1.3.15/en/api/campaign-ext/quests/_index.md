---
title: "Quests Family"
description: "Quest state machines, issue handoff, objective completion, and campaign-safe persistence."
---

# Quests Family

**One-sentence role:** A quest owns a multi-step campaign narrative and records objective, participant, and completion state across ticks and saves.

## Mental model and reading order

Begin with [QuestBase](../QuestBase), then compare [ArmyNeedsSuppliesIssueQuest](../ArmyNeedsSuppliesIssueQuest) with its issue and behavior. Trace creation, objective updates, completion, and cleanup in that order.

## When to use

Use a quest for a persistent, player-visible sequence. Use a campaign event for a notification and an action for an atomic mutation. Never advance objectives from a UI callback without checking the quest's lifecycle and ownership.

## Dependency map

- Upstream: issue resolution, campaign behaviors, heroes, parties, and settlements.
- Downstream: menus, conversations, notifications, save serialization, and reward actions.
- Siblings: [Issues](../issues), [Dialogs](../dialogs), and [Actions](../actions).

## Real entry points

```csharp
QuestBase quest = ...; // created by a campaign behavior or issue
// objective progress is driven by the quest's supported callbacks/events
```

Use the concrete quest's source-backed methods; do not invent an `Advance()` API.

## Risk boundaries

Quest state is save-visible. Register event handlers once, unsubscribe during cleanup, and make completion idempotent. A quest that survives a failed participant lookup can keep stale references in a save.

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Issues](../issues) · [Dialogs](../dialogs)
- [Related: Campaign events](../CampaignEvents)
