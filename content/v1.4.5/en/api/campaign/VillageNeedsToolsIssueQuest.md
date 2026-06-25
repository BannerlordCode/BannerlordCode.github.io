---
title: "VillageNeedsToolsIssueQuest"
description: "Auto-generated class reference for VillageNeedsToolsIssueQuest."
---
# VillageNeedsToolsIssueQuest

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillageNeedsToolsIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/VillageNeedsToolsIssueBehavior.cs`

## Overview

`VillageNeedsToolsIssueQuest` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### OnFailed
`public override void OnFailed()`

**Purpose:** Invoked when the `failed` event is raised.

```csharp
// Obtain an instance of VillageNeedsToolsIssueQuest from the subsystem API first
VillageNeedsToolsIssueQuest villageNeedsToolsIssueQuest = ...;
villageNeedsToolsIssueQuest.OnFailed();
```

### GiveTradeOrExchangeRewardToMainParty
`public static void GiveTradeOrExchangeRewardToMainParty(Hero questGiver, int gold, ItemObject exchangeItem, int exchangeItemCount)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
VillageNeedsToolsIssueQuest.GiveTradeOrExchangeRewardToMainParty(questGiver, 0, exchangeItem, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VillageNeedsToolsIssueQuest villageNeedsToolsIssueQuest = ...;
villageNeedsToolsIssueQuest.OnFailed();
```

## See Also

- [Area Index](../)