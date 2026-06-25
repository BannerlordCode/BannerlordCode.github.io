---
title: "DefaultMarriageModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultMarriageModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultMarriageModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMarriageModel : MarriageModel`
**Base:** `MarriageModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMarriageModel.cs`

## Overview

`DefaultMarriageModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMarriageModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumMarriageAgeMale` | `public override int MinimumMarriageAgeMale { get; }` |
| `MinimumMarriageAgeFemale` | `public override int MinimumMarriageAgeFemale { get; }` |

## Key Methods

### IsCoupleSuitableForMarriage
`public override bool IsCoupleSuitableForMarriage(Hero firstHero, Hero secondHero)`

**Purpose:** Handles logic related to `is couple suitable for marriage`.

### IsClanSuitableForMarriage
`public override bool IsClanSuitableForMarriage(Clan clan)`

**Purpose:** Handles logic related to `is clan suitable for marriage`.

### NpcCoupleMarriageChance
`public override float NpcCoupleMarriageChance(Hero firstHero, Hero secondHero)`

**Purpose:** Handles logic related to `npc couple marriage chance`.

### ShouldNpcMarriageBetweenClansBeAllowed
`public override bool ShouldNpcMarriageBetweenClansBeAllowed(Clan consideringClan, Clan targetClan)`

**Purpose:** Handles logic related to `should npc marriage between clans be allowed`.

### GetAdultChildrenSuitableForMarriage
`public override List<Hero> GetAdultChildrenSuitableForMarriage(Hero hero)`

**Purpose:** Gets the current value of `adult children suitable for marriage`.

### GetEffectiveRelationIncrease
`public override int GetEffectiveRelationIncrease(Hero firstHero, Hero secondHero)`

**Purpose:** Gets the current value of `effective relation increase`.

### IsSuitableForMarriage
`public override bool IsSuitableForMarriage(Hero maidenOrSuitor)`

**Purpose:** Handles logic related to `is suitable for marriage`.

### GetClanAfterMarriage
`public override Clan GetClanAfterMarriage(Hero firstHero, Hero secondHero)`

**Purpose:** Gets the current value of `clan after marriage`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultMarriageModel>(new MyDefaultMarriageModel());
```

## See Also

- [Complete Class Catalog](../catalog)