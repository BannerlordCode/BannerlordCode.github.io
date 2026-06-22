<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyMoraleModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyMoraleModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyMoraleModel : MBGameModel<PartyMoraleModel>`
**Base:** `MBGameModel<PartyMoraleModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyMoraleModel.cs`

## Overview

`PartyMoraleModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<PartyMoraleModel>(new MyPartyMoraleModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `HighMoraleValue` | `public abstract float HighMoraleValue { get; }` |

## Key Methods

### GetDailyStarvationMoralePenalty
```csharp
public abstract int GetDailyStarvationMoralePenalty(PartyBase party)
```

### GetDailyNoWageMoralePenalty
```csharp
public abstract int GetDailyNoWageMoralePenalty(MobileParty party)
```

### GetStandardBaseMorale
```csharp
public abstract float GetStandardBaseMorale(PartyBase party)
```

### GetVictoryMoraleChange
```csharp
public abstract float GetVictoryMoraleChange(PartyBase party)
```

### GetDefeatMoraleChange
```csharp
public abstract float GetDefeatMoraleChange(PartyBase party)
```

### GetEffectivePartyMorale
```csharp
public abstract ExplainedNumber GetEffectivePartyMorale(MobileParty party, bool includeDescription = false)
```

## Usage Example

```csharp
// Typical usage of PartyMoraleModel (Model)
Game.Current.ReplaceModel<PartyMoraleModel>(new MyPartyMoraleModel());
```

## See Also

- [Complete Class Catalog](../catalog)