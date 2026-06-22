<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MarriageModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MarriageModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MarriageModel : MBGameModel<MarriageModel>`
**Base:** `MBGameModel<MarriageModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MarriageModel.cs`

## Overview

`MarriageModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<MarriageModel>(new MyMarriageModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumMarriageAgeMale` | `public abstract int MinimumMarriageAgeMale { get; }` |
| `MinimumMarriageAgeFemale` | `public abstract int MinimumMarriageAgeFemale { get; }` |

## Key Methods

### IsCoupleSuitableForMarriage
```csharp
public abstract bool IsCoupleSuitableForMarriage(Hero firstHero, Hero secondHero)
```

### GetEffectiveRelationIncrease
```csharp
public abstract int GetEffectiveRelationIncrease(Hero firstHero, Hero secondHero)
```

### GetClanAfterMarriage
```csharp
public abstract Clan GetClanAfterMarriage(Hero firstHero, Hero secondHero)
```

### IsSuitableForMarriage
```csharp
public abstract bool IsSuitableForMarriage(Hero hero)
```

### IsClanSuitableForMarriage
```csharp
public abstract bool IsClanSuitableForMarriage(Clan clan)
```

### NpcCoupleMarriageChance
```csharp
public abstract float NpcCoupleMarriageChance(Hero firstHero, Hero secondHero)
```

### ShouldNpcMarriageBetweenClansBeAllowed
```csharp
public abstract bool ShouldNpcMarriageBetweenClansBeAllowed(Clan consideringClan, Clan targetClan)
```

### GetAdultChildrenSuitableForMarriage
```csharp
public abstract List<Hero> GetAdultChildrenSuitableForMarriage(Hero hero)
```

## Usage Example

```csharp
// Typical usage of MarriageModel (Model)
Game.Current.ReplaceModel<MarriageModel>(new MyMarriageModel());
```

## See Also

- [Complete Class Catalog](../catalog)