---
title: "MarriageModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MarriageModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MarriageModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MarriageModel : MBGameModel<MarriageModel>`
**Base:** `MBGameModel<MarriageModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MarriageModel.cs`

## Overview

`MarriageModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MarriageModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumMarriageAgeMale` | `public abstract int MinimumMarriageAgeMale { get; }` |
| `MinimumMarriageAgeFemale` | `public abstract int MinimumMarriageAgeFemale { get; }` |

## Key Methods

### IsCoupleSuitableForMarriage
`public abstract bool IsCoupleSuitableForMarriage(Hero firstHero, Hero secondHero)`

**Purpose:** Handles logic related to `is couple suitable for marriage`.

### GetEffectiveRelationIncrease
`public abstract int GetEffectiveRelationIncrease(Hero firstHero, Hero secondHero)`

**Purpose:** Gets the current value of `effective relation increase`.

### GetClanAfterMarriage
`public abstract Clan GetClanAfterMarriage(Hero firstHero, Hero secondHero)`

**Purpose:** Gets the current value of `clan after marriage`.

### IsSuitableForMarriage
`public abstract bool IsSuitableForMarriage(Hero hero)`

**Purpose:** Handles logic related to `is suitable for marriage`.

### IsClanSuitableForMarriage
`public abstract bool IsClanSuitableForMarriage(Clan clan)`

**Purpose:** Handles logic related to `is clan suitable for marriage`.

### NpcCoupleMarriageChance
`public abstract float NpcCoupleMarriageChance(Hero firstHero, Hero secondHero)`

**Purpose:** Handles logic related to `npc couple marriage chance`.

### ShouldNpcMarriageBetweenClansBeAllowed
`public abstract bool ShouldNpcMarriageBetweenClansBeAllowed(Clan consideringClan, Clan targetClan)`

**Purpose:** Handles logic related to `should npc marriage between clans be allowed`.

### GetAdultChildrenSuitableForMarriage
`public abstract List<Hero> GetAdultChildrenSuitableForMarriage(Hero hero)`

**Purpose:** Gets the current value of `adult children suitable for marriage`.

## Usage Example

```csharp
var implementation = new CustomMarriageModel();
```

## See Also

- [Complete Class Catalog](../catalog)