---
title: "DefaultPartyMoraleModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPartyMoraleModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPartyMoraleModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyMoraleModel : PartyMoraleModel`
**Base:** `PartyMoraleModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyMoraleModel.cs`

## Overview

`DefaultPartyMoraleModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyMoraleModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `HighMoraleValue` | `public override float HighMoraleValue { get; }` |

## Key Methods

### GetDailyStarvationMoralePenalty
`public override int GetDailyStarvationMoralePenalty(PartyBase party)`

**Purpose:** Gets the current value of `daily starvation morale penalty`.

### GetDailyNoWageMoralePenalty
`public override int GetDailyNoWageMoralePenalty(MobileParty party)`

**Purpose:** Gets the current value of `daily no wage morale penalty`.

### GetStandardBaseMorale
`public override float GetStandardBaseMorale(PartyBase party)`

**Purpose:** Gets the current value of `standard base morale`.

### GetVictoryMoraleChange
`public override float GetVictoryMoraleChange(PartyBase party)`

**Purpose:** Gets the current value of `victory morale change`.

### GetDefeatMoraleChange
`public override float GetDefeatMoraleChange(PartyBase party)`

**Purpose:** Gets the current value of `defeat morale change`.

### GetEffectivePartyMorale
`public override ExplainedNumber GetEffectivePartyMorale(MobileParty mobileParty, bool includeDescription = false)`

**Purpose:** Gets the current value of `effective party morale`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartyMoraleModel>(new MyDefaultPartyMoraleModel());
```

## See Also

- [Complete Class Catalog](../catalog)