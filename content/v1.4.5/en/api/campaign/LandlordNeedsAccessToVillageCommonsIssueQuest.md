---
title: "LandlordNeedsAccessToVillageCommonsIssueQuest"
description: "Auto-generated class reference for LandlordNeedsAccessToVillageCommonsIssueQuest."
---
# LandlordNeedsAccessToVillageCommonsIssueQuest

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LandlordNeedsAccessToVillageCommonsIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/LandlordNeedsAccessToVillageCommonsIssueBehavior.cs`

## Overview

`LandlordNeedsAccessToVillageCommonsIssueQuest` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public sealed override TextObject Title { get; }` |

## Key Methods

### OnFailed
`public override void OnFailed()`

**Purpose:** Invoked when the `failed` event is raised.

```csharp
// Obtain an instance of LandlordNeedsAccessToVillageCommonsIssueQuest from the subsystem API first
LandlordNeedsAccessToVillageCommonsIssueQuest landlordNeedsAccessToVillageCommonsIssueQuest = ...;
landlordNeedsAccessToVillageCommonsIssueQuest.OnFailed();
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can have campaign issues info is requested` event is raised.

```csharp
// Obtain an instance of LandlordNeedsAccessToVillageCommonsIssueQuest from the subsystem API first
LandlordNeedsAccessToVillageCommonsIssueQuest landlordNeedsAccessToVillageCommonsIssueQuest = ...;
landlordNeedsAccessToVillageCommonsIssueQuest.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LandlordNeedsAccessToVillageCommonsIssueQuest landlordNeedsAccessToVillageCommonsIssueQuest = ...;
landlordNeedsAccessToVillageCommonsIssueQuest.OnFailed();
```

## See Also

- [Area Index](../)