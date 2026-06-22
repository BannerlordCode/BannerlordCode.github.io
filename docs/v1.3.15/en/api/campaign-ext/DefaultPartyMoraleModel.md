<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPartyMoraleModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartyMoraleModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyMoraleModel : PartyMoraleModel`
**Base:** `PartyMoraleModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyMoraleModel.cs`

## Overview

`DefaultPartyMoraleModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultPartyMoraleModel>(new MyDefaultPartyMoraleModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `HighMoraleValue` | `public override float HighMoraleValue { get; }` |

## Key Methods

### GetDailyStarvationMoralePenalty
```csharp
public override int GetDailyStarvationMoralePenalty(PartyBase party)
```

### GetDailyNoWageMoralePenalty
```csharp
public override int GetDailyNoWageMoralePenalty(MobileParty party)
```

### GetStandardBaseMorale
```csharp
public override float GetStandardBaseMorale(PartyBase party)
```

### GetVictoryMoraleChange
```csharp
public override float GetVictoryMoraleChange(PartyBase party)
```

### GetDefeatMoraleChange
```csharp
public override float GetDefeatMoraleChange(PartyBase party)
```

### GetEffectivePartyMorale
```csharp
public override ExplainedNumber GetEffectivePartyMorale(MobileParty mobileParty, bool includeDescription = false)
```

## Usage Example

```csharp
// Typical usage of DefaultPartyMoraleModel (Model)
Game.Current.ReplaceModel<DefaultPartyMoraleModel>(new MyDefaultPartyMoraleModel());
```

## See Also

- [Complete Class Catalog](../catalog)