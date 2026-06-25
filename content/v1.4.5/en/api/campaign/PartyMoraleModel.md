---
title: "PartyMoraleModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyMoraleModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyMoraleModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyMoraleModel : MBGameModel<PartyMoraleModel>`
**Base:** `MBGameModel<PartyMoraleModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyMoraleModel.cs`

## Overview

`PartyMoraleModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartyMoraleModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `HighMoraleValue` | `public abstract float HighMoraleValue { get; }` |

## Key Methods

### GetDailyStarvationMoralePenalty
`public abstract int GetDailyStarvationMoralePenalty(PartyBase party)`

**Purpose:** Gets the current value of `daily starvation morale penalty`.

### GetDailyNoWageMoralePenalty
`public abstract int GetDailyNoWageMoralePenalty(MobileParty party)`

**Purpose:** Gets the current value of `daily no wage morale penalty`.

### GetStandardBaseMorale
`public abstract float GetStandardBaseMorale(PartyBase party)`

**Purpose:** Gets the current value of `standard base morale`.

### GetVictoryMoraleChange
`public abstract float GetVictoryMoraleChange(PartyBase party)`

**Purpose:** Gets the current value of `victory morale change`.

### GetDefeatMoraleChange
`public abstract float GetDefeatMoraleChange(PartyBase party)`

**Purpose:** Gets the current value of `defeat morale change`.

### GetEffectivePartyMorale
`public abstract ExplainedNumber GetEffectivePartyMorale(MobileParty party, bool includeDescription = false)`

**Purpose:** Gets the current value of `effective party morale`.

## Usage Example

```csharp
var implementation = new CustomPartyMoraleModel();
```

## See Also

- [Complete Class Catalog](../catalog)