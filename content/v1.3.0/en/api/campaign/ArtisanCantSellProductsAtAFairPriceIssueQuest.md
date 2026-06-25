---
title: "ArtisanCantSellProductsAtAFairPriceIssueQuest"
description: "Auto-generated class reference for ArtisanCantSellProductsAtAFairPriceIssueQuest."
---
# ArtisanCantSellProductsAtAFairPriceIssueQuest

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArtisanCantSellProductsAtAFairPriceIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `TaleWorlds.CampaignSystem/Issues/ArtisanCantSellProductsAtAFairPriceIssueBehavior.cs`

## Overview

`ArtisanCantSellProductsAtAFairPriceIssueQuest` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssueQuest from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssueQuest artisanCantSellProductsAtAFairPriceIssueQuest = ...;
artisanCantSellProductsAtAFairPriceIssueQuest.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnFailed
`public override void OnFailed()`

**Purpose:** Invoked when the failed event is raised.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssueQuest from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssueQuest artisanCantSellProductsAtAFairPriceIssueQuest = ...;
artisanCantSellProductsAtAFairPriceIssueQuest.OnFailed();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ArtisanCantSellProductsAtAFairPriceIssueQuest artisanCantSellProductsAtAFairPriceIssueQuest = ...;
artisanCantSellProductsAtAFairPriceIssueQuest.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## See Also

- [Area Index](../)