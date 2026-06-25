---
title: "VillageNeedsToolsIssueQuest"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VillageNeedsToolsIssueQuest`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VillageNeedsToolsIssueQuest

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillageNeedsToolsIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/VillageNeedsToolsIssueBehavior.cs`

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

**Purpose:** Called when the `failed` event is raised.

### GiveTradeOrExchangeRewardToMainParty
`public static void GiveTradeOrExchangeRewardToMainParty(Hero questGiver, int gold, ItemObject exchangeItem, int exchangeItemCount)`

**Purpose:** Handles logic related to `give trade or exchange reward to main party`.

## Usage Example

```csharp
var value = new VillageNeedsToolsIssueQuest();
value.OnFailed();
```

## See Also

- [Complete Class Catalog](../catalog)