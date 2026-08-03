---
title: "Issues Family"
description: "Campaign issue lifecycle: discovery, resolution choices, behavior ownership, and quest handoff."
---

# Issues Family

**One-sentence role:** An issue is a campaign-facing problem with eligibility, a player-facing decision, and a resolution path that may create or complete a quest.

## Mental model and reading order

Read [IssueBase](../IssueBase), then inspect one concrete issue such as [ArmyNeedsSuppliesIssue](../ArmyNeedsSuppliesIssue). Follow its behavior and quest companions when present; the issue object is the prompt, not the scheduler.

## When to use

Use issues for persistent campaign problems that need eligibility checks and player resolution. Use an event or action for a one-shot state change. Do not instantiate an issue every tick or mutate issue fields from UI code; the owning behavior controls lifetime and persistence.

## Dependency map

- Upstream: campaign behaviors, notable/settlement state, and `CampaignEvents`.
- Downstream: issue menus, [QuestBase](../QuestBase), notifications, and save data.
- Siblings: [Quests](../quests) and [Behaviors](../behaviors).

## Real entry points

```csharp
IssueBase issue = ...; // provided by the owning campaign behavior
bool eligible = issue.CanBeShown();
```

Use the concrete issue's source-backed lifecycle methods; never treat an issue as a plain DTO.

## Risk boundaries

Eligibility must be stable across save/load and should not fire side effects. Resolve through the issue's supported action or quest handoff so notifications and cleanup stay consistent.

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Quests](../quests) · [Behaviors](../behaviors)
- [Related: Campaign events](../CampaignEvents)
